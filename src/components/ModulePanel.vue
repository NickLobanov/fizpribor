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
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid #666666;
        border-right: 2px solid #666666;
        background-color: #ffffff;
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