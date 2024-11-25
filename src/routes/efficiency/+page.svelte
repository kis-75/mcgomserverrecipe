
<script>
    import EfficiencyTable from "./components/EfficiencyTable.svelte";
    import RecipeDetail from "../recipe_list/components/RecipeDetail.svelte";
    import EfficiencyPresetMenu from "./components/EfficiencyPresetMenu.svelte";
    let selectedRecipeName = $state('')

    let selectedRightPanelTabIndex = $state(0)
</script>

<div class="h-full w-full min-h-0">
    <div class="flex flex-row h-full">
        <div class="panel left-panel">
            <EfficiencyTable bind:selectedRecipeName={selectedRecipeName} />
        </div>
        <div class="panel right-panel ">
            <div class="flex flex-col h-full text-white">
                <div role="tablist" class="tabs tabs-bordered mb-4">
                    <button role="tab" class="tab"
                        class:tab-active={selectedRightPanelTabIndex === 0}
                        onclick={() => selectedRightPanelTabIndex = 0}
                    >계산 프리셋</button>
                    <button role="tab" class="tab"
                        class:tab-active={selectedRightPanelTabIndex === 1}
                        onclick={() => selectedRightPanelTabIndex = 1}
                    >레시피</button>
                </div>
                {#if selectedRightPanelTabIndex === 0}
                    <div class="flex-1 h-full" style:display={selectedRightPanelTabIndex === 0 ? 'block' : 'none'}>
                        <EfficiencyPresetMenu/>
                    </div>
                {:else if selectedRightPanelTabIndex === 1}
                    <div class="flex-1 h-full overflow-y-auto" style:display={selectedRightPanelTabIndex === 1 ? 'block' : 'none'}>
                        <RecipeDetail { selectedRecipeName }/>
                    </div>
                {/if}
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