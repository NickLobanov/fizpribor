<template>
    <section class="dashboard">
        <DashboardItemWithProject />
        <DashboardItemWithoutProject />
        <DashboardItemWithProject />
        <DashboardItemWithoutProject />
    </section>
</template>

<script>
    import DashboardItemWithProject from '@/components/DashboardItemWithProject.vue'
    import DashboardItemWithoutProject from '@/components/DashboardItemWithoutProject.vue'
    export default {
        components: {
            DashboardItemWithProject,
            DashboardItemWithoutProject
        }
    }
</script>

<style scoped>
    .dashboard {
        display: flex;
        justify-content: space-between;
        width: 1446px;
        margin: 0 auto;
        margin-top: 35px;
    }
</style>