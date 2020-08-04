<template>
  <div class="v-main-wrapper">
    <vCatalog/>

    <vCart
        v-if="CART.length"
        :cart_data="CART" />
  </div>
</template>

<script>
import vCatalog from './v-catalog';
import vCart from './v-cart';
import {  mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  computed: {
    ...mapGetters(['CART'])
  },
  components: {
    vCatalog,
    vCart
  }
}
</script>

<style>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
