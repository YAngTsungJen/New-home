<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #B67965;">
      <div class="container">
        <router-link class="navbar-brand" to="/">捷登開發
          <i class="fas fa-home"></i>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於捷登</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">最新建案</router-link>
            </li>
            <li class="nav-item">
              <div class="dropdown" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <button class="btn btn-more dropdown-toggle" type="button" id="check" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  預約專區
                  <span class="badge badge-pill badge-danger" v-if="cart.length">{{ cart.length }}</span>
                </button>
                <div class="dropdown-menu dropdown-menu-right p-3 size" aria-labelledby="check">
                    <section class="table-responsive">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th scope="col">小圖</th>
                            <th scope="col">案名</th>
                            <th scope="col">總價</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in cart" :key="item.id">
                            <td style="
                              width: 150px;
                              height:100px;
                              background-size: cover;
                              background-position: center;" class="rounded-0" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }">
                            </td>
                            <td class="align-middle"> {{ item.product.title }} </td>
                            <td class="align-middle"> {{ item.product.price }} 萬 </td>
                            <td class="align-middle text-center">
                              <button type="button" class="btn btn-outline-danger btn-sm"
                              @click="removeCart(item.product.id)">
                                <i class="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                          <tr v-if="cart.length === 0">
                            <td colspan="3" class="text-center">您尚未進行預約喔！</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="btn-toolbar justify-content-between">
                        <button type="button" class="btn btn-cyan" @click="removeAllCart()">
                            <i class="far fa-trash-alt">全部取消</i>
                        </button>
                        <button type="button" class="btn btn-more " :disabled="cart.length === 0" @click="goReservation">前往預約專區</button>
                      </div>
                    </section>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
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
          this.isLoading = false
          this.$bus.$emit('msg:push', '預約取消', 'danger')
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    removeAllCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http
        .delete(url)
        .then(() => {
          this.getCart()
          this.isLoading = false
          this.$bus.$emit('msg:push', '全部取消', 'danger')
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    goReservation () {
      if (this.$route.path === '/reservation') return
      this.$router.push('/reservation')
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  },
  beforeDestroy () {
    this.$bus.$off('get-cart')
  }
}
</script>
