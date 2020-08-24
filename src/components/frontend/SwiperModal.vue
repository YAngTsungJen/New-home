<template>
  <div>
    <Swiper :options="swiperOption">
      <Swiper-slide class="swiper-slide" v-for="(item,index) in imgs" :key="index">
        <div class="img-fluid ">
          <img :src="item.img[0]" width="1400" height="650" alt="">
        </div>
      </Swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      imgs: [{
        img: ['https://images.unsplash.com/photo-1585154153069-d71926cf8fba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80']
      }, {
        img: ['https://images.unsplash.com/photo-1558016886-68507e3f3d5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1069&q=80']
      }, {
        img: ['https://images.unsplash.com/photo-1580202313707-46a966af5c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
      }, {
        img: ['https://images.unsplash.com/photo-1529034550849-aca4e412cdd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
      }, {
        img: ['https://images.unsplash.com/photo-1510420845-c54dae3fe226?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
      }, {
        img: ['https://images.unsplash.com/photo-1479968071622-d0a39f8551be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
      }],
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-slide{
  height: 650px;
}
</style>
