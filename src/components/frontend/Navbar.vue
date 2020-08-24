<template>
    <div class="bg-white sticky-top">
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white" style="height:20vh;">
          <router-link class="navbar-brand position-absolute" to="/"
            style="left: 50%; transform: translate(-50%, -50%); top: 40%;">
            好有錢房屋
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-white custom-header-md-open justify-content-lg-center mt-5" id="navbarNav">
            <ul class="navbar-nav mt-5" >
              <li class="nav-item active">
                <router-link class="nav-link " to="/">首頁<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item active">
                <div class="nav-link">|</div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">關於好有錢</router-link>
              </li>
              <li class="nav-item active">
                <div class="nav-link">|</div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/products">最新建案</router-link>
              </li>
              <li class="nav-item active">
                <div class="nav-link">|</div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">登入</router-link>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <a href="#"><i class="fas fa-heart mr-5"></i></a>
            <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
          </div>
        </nav>
      </div>
    </div>
</template>
