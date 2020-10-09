<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
    <Top/>
  </div>
</template>

<script>
import Navbar from '@/components/frontend/Navbar.vue'
import Footer from '@/components/frontend/Footer.vue'
import Top from '@/components/frontend/Top.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer,
    Top
  }
}
</script>
