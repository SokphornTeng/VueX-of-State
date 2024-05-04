<template>
    <div class="container">
        <input type="text" @keyup.enter="addNewTodoItem()" v-model="inputItem" />
        <button @click="addNewTodoItem()">Submit</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            inputItem: ""
        }
    },
    methods: {
        addNewTodoItem(){
            this.$store.dispatch("addNewTodo", this.inputItem)
            this.inputItem = ""
        }
    }
}
</script>