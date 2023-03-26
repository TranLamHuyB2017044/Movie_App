<template>
  <div id="app">
    <div class="container">
      <app-header />
      <app-navbar />
      <RouterView></RouterView>
      <app-footer />
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "./stores/user";
import AppHeader from "./components/AppHeader.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppFooter,
    AppNavbar,
    AppHeader,
  },
  setup() {
    const UsersStore = useUsersStore();
    return { UsersStore };
  },
  mounted() {
    const userID = localStorage.getItem("id");
    this.UsersStore.getById(userID);
  },
};
</script>

<style>
*
  :not(section):not(h1):not(p):not(a):not(i):not(span):not(h2):not(h5):not(
    svg
  ):not(ul):not(li):not(button) {
  background-color: #24252a;
}

p,
h2,
title,
label {
  color: white;
}

html::-webkit-scrollbar {
  width: 0.5rem;
  background: transparent;
}

html::-webkit-scrollbar-thumb {
  background: #0088a9;
}
</style>
