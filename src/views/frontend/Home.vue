<template>
  <div>
    <Banner/>
    <Info/>
    <!-- <div>
      <SwiperModal data-aos="zoom-in" data-aos-duration="1000" />
    </div> -->
  </div>
</template>

<script>
// import SwiperModal from '../../components/frontend/SwiperModal'
import Banner from '../../components/frontend/Banner'
import Info from '../../components/frontend/Info'
export default {
  data () {
    return {
    }
  },
  components: {
    Banner,
    Info
    // SwiperModal
  }
}
</script>
