// 

/**
 * 아이템 개수를 세트 단위로 변환.
 * e.g. [["쌀", 2], ["밥", 3]] => "쌀 x 2, 밥 x 3"
 * @type { (itemName: string, quantity: number) => string }
 */
export function QuantityToTranslatedText(itemName, quantity) {
    const result = []
    if (["실버"].includes(itemName)) {
        result.push(`${quantity}`)
    } else {
        const setQuantity = Math.floor(quantity / 64)
        const quantityMod = quantity % 64
    
        
        if (setQuantity) {
            result.push(`${setQuantity}셋`)
        }
        if (quantityMod || !(setQuantity)) {
            if (quantity > 64) {
                result.push(`${quantityMod}개(${quantity}개)`)
            } else {
                result.push(`${quantityMod}개`)
            }
            
        }
    }

    return `${itemName} x ${result.join(' ')}`
}