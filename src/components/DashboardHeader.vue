<template>
    <div class="dashboard-header">
        <h2 class="dashboard-header__title">{{dashboardTitle}} ({{amountState}})</h2>
        <button class="dashboard-header__button" @click="$emit('dashboard-click')">{{buttonText}}</button>
    </div>
</template>

<script>
    export default {
        props: ['dashboardTitle', 'buttonText', 'amountState'],
    }
</script>

<style scoped>
    .dashboard-header {
        width: 100%;
        margin-bottom: 12px;
        background-color: #ffffff;
    }

    .dashboard-header__title {
        width: 142px;
        margin: 0 auto;
        margin-bottom: 19px;
        padding-top: 28px;
        font-size: 16px;
        line-height: 22px;
        color: #474747;        
    }

    .dashboard-header__button {
        width: 87%;
        margin: 0 auto;
        margin-bottom: 17px;
        padding-top: 5px;
        padding-bottom: 9px;
        background: #8292A5;
        border: none;
        border-radius: 3px;
        color: #ffffff;
        cursor: pointer;
    }

    @media screen and (max-width: 1919px) {
        .dashboard-header {
            width: 100%;
        }
    }
</style>