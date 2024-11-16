<script>
    import { recipeHandler } from '$lib/recipe_handler';
    import { RECIPES, RecipeExample } from '$lib/recipes.js'

    /**
     * @typedef {Object} Props
     * @property  {import('svelte/elements').MouseEventHandler<HTMLElement>} onclick - 선택된 레시피명 바꿔주는 이벤트 핸들러
     * @property  {number} recipeIndex - 레시피 순번
     * @property  {string} recipeName - 레시피명
     */

    /** @type {Props} */
    let { onclick, recipeIndex, recipeName } = $props()

    let recipeInfo = $derived(RECIPES[recipeName])
</script>

<tr { onclick }>
    <th class="text-center">{ recipeIndex + 1 }</th>
    <td>{ recipeName }</td>
    <td>{ recipeInfo["제작방법"] }</td>
    <td>{ recipeHandler.IngredientArrayToString(recipeInfo["재료"] || []) }</td>
    <td>{ recipeInfo["판매가"] }</td>
</tr>