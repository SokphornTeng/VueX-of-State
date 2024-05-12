<template>
    <div class="container">
      <div style="display: flex; align-items: stretch; flex-wrap: wrap; padding-left: 2px;">
        <product-card v-for="pro in productInfo" :key="pro.id" :pro="pro" />
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import ProductCard from './ProductCard.vue'
export default {
    components: {ProductCard},
    data() {
        return {

        }
    },
    // computed: {
    //     productInfo(){
    //         return this.$store.state.productInfo
    //     }
    // },
    // mounted(){
    //     this.$store.dispatch('getProductInfo')
    // }

    computed: {
      ...mapState(['productInfo'])
    },
    mounted(){
        this.getProductInfo()
    },
    methods: {
        ...mapActions(['getProductInfo'])
    }

}
</script>