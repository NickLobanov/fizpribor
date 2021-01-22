import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        checkUser(ctx, userId) {
            ctx.commit('checkUser', userId)
        },
        checkOrganization(ctx, userId) {
            ctx.commit('checkOrganization', userId)
        },
        checkGroup(ctx, userId) {
            ctx.commit('checkGroup', userId)
        },
        checkRole(ctx, userId) {
            ctx.commit('checkRole', userId)
        },

        checkAllUsers(ctx) {
            ctx.commit('checkAllUsers')
        },
        checkAllOrganization(ctx) {
            ctx.commit('checkAllOrganization')
        },
        checkAllGroup(ctx) {
            ctx.commit('checkAllGroup')
        },
        checkAllRole(ctx) {
            ctx.commit('checkAllRole')
        },

        deleteUser(ctx, users) {
            const newUsersArray = users.filter((user) => {
                return user.isChecked !== true
            })
            ctx.commit('deleteUser', newUsersArray)
        },
        deleteOrganization(ctx, organizations) {
            const newOrganizationArray = organizations.filter((organization) => {
                return organization.isChecked !== true
            })
            ctx.commit('deleteOrganization', newOrganizationArray)
        },
        deleteGroup(ctx, groups) {
            const newGroupArray = groups.filter((group) => {
                return group.isChecked !== true
            })
            ctx.commit('deleteGroup', newGroupArray)
        },
        deleteRole(ctx, roles) {
            const newRoleArray = roles.filter((role) => {
                return role.isChecked !== true
            })
            ctx.commit('deleteRole', newRoleArray)
        }
    },
    mutations: {
        //Создание нового пользователя
        createNewUser(state, addNewUser) {
            state.users.push(addNewUser)
        },
        //Создание новой организации
        createNewOrganization(state, addNewOrganization) {
            state.organizations.push(addNewOrganization)
        },
        //Создание новой группы
        createNewGroup(state, addNewGroup) {
            state.groups.push(addNewGroup)
        },
        //Создание новой роли
        createNewRole(state, addNewRole) {
            state.role.push(addNewRole)
        },

        //Выбор пользователя
        checkUser(state, userId,) {
            state.users[userId].isChecked = !state.users[userId].isChecked
        },
        //Выбор организации
        checkOrganization(state, organizationId) {
            state.organizations[organizationId].isChecked = !state.organizations[organizationId].isChecked
        },
         //Выбор группы
         checkGroup(state, groupId) {
            state.groups[groupId].isChecked = !state.groups[groupId].isChecked
        },
         //Выбор роли
         checkRole(state, roleId) {
            state.role[roleId].isChecked = !state.role[roleId].isChecked
        },

        //Выбор всех пользователей
        checkAllUsers(state) {
            state.users.forEach(user => {
                user.isChecked = !user.isChecked
            })
        },
         //Выбор всех пользователей
         checkAllOrganization(state) {
            state.organizations.forEach(organization => {
                organization.isChecked = !organization.isChecked
            })
        },
        //Выбор всех групп
        checkAllGroup(state) {
            state.groups.forEach(group => {
                group.isChecked = !group.isChecked
            })
        },
        //Выбор всех ролей
        checkAllRole(state) {
            state.role.forEach(role => {
                role.isChecked = !role.isChecked
            })
        },

        deleteUser(state, users) {
            state.users = users
        },
        deleteOrganization(state, organization) {
            state.organizations = organization
        },
        deleteGroup(state, group) {
            state.groups = group
        },
        deleteRole(state, role) {
            state.roles = role
        }
        
    },
    state: {
        users: [
            {
                name: 'Алексей',
                secondName: 'Белянин',
                patronymic: 'Васильевич',
                login: 'BelianinA',
                email: 'BelianinA@fizpribor.ru',
                role: 'Разработчик',
                isChecked: false,
            },
        ],
        organizations: [
            {
                name: 'ООО «Физприбор»',
                project: 'АЭС Аккую, АЭС Нововоронежская',
                responible: 'Руководитель',
                isChecked: false,
            }
        ],
        groups: [
            {
                name: 'ООО «Физприбор»',
                project: 'АЭС Аккую, АЭС Нововоронежская',
                competitors: 5,
                isChecked: false,
            }
        ],
        role: [
            {
                name: 'Разработчик',
                keyName: 'developer',
                functions: ['Конфигуратор БД (редактирование)', 'Редактор блоков (редкатирование)'],
                isChecked: false,  
            }
        ]
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getOrganizations(state) {
            return state.organizations
        },
        getGroups(state) {
            return state.groups
        },
        getRole(state) {
            return state.role
        },
    }
})