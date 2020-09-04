<template>
    <div>
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white mb-3 " style="height:20vh;">
          <router-link class="navbar-brand position-absolute" to="/"
            style="left: 50%; transform: translate(-50%, -50%); top: 40%; font-family: 'Anton', sans-serif;font-size:40px;
            font-family: 'Russo One', sans-serif;">
            捷登房屋
            <i class="fas fa-home"></i>
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse custom-header-md-open justify-content-lg-center mt-5" id="navbarNav">
            <ul class="navbar-nav mt-5" >
              <li class="nav-item active ">
                <router-link class="nav-link text-success  " to="/">首頁<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-success" to="/about">關於我們</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-success" to="/products">最新建案</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-success" to="/reservation">預約專區</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<style scoped>
.topic{
  font-size:20px;
  color:palegreen;
}
.topic>li:hover{
  color: blue;
}
</style>
