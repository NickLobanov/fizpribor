<template>
    <div class="dashboard-item">
        <DashboardHeader :dashboardTitle="dashboardTitle"
            :buttonText="buttonText" 
            :amountState="amountState.length"
            @dashboard-click="dashboardClick"
        />
        <div class="dashboard-item__statistics">
            <h2 class="dashboard-item__title">Статистика</h2>
        </div>
        <div class="dashboard-item__project">
            <h2 class="dashboard-item__title">Список проектов</h2>
            <ul class="dashboard-item__list">
                <li class="dashboard-item__list-item" v-for="(item, id) in 3" :key="id">101KAC20AP001_1</li>
            </ul>
        </div>
        <div class="dashboard-item__empty"></div>
    </div>
</template>

<script>
    import DashboardHeader from '@/components/DashboardHeader.vue'
    export default {
        components: {
            DashboardHeader,
        },
        props: ['dashboardTitle', 'buttonText', 'amountState'],
        methods: {
            dashboardClick() {
                this.$emit('dashboard-click')
            }
        }
    }
</script>

<style scoped>
    .dashboard-item {
        width: 23%;
    }

    .dashboard-item__statistics {
        min-height: 226px;
        margin-bottom: 12px;
        background-color: #ffffff;
    }

    .dashboard-item__title {
        font-size: 16px;
        line-height: 22px;
        color: #474747;
        text-align: left;
        padding-top: 6px;
        padding-left: 25px;
        margin-bottom: 12px;
    }

    .dashboard-item__project {
        min-height: 191px;
        margin-bottom: 12px;
        background-color: #ffffff;
    }

    .dashboard-item__list {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
        padding-left: 25px;
    }

    .dashboard-item__list-item {
        font-size: 14px;
        line-height: 22px;
        color: #666667;
    }

    .dashboard-item__empty {
        min-height: 364px;
        background-color: #ffffff;
    }

    @media screen and (max-width: 1919px) {
        .dashboard-item {
            width: 23%;
        }
    }
</style>