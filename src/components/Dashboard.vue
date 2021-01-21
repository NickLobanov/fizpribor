<template>
    <section class="dashboard">
        <DashboardItemWithProject :dashboardTitle="newProject" :buttonText="btnTextProject"/>
        <DashboardItemWithoutProject :dashboardTitle="newOrganization" :buttonText="btnTextOrganization"/>
        <DashboardItemWithProject :dashboardTitle="newUser" :buttonText="btnTextUser"/>
        <DashboardItemWithoutProject :dashboardTitle="newGroup" :buttonText="btnTextGroup"/>
    </section>
</template>

<script>
    import DashboardItemWithProject from '@/components/DashboardItemWithProject.vue'
    import DashboardItemWithoutProject from '@/components/DashboardItemWithoutProject.vue'
    export default {
        components: {
            DashboardItemWithProject,
            DashboardItemWithoutProject
        },
        data() {
            return {
                newProject: 'Проеты',
                btnTextProject: 'Новый проект',
                newOrganization: 'Организации',
                btnTextOrganization: 'Новая организация',
                newUser: 'Пользователи',
                btnTextUser: 'Новый пользователь',
                newGroup: 'Группы',
                btnTextGroup: 'Новая группа',
            }
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

    @media screen and (max-width: 1919px) {
        .dashboard {
            width: 1100px;
        }
    }
</style>