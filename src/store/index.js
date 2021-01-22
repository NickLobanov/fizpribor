import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import organization from './modules/organization'
import group from './modules/group'
import role from './modules/role'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
        organization,
        group,
        role
    }
})