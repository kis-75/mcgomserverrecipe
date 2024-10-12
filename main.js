function init() {
    // 탭 클릭 이벤트
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const activeButton = document.querySelector('.tab-button.active')
            const activeTab = document.querySelector('.tab:not(.hidden)')
    
            // 현재 활성화된 탭 버튼과 탭 내용을 비활성화
            activeButton.classList.remove('active')
            activeTab.classList.add('hidden')
    
            // 클릭한 버튼의 탭 활성화
            button.classList.add('active')
            const tabId = button.getAttribute('data-tab')
            document.getElementById(tabId).classList.remove('hidden')
        })
    })
}

function main() {
    init()
    tabRecipeList.renderRecipeTable()
    tabEfficiency.renderEfficiencyTable()
}


window.onload = main