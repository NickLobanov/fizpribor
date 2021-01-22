<template>
    <div class="menu-header">
        <div class="menu-header__search">
            <h2 class="menu-header__title">{{title}}</h2>
            <label class="menu-header__label"><input class="menu-header__input"/></label>
            <button class="menu-header__add-btn" @click="$emit('add-button-click')">{{buttonText}}</button>
        </div>
        <div class="menu-header__controllers">
            <button class="menu-header__button menu-header__button_selector">{{addButtonText}}</button>
            <button class="menu-header__button menu-header__button_selector">{{deleteButtonText}}</button>
            <button class="menu-header__button ">Блокировать</button>
            <button class="menu-header__button">Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'buttonText', 'addButtonText', 'deleteButtonText']
    }
</script>

<style scoped>
    .menu-header {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
    }

    .menu-header__search {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1422px;
        margin: 0 auto;
        padding-top: 18px;
        margin-bottom: 33px;
    }

    .menu-header__title {
        font-size: 18px;
        line-height: 20px;
    }

    .menu-header__input {
        box-sizing: border-box;
        position: relative;
        padding: 0;
        margin: 0;
        height: 44px;
        width: 549px;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        box-sizing: border-box;
        margin-right: 440px;
        padding-left: 40px;
    }

    .menu-header__label {
        position: relative;
    }

    .menu-header__label::before {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('../assets/search.svg');
        background-repeat: no-repeat;
        background-position: center;
        top: 10px;
        left: 12px;
        z-index: 5;
    }

    .menu-header__add-btn {
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
        width: 176px;
        padding-top: 14px;
        padding-bottom: 14px;
        background-color: #3F6AD8;
        border: none;
        border-radius: 3px;
    }

    .menu-header__controllers {
        display: flex;
        width: 1422px;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    .menu-header__button {
        border: none;
        background-color: #8292A5;
        border-radius: 3px;
        padding: 9px 9px 9px 9px;
        font-size: 14px;
        line-height: 16px;
        margin-right: 12px;
        color: #ffffff;
    }

    .menu-header__button_selector {
        padding-right: 46px;
        position: relative;
    }

    .menu-header__button_selector::after {
        content: '';
        display: block;
        position: absolute;
        top: 10px;
        right: 15px;
        width: 16px;
        height: 16px;
        background-image: url('../assets/whitearrow.svg');
        background-position: center;
        background-repeat: no-repeat;
    }
</style>