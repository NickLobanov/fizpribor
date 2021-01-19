<template>
    <div class="dashboard-item">
        <DashboardHeader />
        <div class="dashboard-item__statistics">
            <h2 class="dashboard-item__title">Статистика</h2>
        </div>
        <div class="dashboard-item__empty-first"></div>
        <div class="dashboard-item__empty-second"></div>
    </div>
</template>

<script>
    import DashboardHeader from '@/components/DashboardHeader.vue'
    export default {
        components: {
            DashboardHeader
        }
    }
</script>

<style scoped>
    .dashboard-item {
        width: 342px;
    }

    .dashboard-item__statistics {
        width: 342px;
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

    .dashboard-item__empty-first {
        width: 342px;
        min-height: 168px;
        background-color: #ffffff;
    }

    .dashboard-item__empty-first {
        width: 342px;
        min-height: 248px;
        background-color: #ffffff;
    }
</style>