<template>
    <div style="width: 300px; display: flex; justify-content: space-between;">
  <ul class="dropdown-menu">
    <li class="dropdown-item" >
      <div v-for="item in cart" :key="item.product.id" >
        <h3>{{ item.product.name }}</h3>
        <span>Status: {{ item.product.status }} </span> /
        <span>Quantity: {{ item.qty }}</span> 
        <br>
        <button @click="removeItem(item.product)">remove</button>
        <hr />
      </div>
  
      <div style="display: flex; justify-content: space-between;">
        <span>Total: {{ totalItem }} </span>
        <a style="color: cadetblue; cursor: pointer;" @click.prevent="clearItem()" >Clear Item</a>
      </div>

    </li>
  </ul>
</div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
 export default {
    computed: {
      ...mapState(['cart']),
      ...mapGetters(['totalItem'])
        // cart(){
        //    return this.$store.state.cart
        // },
        // totalItem(){
        //   return this.$store.getters.totalItem
        // }
    },
    mounted(){
        this.$store.dispatch('addProductToCard')
    },
    methods: {
      ...mapActions(['removeItem', 'clearItem'])
      // removeItem(info){
      //   this.$store.dispatch('removeItem', info)
      // },
      // clearItem(){
      //   return this.$store.dispatch('clearItem')
      // }
    }
 }
</script>