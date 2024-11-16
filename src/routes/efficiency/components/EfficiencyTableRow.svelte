<script>
    /**
     * @typedef {Object} Props
     * @property  {import('svelte/elements').MouseEventHandler<HTMLElement>} onclick - 선택된 레시피명 바꿔주는 이벤트 핸들러
     * @property  {number} recipeIndex - 레시피 순번
     * @property  {string} recipeName - 레시피명
     * @property  {string} recipePrice - 레시피 가격
     * @property  {string} recipePps - 레시피 pps (price per second, 판매가/s)
     */

    /** @type {Props} */
    let { onclick, recipeIndex, recipeName, recipePrice, recipePps } = $props()
</script>

<tr { onclick }>
    <th class="text-center">{ recipeIndex + 1 }</th>
    <td>{ recipeName }</td>
    <td>{ recipePrice }</td>
    <td>{ recipePps }</td>
</tr>