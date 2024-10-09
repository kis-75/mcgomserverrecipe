class TabRecipeList {
    constructor() {
        this.createQuantity = 1
    }

    createRecipeDetailTables(itemName, quantity, recursionCount) { // : HTMLTableElement[]
        recursionCount = recursionCount || 0
        const itemInfo = RECIPES[itemName]

        let result = []   // : HTMLTableElement[]

        const table = document.createElement("table")
        const tableRow = document.createElement("tr")
        const tableRowName = document.createElement("td")
        const tableRowMethod = document.createElement("td")
        const tableRowIngredient = document.createElement("td")

        const multiplier = itemInfo["배수"]
        const quantityText = quantity != 1 ? ` x ${quantity}`: ''
        const ingredientList = itemInfo["재료"]
        const multipliedIngredientList = ingredientList.map(([name, ingredientQuantity]) => {return [name, ingredientQuantity / multiplier * quantity]})

        table.className = "recipe-detail-table"
        tableRowName.innerText = `${QuantityToTranslatedText(itemName, quantity)}`
        tableRowMethod.innerText = itemInfo["제작 방법"]
        tableRowIngredient.innerText = recipeHandler.IngredientArrayToString(multipliedIngredientList)


        tableRow.appendChild(tableRowName)
        tableRow.appendChild(tableRowMethod)
        tableRow.appendChild(tableRowIngredient)    
        table.appendChild(tableRow)
        table.style.marginLeft = `${recursionCount * 2}rem`

        result.push(table)

        for (const [ingredientName, ingredientQuantity] of multipliedIngredientList) {
            if (RECIPES.hasOwnProperty(ingredientName)) {
                result = result.concat(this.createRecipeDetailTables(ingredientName, ingredientQuantity, recursionCount + 1))
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
        panelBody.innerHTML = ""

        const itemInfo = RECIPES[itemName]

        const ingredientsTxt = recipeHandler.IngredientArrayToString(itemInfo["재료"])
        const lowerIngredients = recipeHandler.coalesceIngredients(
            recipeHandler.toLowerIngredients(itemName, 1)
        )
        const lowerIngredients1Set = lowerIngredients.map(([name, quantity]) => {return [name, quantity * 64]})
        const lowerIngredientsTxt = recipeHandler.IngredientArrayToString(lowerIngredients)

        const descriptionPre = document.createElement("pre")
        descriptionPre.textContent = `이름: ${itemName}\n제작 방법: ${itemInfo["제작 방법"]}\n판매가: ${itemInfo["판매가"] || "없음"}\n재료: ${ingredientsTxt}\n기본 재료 환산(1개): ${lowerIngredientsTxt}`
        panelBody.appendChild(descriptionPre)

        // 제작 개수: input
        const createQuantityInputContainer = document.createElement("div")
        const createQuantityLabel = document.createElement("div")
        const createQuantitySetInput = document.createElement("input")
        const createQuantityInput = document.createElement("input")

        createQuantityInputContainer.style.display = "flex"
        createQuantityInputContainer.style.margin = "0.5rem"
        createQuantityLabel.textContent = "제작 개수: "
        createQuantitySetInput.style.margin = "0 0.5rem"
        createQuantitySetInput.style.width = "3rem"
        createQuantitySetInput.id = "recipe-detail-create-quantity-set-input"
        createQuantitySetInput.value = Math.floor(this.createQuantity / 64)
        createQuantitySetInput.onchange = (e) => this.renderRecipeDetailTable(itemName)
        createQuantityInput.style.margin = "0 0.5rem"
        createQuantityInput.style.width = "3rem"
        createQuantityInput.id = "recipe-detail-create-quantity-input"
        createQuantityInput.value = this.createQuantity % 64
        createQuantityInput.onchange = (e) => this.renderRecipeDetailTable(itemName)

        createQuantityInputContainer.appendChild(createQuantityLabel)
        createQuantityInputContainer.appendChild(createQuantitySetInput)
        createQuantityInputContainer.appendChild(document.createTextNode("셋 "))
        createQuantityInputContainer.appendChild(createQuantityInput)
        createQuantityInputContainer.appendChild(document.createTextNode("개"))
        panelBody.appendChild(createQuantityInputContainer)

        // 레시피 세부 설명 테이블
        const recipeDetailTableContainer = document.createElement("div")
        recipeDetailTableContainer.id = "recipe-detail-table-container"
        panelBody.appendChild(recipeDetailTableContainer)

        this.renderRecipeDetailTable(itemName)
    }

    renderRecipeDetailTable(itemName) {
        const quantitySet = Number(document.querySelector("#recipe-detail-create-quantity-set-input").value)
        const quantityMod = Number(document.querySelector("#recipe-detail-create-quantity-input").value)
        const quantity = quantitySet * 64 + quantityMod

        const tableContainer = document.querySelector("#recipe-detail-table-container")
        tableContainer.innerHTML = ""

        const lowerIngredients = recipeHandler.coalesceIngredients(
            recipeHandler.toLowerIngredients(itemName, quantity)
        )
        const lowerIngredientsTxt = recipeHandler.IngredientArrayToString(lowerIngredients)
        const descriptionPre = document.createElement("pre")
        descriptionPre.textContent = `기본 재료 환산: ${lowerIngredientsTxt}`
        tableContainer.appendChild(descriptionPre)

        for (const table of this.createRecipeDetailTables(itemName, quantity)) {
            tableContainer.appendChild(table)
        }

        this.createQuantity = quantity
    }
}
const tabRecipeList = new TabRecipeList()