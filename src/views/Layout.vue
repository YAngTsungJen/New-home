<template>
    <div>
        <Navbar />
        <router-view></router-view>
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Navbar from '../components/frontend/Navbar'
// import Footer from '../components/frontend/Footer'
export default {
  data () {
    return {
    }
  },
  components: {
    Navbar
    // Footer
  }
}
</script>
