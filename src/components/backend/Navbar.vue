<template>
    <div class="bg-tan sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <router-link class="navbar-brand mr-5" to="/admin/products"> House </router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link to="/admin/products" class="nav-link text-white mr-3">後台產品列表</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link text-light mr-2">
                      回到前台
                    </router-link>
                  </li>
                  <li class="nav-item">
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
