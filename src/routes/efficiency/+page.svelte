
<script>
    import EfficiencyTable from "./components/EfficiencyTable.svelte";
    import RecipeDetail from "../recipe_list/components/RecipeDetail.svelte";
    let selectedRecipeName = $state('빵 세트')
</script>

<div class="h-full w-full min-h-0">
    <div class="flex flex-row h-full">
        <div class="panel left-panel">
            <EfficiencyTable bind:selectedRecipeName={selectedRecipeName} />
        </div>
        <div class="panel right-panel">
            <div class="flex flex-col h-full">
                <!-- TODO 다른걸로 바꿔야됨 -->
                <div class="flex-1 h-full">waa</div>
                <div class="flex-1 h-full overflow-y-auto">
                    <RecipeDetail { selectedRecipeName }/>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .panel {
        @apply flex-1 h-full;
    }

    .left-panel {
        @apply overflow-x-auto;
    }

    .right-panel {
        @apply overflow-x-auto p-5 bg-gradient-to-b from-panel-gradient-from to-panel-gradient-to;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>