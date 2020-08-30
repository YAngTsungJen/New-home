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
// vee-validate
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import TW from 'vee-validate/dist/locale/zh_TW.json'
Vue.config.productionTip = false

Vue.component('loading', Loading)
Vue.use(VueAxios, axios)
// Vue.use(Loading) // Use default options
Vue.use(VueAwesomeSwiper)
Vue.use(Lightbox)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
localize('zh_TW', TW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
// Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
