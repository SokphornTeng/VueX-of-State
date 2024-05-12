<template>
  <div class="container">
    <div class="row mt-5" v-if="productById">
      <div class="col-4" >
        <img src="../assets/user.jpg" width="350px" height="300px"/>

      </div>
      <div class="col-8">
        <h3>ID: {{ productById.id }}</h3>
        <h3>Name: {{ productById.name }} </h3>
        <h3>Gender <span style="font-weight: bold;">{{ productById.gender }}</span></h3>
        <div class="contain">
          <input type="text" placeholder="Quantity" v-model="qty"  class=" text-center col-1 mr-2 p-1"  />
        <button class="btn btn-primary" style="margin-left: 15px;" @click.prevent="addProductToCard()">Add to Cart</button>
        </div>
        <p class="card-text">Email: <span style="font-weight: bold;">{{ productById.email }}</span></p>
        <h3 class="mt-4">Status: {{ productById.status }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  props: ["id"],
  data(){
    return {
      qty: 1
    }
  },
//  computed: {
//   productById(){
//       return this.$store.state.productById
//   }
//  },
//  mounted(){
//     this.$store.dispatch('getProductById', this.id)
//  }

computed: {
   ...mapState(['productById'])
 },
 mounted(){
  this.getProductById(this.id)
 },
 methods: {
   ...mapActions(['getProductById']),
   addProductToCard(){
        this.$store.dispatch('addProductToCard', {product: this.productById, qty: this.qty})
      }
 }
}
</script>