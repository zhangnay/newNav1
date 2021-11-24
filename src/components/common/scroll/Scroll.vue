<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";

BetterScroll.use(Pullup);
export default {
  props: {
    observeDOM: {
      type: Number,
      defualt: 0,
    },
    pullUpLoad: {
      type: Number,
      defualt: 0,
    },
  },
  mounted() {
    this.scroll = new BetterScroll(".wrapper", {
      observeDOM: this.observeDOM,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    this.scroll.on("pullingUp", () => {
      // await fetchData()
      this.$emit("pullingUp");
      this.scroll.finishPullUp();
      this.scroll.refresh();
    });
    this.scroll.on("scroll", (position) => {
      // await fetchData()

      this.$emit("listenScroll", position);
    });
  },
  methods: {
    refresh() {
      console.log("refresh");
      this.scroll.refresh();
    },
    finishPullUp() {
      console.log("finishPullUp");
      this.scroll.finishPullUp();
    },
    scrollTo(x, y, t) {
      this.scroll.scrollTo(x, y, t);
    },
  },
};
</script>

<style>
</style>