import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        checkUser(ctx, userId) {
            ctx.commit('checkUser', userId)
        },
        checkAllUsers(ctx) {
            ctx.commit('checkAllUsers')
        },
        deleteUser(ctx, users) {
            const newUsersArray = users.filter((user) => {
                return user.isChecked !== true
            })
            console.log(newUsersArray)
            ctx.commit('deleteUser', newUsersArray)
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
        checkUser(state, userId) {
            state.users[userId].isChecked = !state.users[userId].isChecked
        },
        //Выбор всех пользователей
        checkAllUsers(state) {
            state.users.forEach(user => {
                user.isChecked = !user.isChecked
            })
        },
        deleteUser(state, users) {
            state.users = users
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