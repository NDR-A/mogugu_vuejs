<template>
  <div id="app">
    <keep-alive exclude="GoodsDetail">
    <!-- <keep-alive> -->
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>

import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
  MainTabBar,
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: auto;
}
</style>
