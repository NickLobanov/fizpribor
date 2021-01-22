export default {
    actions: {
        //Выбор организации
        checkOrganization(ctx, userId) {
            ctx.commit('checkOrganization', userId)
        },
        //Выбор всех организаций
        checkAllOrganization(ctx) {
            ctx.commit('checkAllOrganization')
        },
        //Удаление организации
        deleteOrganization(ctx, organizations) {
            const newOrganizationArray = organizations.filter((organization) => {
                return organization.isChecked !== true
            })
            ctx.commit('deleteOrganization', newOrganizationArray)
        },
    },
    mutations: {
        //Создание новой организации
        createNewOrganization(state, addNewOrganization) {
            state.organizations.push(addNewOrganization)
        },
        checkOrganization(state, organizationId) {
            state.organizations[organizationId].isChecked = !state.organizations[organizationId].isChecked
        },
        checkAllOrganization(state) {
            state.organizations.forEach(organization => {
                organization.isChecked = !organization.isChecked
            })
        },
        deleteOrganization(state, organization) {
            state.organizations = organization
        },
    },
    state: {
        organizations: [
            {
                name: 'ООО «Физприбор»',
                project: 'АЭС Аккую, АЭС Нововоронежская',
                responible: 'Нечаев М.А.',
                isChecked: false,
            },
            {
                name: 'АО "Атомтехэнерго"',
                project: 'АЭС Нововоронежская, АЭС Ленинградская, АЭС Калинская',
                responible: 'Руководитель',
                isChecked: false,
            }
        ],
    },
    getters: {
        getOrganizations(state) {
            return state.organizations
        },
    }
}