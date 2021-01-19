<template>
    <header class="header">
        <img src="@/assets/logo.svg" class="header__logo"/>
        <button class="header__button"></button>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
    }

    .header__logo {
        width: 50px;
        height: 65px;
        margin-left: 6px;
    }

    .header__button {
        width: 62px;
        height: 44px;
        margin-right: 6px;
        background-color: #F1F5F9;
        border: none;
        border-radius: 5px;
        background-image: url('../assets/edit.svg');
        background-repeat: no-repeat;
        background-position: center;
    }
</style>