<template>
    <section class="dashboard">
        <DashboardItemWithProject :dashboardTitle="newProject"
            :buttonText="btnTextProject" 
            :amountState="this.getUsers"
        />
        <DashboardItemWithoutProject :dashboardTitle="newOrganization"
            :buttonText="btnTextOrganization" 
            :amountState="this.getOrganizations"
            @dashboard-click="$emit('dashboard-click', 'Organization')"
        />
        <DashboardItemWithProject :dashboardTitle="newUser" 
            :buttonText="btnTextUser" 
            :amountState="this.getGroups"
            @dashboard-click="$emit('dashboard-click', 'Users')"
        />
        <DashboardItemWithoutProject :dashboardTitle="newGroup"
            :buttonText="btnTextGroup" 
            :amountState="this.getRole"
            @dashboard-click="$emit('dashboard-click', 'Group')"
        />
    </section>
</template>

<script>
    import DashboardItemWithProject from '@/components/DashboardItemWithProject.vue'
    import DashboardItemWithoutProject from '@/components/DashboardItemWithoutProject.vue'
    import {mapGetters} from 'vuex'
    export default {
        components: {
            DashboardItemWithProject,
            DashboardItemWithoutProject
        },
        data() {
            return {
                newProject: 'Проекты',
                btnTextProject: 'Новый проект',
                newOrganization: 'Организации',
                btnTextOrganization: 'Новая организация',
                newUser: 'Пользователи',
                btnTextUser: 'Новый пользователь',
                newGroup: 'Группы',
                btnTextGroup: 'Новая группа',
            }
        },
        computed: mapGetters(['getUsers', 'getOrganizations', 'getGroups', 'getRole'])
    }
</script>

<style scoped>
    .dashboard {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;
        margin-top: 35px;
    }

    @media screen and (max-width: 1919px) {
        .dashboard {
            width: 70%;
        }
    }
</style>