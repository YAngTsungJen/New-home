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
