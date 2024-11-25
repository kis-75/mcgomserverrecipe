/**
 * @typedef {Object} CookingToolsPreset
 * @property {number} [가스레인지]
 * @property {number} [튀김기]
 */

/** @type {CookingToolsPreset} */
export const cookingToolsPresetExample = {}; // CookingToolsPreset Type 정의용 객체

/** @type {Object<string, CookingToolsPreset>} */
const defaultCookingToolsPresets = {
    "마을": {
        "가스레인지": 32,
        "튀김기": 1
    }
}

function saveDefaultCookingToolsPresets() {
    window.localStorage.setItem("presets:cookingTool", JSON.stringify(defaultCookingToolsPresets))
}

export function getAllCookingToolsPresets() {
    console.log("loading...")
    try {
        const presetEntriesJson = window.localStorage.getItem("presets:cookingTool")

        if (!presetEntriesJson) {
            saveDefaultCookingToolsPresets()
            return JSON.parse(JSON.stringify(defaultCookingToolsPresets))
        }
        return JSON.parse(presetEntriesJson)
    } catch (e) {
        console.log("요리 도구 프리셋 로드 실패")
        console.log(e)
    }
}