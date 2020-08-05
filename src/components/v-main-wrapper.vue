<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>


export default {
  name: 'v-main-wrapper',
  computed: {},
  components: {}
}
</script>

<style>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
