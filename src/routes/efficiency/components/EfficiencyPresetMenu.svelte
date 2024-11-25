<script>
    import EfficiencyTableRow from "./EfficiencyTableRow.svelte"
    import { RECIPES, RecipeExample } from '$lib/recipes.js'
    import { recipeHandler } from "$lib/recipe_handler"
    import { calculateRecipeEstimatedTime } from "../calc_efficiency"
    import { getAllCookingToolsPresets } from "$lib/presets";

    let selectedTabIndex = $state(0)

    /** @type {{[presetName: string]: import("$lib/presets").CookingToolsPreset}} */
    let cookingToolsPresetEntries = $state(getAllCookingToolsPresets())

    $effect(() => {
        
    })
</script>

<div class="flex flex-col">
    <div class="flex flex-col gap-2 mb-4">
        <div class="flex flex-row items-center">
            <p class="w-32 text-right">조리 도구 프리셋:</p>
            <select class="select select-sm w-full max-w-xs ml-2 text-base-content">
                <option selected>마을</option>
            </select>
        </div>
        <div class="flex flex-row items-center">
            <p class="w-36 text-right">가스레인지: </p>
            <input type="number" placeholder="개수" class="input input-sm input-bordered w-24 ml-2 text-base-content" />
        </div>
        <div class="flex flex-row items-center">
            <p class="w-36 text-right">튀김기: </p>
            <input type="number" placeholder="개수" class="input input-sm input-bordered w-24 ml-2 text-base-content" />
        </div>

    </div>

    <div role="tablist" class="tabs tabs-bordered mb-4">
        <button role="tab" class="tab"
            class:tab-active={selectedTabIndex === 0}
            onclick={() => selectedTabIndex = 0}
        >요리 소요 시간</button>
        <button role="tab" class="tab"
            class:tab-active={selectedTabIndex === 1}
            onclick={() => selectedTabIndex = 1}
        >재료 수급 시간</button>
    </div>
    {#if selectedTabIndex === 0}
        <div class="flex-1 h-full" style:display={selectedTabIndex === 0 ? 'block' : 'none'}>
            waa
        </div>
    {:else if selectedTabIndex === 1}
        <div class="flex-1 h-full overflow-y-auto" style:display={selectedTabIndex === 1 ? 'block' : 'none'}>
            waaa2222
        </div>
    {/if}
        
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