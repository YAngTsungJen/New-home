<template>
  <div>
    <header class="home-top">
      <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner letter">
          <div class="carousel-item header-carousel-item bg-cover active animated" style="background-image: url(https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1796&q=80)">
            <div class="carousel-caption px-3 my-auto">
              <div class="row justify-content-md-center align-items-center h-100">
                <div class="col-md-6">
                  <KinesisContainer>
                    <KinesisElement :strength="15">
                      <h2 class="main-title">捷登房屋</h2>
                    </KinesisElement>
                    <KinesisElement :strength="30" class="banner-subtitle"><p class="mb-0">一畝地，一畝田，<br> 走過田耕 <br> 走過故鄉，<br>捷徑品茶道，登梗稻香聞，最是相思</p></KinesisElement>
                    <div class="d-flex justify-content-center mt-2">
                      <router-link to="/products"
                        class="
                          btn btn-more
                          px-2
                          d-flex
                          justify-content-center
                          align-items-center
                          banner-subtitle
                        "
                      >
                        最新建案
                      </router-link>
                    </div>
                  </KinesisContainer>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item header-carousel-item bg-cover animated" style="background-image: url(https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2834&q=80)">
            <div class="carousel-caption px-3 my-auto">
              <div class="row justify-content-md-center align-items-center h-100">
                <div class="col-md-6">
                  <KinesisContainer>
                    <KinesisElement :strength="15">
                      <h2 class="main-title">捷登房屋</h2>
                    </KinesisElement>
                    <KinesisElement :strength="30" class="banner-subtitle">
                      <h5>人性規劃，藝術建築</h5>
                      <p class="mb-0">滿足現代人『住』的需求，讓你有家的感覺</p>
                    </KinesisElement>
                    <div class="d-flex justify-content-center mt-2">
                      <router-link to="/products"
                        class="
                          btn btn-more
                          px-2
                          d-flex
                          justify-content-center
                          align-items-center
                          banner-subtitle
                        "
                      >
                        最新建案
                      </router-link>
                    </div>
                  </KinesisContainer>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item header-carousel-item bg-cover animated" style="background-image: url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)">
            <div class="carousel-caption px-3 my-auto">
              <div class="row justify-content-md-center align-items-center h-100">
                <div class="col-md-6">
                  <KinesisContainer>
                    <KinesisElement :strength="15">
                      <h2 class="main-title">捷登房屋</h2>
                    </KinesisElement>
                    <KinesisElement :strength="30" class="banner-subtitle">
                      <h5>想追求品牌的建築嗎？</h5>
                      <p class="mb-0">你有多久沒有這樣面子裡子，都仔細看的室界</p>
                    </KinesisElement>
                    <div class="d-flex justify-content-center mt-2">
                      <router-link to="/products"
                        class="
                          btn btn-more
                          px-2
                          d-flex
                          justify-content-center
                          align-items-center
                          banner-subtitle
                        "
                      >
                        最新建案
                      </router-link>
                    </div>
                  </KinesisContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-bottom-more down">
        <p @click.stop="scrollToTop(700)">
          <i class="fas fa-hand-point-down"></i>
        </p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop (num) {
      window.scrollTo({
        top: num,
        behavior: 'smooth'
      })
    }
  }
}
</script>
