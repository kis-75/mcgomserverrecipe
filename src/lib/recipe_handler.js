import { RECIPES } from '$lib/recipes.js'
import { QuantityToTranslatedText } from '$lib/utils.js'

class RecipeHandler {
    /**
     * 재료를 하위 재료로 변환.
     * e.g. [[도우, 1]] => [["밀가루", 0.5], ["요리용 물병", 0.5], ["소금", 0.5]]
     * @type { (itemName: string, quantity: number) => Array<[string, number]> }
     */
    toLowerIngredients(itemName, quantity) {
        const itemIngredients = RECIPES[itemName]["재료"]
        const itemMultiplier = RECIPES[itemName]["배수"]

        if ((itemIngredients === undefined) || (itemMultiplier === undefined)) {
            throw new Error("레시피가 없는데요...")
        }
    
        /** @type {Array<[string, number]>} */
        let result = []
    
        for (const [lowerItemName, lowerItemQuantity] of itemIngredients) {
            if (RECIPES.hasOwnProperty(lowerItemName)) {
                result = result.concat(this.toLowerIngredients(lowerItemName, lowerItemQuantity / itemMultiplier * quantity))
            } else {
                result.push([lowerItemName, lowerItemQuantity / itemMultiplier * quantity])
            }
        }
        return result
    }

    /**
     * 재료 목록에서 중복되는 리스트들을 병합.
     * e.g. [["쌀", 2], ["쌀", 3]] => [["쌀", 5]]
     * @type { (ingredientList: Array<[string, number]>) => Array<[string, number]> }
     */
    coalesceIngredients(ingredientList) {
        /** @type {Object<string, number>} */
        const result = {}
    
        for (const [itemName, itemQuantity] of ingredientList) {
            if (result.hasOwnProperty(itemName)) {
                result[itemName] += itemQuantity
            } else {
                result[itemName] = itemQuantity
            }
        }
    
        return Object.entries(result)
    }


    /**
     * @deprecated
     * itemName의 모든 레시피를 찾아줌. (하위 재료의 레시피까지)
     * e.g. [["쌀", 2], ["쌀", 3]] => [["쌀", 5]]
     * @type { (itemName: string) => Array<import('$lib/recipes.js').Recipe> }
     */
    findFullRecipes(itemName) {
        const itemInfo = RECIPES[itemName]
        const itemIngredients = RECIPES[itemName]["재료"]

        if ((itemInfo === undefined) || (itemIngredients === undefined)) {
            throw new Error("레시피가 없는데요...")
        }

        /** @type {Array<import('$lib/recipes.js').Recipe>} */
        let result = []
        for (const [lowerItemName, lowerItemQuantity] of itemIngredients) {
            if (RECIPES.hasOwnProperty(lowerItemName)) {
                result = result.concat(this.findFullRecipes(lowerItemName))
            } else {
                result.push(itemInfo)
            }
        }
        return result
    }

    /**
     * 재료 목록을 문자열로 변환.
     * e.g. [["쌀", 2], ["밥", 65]] => "쌀 x 2, 밥 x 1셋 1개(65개)"
     * @type { (ingredientList: [string, number][]) => string }
     */
    IngredientArrayToString(ingredientList) {
        return ingredientList.map((ingredientInfo) => `${QuantityToTranslatedText(ingredientInfo[0], ingredientInfo[1])}`).join(', ')
    }
}
export const recipeHandler = new RecipeHandler()