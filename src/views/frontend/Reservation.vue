<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <section class="container-fluid text-white banner-img banner-product">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-md-12 h-100">
            <div class="d-flex align-items-end h-100">
              <div class="mb-5">
                <h2>預約專區</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" style="margin-top: 100px;" v-if="!cart[0]">
        <div class="d-flex justify-content-center">
          <div style="margin-top: 100px; margin-bottom: 200px">
            <h2 class="mb-5">您的購物車沒有商品唷，請回商品頁面選購吧～</h2>
            <router-link to="/products"
              class="text-dark mt-5 mt-3 h5">
              <i class="far fa-arrow-alt-circle-left"></i>
              繼續購物
            </router-link>
          </div>
        </div>
      </div>
      <div class="container mt-5" v-else>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <ul class="list">
              <li :class="{ 'done': page === 1 || page === 2 || page === 3}">1</li>
              <li class="bar1" :class="{ 'done': page === 2 || page === 3}">2</li>
              <li class="bar2" :class="{ 'done': page === 3 }">3</li>
            </ul>
          </div>
        </div>
        <div class="container mt-3">
          <div class="row justify-content-center">
            <div class="col-md-10 mx-auto step-1" :class="{ 'show': page === 1 }">
              <h2 class="text-center mb-3">預約資料</h2>
              <table class="table table-bordered text-center" style="background: #f8f9fa;">
                <thead>
                  <tr>
                    <th scope="col-3"></th>
                    <th scope="col-3">案名</th>
                    <th scope="col-3">售價</th>
                    <th scope="col-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart" :key="item.id">
                    <td scope="row" style="
                      width: 200px;
                      height:200px;
                      background-size: cover;
                      background-position: center center;" class="rounded-0" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }"></td>
                    <td class="align-middle"> {{ item.product.title }} </td>
                    <td class="align-middle"> {{ item.product.price }} 萬 </td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-danger"
                      @click="removeCart(item.product.id)">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="row d-flex justify-content-end no-gutters">
                <router-link to="/order" class="btn btn-more mb-3">
                  下一步
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
      carttotal: [],
      page: 1,
      isLoading: false
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http
        .get(url)
        .then(res => {
          this.cart = res.data.data
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    removeCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http
        .delete(url)
        .then(res => {
          this.getCart()
          this.$bus.$emit('get-cart')
          this.isLoading = false
          this.$bus.$emit('msg:push', '取消預約此間', 'danger')
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
