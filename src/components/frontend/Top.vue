<template>
  <button type="button" class="top top__scroll btn btn-secondary rounded-circle btn-lg d-flex p-2 text-white" @click.prevent="scrollToTop(0)" v-if="isShowOfTop">
    <span class="top">
      <i class="fas fa-arrow-up"></i>
    </span>
  </button>
</template>
<script>

export default {
  data () {
    return {
      isShowOfTop: false
    }
  },
  methods: {
    scrollToTop (scrollNumber) {
      window.scrollTo({
        top: scrollNumber,
        behavior: 'smooth'
      })
    },
    showTop () {
      const vm = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 100) {
        vm.isShowOfTop = true
      } else {
        vm.isShowOfTop = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showTop)
  }
}
</script>

<style scoped>
.top{
  width: 50px;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 90%;
  right: 5%;
}
</style>
