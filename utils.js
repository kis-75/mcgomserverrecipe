// 아이템 개수를 세트 단위로 변환.
function QuantityToTranslatedText(itemName, quantity) {
    const result = []
    if (["실버"].includes(itemName)) {
        result.push(`${Math.round(quantity * 1000) / 1000}`)
    } else {
        const setQuantity = Math.floor(quantity / 64)
        const quantityMod = quantity % 64
    
        
        if (setQuantity) {
            result.push(`${setQuantity}셋`)
        }
        if (quantityMod || !(setQuantity)) {
            result.push(`${Math.round(quantityMod * 1000) / 1000}개`)
        }
    }

    return `${itemName} x ${result.join(' ')}`
}