<template>
  <div class="topnav">
    <div id="head">
      

      <div class="nav">
        <div class="title">
          <img :src="src" alt="头像" />
          <p>丙火 - Hotbin</p>
       
          <ul>
            <li class="active" @click="link('/index')">首页</li>
            <li>练习</a></li>
            <li>其他</li>
          </ul>
         </div>
      </div>

      <searchs class="find" />
    </div>
  </div>
</template>

<script>
import searchs from "@/components/searchs/searchs";
export default {
  components: {
    searchs,
  },
  data() {
    return {
      src: require("@/assets/img/header_img/header1.png"),
      png1: "~@/assets/img/header_img/header1.png",
    };
  },
  methods: {
    link(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.topnav {
  min-width: 1400px;
}

.nav {
  height: 55px;
  line-height: 55px;
}

.nav ul {
  overflow: hidden;
  padding: 0;
  margin: 20px;
}

.nav li {
  padding: 0 30px 0 0;
}

.nav li {
  color: #b1b1b1;
  text-decoration: none;
}
.nav .active {
  color: white;
}
</style>