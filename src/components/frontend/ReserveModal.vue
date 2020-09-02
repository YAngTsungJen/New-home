<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <div class="loadingio-spinner-spin-b44lsmwv628"><div class="ldio-am4phneojyb">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
      </template>
    </loading>
    <div class="modal fade" id="reserveModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">預約看屋</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="my-5 row justify-content-center ">
                  <table class="table tablebg" style="background:#fff;">
                    <thead>
                      <tr>
                        <th scope="col-2"></th>
                        <th scope="col-2">案名</th>
                        <th scope="col-2">售價</th>
                        <th scope="col-2"></th>
                      </tr>
                    </thead>
                    <tbody v-for="item in cart" :key="item.id">
                      <tr>
                        <th scope="row" style="
                          width: 200px;
                          height:120px;
                          background-size: cover;
                          background-position: center;" class="rounded-0" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }"></th>
                        <td> {{item.product.title}} </td>
                        <td> {{item.product.price}} 萬 </td>
                        <td>
                          <button type="button" class="btn btn-outline-danger btn-sm"
                          @click="removeCart(item.product.id)">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="row d-flex justify-content-center no-gutters">
                    <button type="button" class="btn btn-cyan mr-auto" @click="removeAllCart()">
                        <i class="far fa-trash-alt">全部取消</i>
                    </button>
                    <button type="button" class="btn btn-success" @click="goReservation()">前往預約專區</button>
                  </div>
                </div>
              </div>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../../Toast'
export default {
  data () {
    return {
      // 購物車
      cart: [],
      carttotal: [],
      isLoading: false
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then(res => {
        this.cart = res.data.data
        this.$bus.$on('get-cart', () => {
          this.getCart()
        })
        console.log(this.cart)
      }).catch(error => {
        console.log(error)
        Toast.fire({
          title: '無法取得資料，稍後再試',
          icon: 'error'
        })
        this.isLoading = false
      })
    },
    removeCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(res => {
        this.isLoading = false
        this.getCart()
      }).catch(error => {
        this.isLoading = false
        console.log(error)
      })
    },
    removeAllCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http.delete(url).then(() => {
        this.isLoading = false
        this.getCart()
      }).catch(error => {
        this.isLoading = false
        console.log(error)
      })
    },
    goReservation () {
      this.$router.push('/reservation')
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped>
@keyframes ldio-am4phneojyb {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.ldio-am4phneojyb div > div {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ff727d;
  animation: ldio-am4phneojyb 1s linear infinite;
}.ldio-am4phneojyb div:nth-child(1) > div {
  left: 148px;
  top: 88px;
  animation-delay: -0.875s;
}
.ldio-am4phneojyb > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 160px 100px;
}.ldio-am4phneojyb div:nth-child(2) > div {
  left: 130px;
  top: 130px;
  animation-delay: -0.75s;
}
.ldio-am4phneojyb > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 142px 142px;
}.ldio-am4phneojyb div:nth-child(3) > div {
  left: 88px;
  top: 148px;
  animation-delay: -0.625s;
}
.ldio-am4phneojyb > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 100px 160px;
}.ldio-am4phneojyb div:nth-child(4) > div {
  left: 46px;
  top: 130px;
  animation-delay: -0.5s;
}
.ldio-am4phneojyb > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 58px 142px;
}.ldio-am4phneojyb div:nth-child(5) > div {
  left: 28px;
  top: 88px;
  animation-delay: -0.375s;
}
.ldio-am4phneojyb > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 40px 100px;
}.ldio-am4phneojyb div:nth-child(6) > div {
  left: 46px;
  top: 46px;
  animation-delay: -0.25s;
}
.ldio-am4phneojyb > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 58px 58px;
}.ldio-am4phneojyb div:nth-child(7) > div {
  left: 88px;
  top: 28px;
  animation-delay: -0.125s;
}
.ldio-am4phneojyb > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 100px 40px;
}.ldio-am4phneojyb div:nth-child(8) > div {
  left: 130px;
  top: 46px;
  animation-delay: 0s;
}
.ldio-am4phneojyb > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 142px 58px;
}
.loadingio-spinner-spin-b44lsmwv628 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-am4phneojyb {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-am4phneojyb div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>
