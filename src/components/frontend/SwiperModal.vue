<template>
  <div>
    <Swiper :options="swiperOption">
      <Swiper-slide class="swiper-slide" v-for="(item,index) in imgs" :key="index">
        <div class="img-fluid ">
          <img :src="item.img[0]" width="1419" height="800" alt="">
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
        img: ['https://cdn.stocksnap.io/img-thumbs/960w/modern-interior_KWRZNZ6DC6.jpg']
      }, {
        img: ['https://cdn.stocksnap.io/img-thumbs/960w/home-office_YODJNTOBN9.jpg']
      }, {
        img: ['https://cdn.stocksnap.io/img-thumbs/960w/city-buildings_WZXIAIPAT9.jpg']
      }, {
        img: ['https://cdn.stocksnap.io/img-thumbs/280h/architecture-building_0GZ83DHBCE.jpg']
      }, {
        img: ['https://cdn.stocksnap.io/img-thumbs/280h/architecture-building_D5YP66NZNI.jpg']
      }, {
        img: ['https://cdn.stocksnap.io/img-thumbs/280h/city-stairs_XPJ9JQHLN5.jpg']
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
  height: 700px;
}
</style>
