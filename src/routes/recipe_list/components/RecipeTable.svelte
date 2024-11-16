<script>
    import RecipeTableRow from "./RecipeTableRow.svelte"
    import { RECIPES, RecipeExample } from '$lib/recipes.js'
    import { recipeHandler } from "$lib/recipe_handler"

    let { selectedRecipeName = $bindable() } = $props()

    // 조건부 검색용 값들.
    let searchName = $state('')         // 요리명
    let searchMethod = $state('')       // 제작방법
    let searchIngredient = $state('')   // 재료 목록
    /** @type {number | undefined} */
    let searchPrice = $state()        // 판매가

    // 위의 검색 조건을 통과한 레시피명 목록
    let filteredRecipeNames = $derived.by(() => {
        /** @type {string[]} */
        let result = []

        for (const [recipeName, recipeInfo] of Object.entries(RECIPES)) {
            let is_valid = true
            if ( !( (searchName === "") || (recipeName.includes(searchName)) ) ) {
                is_valid = false
            }
            if ( !( (searchMethod === "") || ((recipeInfo["제작방법"] || "").includes(searchMethod)) ) ) {
                is_valid = false
            }
            if (searchIngredient !== "") {
                const ingredientListTxt = recipeHandler.IngredientArrayToString(recipeInfo["재료"] || [])
                const searchIngredientArray = searchIngredient.split(",").map((x) => x.trim())
                for (const ingredient of searchIngredientArray) {
                    if ( !(ingredientListTxt.includes(ingredient)) ) {
                        is_valid = false
                    }
                }
            }
            if ( !( !(searchPrice) || (Number(recipeInfo["판매가"] || '') > searchPrice) ) ) {
                is_valid = false
            }

            if (is_valid) {
                result.push(recipeName)
            }
        }
        return result
    })

</script>

<div class="overflow-x-auto">
    <table class="table table-zebra">
        <!-- head -->
        <thead>
            <tr class="border-b-base-content">
                <th class="font-extrabold text-center">번호</th>
                <th><input type="text" placeholder="이름" bind:value={ searchName } class="input input-sm input-bordered w-24" /></th>
                <th><input type="text" placeholder="제작법" bind:value={ searchMethod } class="input input-sm input-bordered w-16" /></th>
                <th><input type="text" placeholder="재료" bind:value={ searchIngredient } class="input input-sm input-bordered w-full" /></th>
                <th><input type="number" placeholder="판매가" bind:value={ searchPrice } class="input input-sm input-bordered w-16" /></th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(filteredRecipeNames) as [recipeIndex, recipeName]  (recipeName)}
                <RecipeTableRow
                    onclick={() => {selectedRecipeName = recipeName}}
                    recipeIndex={ Number(recipeIndex) } recipeName={ recipeName }
                />
            {/each}
        </tbody>
    </table>
</div>

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