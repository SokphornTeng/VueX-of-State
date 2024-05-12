<template>
    <div class="row row-cols-4">
      <div class="col">
        <div class="card" style="width: 18rem; margin-left: 10px; margin-top: 20px;">
          <div class="card-header">
        <img src="../assets/user.jpg" width="250px" height="200px"/>
        </div>
       <div class="card-body">
        <h5 class="card-title">
            <router-link :to="{name: 'about', params: {id: pro.id}}" >Name: {{ pro.name }}</router-link>
          </h5>
          <p>Gender: <span style="font-weight: bold;">{{ pro.gender }}</span> </p>
          <p>User Status:  <span style="font-weight: bold;">{{ pro.status }}</span> </p>
          <p class="card-text">Email: <span style="font-weight: bold;">{{ pro.email }}</span></p>
        
        </div>
        <div class="px-4 pb-3">
          <button class="btn btn-success" @click.prevent="addProductToCard()" >Add to Cart</button>
        </div>
      </div>
      </div>
    </div>
  </template>   
  <script>
  export default {
    props: ['pro'],
    methods: {
      addProductToCard(){
        this.$store.dispatch('addProductToCard', {product: this.pro, qty: 1})
      }
    }
  }
  </script>
  
  <style>
  </style>