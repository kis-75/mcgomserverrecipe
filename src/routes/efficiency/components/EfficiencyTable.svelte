<script>
    import EfficiencyTableRow from "./EfficiencyTableRow.svelte"
    import { RECIPES, RecipeExample } from '$lib/recipes.js'
    import { recipeHandler } from "$lib/recipe_handler"
    import { calculateRecipeEstimatedTime } from "../calc_efficiency"

    let { selectedRecipeName = $bindable() } = $props()

    // 조건부 검색용 값들.
    let searchName = $state('')         // 요리명
    /** @type {number | undefined} */
    let searchPrice = $state()        // 판매가
    /** @type {number | undefined} */
    let searchPricePerSec = $state()        // 판매가/s

    // { 레시피명: [판매가, pps] },
    // pps: price per second(판매가/s)
    /** @type { { [x:string]: [string, string] } } */
    let processedRows = $derived.by(() => {
        // TODO 프리셋 선택 기능 구현 필요.
        const CookingToolsPresets = {
            "마을": {
                "기구": {
                    "가스레인지": 32,
                    "튀김기": 1
                }
            }
        }
        const cookingToolsConfiguration = CookingToolsPresets['마을']['기구']

        // { 레시피명: [판매가, pps] },
        // pps: price per second(판매가/s)
        /** @type { { [x:string]: [string, string] } } */
        let result = {}

        for (const [recipeName, recipeInfo] of Object.entries(RECIPES)) {
            const timeInfo = calculateRecipeEstimatedTime(recipeName, 1, undefined)

            const potWaitTime = timeInfo['냄비']
            const panWaitTime = timeInfo['프라이팬']
            const fryerWaitTime = timeInfo['튀김기']
            const gasRangeWaitTime = potWaitTime + panWaitTime

            const cookingToolsUseTime = timeInfo['조리 도구 사용 시간']
            const gatherTime = timeInfo['재료 수급 시간']
            let cookingToolsWaitTime = 0

            const gasRangeQuantity = cookingToolsConfiguration["가스레인지"]
            const fryerQuantity = cookingToolsConfiguration["튀김기"]
            cookingToolsWaitTime = Math.max(gasRangeWaitTime / gasRangeQuantity, fryerWaitTime / fryerQuantity)

            const minimumRequiredTime = gatherTime + Math.max(cookingToolsUseTime, cookingToolsWaitTime)
            const salesPrice = recipeInfo['판매가'] || ''

            let sps = ""
            if (!salesPrice) {
                sps = "판매가 없음"
            } else if (minimumRequiredTime === 0) {
                sps = "산출 불가"
            } else {
                sps = (Number(salesPrice) / minimumRequiredTime).toFixed(2)
            }

            result[recipeName] = [salesPrice, sps]
        }
        return result
    })

    // 검색 조건을 통과한 레시피명 목록
    let filteredRecipeNames = $derived.by(() => {
        /** @type {[string, string][]} */
        let result = []

        for (const [recipeName, [price, pps]] of Object.entries(processedRows)) {
            let is_valid = true
            if ( !( (searchName === "") || (recipeName.includes(searchName)) ) ) {
                is_valid = false
            }
            if ( !( !(searchPrice) || (Number(price || '') > searchPrice) ) ) {
                is_valid = false
            }
            if ( !( !(searchPricePerSec) || (Number(pps || '') > searchPricePerSec) ) ) {
                is_valid = false
            }

            if (is_valid) {
                result.push([recipeName, pps])
            }
        }
        console.log(result)
        result.sort(([_a, a], [_b, b]) => {
            if ((a === "판매가 없음") || (a === "산출 불가")) {
                return 1
            } else if ((b === "판매가 없음") || (b === "산출 불가")) {
                return -1
            } else {
                return Number(b) - Number(a) 
            }
        })
        console.log(result)
        return result
    })

</script>


<table class="table table-zebra">
    <!-- head -->
    <thead>
        <tr class="border-b-base-content">
            <th class="font-extrabold text-center">번호</th>
            <th><input type="text" placeholder="이름" bind:value={ searchName } class="input input-sm input-bordered w-full" /></th>
            <th><input type="number" placeholder="판매가" bind:value={ searchPrice } class="input input-sm input-bordered w-24" /></th>
            <th><input type="number" placeholder="판매가/s" bind:value={ searchPricePerSec } class="input input-sm input-bordered w-24" /></th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(filteredRecipeNames) as [recipeIndex, [recipeName, sps]]  (recipeName)}
            {@const recipePrice=processedRows[recipeName][0]}
            {@const recipePps=processedRows[recipeName][1]}
            <EfficiencyTableRow
                onclick={() => {selectedRecipeName = recipeName}}
                recipeIndex={ Number(recipeIndex) } recipeName={ recipeName } recipePrice={recipePrice} recipePps={recipePps}
            />
        {/each}
    </tbody>
</table>


<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>