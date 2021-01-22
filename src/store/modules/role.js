export default {
    actions: {
        //Выбор роли
        checkRole(ctx, userId) {
            ctx.commit('checkRole', userId)
        },
        //Выбор всех ролей
        checkAllRole(ctx) {
            ctx.commit('checkAllRole')
        },
        //Удаление роли
        deleteRole(ctx, roles) {
            const newRoleArray = roles.filter((role) => {
                return role.isChecked !== true
            })
            ctx.commit('deleteRole', newRoleArray)
        }
    },
    mutations: {
        //Создание новой роли
        createNewRole(state, addNewRole) {
            state.role.push(addNewRole)
        },
         checkRole(state, roleId) {
            state.role[roleId].isChecked = !state.role[roleId].isChecked
        },
        checkAllRole(state) {
            state.role.forEach(role => {
                role.isChecked = !role.isChecked
            })
        }, 
        deleteRole(state, role) {
            state.role = role
        }
    },
    state: {
        role: [
            {
                name: 'Разработчик',
                keyName: 'developer',
                functions: ['Конфигуратор БД (редактирование)', 'Редактор блоков (редкатирование)'],
                isChecked: false,  
            },
            {
                name: 'Руководитель',
                keyName: 'CEO',
                functions: ['Дешборд проектов', 'Конфигуратор БД (чтение)', 'Редактор блоков (чтение)'],
                isChecked: false,  
            },
        ]
    },
    getters: {
        getRole(state) {
            return state.role
        },
    }
}