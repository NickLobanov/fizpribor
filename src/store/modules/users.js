export default {
    actions: {
        //Выбор пользователя
        checkUser(ctx, userId) {
            ctx.commit('checkUser', userId)
        },
        //Выбор всех пользователей
        checkAllUsers(ctx) {
            ctx.commit('checkAllUsers')
        },
        //Удаление пользователя
        deleteUser(ctx, users) {
            const newUsersArray = users.filter((user) => {
                return user.isChecked !== true
            })
            ctx.commit('deleteUser', newUsersArray)
        }
    },
    mutations: {
        //Создание нового пользователя
        createNewUser(state, addNewUser) {
            state.users.push(addNewUser)
        },
        checkUser(state, userId,) {
            state.users[userId].isChecked = !state.users[userId].isChecked
        },
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
            {
                name: 'Максим',
                secondName: 'Ничаев',
                patronymic: 'Артурович',
                login: 'NechaevM',
                email: 'NechaevM@fizpribor.ru',
                role: 'Руководитель',
                isChecked: false,
            },
            
        ]
    },
    getters: {
        getUsers(state) {
            return state.users
        },
    }
}