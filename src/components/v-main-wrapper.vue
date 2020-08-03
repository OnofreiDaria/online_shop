<template>
  <div class="v-main-wrapper">
    <vCatalog/>
    <vCart/>
  </div>
</template>

<script>
import vCatalog from './v-catalog';
import vCart from './v-cart';

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart
  }
}
</script>

<style>
.v-main-wrapper {
  display: flex;
  margin: 0 auto;
}
</style>
