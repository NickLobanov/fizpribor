<template>
  <div id="app">
    <Header />
    <main class="main">
      <ModulePanel />
      <NavPanel />
      <UsersMenu />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ModulePanel from '@/components/ModulePanel.vue'
import NavPanel from '@/components/NavPanel.vue'
//import Dashboard from '@/components/Dashboard.vue'
import UsersMenu from '@/components/UsersMenu.vue'

export default {
  name: 'App',
  components: {
   Header,
   ModulePanel,
   NavPanel,
   //Dashboard,
   UsersMenu
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
