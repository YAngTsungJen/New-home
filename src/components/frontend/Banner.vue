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
          <div class="carousel-item header-carousel-item bg-cover active" style="background-image: url(https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)">
            <div class="carousel-caption px-3 my-auto">
              <div class="row justify-content-md-center align-items-center h-100">
                <div class="col-md-6">
                  <h2>捷登開發</h2>
                  <h5>這是哪裡，我想住進去</h5>
                  <p>這是一個城市，我離不開，我想改變目前的生活品質</p>
                  <router-link  to="/products" class="btn btn-more">立即預約</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item header-carousel-item bg-cover" style="background-image: url(https://images.unsplash.com/photo-1560185013-ead8277ef8ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80_)">
            <div class="carousel-caption px-3 my-auto">
              <div class="row justify-content-md-center align-items-center h-100">
                <div class="col-md-6">
                  <h2>捷登開發</h2>
                  <h5>人性規劃，藝術建築</h5>
                  <p>滿足現代人『住』的需求，讓你有家的感覺</p>
                  <router-link  to="/products" class="btn btn-more">立即預約</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item header-carousel-item bg-cover" style="background-image: url(https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80)">
            <div class="carousel-caption px-3 my-auto">
              <div class="row justify-content-md-center align-items-center h-100">
                <div class="col-md-6">
                  <h2>捷登開發</h2>
                  <h5>想追求品牌的建築嗎？</h5>
                  <p>你有多久沒有這樣面子裡子，都仔細看的室界</p>
                  <router-link  to="/products" class="btn btn-more">立即預約</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
  </div>
</template>

<style  scoped>
.header-carousel-item{
  height: 100vh;
}
.bg-cover{
  background-size: cover;
  background-position: center center;
}
.carousel-caption{
  background-color: rgba(0, 0, 0, 0.5);
  top: 50%;
  transform: translateY(-50%);
}
.letter{
  font-family: "Everett-Light-web", sans-serif;
}
.carousel-caption{
  bottom:auto;
}
</style>
