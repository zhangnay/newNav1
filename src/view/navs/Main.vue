<template>
  <div id="main">
      
      <!-- 时钟 -->
      <rainbowTime />

      <!-- 网站图标 -->
      <div class="dhs">
        <div class="dh" v-for="(item, i) in listA" @click="jump(item[2], item[3])"   :key="i">
          <div class="img">
            <img class="d_class" :src="'/img/导航/'+item[1]" />
            <p> {{ item[0] }} </p>
          </div>
        </div>
      </div>

      <!-- 翻页 -->
      <div class="after">
        <div class="pages-left glyphicon glyphicon-arrow-left btn btn-default" :class="leftShow" @click="up()"></div>
        <div class="pages-right glyphicon glyphicon-arrow-right btn btn-default" :class="rightShow"     @click="down()"></div>
      </div> 

    </div>
  </div>
</template>

<script>
import list from "./list.js";
import rainbowTime from "@/components/common/rainbowTime";
export default {
  components: {
    rainbowTime,
  },
  data() {
    return {
      lists: list,
      pages: 1,
      maxpage: list.length - 1,
      //每页加载数量
      num: 24,
      showB: 0,
      showE: 24,
      left: 0,
      right: 2,
    };
  },
  computed: {
    listA: function () {
      let listA = [];
      this.lists.forEach((v, k) => {
        if (k >= this.showB + 1 && k <= this.showE) {
          listA.push(v);
        }
      });
      //   console.log(listA);
      //   console.log(this.showB, this.showE);
      return listA;
    },
    leftShow: function () {
      return {
        hide: this.left == 0,
        active: this.left == 1,
        actived: this.left == 2,
      };
    },
    rightShow: function () {
      return {
        hide: this.right == 0,
        active: this.right == 1,
        actived: this.right == 2,
      };
    },
  },
  methods: {
    jump(url, type) {
      console.log(url);
      if (type == 1) {
        window.open("http://" + url);
      } else {
        window.open("/page/" + url);
        // this.$router.
      }
    },
    //上一页
    up() {
      this.pages--;
      this.showB = this.pages * this.num - this.num;
      this.showE = this.pages * this.num;
      //   $(".pages-left").css("width", "150px");
      //   $(".pages-right").css("width", "70px");
      this.left = 2;
      this.right = 1;
      this.jugde();
    },
    //下一页
    down() {
      this.pages++;
      this.showB = this.pages * this.num - this.num;
      this.showE = this.pages * this.num;
      //   $(".pages-right").css("width", "150px");
      //   $(".pages-left").css("width", "70px");
      this.left = 1;
      this.right = 2;
      this.jugde();
    },
    jugde() {
      let pages = this.pages;
      console.log(pages);
      if (pages == 1) {
        // $(".pages-left").addClass("hide");
        this.left = 0;
        // $(".pages-right").css("width", "150px");
        this.right = 2;
      }
      if (pages > 1) {
        // $(".pages-left").removeClass("hide");
        // if (this.left == 0) {
        //   this.left = 1;
        // } else {
        //   this.left = 2;
        // }
      }
      if (pages < Math.ceil(this.maxpage / this.num)) {
        // $(".pages-right").removeClass("hide");
        // if (this.right == 0) {
        //   this.right = 1;
        // } else {
        //   this.right = 2;
        // }
      }
      if (pages == Math.ceil(this.maxpage / this.num)) {
        // $(".pages-right").addClass("hide");
        // $(".pages-left").css("width", "150px");
        this.left = 2;
        this.right = 0;
      }

      console.log("left", this.left, "right", this.right);
    },
  },
};
</script>

<style scoped>
.active {
  width: 75px;
}
.actived {
  width: 150px;
}
.after div {
  margin: 0 5px;
}
</style>