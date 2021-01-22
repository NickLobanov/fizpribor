export default {
    actions: {
        //Выбор группы
        checkGroup(ctx, userId) {
            ctx.commit('checkGroup', userId)
        },
        //Выбор всех групп
        checkAllGroup(ctx) {
            ctx.commit('checkAllGroup')
        },
        //Удаление группы
        deleteGroup(ctx, groups) {
            const newGroupArray = groups.filter((group) => {
                return group.isChecked !== true
            })
            ctx.commit('deleteGroup', newGroupArray)
        }
    },
    mutations: {
        //Создание новой группы
        createNewGroup(state, addNewGroup) {
            state.groups.push(addNewGroup)
        },
        checkGroup(state, groupId) {
            state.groups[groupId].isChecked = !state.groups[groupId].isChecked
        },
        checkAllGroup(state) {
            state.groups.forEach(group => {
                group.isChecked = !group.isChecked
            })
        },
        deleteGroup(state, group) {
            state.groups = group
        }
    },
    state: {
        groups: [
            {
                name: 'ООО «Физприбор»',
                project: 'АЭС Аккую, АЭС Нововоронежская',
                competitors: 5,
                isChecked: false,
            },
            {
                name: 'АО "Атомтехэнерго"',
                project: 'АЭС Нововоронежская, АЭС Ленинградская, АЭС Калинская',
                competitors: 10,
                isChecked: false,
            }
        ]
    },
    getters: {
        getGroups(state) {
            return state.groups
        }
    }
}