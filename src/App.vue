<template>
  <div id="app">
    <Header />
    <main class="main">
      <ModulePanel />
      <NavPanel />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ModulePanel from '@/components/ModulePanel.vue'
import NavPanel from '@/components/NavPanel.vue'

export default {
  name: 'App',
  components: {
   Header,
   ModulePanel,
   NavPanel
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
  }
</style>
