<template>
  <div class="home"></div>
</template>

<script>
import navs from "@/components/common/navbar/navs.vue";
import swiperVue from "@/components/common/swiperVue";
import Scroll from "@/components/common/scroll/Scroll";
import tabControl from "@/components/common/tabcontrol/TabControl";

import recommend from "./recommend";
import doubleGoods from "@/components/content/goods/doubleGoods";
import backTop from "@/components/content/backtop/backTop";

import { getHomeM, getHomeGoods } from "@/network/home.js";

import { debounce } from "@/components/common/tools/tools.js";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      goodsKey: ["新品", "推荐", "热卖"],
      goodsVal: ["pop", "new", "sell"],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
      defGoodsKey: "pop",
      bs: {},
      btpShow: 0,
      tabcontrolHeight: 0,
    };
  },
  computed: {
    goods_list() {
      console.log("list", this.goods[this.defGoodsKey].list);
      return this.goods[this.defGoodsKey].list;
    },
  },
  mounted() {
    // console.log("sdasd");
    // console.log("refs", this.$refs.scroll.refresh);

    const debounceBack = debounce(this.$refs.scroll.refresh(), 50);
    this.$bus.$on("listenGoods", () => {
      console.log("----");
      debounceBack();
    });

    // this.$refs.tabcontrol.$el;
    console.log(this.$refs.tabcontrol.$el);
  },
  methods: {
    btpClick() {
      // console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    add() {
      this.$store.commit("increment");
    },
    listenScroll(postion) {
      // console.log(postion.y);
      if (-postion.y > 700) {
        this.btpShow = 1;
      } else {
        this.btpShow = 0;
      }
    },
    getHomeM() {
      getHomeM().then((res) => {
        this.data = res.data.data;
        console.log(this.data);
        this.banner = this.data.banner.list;
        this.recommend = this.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      console.log(this.goods[type].page, type);
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
        // console.log(this.goods);
        // this.goods[type].list = [{}];
      });
    },
    tabClick(index) {
      console.log(index);
      this.defGoodsKey = this.goodsVal[index];
    },
    pullingUp() {
      this.getHomeGoods(this.defGoodsKey);
    },
  },
  created() {
    this.getHomeM();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // getHomeM().then((res) => {
    //   console.log(res.data.data);
    // });
  },
  components: {
    navs,
    swiperVue,
    Scroll,
    tabControl,
    recommend,
    doubleGoods,
    backTop,
  },
};
</script>

<style>
.home {
  font-weight: bold;
}
.wrapper {
  height: 100vh;
  overflow: hidden;
}
.content {
  padding: 44px 0 49px 0;
}
</style>