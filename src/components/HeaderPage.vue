<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
        </div>
      
    
        <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         {{ countItemInCart }} Cart
        </button>
        <div>
            <card-list />
          </div>
      </div>




      </div>
    </nav>

</template>

<script>
import { mapGetters } from 'vuex';
import CardList from './CardList.vue'
export default {
  name: 'HeaderPage',
  components: {CardList},
  computed: {
    // countItemInCart(){
    //   return this.$store.getters.countItemInCart
    // }
    ...mapGetters({
      countItemInCart: 'countItemInCart'
    })
  }
}
</script>
<style scoped>

</style>
