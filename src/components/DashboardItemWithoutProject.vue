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
        min-height: 364px;
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
        min-height: 168px;
        background-color: #ffffff;
        margin-bottom: 12px;
    }

    .dashboard-item__empty-second {
        min-height: 248px;
        background-color: #ffffff;
    }

    @media screen and (max-width: 1919px) {
        .dashboard-item {
            width: 270px;
        }
    }
</style>