import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {
        createNewUser(state, addNewUser) {
            state.users.push(addNewUser)
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
                role: 'Разработчик'
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