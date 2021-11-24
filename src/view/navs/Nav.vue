<template>
  <div class="nav">
    <!-- 1.顶部导航 -->
    <TopNav />

    <!-- 2.主要内容 -->
    <Main />
  </div>
</template>

<script>
import TopNav from "@/view/navs/TopNav.vue";
import Main from "@/view/navs/Main.vue";

export default {
  name: "App",
  components: {
    TopNav,
    Main,
  },
};
</script>

<style scope>
@import "~@/assets/css/navs/base.css";
@import "~@/assets/css/navs/导航.css";
.nav {
}
</style>
