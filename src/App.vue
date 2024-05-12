<template>
  <div id="app">
    <header-page />
    <router-view/>
  </div>
</template>
<script>
import HeaderPage from './components/HeaderPage.vue'
export default{
  components: {HeaderPage}
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
</style>
