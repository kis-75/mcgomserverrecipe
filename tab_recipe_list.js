class TabRecipeList {
    constructor() {
    }

    createRecipeDetailTables(itemName, recursionCount) { // : HTMLTableElement[]
        recursionCount = recursionCount || 0
        const itemInfo = RECIPES[itemName]

        let result = []   // : HTMLTableElement[]

        const table = document.createElement("table")
        const tableRow = document.createElement("tr")
        const tableRowName = document.createElement("td")
        const tableRowMethod = document.createElement("td")
        const tableRowIngredient = document.createElement("td")

        table.className = "recipe-detail-table"
        const multiplierText = itemInfo["배수"] > 1 ? ` x ${itemInfo["배수"]}`: ''
        tableRowName.innerText = `${itemName}${multiplierText}`
        tableRowMethod.innerText = itemInfo["제작 방법"]
        tableRowIngredient.innerText = recipeHandler.IngredientArrayToString(itemInfo["재료"])

        tableRow.appendChild(tableRowName)
        tableRow.appendChild(tableRowMethod)
        tableRow.appendChild(tableRowIngredient)    
        table.appendChild(tableRow)
        table.style.marginLeft = `${recursionCount * 2}rem`

        result.push(table)

        for (const [ingredientName, ingredientQuantity] of itemInfo["재료"]) {
            if (RECIPES.hasOwnProperty(ingredientName)) {
                result = result.concat(this.createRecipeDetailTables(ingredientName, recursionCount + 1))
            }
        }
    
        return result
    }

    createRecipeTableRow(itemName, itemInfo) {  // : HTMLTrElement
        const tableRow = document.createElement("tr")
    
        const tableRowImageContainer = document.createElement("td")
        const tableRowImage = document.createElement("img")
        const tableRowName = document.createElement("td")
        const tableRowMethod = document.createElement("td")
        const tableRowIngredient = document.createElement("td")
        const tableRowPrice = document.createElement("td")
    
        const multiplierText = itemInfo["배수"] > 1 ? ` x ${itemInfo["배수"]}`: ''
    
        tableRowImage.src = `이미지/${itemName}.png`
        tableRowImage.className = "item-image"
        tableRowName.innerText = `${itemName}${multiplierText}`
        tableRowMethod.innerText = itemInfo["제작 방법"]
        tableRowIngredient.innerText = recipeHandler.IngredientArrayToString(itemInfo["재료"])
        tableRowPrice.innerText = itemInfo["판매가"] || "-"
    
        tableRowImageContainer.appendChild(tableRowImage)
        tableRow.appendChild(tableRowImageContainer)
        tableRow.appendChild(tableRowName)
        tableRow.appendChild(tableRowMethod)
        tableRow.appendChild(tableRowIngredient)
        tableRow.appendChild(tableRowPrice)
    
        tableRow.onclick = () => {
            this.renderRecipeDetail(itemName)
        }
    
        return tableRow
    }

    renderRecipeTable() {
        const tableBody = document.querySelector("#tab-recipe-list #recipe-table>tbody")
        const searchName = document.querySelector("#tab-recipe-list #recipe-table-search-name").value
        const searchMethod = document.querySelector("#tab-recipe-list #recipe-table-search-method").value
        const searchIngredient = document.querySelector("#tab-recipe-list #recipe-table-search-ingredient").value
        const searchPrice = document.querySelector("#tab-recipe-list #recipe-table-search-price").value
    
        tableBody.textContent = ""
    
        for (const [itemName, itemInfo] of Object.entries(RECIPES)) {
            let is_valid = true
            if ( !( (searchName === "") || (itemName.includes(searchName)) ) ) {
                is_valid = false
            }
            if ( !( (searchMethod === "") || (itemInfo["제작 방법"].includes(searchMethod)) ) ) {
                is_valid = false
            }
            if (searchIngredient !== "") {
                const ingredientListTxt = recipeHandler.IngredientArrayToString(itemInfo["재료"])
                const searchIngredientArray = searchIngredient.split(",").map((x) => x.trim())
                for (const ingredient of searchIngredientArray) {
                    if ( !(ingredientListTxt.includes(ingredient)) ) {
                        is_valid = false
                    }
                }
            }
            if ( !( (searchPrice === "") || (itemInfo["판매가"] > Number(searchPrice)) ) ) {
                is_valid = false
            }

            if (is_valid) {
                const tableRow = this.createRecipeTableRow(itemName, itemInfo)
                tableBody.appendChild(tableRow)
            }
        }
    }

    renderRecipeDetail(itemName) {
        const panelBody = document.querySelector("#tab-recipe-list .right-panel")
        panelBody.textContent = ""

        const itemInfo = RECIPES[itemName]

        const ingredientsTxt = recipeHandler.IngredientArrayToString(itemInfo["재료"])
        const lowerIngredients = recipeHandler.coalesceIngredients(
            recipeHandler.toLowerIngredients(itemName, 1)
        )
        const lowerIngredients1Set = lowerIngredients.map(([name, quantity]) => {return [name, quantity * 64]})
        const lowerIngredientsTxt = recipeHandler.IngredientArrayToString(lowerIngredients)
        const lowerIngredients1SetTxt = recipeHandler.IngredientArrayToString(lowerIngredients1Set)

        const descriptionPre = document.createElement("pre")
        descriptionPre.textContent = `이름: ${itemName}\n제작 방법: ${itemInfo["제작 방법"]}\n판매가: ${itemInfo["판매가"] || "없음"}\n재료: ${ingredientsTxt}\n기본 재료 환산: ${lowerIngredientsTxt}\n기본 재료 환산(1셋): ${lowerIngredients1SetTxt}`

        panelBody.appendChild(descriptionPre)

        for (const table of this.createRecipeDetailTables(itemName)) {
            panelBody.appendChild(table)
        }
    }
}
const tabRecipeList = new TabRecipeList()