<template>
  <div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row mb-6" >
        <div class="col-12 col-lg-2">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    最新建案
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">台中</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">大里</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">彰化</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-10 mt-3 mb-3 d-flex flex-wrap">
          <div class="col-12 col-md-6 col-lg-4 mb-2  " v-for="item in products" :key="item.id">
            <div class="col-sm-6">
              <div class="card Regular shadow" style="width: 18rem;">
                <img @click="goPage(item)" :src="item.imageUrl[0]" class=" img-fluid " style="height:200px;" alt="">
                <div class="card-body">
                  <p class="card-text ">{{item.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    goPage (item) {
      this.$router.push(`/product/${item.id}`)
    }
  },
  created () {
    console.log('uuid:', process.env.VUE_APP_UUID)
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      )
      .then((response) => {
        console.log(response)
        this.products = response.data.data
        console.log(this.products)
      })
  }
}
</script>
