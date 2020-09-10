<template>
    <div>
        <section class="bg-light icon">
            <!-- <div class="container"> -->
              <div class="card-group ">
                <div class="card py-5 border border-cyan shadow rounded card-hov">
                  <div class="card-body">
                    <div class="mb-2">
                        <i class="far fa-building fa-3x"></i>
                    </div>
                    <h3>建材磁磚</h3>
                    <p>全新工法</p>
                  </div>
                </div>
                <div class="card py-5 border border-cyan shadow rounded card-hov">
                  <div class="card-body">
                    <div class="mb-2">
                        <i class="fas fa-map-marker-alt fa-3x"></i>
                    </div>
                    <h3>區域選擇</h3>
                    <p>全新工法</p>
                  </div>
                </div>
                <div class="card py-5 border border-cyan shadow rounded card-hov">
                  <div class="card-body">
                    <div class="mb-2">
                        <i class="fas fa-taxi fa-3x"></i>
                    </div>
                    <h3>售後服務</h3>
                    <p>全新工法</p>
                  </div>
                </div>
              </div>
                <!-- <div class="row">
                    <div class="col-md-4">
                        <div class="mb-2">
                            <i class="far fa-building fa-3x"></i>
                        </div>
                        <h3>建材磁磚</h3>
                        <p>全新工法</p>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-2">
                            <i class="fas fa-map-marker-alt fa-3x"></i>
                        </div>
                        <h3>區域選擇</h3>
                        <p>全新工法</p>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-2">
                            <i class="fas fa-taxi fa-3x"></i>
                        </div>
                        <h3>售後服務</h3>
                        <p>全新工法</p>
                    </div>
                </div> -->
            <!-- </div> -->
        </section>
        <section class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <img src="https://upload.cc/i1/2020/09/08/VtGKJF.jpg" class="img-fluid rounded" alt="">
            </div>
            <div class="col-lg-4 m-auto text-left">
              <dl class="row">
                <dt class="col-lg-6 mt-4">
                  <h3>溪南稻香</h3>
                </dt>
                <dd class="col-lg-6"></dd>
                <dt class="col-lg-3 mt-2">語錄</dt>
                <dd class="col-lg-9 mt-2">
                  <p>一畝地，一畝田，走過田耕走過故鄉，捷徑品茶道，登梗稻香聞，最是相思</p>
                </dd>
              </dl>
              <router-link href="#" to="/products" class="btn btn-outline-more">查看更多</router-link>
            </div>
          </div>
          <div class="row flex-row-reverse mt-4">
            <div class="col-lg-6">
              <img src="https://upload.cc/i1/2020/09/08/xVbCgY.jpg" class="img-fluid rounded" alt="">
            </div>
            <div class="col-lg-4 m-auto">
              <dl class="row">
                <dt class="col-lg-6 mt-4 text-left">
                  <h3>瑞城傳家</h3>
                </dt>
                <dd class="col-lg-6"></dd>
                <dt class="col-lg-3 mt-2">語錄</dt>
                <dd class="col-lg-9 mt-2">
                  <p>傳承世代根基，尋根的源頭</p>
                </dd>
              </dl>
              <router-link href="#" to="/products" class="btn btn-outline-more">查看更多</router-link>
            </div>
          </div>
        </section>
        <section class="py-3 mt-5">
          <div class="container-fluid">
            <div class="row flex-row-reverse no-gutters" style="height:50vh;">
              <div class="col-sm-6 bg-cover" style="background-image:url(https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80); position:relative;">
                <div class="row inner">
                  <div class="col-sm-8 mt-2 p-4" style="writing-mode: vertical-rl">
                    <h3 >愛家的人有福了</h3>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 text-white" style="background-color: #D2A273;">
                <div class="row d-flex justify-content-sm-center mt-5">
                  <div class="col-sm-12" style="margin-top:10%">
                    <h2 class="p-5">找到屬於我們的家吧</h2>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn btn-more">查看更多</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       products: []
//     }
//   },
//   methods: {
//     getProduct (id) {
//       this.$router.push(`/product/${id}`)
//     }
//   },
//   created () {
//     this.$http.get()
//   }
// }
</script>

<style scoped>
.bg-cover{
  background-size: cover;
  background-position: center center;
}
@media (min-width: 768px) {
  .text-md-dark{
  color: #333;
  }
}
@media (max-width: 767.98px) {
  .int{
    color: #fff9f7;
    height: 250px;
    background: rgba(76,74,70,.57);
  }
}
.icon{
  color: #B67965;
}
.inner{
  color: #fff9f7;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.middle {
    float: none;
    display: inline-block;
    vertical-align: middle;
}
.ink{
  height: 100px;
  width: 100px;
  background: #000;
}
.card-hov{
  cursor: pointer;
}
</style>
