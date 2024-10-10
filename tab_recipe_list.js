class TabRecipeList {
    constructor() {
        this.createQuantity = 1
    }

    createRecipeDetailTables(itemName, quantity, recursionCount) { // : HTMLTableElement[]
        recursionCount = recursionCount || 0
        const itemInfo = RECIPES[itemName]

        let result = []   // : HTMLTableElement[]

        const template = document.getElementById('recipe-detail-table-row-template');
        const clone = document.importNode(template.content, true);

        const table = clone.children[0]
        const tr = table.children[0]
        const tds = tr.getElementsByTagName('td')

        const multiplier = itemInfo["배수"]
        const ingredientList = itemInfo["재료"]
        const multipliedIngredientList = ingredientList.map(([name, ingredientQuantity]) => {return [name, ingredientQuantity / multiplier * quantity]})

        tds[0].innerText = `${QuantityToTranslatedText(itemName, quantity)}`
        tds[1].innerText = itemInfo["제작 방법"]
        tds[2].innerText = recipeHandler.IngredientArrayToString(multipliedIngredientList)
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
        const template = document.getElementById('recipe-table-row-template');
        const clone = document.importNode(template.content, true);

        const tr = clone.children[0]
        const tds = tr.getElementsByTagName('td')

        const multiplierText = itemInfo["배수"] > 1 ? ` x ${itemInfo["배수"]}`: ''

        tds[0].getElementsByTagName('img')[0].src = `이미지/${itemName}.png`
        tds[1].innerText = `${itemName}${multiplierText}`
        tds[2].innerText = itemInfo["제작 방법"]
        tds[3].innerText = recipeHandler.IngredientArrayToString(itemInfo["재료"])
        tds[4].innerText = itemInfo["판매가"] || "-"

        tr.onclick = () => {
            this.renderRecipeDetail(itemName)
        }

        return tr
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

        const template = document.getElementById('recipe-detail-template');
        const clone = document.importNode(template.content, true);

        const itemInfo = RECIPES[itemName]

        const ingredientsTxt = recipeHandler.IngredientArrayToString(itemInfo["재료"])
        const lowerIngredients = recipeHandler.coalesceIngredients(
            recipeHandler.toLowerIngredients(itemName, 1)
        )
        const lowerIngredientsTxt = recipeHandler.IngredientArrayToString(lowerIngredients)

        const descriptionPre = clone.children[0]
        descriptionPre.textContent = `이름: ${itemName}\n제작 방법: ${itemInfo["제작 방법"]}\n판매가: ${itemInfo["판매가"] || "없음"}\n재료: ${ingredientsTxt}\n기본 재료 환산(1개): ${lowerIngredientsTxt}`

        const createQuantityInputContainer = clone.getElementById("create-quantity-input-container")
        const createQuantityInputContainerInputs = createQuantityInputContainer.getElementsByTagName('input')
        const createQuantitySetInput = createQuantityInputContainerInputs[0]
        const createQuantityInput = createQuantityInputContainerInputs[1]

        createQuantitySetInput.value = Math.floor(this.createQuantity / 64)
        createQuantitySetInput.onchange = (e) => this.renderRecipeDetailTable(itemName)
        createQuantityInput.value = this.createQuantity % 64
        createQuantityInput.onchange = (e) => this.renderRecipeDetailTable(itemName)

        panelBody.appendChild(clone)

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