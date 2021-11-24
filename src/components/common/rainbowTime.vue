<template>
  <div class="iconNav">
    <!-- <p>常用网站</p> -->
    <div class="rainbowTime">
      <div class="timeBox">
        <div class="timeText" v-html="TextTime">{{}}</div>
      </div>
      <div class="timeBox flow">
        <div class="timeText" v-html="TextTime">{{}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TextTime: "00:00:00 下午",
    };
  },
  created() {
    this.getTime();
  },
  mounted() {},
  methods: {
    getTime() {
      setInterval(() => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        let tag = h < 12 ? "上午" : "下午";
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        this.TextTime = h + ":" + m + ":" + s + " <span>" + tag + "</span>";

        // console.log(TextTime)
      }, 1000);
    },
  },
};
</script>

<style>
@import "~@/assets/css/navs/rainbowTime.css";
</style>