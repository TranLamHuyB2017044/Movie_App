<template>
  <div id="app">
      <div class="container">
        <app-header/>
        <app-navbar/>

        <router-view></router-view>
        <app-footer/>
      </div>
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
* :not(section):not(h1):not(p):not(a):not(i):not(span):not(h2):not(h5):not(svg):not(ul):not(li){
  background-color: #24252A;
}

p, h2, title, label{
  color: white;
}
html::-webkit-scrollbar{
  width: 0.5rem;
  background: transparent;
}
html::-webkit-scrollbar-thumb{
  background: #0088a9;
}
</style>
