<script>
    import { recipeHandler } from '$lib/recipe_handler';
    import { RECIPES, RecipeExample } from '$lib/recipes.js'
    import RecipeDetailTableRow from './RecipeDetailTableRow.svelte'

    /**
     * @typedef {Object} Props
     * @property  {string} selectedRecipeName - 선택된 레시피명
     */

    /** @type {Props} */
    let { selectedRecipeName = $bindable() } = $props()

    let createQuantity = $state(1)
    let createSetQuantity = $state(0)
    let recipeExpandDepth = $state(0)

    /** @type {typeof RecipeExample | undefined} */
    let itemInfo = $derived.by(() => RECIPES[selectedRecipeName])

    let descriptionText = $derived.by(() => {
        if (itemInfo === undefined) return '';

        const ingredientsTxt = recipeHandler.IngredientArrayToString(itemInfo["재료"] || [])

        const quantity = createSetQuantity * 64 + createQuantity
        const itemPrice = Number(itemInfo["판매가"]);
        const ingredientBreakdownEntries = recipeHandler.coalesceIngredients(
            recipeHandler.toLowerIngredients(selectedRecipeName, quantity)
        )
        const ingredientBreakdownsTxt = recipeHandler.IngredientArrayToString(ingredientBreakdownEntries)

        return `이름:\t\t\t${selectedRecipeName}
제작 방법:\t${itemInfo["제작방법"]}
재료:\t\t\t${ingredientsTxt}

판매가: ${Math.floor(itemPrice * quantity) || "0"}원
기본 재료 환산: ${ingredientBreakdownsTxt}
`
    })


</script>
  
<div class="flex-1 flex flex-col gap-3 text-white">
    {#if (itemInfo !== undefined)}
        <!-- 재료 개수 입력 -->
        <div class="flex flex-row">
            <input class="quantity-input" type="number" min=0 bind:value={ createSetQuantity }><p>셋</p>
        </div>
        <div class="flex flex-row">
            <input class="quantity-input" type="number" min=0 bind:value={ createQuantity }><p>개</p>
        </div>
        
        <!-- 선택된 레시피 기본 정보 출력 -->
        <div class="divider m-0 "></div>
        <pre class="whitespace-pre-wrap">{ descriptionText }</pre>

        <!-- 모든 레시피 정보를 계단식으로 출력 -->
        <div class="flex flex-row">
            <p class="mr-2">펼침 단계:</p> <input class="quantity-input" type="number" min=0 max=8 bind:value={ recipeExpandDepth }>
        </div>
        <RecipeDetailTableRow 
            recipeName={selectedRecipeName} 
            quantity={createSetQuantity * 64 + createQuantity} 
            recursionCount={0}
            { recipeExpandDepth }
        ></RecipeDetailTableRow>
    {/if}
</div>

<style>
    .quantity-input {
        @apply input h-8 w-24 bg-transparent text-center border-2 border-white rounded-lg mr-2;
    }

    p {
        @apply mt-0.5;
    }
</style>