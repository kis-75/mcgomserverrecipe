class TabEfficiency {
    CookingToolsPresets = {
        "마을": {
            "기구": {
                "가스레인지": 32,
                "튀김기": 1
            },
            "자리 이동시간": 0
        },
        "요리소 3층": {
            "기구": {
                "프라이팬": 5,
                "냄비": 5,
                "튀김기": 5,
            },
            "자리 이동시간": 2
        },
    };
    CookingToolUseTime = 0.25   // 조리 기구에 재료를 넣거나 조리 도구 사용하는 시간.

    constructor() {
    }

    calculateRecipeEstimatedTime(recipeName, cookingToolsInfo, quantity, timeInfo) { // recipeName: string[][], cookingToolsInfo: Object, quantity: Number, TimeInfo: Object, return: Number
        const recipeInfo = RECIPES[recipeName]
        const method = recipeInfo['제작방법']
        const ingredients = recipeInfo["재료"]

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
        const quantityMultiplier = quantity / recipeInfo['배수']

        // 조리 도구 정보 처리
        const requiredTime = recipeInfo['소요시간'] || 30
        if (["냄비", "프라이팬", "튀김기"].includes(method)) {
            const cookingToolUseTime = ingredients.reduce((acc, cur) => acc + cur[1], 1) * this.CookingToolUseTime
            timeInfo['조리 도구 사용 시간'] += cookingToolUseTime * quantityMultiplier
            timeInfo[method] += (requiredTime + cookingToolUseTime) * quantityMultiplier
        } else if (recipeInfo['소요시간'] !== undefined){
            timeInfo['재료 수급 시간'] += requiredTime * quantityMultiplier
        }

        for (const [ingredientName, ingredientQuantity] of ingredients) {
            if (RECIPES.hasOwnProperty(ingredientName)) {
                try {
                    this.calculateRecipeEstimatedTime(ingredientName, cookingToolsInfo, ingredientQuantity * quantityMultiplier, timeInfo)
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

    renderEfficiencyTable() {
        const tableBody = document.querySelector("#efficiency-table tbody")
        tableBody.textContent = ""

        const template = document.getElementById('efficiency-table-row-template');

        const cookingToolsConfiguration = this.CookingToolsPresets['마을']['기구']
        // recipeName, sps
        let rows = []

        for (const [recipeName, recipeInfo] of Object.entries(RECIPES)) {
            const timeInfo = this.calculateRecipeEstimatedTime(recipeName, cookingToolsConfiguration, 1)

            const potWaitTime = timeInfo['냄비']
            const panWaitTime = timeInfo['프라이팬']
            const fryerWaitTime = timeInfo['튀김기']
            const gasRangeWaitTime = potWaitTime + panWaitTime

            const cookingToolsUseTime = timeInfo['조리 도구 사용 시간']
            const gatherTime = timeInfo['재료 수급 시간']
            let cookingToolsWaitTime = 0

            if (cookingToolsConfiguration.hasOwnProperty("가스레인지")) {
                const gasRangeQuantity = cookingToolsConfiguration["가스레인지"]
                const fryerQuantity = cookingToolsConfiguration["튀김기"]
                cookingToolsWaitTime = Math.max(gasRangeWaitTime / gasRangeQuantity, fryerWaitTime / fryerQuantity)
            } else {
                const potQuantity = cookingToolsConfiguration["가스레인지"]
                const panQuantity = cookingToolsConfiguration["가스레인지"]
                const fryerQuantity = cookingToolsConfiguration["튀김기"]
                cookingToolsWaitTime = Math.max(potWaitTime / potQuantity, panWaitTime / panQuantity, fryerWaitTime / fryerQuantity)
            }

            const minimumRequiredTime = gatherTime + Math.max(cookingToolsUseTime, cookingToolsWaitTime)
            const salesPrice = recipeInfo['판매가']

            let sps = ""
            if (salesPrice === undefined) {
                sps = "판매가 없음"
            } else if (minimumRequiredTime === 0) {
                sps = "산출 불가"
            } else {
                sps = salesPrice / minimumRequiredTime
            }

            rows.push([recipeName, salesPrice, sps])
        }

        let spsValidRows = rows.filter(([recipeName, salesPrice, sps]) => (sps !== "판매가 없음") && (sps !== "산출 불가"))
        const spsInvalidRows = rows.filter(([recipeName, salesPrice, sps]) => (sps === "판매가 없음") || (sps === "산출 불가"))

        spsValidRows.sort((a, b) => b[2] - a[2])
        spsValidRows = spsValidRows.map(([recipeName, salesPrice, sps]) => [recipeName, salesPrice, sps.toFixed(2)])

        rows = spsValidRows.concat(spsInvalidRows)

        for (const row of rows) {
            const clone = document.importNode(template.content, true);
            
            const tr = clone.children[0]
            const tdName = tr.children[0]
            const tdSalesPrice = tr.children[1]
            const tdSps = tr.children[2]

            tdName.textContent = row[0]
            tdSalesPrice.textContent = row[1]
            tdSps.textContent = row[2]

            // TODO Debugging
            tr.onclick = () => {
                console.log(row[0], this.calculateRecipeEstimatedTime(row[0], cookingToolsConfiguration, 1))
            }

            tableBody.appendChild(clone)
        }

        
    }


    calculateRecipeEstimatedTimeOld(itemName, cookingToolsInfo) { // recipe: string[][], return: Number
        // 레시피의 예상 소요시간을 계산하여 반환.
        // itemName: string
        // return: Number
        const itemInfo = RECIPES[itemName]

        const recipeList = recipeHandler.findFullRecipes(itemName, 1)

        let totalGatherTime = 0         // 재료 수급 시간
        let totalCookingPotWaitTime = 0    // 냄비 대기 시간
        let totalCookingPanWaitTime = 0    // 프라이팬 대기 시간
        let totalCookingFryerWaitTime = 0    // 튀김기 대기 시간

        let totalCookingUseTime = 0     // 조리 도구 사용 시간(재료 넣기, 뒤집개, 집게)

        for (const recipeInfo of recipeList) {
            const method = recipeInfo["제작방법"]
            const ingredients = recipeInfo["재료"]
            const defaultRequiredTime = ["냄비", "프라이팬", "튀김기"].includes(method) ? 30 : ["도마"].includes(method) ? 0.5 : 0
            const requiredTime = recipeInfo["소요시간"]

            if (method === "냄비") {
                totalCookingPotWaitTime += requiredTime
                totalCookingUseTime += ingredients.reduce((acc, cur) => acc + cur[1], 1) * CookingToolUseTime
            } else if (method === "프라이팬") {
                totalCookingPanWaitTime += requiredTime
                totalCookingUseTime += ingredients.reduce((acc, cur) => acc + cur[1], 1) * CookingToolUseTime
            } else if (method === "튀김기") {
                totalCookingFryerWaitTime += requiredTime
                totalCookingUseTime += ingredients.reduce((acc, cur) => acc + cur[1], 1) * CookingToolUseTime
            } else {
                totalGatherTime += requiredTime
            }
        }

        if (cookingToolsInfo['기구'].hasOwnProperty('가스레인지')) {
            const toolQuantity = cookingToolsInfo['기구']['가스레인지']
            totalCookingPotWaitTime /= toolQuantity
            totalCookingPanWaitTime /= toolQuantity
        } else {
            const potQuantity = cookingToolsInfo['기구']['냄비']
            const panQuantity = cookingToolsInfo['기구']['프라이팬']
            totalCookingPotWaitTime /= potQuantity
            totalCookingPanWaitTime /= panQuantity
        }
        totalCookingFryerWaitTime /= cookingToolsInfo['기구']['튀김기']

        return totalGatherTime + Math.max(totalCookingWaitTime, totalCookingUseTime)
    }
}
const tabEfficiency = new TabEfficiency()