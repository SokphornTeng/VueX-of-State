<template>
    <div class="container" style="width: 250px; margin: 5px auto;">
       <div style="display: flex; justify-content: space-between;">
        <!-- <h3 :class="{completed: todo.completed}" @click="toggleTodoStatus">{{ todo.title }}</h3> -->
        <h3 :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{ todo.title }}</h3>
        <button @click="deleteItem(todo)">Delete</button>
       </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ["todo"],
    methods: {
        ...mapActions({
            deleteItem: 'deleteItem',
            toggleTodoStatus: 'toggleTodoStatus'
        })
        // deleteItem(){
        //     this.$store.dispatch('deleteItem', this.todo)
        // },
        // toggleTodoStatus(){
        //     this.$store.dispatch('toggleTodoStatus', this.todo)
        // }
    }
}
</script>
<style scoped>
.completed {
    text-decoration: line-through;
}
</style>