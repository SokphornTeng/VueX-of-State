<template>
  <div id="app">
    <!-- <h3>Completed: {{ $store.getters.completedTodos }}</h3> -->
     <h3>Completed: {{ completedTodos }}</h3> 
    <h3>Pending: {{ pendingTodos }}</h3>
    <!-- <h3>Completed: {{ computedCompletedTodos }}</h3> 
    <h3>Pending: {{ computedPendingTodos }}</h3> -->
    <todo-list />
    <todo-form />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos'
    })
    // computedCompletedTodos(){
    // return  this.$store.getters.completedTodos
    // },
    // computedPendingTodos(){
    // return  this.$store.getters.pendingTodos
    // },
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
  margin-top: 60px;
}
</style>
