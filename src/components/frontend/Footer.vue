<template>
  <div class="footer">
    <div class="bg-dark py-2 mt-4 mr-auto">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-md-center align-items-start text-white">
          <div class="mb-md-0 mb-1 pr-3">
            <p class="mb-0"> 捷登建設股份有限公司 Copyright By：洋蔥</p>
          </div>
          <p class="mb-0 biger ">
            <i class="fab fa-line pr-3 "></i>
            <i class="fab fa-facebook-square pr-3"></i>
            <i class="fas fa-phone-square"></i>
          </p>
          <div>
            <router-link class="nav-link text-light" to="/login">登入</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.biger{
  font-size: 200%;
}
.footer{
  margin-top: 200px;
}
</style>
