<template>
  <div id="app">
    <app-header/>
    <app-navbar/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';
export default{
  name: 'App',
  components:{
    AppHeader,
    AppFooter,
    AppNavbar,
    
  }
}
</script>

<style>
*{
  background-color: #24252A;
}
</style>
