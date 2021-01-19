<template>
    <nav class="module-panel">
        <button class="module-panel__button module-panel__button_boolean"></button>
        <button class="module-panel__button module-panel__button_db"></button>
        <button class="module-panel__button module-panel__button_generator"></button>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .module-panel {
        width: 60px;
        height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 1px 1px #666666;
    }

    .module-panel__button {
        width: 36px;
        height: 30px;
        padding: 0px;
        border: none;
        background-color: transparent;
        margin-bottom: 28px;
    }

    .module-panel__button_boolean {
        margin-top: 18px;
        background-image: url('../assets/boolean.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    .module-panel__button_db {
        background-image: url('../assets/db.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    .module-panel__button_generator {
        background-image: url('../assets/generator.svg');
        background-repeat: no-repeat;
        background-position: center;
    }
</style>