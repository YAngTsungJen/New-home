import Vue from 'vue'
import App from './App.vue'
import router from './router'
// bootstrap檔案
import 'bootstrap'
import './assets/scss/main.scss'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue-loading-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import './bus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
// import lightbox
import Lightbox from 'vue-easy-lightbox'
Vue.component('loading', Loading)
Vue.use(VueAxios, axios)
// Vue.use(Loading) // Use default options
Vue.use(VueAwesomeSwiper)
Vue.use(Lightbox)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
