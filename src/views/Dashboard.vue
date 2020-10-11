<template>
  <div>
    <Navbar />
    <Sidebar />
    <router-view v-if="checkSuccess" />
  </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar.vue'
import Sidebar from '@/components/backend/Sidebar.vue'
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  components: {
    Navbar,
    Sidebar
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)iscookie\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      const api = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http
        .post(api, {
          api_token: this.token
        })
        .then((res) => {
          this.checkSuccess = true
          this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
          this.$bus.$emit('msg:push', '拿到資料囉', 'success')
        })
        .catch(() => {
          this.$router.push('/login')
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    }
  }
}
</script>
