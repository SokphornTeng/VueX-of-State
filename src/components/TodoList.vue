<template>
    <div class="container">
        <!-- <TodoTask v-for="(todo, index) in $store.state.todos" :key="index" /> -->
            <TodoTask v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import TodoTask from './TodoTask.vue'
export default {
    components: {
        TodoTask
    },
    computed: {
        // todos(){
        //     return this.$store.state.todos;
        // }
        ...mapState({
            todos: 'todos'
        })
    }
}
</script>