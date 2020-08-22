import router from '../router';
<template>
  <div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row" v-for="item in products" :key="item.id">
            <div class="col-md-6">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img @click="goPage(item)" :src="item.imageUrl[0]" class="card-img-top rounded-0" alt="...">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><router-link :to="`/product/${item.id}`">{{item.title}}</router-link></h4>
                  <p class="card-text mb-0">{{item.origin_price}}<span class="text-muted "><del>NT$1,200</del></span></p>
                  <p class="text-muted mt-3"></p>
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
