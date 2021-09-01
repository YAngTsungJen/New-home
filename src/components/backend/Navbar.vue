<template>
  <div class="sticky-top bg-more">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-more py-3 ">
        <router-link class="navbar-brand" to="/admin/products"> 後台管理 </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link text-white mr-3">
                <i class="fas fa-box-open"></i>
                後台產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/order" class="nav-link text-white mr-3">
                <i class="far fa-list-alt"></i>
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link text-white mr-3">
                <i class="fas fa-ticket-alt"></i>
                優惠券
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/storages" class="nav-link text-white mr-3">
                <i class="far fa-images"></i>
                圖片儲存列表
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-light mr-2">
                回到前台
              </router-link>
            </li>
            <li class="nav-item mr-auto">
              <a href="#"
                @click.prevent="signout"
                class="nav-link btn btn-sm btn-light text-dark px-3">
                登出
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    signout () {
      document.cookie = '`token =; expires =; path=/`'
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar{
  padding: 0px;
}
</style>
