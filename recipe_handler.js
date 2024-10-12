class RecipeHandler {
    toLowerIngredients(itemName, quantity) {
        const itemIngredients = RECIPES[itemName]["재료"]
        const itemMultiplier = RECIPES[itemName]["배수"]
    
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

    coalesceIngredients(ingredientList) {
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

    // deprecated
    findFullRecipes(itemName) {
        const itemInfo = RECIPES[itemName]
        const itemIngredients = RECIPES[itemName]["재료"]
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

    IngredientArrayToString(ingredientList) {
        return ingredientList.map((ingredientInfo) => `${QuantityToTranslatedText(ingredientInfo[0], ingredientInfo[1])}`).join(', ')
    }
}
const recipeHandler = new RecipeHandler()