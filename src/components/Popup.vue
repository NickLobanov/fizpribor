<template>
    <div class="popup">
        <form class="popup__form">
            <h2 class="popup__title">title</h2>
            <slot></slot>
            <button class="popup__button">Создать</button>
            <button class="popup__close-btn"></button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .popup {
        position: fixed;
        width: 100%;
        min-height: 100%;
        top: 0;
        left: 0;
        z-index: 7;
        background-color: rgba(00, 00, 00, 0.5);
    }

    .popup__form {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 40%;
        margin: 0 auto;
        margin-top: 10%;
        background-color: #ffffff;
        border-radius: 10px;
    }

    .popup__title {
        width: 80%;
        text-align: left;
        margin: 0 auto;
        margin-bottom: 20px;
        padding-top: 25px;
        font-size: 32px;
        line-height: 36px;
    }

    .popup__input {
        border: none;
        border-bottom: 1px solid rgba(00, 00, 00, 0.2);
        padding-bottom: 13px;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 5px;
    }

    .popup__button {
        width: 80%;
        height: 50px;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 36px;
        background-color: #000000;
        color: #ffffff;
        border-radius: 6px;
        border: none;
        font-size: 22px;
        line-height: 24px;
    }

    .popup__close-btn {
        position: absolute;
        top: -41px;
        right: -41px;
        background-image: url('../assets/close-btn.svg');
        background-repeat: no-repeat;
        background-position: center;
        width: 41px;
        height: 41px;
        border: none;
        background-color: transparent;
        transform: rotate(45deg);
    }
</style>