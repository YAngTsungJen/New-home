import Vue from 'vue'
import App from './App.vue'
import router from './router'
// bootstrap檔案
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
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'
Vue.component('loading', Loading)
Vue.use(VueAxios, axios)
// Vue.use(Loading) // Use default options
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
