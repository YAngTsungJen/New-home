<template>
    <div>
        <Navbar />
        <router-view></router-view>
        <Footer />
        <Top/>
    </div>
</template>

<script>
import Navbar from '@/components/frontend/Navbar'
import Footer from '@/components/frontend/Footer'
import Top from '@/components/frontend/Top'
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
