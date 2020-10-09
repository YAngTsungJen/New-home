<template>
  <div>
    <Banner/>
    <Info/>
  </div>
</template>

<script>
import Banner from '@/components/frontend/Banner.vue'
import Info from '@/components/frontend/Info.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Banner,
    Info
  }
}
</script>
