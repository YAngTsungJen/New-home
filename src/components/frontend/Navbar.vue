<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #B67965;">
          <div class="container">
            <router-link class="navbar-brand" to="/">捷登開發
              <i class="fas fa-home"></i>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">首頁 <span class="sr-only">(current)</span></router-link>
                </li>
              </ul>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" to="/about" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    關於我們
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" style="cursor: pointer;" @click.prevent="goinfo(item)">公司簡介</a>
                    <a class="dropdown-item" style="cursor: pointer;" @click.prevent="goidea(item)">公司理念</a>
                    <a class="dropdown-item" style="cursor: pointer;" @click.prevent="gomark(item)">公司標誌</a>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/products">最新建案</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/reservation">預約專區</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
  methods: {
    goinfo () {
      this.$router.push('/about')
    },
    goidea () {
      this.$router.push('/goidea')
    },
    gomark () {
      this.$router.push('/gomark')
    }
  }
}
</script>

<style scoped>
.topic{
  font-size:20px;
  color:palegreen;
}
.topic>li:hover{
  color: blue;
}
</style>
