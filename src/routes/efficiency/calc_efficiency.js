import { RECIPES, RecipeExample } from '$lib/recipes'
import { INGREDIENTS, IngredientExample } from '$lib/ingredients'

/**
 * 요리 제작에 소요되는 예상 시간을 조리 도구 사용 시간, 재료 수급 시간으로 나눠서 계산하여 반환.
 * @param {string} recipeName
 * @param {number} quantity
 * @param {any} timeInfo
 * @returns any
 */
export function calculateRecipeEstimatedTime(recipeName, quantity, timeInfo) {
    const defaultCookingToolUseTime = 0.25
    const recipeInfo = RECIPES[recipeName]
    const method = recipeInfo['제작방법'] || ''
    const ingredients = recipeInfo["재료"] || []

    if (timeInfo === undefined) {
        timeInfo = {
            "재료 수급 시간": 0,
            "냄비": 0,          // 냄비 대기 시간
            "프라이팬": 0,      // 프라이팬 대기 시간
            "튀김기": 0,        // 튀김기 대기 시간
            "조리 도구 사용 시간": 0    // (재료 넣기, 뒤집개, 집게)
        }
    }

    // recipeName의 재료 목록 개수에 곱할 배수.
    const quantityMultiplier = quantity / (recipeInfo['배수'] || 1)

    // 조리 도구 정보 처리
    const requiredTime = recipeInfo['소요시간'] || 30
    if (["냄비", "프라이팬", "튀김기"].includes(method)) {
        const cookingToolUseTime = ingredients.reduce((acc, cur) => acc + cur[1], 1) * defaultCookingToolUseTime
        timeInfo['조리 도구 사용 시간'] += cookingToolUseTime * quantityMultiplier
        timeInfo[method] += (requiredTime + cookingToolUseTime) * quantityMultiplier
    } else if (recipeInfo['소요시간'] !== undefined){
        timeInfo['재료 수급 시간'] += requiredTime * quantityMultiplier
    }

    for (const [ingredientName, ingredientQuantity] of ingredients) {
        if (RECIPES.hasOwnProperty(ingredientName)) {
            try {
                calculateRecipeEstimatedTime(ingredientName, ingredientQuantity * quantityMultiplier, timeInfo)
            } catch {
                return
            }                
        } else if (INGREDIENTS.hasOwnProperty(ingredientName)) {
            const requiredTime = INGREDIENTS[ingredientName]['소요시간'] || 0
            timeInfo['재료 수급 시간'] += requiredTime * ingredientQuantity * quantityMultiplier
        }
    }

    return timeInfo
}