class RecipeHandler {
    toLowerIngredients(itemName, quantity) {
        const itemIngredients = RECIPES[itemName]["재료"]
        const itemMultiplier = RECIPES[itemName]["배수"]
    
        let result = []
    
        for (const [lowerItemName, lowerItemQuantity] of itemIngredients) {
            if (RECIPES.hasOwnProperty(lowerItemName)) {
                result = result.concat(this.toLowerIngredients(lowerItemName, lowerItemQuantity / itemMultiplier))
            } else {
                result.push([lowerItemName, lowerItemQuantity / itemMultiplier])
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

    findAllRecipes(itemName) {
        const itemIngredients = RECIPES[itemName]["재료"]
        let result = []
        for (const [lowerItemName, lowerItemQuantity] of itemIngredients) {
            if (RECIPES.hasOwnProperty(lowerItemName)) {
                result = result.concat(this.findAllRecipes(lowerItemName))
            } else {
                result.push(lowerItemName)
            }
        }
        return result
    }

    IngredientArrayToString(ingredientList) {
        return ingredientList.reduce((acc, cur, idx) => { return `${acc ? `${acc}, ` : ""}${cur[0]} x ${cur[1]}`}, "")
    }
}
const recipeHandler = new RecipeHandler()