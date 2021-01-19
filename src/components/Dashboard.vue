<template>
    <section class="dashboard">
        <DashboardItemWithProject />
    </section>
</template>

<script>
    import DashboardItemWithProject from '@/components/DashboardItemWithProject.vue'
    export default {
        components: {
            DashboardItemWithProject,
        }
    }
</script>

<style scoped>
    .dashboard {
        width: 1446px;
        margin: 0 auto;
        margin-top: 35px;
    }
</style>