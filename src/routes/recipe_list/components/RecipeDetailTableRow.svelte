<script>
    import { recipeHandler } from '$lib/recipe_handler';
    import { RECIPES, RecipeExample } from '$lib/recipes.js'
    import { QuantityToTranslatedText } from '$lib/utils.js'
    import RecipeDetailTableRow from './RecipeDetailTableRow.svelte'

    /**
     * recipeName의 전체 레시피를 표시해주는 component
     * 하위 재료가 있는 경우 재귀를 통해 하위 재료까지 표시.
     * 
     * @typedef {Object} Props
     * @property  {string} recipeName - 아이템명
     * @property  {number} quantity - 개수
     * @property  {number} recursionCount - 재귀 횟수
     * @property  {number} recipeExpandDepth - 화면에 표시될 레시피 최대 깊이
     */

    /** @type {Props} */
    let { recipeName, quantity, recursionCount, recipeExpandDepth } = $props()

    const recipeInfo = $derived(RECIPES[recipeName])
    const multiplier = $derived(recipeInfo["배수"] || 1)
    const ingredientList = $derived(recipeInfo["재료"] || [])

    /** @type { [string, number][] } */
    const multipliedIngredientList = $derived(ingredientList.map(([name, ingredientQuantity]) => {return [name, ingredientQuantity / multiplier * quantity]}))
    // const multipliedIngredientList = ingredientList.map(([name, ingredientQuantity]) => {return [name, ingredientQuantity / multiplier * quantity]})

    let subRecipes = $derived.by(() => {
        /** @type { [string, number][] } */
        let result = []
        for (const [ingredientName, ingredientQuantity] of multipliedIngredientList) {
            if (RECIPES.hasOwnProperty(ingredientName)) {
                result.push([ingredientName, ingredientQuantity])
            }
        }
        return result
    })


</script>

<!-- 레시피 정보 테이블 -->
{#snippet recipeInfoTable()}
    <table class="p-0 border-separate border-spacing-x-6 border-spacing-y-2">
        <tbody>
            <tr>
                <td>{ `${QuantityToTranslatedText(recipeName, quantity)}` }</td>
                <td>{ recipeInfo["제작방법"] }</td>
                <td>{ recipeHandler.IngredientArrayToString(multipliedIngredientList) }</td>
            </tr>
        </tbody>
    </table>
{/snippet}

<!-- 하위 레시피의 유무에 따른 처리 -->
{#snippet innerContent()}
    {#if subRecipes.length > 0}
        <li>
            <details open={(recipeExpandDepth === 0) || (recursionCount < recipeExpandDepth) ? true : false}>
                <summary class="p-0 pr-4">{@render recipeInfoTable()}</summary>
                <ul>
                    {#each subRecipes as [subRecipeName, subRecipeQuantity] (subRecipeName)}
                        <RecipeDetailTableRow recipeName={subRecipeName} quantity={subRecipeQuantity} recursionCount={recursionCount + 1} {recipeExpandDepth}></RecipeDetailTableRow>
                    {/each}
                </ul>
            </details>
        </li>
    {:else}
        <li>
            {@render recipeInfoTable()}
        </li>
    {/if}
{/snippet}

<!-- 가장 상위 레벨에서 ul로 먼저 감싸줘야 함. -->
{#if recursionCount === 0}
    <ul class="menu bg-base-300 rounded-box w-fit text-base-content">
            {@render innerContent()}
    </ul>
{:else}
    {@render innerContent()}
{/if}


<style>
    /* 클릭시 색 짙어지는 동작 비활성화 (daisyUI 기본 동작) */
    .menu li > details > summary:active {
        background-color: unset !important;
        color: unset !important
    }

    .menu li > *:not(ul, .menu-title, details, .btn):active {
        background-color: unset !important;
        color: unset !important
    }
</style>