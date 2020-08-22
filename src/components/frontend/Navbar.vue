<template>
    <div class="bg-white sticky-top">
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
          <a class="navbar-brand position-absolute" href="./index.html"
            style="left: 50%; transform: translate(-50%, -50%); top: 50%;">
            Navbar
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link pl-0" to="/">好有錢房屋</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/products">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">關於我們</router-link>
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
