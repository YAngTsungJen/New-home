<template>
  <div>
    <div class="bg-dark py-2 fixed-bottom">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-gray mb-md-7 mb-4">
          <div>
            <router-link to="/" class="text-gray h4">好有錢房屋</router-link>
          </div>
          <ul class="d-flex list-unstyled mb-0 h4">
            <router-link to="/about" class="nav-link text-gray mr-2">
              關於我們
            </router-link>
            <li><a href="#" class="text-gray mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-gray mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-gray ml-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-gray">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
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
