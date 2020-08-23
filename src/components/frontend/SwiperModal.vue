<template>
  <div>
    <Swiper :options="swiperOption">
      <Swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
        slide {{ item }}
      </Swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      slide: [1, 2, 3, 4, 5, 6],
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
  height: 4rem;
  padding: 7rem;
  border-bottom: 1px solid red;
  background: green;
}
</style>
