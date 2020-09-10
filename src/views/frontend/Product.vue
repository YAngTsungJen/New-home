<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <section class="container-fluid bg-dark py-5 text-white" style="position: relative; height:50vh">
      <div class="row">
        <div class="col-md-12 bg-cover" style="position: absolute;top: 0;bottom: 0; background-image: url(https://images.unsplash.com/photo-1466350380309-a09bb7347af9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)">
        </div>
      <div class="container">
        <div class="row justify-md-center align-items-center">
          <div class="col" style="margin-top:10%">
            <h2>{{product.title}}</h2>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section class="container mt-5 py-5">
      <div class="row">
        <div class="col-md-7 mr-auto">
          <img :src="product.imageUrl[0]" class=" img-fluid" style="height:500px; width:800px;" alt="">
        </div>
        <div class="col-md-5">
          <div class="row mt-md-2">
            <div class="col mr-auto">
              <h2 class="text-danger">{{product.price}}<small>萬元</small></h2>
            </div>
            <div class="col btn-group">
              <button type="button" class="btn btn-more" @click.prevent="addCart(product,product.num)">預約看屋</button>
              <button type="button" class="btn btn-light" @click.prevent="back()">返回</button>
            </div>
          </div>
          <hr>
          <div class="row mt-md-2">
            <div class="col">格局：{{product.options.structure}}</div>
            <div class="col">屋齡：{{product.options.homeage}}</div>
            <div class="col">權狀坪數：{{product.options.landnumber}}</div>
          </div>
          <div class="row mt-sm-2">
            <div class="col-sm-3">樓層:</div>
            <div class="col-sm-4 text-left">{{product.options.floor}}</div>
          </div>
          <div class="row mt-sm-2">
            <div class="col-sm-3">朝向:</div>
            <div class="col-sm-4 text-left">{{product.options.direction}}</div>
          </div>
          <div class="row mt-sm-2">
            <div class="col-sm-3">地址:</div>
            <div class="col-sm-8 text-left">{{product.options.address}}</div>
          </div>
          <div class="row mt-md-2 justify-content-md-center">
            <iframe v-if="product.id === 'Wlg47fGHULDc0AIDvRBvF2CIYvFLs4FqkvGt9AzvUcDseWpwwLzMZLJAkaQHFpZy'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.3493196019563!2d120.69987131498561!3d24.089208081665554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693cb73414071f%3A0x3ebaf9372a193a70!2zNDEy5Y-w5Lit5biC5aSn6YeM5Y2A5aGX5Z-O6LevNDky5be3MjLlvIQyMeiZnw!5e0!3m2!1szh-TW!2stw!4v1598456264351!5m2!1szh-TW!2stw" width="300" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-3">
      <div class="row mt-3">
        <div class="col-md-3">
          <h4 class="text-more">房屋資料</h4>
        </div>
        <div class="col-md-9 text-left">
          <div class="row mt-md-2">
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>現況：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.now}}
                </span>
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>型態：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.type}}
                </span>
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>裝潢程度：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.decoration}}
                </span>
              </p>
            </div>
          </div>
          <div class="row mt-md-2">
            <div class="col-md-4">
              <p><i class="fas fa-tint pr-2"></i>管理費：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.managefees}}
                </span>
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-tint pr-2"></i>帶租約：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.lease}}
                </span>
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-tint pr-2"></i>法定用途：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.use}}
                </span>
              </p>
            </div>
          </div>
          <div class="row mt-md-2">
            <div class="col-md-4">
              <p><i class="fas fa-tint pr-2"></i>車位：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.car}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-3">
          <h4 class="text-more">坪數說明</h4>
        </div>
        <div class="col-md-9 text-left">
          <div class="row mt-md-2">
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>主建物：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.mainbuilding}}
                </span>
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>附屬建物：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.subbuilding}}
                </span>
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>土地坪數：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.land}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-3">
          <h4 class="text-more">屋況特色</h4>
        </div>
        <div class="col-md-9 text-left">
          <div class="row mt-md-2">
            <div class="col-md-8">
              <p>
                {{product.options.feature}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section container mt-3>
      <div class="row">
        <div class="col">
          <img src="https://upload.cc/i1/2020/09/10/GOr6IU.jpg" class=" img-fluid" style="height:500x; width:600px;" alt="">
        </div>
      </div>
    </section>
    <div class="row process">
      <div class="col-12">
        <h2 class="text-center mb-5">建築過程</h2>
      </div>
        <div class="d-flex flex-wrap" v-for="(item,index) in product.imageUrl" :key="index">
          <div class="col-sm-3 mb-3">
            <div class="card Regular shadow fadder work-item fadder" style="width: 18rem;" @click="show(index)">
              <img :src="item" class=" img-fluid" style="height:300px;" alt="">
              <span class="ink"></span>
              <span class="search"><i class="fas fa-search-plus"></i></span>
            </div>
          </div>
        </div>
      <div>
    </div>
    <ReserveModal />
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
        imageUrl: [],
        options: {}
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
  background: #e7a247;
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
</style>
