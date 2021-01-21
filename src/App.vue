<template>
  <div id="app">
    <Header />
    <main class="main">
      <ModulePanel />
      <NavPanel @menu-click="menuClick" :currentItem="currentTub"/>
      <component :is="currentTubComponent"></component>
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

export default {
  name: 'App',
  data() {
    return {
      currentTub: 'Dashboard',
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
  },
  methods: {
    menuClick(itemId) {
      this.currentTub = itemId[0].toUpperCase() + itemId.slice(1)
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
