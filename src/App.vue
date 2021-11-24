<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <div style="width: 80%; margin: 0 10%"><searchs /></div> -->
    <!-- <nav /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// import Nav from "@/view/Nav.vue";
// import MainBar from "@/components/tabbars/MainBar.vue";

export default {
  name: "App",
  components: {
    // Nav,
    // HelloWorld,
    // MainBar,
  },
};
</script>

<style>
/* @import "./assets/css/base.css"; */
</style>
