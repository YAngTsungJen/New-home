<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-pulse-n5w7ej7np6"><div class="ldio-y8241lbpf5">
      <div></div><div></div><div></div>
      </div></div>
    </loading>
    <nav class="navbar navbar-expand-lg fixed-top" :class="[classList['bg-color'], classList['navbar-color']]">
      <div class="container-fluid">
        <router-link class="navbar-brand" @click.native="clickthree" to="/">
        <img src="@/assets/image/圖層-1_02.png" width="120" class="img-fluid mr-4 mb-3" alt="店圖">
        <h2 class="d-inline-block main-title" :class="classList['text-color']"><span class="highlight box3">捷登開發</span></h2>
        </router-link>
        <button @click.prevent="isMenuOpen = !isMenuOpen" class="navbar-toggler p-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="p-1" v-show="!isMenuOpen">
            <i class="fas fa-bars"></i>
          </span>
          <span class="p-1" v-show="isMenuOpen">
            <i class="fas fa-times"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item text-center">
              <router-link :class="classList['text-color']"  @click.native="clickone" data-toggle="collapse" data-target="#navbarNavDropdown" class="nav-link h4" to="/about"><span class="highlight box1">關於捷登</span></router-link>
            </li>
            <li class="nav-item text-center">
              <router-link :class="classList['text-color']" @click.native="clicktwo" data-toggle="collapse" data-target="#navbarNavDropdown" class="nav-link h4" to="/products"><span class="highlight box2">作品介紹</span></router-link>
            </li>
            <li class="nav-item text-center">
              <div class="dropdown" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <button class="btn btn-more dropdown-toggle" type="button" id="check" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <p class="h4 d-inline-block mr-1">預約專區</p>
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
                        <button type="button" class="btn btn-more" :disabled="cart.length === 0" @click="goReservation">前往預約專區</button>
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
import $ from 'jquery'
export default {
  data () {
    return {
      cart: [],
      isLoading: false,
      isMenuOpen: false,
      classList: {
        'bg-color': 'bg-mild',
        'text-color': 'text-dark',
        'navbar-color': ''
      }
    }
  },
  methods: {
    clickone () {
      this.isMenuOpen = false
      $('.box1').addClass('addColor')
      $('.box2').removeClass('addColor')
      $('.box3').removeClass('addColor')
    },
    clicktwo () {
      this.isMenuOpen = false
      $('.box2').addClass('addColor')
      $('.box1').removeClass('addColor')
      $('.box3').removeClass('addColor')
    },
    clickthree () {
      $('.box3').addClass('addColor')
      $('.box1').removeClass('addColor')
      $('.box2').removeClass('addColor')
    },
    scrollFunction () {
      const windowY = window.scrollY
      const innerHeight = window.innerHeight - 700
      if (windowY > innerHeight) {
        this.classList = {
          'bg-color': 'bg-more',
          'navbar-color': 'navbar-dark',
          'text-color': 'text-white'
        }
      } else {
        this.classList = {
          'bg-color': 'bg-mild',
          'navbar-color': 'navbar-light',
          'text-color': 'text-dark'
        }
      }
    },
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
  mounted () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollFunction)
  },
  beforeDestroy () {
    this.$bus.$off('get-cart')
  }
}
</script>
