<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <div class="loadingio-spinner-spin-b44lsmwv628"><div class="ldio-am4phneojyb">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
      </template>
    </loading>
    <div class="row map">
      <div class="col-sm-7 mr-auto">
        <img :src="product.imageUrl[0]" class=" img-fluid" style="height:500px; width:800px;" alt="">
      </div>
      <div class="col-sm-5">
        <ul class="text-left">
          <li class="text-outside row">
            <div class="col mr-auto">
              <h2 class="text-success">{{product.title}}</h2>
            </div>
            <div class="col btn-group">
              <button type="button" class="btn btn-success" @click.prevent="addCart(product,product.num)">預約看屋</button>
              <button type="button" class="btn btn-light" @click.prevent="back()">返回</button>
            </div>
          </li>
          <li class="text-outside"><span class="text-success">現況：</span>{{product.description}}</li>
          <li class="text-outside"><span class="text-success">坪數：</span>{{product.origin_price}}坪</li>
          <li class="text-outside"><span class="text-success">售價：</span>{{product.price}}萬元</li>
          <li class="text-outside"><span class="text-success">機能描述：</span>{{product.content}}</li>
          <li class="text-outside mt-3 text-center">
            <iframe v-if="product.id === 'VjkcwT0NNt7FbyY6mbOWvGvrRG3BdwUXDQxkmqbPaWTzH41amTD7VklHgeIhp4Qw'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.3493196019563!2d120.69987131498561!3d24.089208081665554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693cb73414071f%3A0x3ebaf9372a193a70!2zNDEy5Y-w5Lit5biC5aSn6YeM5Y2A5aGX5Z-O6LevNDky5be3MjLlvIQyMeiZnw!5e0!3m2!1szh-TW!2stw!4v1598456264351!5m2!1szh-TW!2stw" width="300" height="225" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <iframe v-if="product.id === '3tq9h2QtuU8dWiDbMMvHcLBjFKVDGeGOejz90jKUgtOPG8YehiMRc8A57Df9PlOA'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.769873736545!2d120.63261801498753!3d24.07440718443064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA0JzI3LjkiTiAxMjDCsDM4JzA1LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1598458341439!5m2!1szh-TW!2stw" width="300" height="225" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </li>
        </ul>
      </div>
    </div>
    <div class="row process">
      <div class="col-12">
        <h2 class="text-center mb-5">建築過程</h2>
      </div>
        <div class="d-flex flex-wrap" v-for="(item,index) in product.imageUrl" :key="index">
              <div class="col-sm-3 mb-3">
                <div class="card Regular shadow fadder work-item fadder" style="width: 18rem;" @click="show(index)">
                  <img :src="item" class=" img-fluid" style="height:200px;" alt="">
                  <span class="ink"></span>
                  <span class="search"><i class="fas fa-search-plus"></i></span>
                </div>
              </div>
        </div>
      <div>
    </div>
    <ReserveModal />
    <!-- @update = "addCart(product)" -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
    <div class="confirm" @click.prevent="addTocart">
      <i class="fas fa-house-user"></i>
      <span class="badage badage-pill badge-danger" v-if="cart.length" style="transform:translateX(-9px) translateY(4px);">{{ cart.length }}</span>
    </div>
    </div>
  </div>
</template>

<script>
import Toast from '../../Toast'
import $ from 'jquery'
import ReserveModal from '../../components/frontend/ReserveModal'
export default {
  data () {
    return {
      product: {
        num: 1,
        imageUrl: []
      },
      imgs: [], // Img Url , string or Array
      visible: false,
      index: null,
      cart: [],
      isLoading: false
    }
  },
  components: {
    ReserveModal
  },
  created () {
    this.getProduct()
    this.addTocart()
  },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    },
    getProduct () {
      const id = this.$route.params.id
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((response) => {
          this.product = response.data.data
          this.imgs = response.data.data.imageUrl
          this.cart = response.data.data
          this.isLoading = false
        }).catch(() => {
          this.isLoading = false
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then(res => {
        this.cart = res.data.data
      }).catch(() => {
        Toast.fire({
          title: '無法取得資料，稍後再試',
          icon: 'error'
        })
      })
    },
    addTocart () {
      $('#reserveModal').modal('show')
    },
    addCart (item, quantity = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity
      }
      this.$http.post(url, cart).then(() => {
        this.isLoading = false
        this.$bus.$emit('get-cart')
        this.getCart()
        Toast.fire({
          title: '已幫您加入預約列表，請前往預約專區',
          icon: 'success'
        })
      }).catch(error => {
        this.isLoading = false
        const errorData = error.response.data.errors
        if (errorData) {
          Toast.fire({
            title: '已經預約此間了',
            icon: 'warning'
          })
        }
      })
    },
    back () {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
#mapid {
  height: 500px;
  width: 700px;
}
.map {
  padding: 3rem;
}
.text-outside{
  list-style-type: none;
  border-bottom: 1px dashed rgba(0,0,0,.2);
  padding: 6px 0 6px 23px;
}
.process{
  margin-bottom: 200px;
  padding: 3rem 3rem;
}
.work-item{
  height: 300px;
}
.fadder{
  height:200px;
  overflow: hidden;
  width: 100%;
}
.search{
  font-size: 80px;
  position: absolute;
  top: 30%;
  left: 40%;
  color: white;
  opacity: 0;
}
.ink{
  height: 300px;
  width: 286px;
  background: rgb(145, 200, 0, 1);
  position: absolute;
  left: 0;
  opacity: 0;
}
.work-item:hover .search{
  cursor: pointer;
  opacity: 1;
  transition-duration: 0.2s;
  transition: all .8s
}
.work-item:hover .ink{
  cursor: pointer;
  opacity: 50%;
  transition-duration: 0.2s;
  transition: all .8s
}
.confirm{
  background: cadetblue;
  color: aliceblue;
  width: 50px;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 20%;
  right: 5%;
  border-radius: 50% 50%;
  cursor: pointer;
}
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
