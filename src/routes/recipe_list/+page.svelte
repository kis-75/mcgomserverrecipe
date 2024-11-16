
<script>
    import RecipeTable from "./components/RecipeTable.svelte";
    import RecipeDetail from "./components/RecipeDetail.svelte";
    let selectedRecipeName = $state('')
</script>

<div class="h-full w-full min-h-0">
    <div class="flex flex-row h-full">
        <div class="panel left-panel">
            <RecipeTable bind:selectedRecipeName={ selectedRecipeName } />
        </div>
        <div class="panel right-panel">
            <RecipeDetail { selectedRecipeName }/>
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
</style>