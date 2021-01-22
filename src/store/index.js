import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        checkUser(ctx, userId) {
            ctx.commit('checkUser', userId)

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
        createNewUser(state, addNewUser) {
            state.users.push(addNewUser)
        },
        checkUser(state, userId) {
            state.users[userId].isChecked = !state.users[userId].isChecked
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
                responible: 'Руководитель'
            }
        ],
        groups: [
            {
                name: 'ООО «Физприбор»',
                project: 'АЭС Аккую, АЭС Нововоронежская',
                competitors: 5
            }
        ],
        role: [
            {
                name: 'Разработчик',
                keyName: 'developer',
                functions: ['Конфигуратор БД (редактирование)', 'Редактор блоков (редкатирование)']  
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