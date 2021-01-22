<template>
  <div id="app">
    <Header @edit-click="editClick"/>
    <main class="main">
      <ModulePanel />
      <NavPanel @menu-click="menuClick" :currentItem="currentTub"/>
      <component :is="currentTubComponent" @add-button-click="buttonClick"></component>
      <PopupUsers :isOpen="popupUsersIsOpen" @close-popup="closeAllPopup" :onClose="closeAllPopup"/>
      <PopupOrganization :isOpen="popupOrganizationIsOpen" @close-popup="closeAllPopup" :onClose="closeAllPopup"/>
      <PopupGroup :isOpen="popupGroupIsOpen" @close-popup="closeAllPopup" :onClose="closeAllPopup"/>
      <PopupRole :isOpen="popupRoleIsOpen" @close-popup="closeAllPopup" :onClose="closeAllPopup"/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ModulePanel from '@/components/ModulePanel.vue'
import NavPanel from '@/components/NavPanel.vue'
import Dashboard from '@/components/Dashboard.vue'
import Users from '@/components/UsersMenu.vue'
import Organization from '@/components/OrganizationMenu.vue'
import Group from '@/components/GroupMenu.vue'
import Role from '@/components/RoleMenu.vue'
import PopupUsers from '@/components/PopupUsers.vue'
import PopupOrganization from '@/components/PopupOrganization.vue'
import PopupGroup from '@/components/PopupGroup.vue'
import PopupRole from '@/components/PopupRole.vue'

export default {
  name: 'App',
  data() {
    return {
      currentTub: 'Dashboard',
      popupUsersIsOpen: false,
      popupOrganizationIsOpen: false,
      popupGroupIsOpen: false,
      popupRoleIsOpen: false,

    }
  },
  components: {
   Header,
   ModulePanel,
   NavPanel,
   Dashboard,
   Users,
   Organization,
   Group,
   Role,
   PopupUsers,
   PopupOrganization,
   PopupGroup,
   PopupRole
  },
  methods: {
    menuClick(itemId) {
      this.currentTub = itemId[0].toUpperCase() + itemId.slice(1)
    },
    // Открытие попапов
    buttonClick(component) {
      console.log(component)
      if (component === 'Users') {
        this.popupUsersIsOpen = true
      }
      if (component === 'Organization') {
        this.popupOrganizationIsOpen = true
      }
      if (component === 'Group') {
        this.popupGroupIsOpen = true
      }
      if (component === 'Role') {
        this.popupRoleIsOpen = true
      }
    },
    //Закрытие попапов
    closeAllPopup() {
      this.popupUsersIsOpen = false
      this.popupOrganizationIsOpen = false
      this.popupGroupIsOpen = false
      this.popupRoleIsOpen = false
    },
    editClick() {
      this.currentTub = 'Dashboard'
    }
  },
  computed: {
    currentTubComponent() {
      return this.currentTub
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main {
    display: flex;
    background-color: #F2F2F2;
  }

</style>
