<template>
  <div class="wrap">
    <Toast />
    <router-view/>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
export default {
  components: {
    Toast
  }
}
</script>

<style scoped>
.wrap{
  min-height: calc(100vh - 112px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
