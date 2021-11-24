import Vue from 'vue'
import App from './App.vue'

import router from "./router/index.js"
import store from "./store/index.js"

 
//  import VueAwesomeSwiper from 'vue-awesome-swiper'
// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
