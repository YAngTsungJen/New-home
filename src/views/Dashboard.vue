<template>
  <div>
    <Navbar />
    <Sidebar />
    <router-view :token="token" v-if="checkSuccess" />
  </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
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
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http
        .post(api, {
          api_token: this.token
        })
        .then((res) => {
          this.checkSuccess = true
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
