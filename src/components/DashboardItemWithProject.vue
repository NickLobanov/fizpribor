<template>
    <div class="dashboard-item">
        <DashboardHeader />
        <div class="dashboard-item__statistics">
            <h2 class="dashboard-item__title">Статистика</h2>
        </div>
        <div class="dashboard-item__project">
            <h2 class="dashboard-item__title">Список проектов</h2>
            <ul class="dashboard-item__list">
                <li class="dashboard-item__list-item">101KAC20AP001_1</li>
                <li class="dashboard-item__list-item">101KAC20AP001_1</li>
                <li class="dashboard-item__list-item">101KAC20AP001_1</li>
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
        }
    }
</script>

<style scoped>
    .dashboard-item__statistics {
        width: 342px;
        min-height: 226px;
        margin-bottom: 12px;
    }

    .dashboard-item__text {
        font-size: 16px;
        line-height: 22px;
        color: #474747;
    }

    .dashboard-item__project {
        width: 342px;
        min-height: 191px;
        margin-bottom: 12px;
    }

    .dashboard-item__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .dashboard-item__list-item {
        font-size: 14px;
        line-height: 22px;
        color: #666667;
    }

    .dashboard-item__empty {
        width: 342px;
        min-height: 364px;
    }
</style>