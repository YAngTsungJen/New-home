import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/scss/main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import './bus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Lightbox from 'vue-easy-lightbox'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.config.productionTip = false
Vue.component('loading', Loading)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(Lightbox)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
localize('zh_TW', TW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
