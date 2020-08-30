<template>
  <div>
    <div class="row map">
      <div class="col-sm-5 mr-auto">
        <!-- <div id="mapid" ref="mapElement"></div> -->
        <iframe v-if="product.id === 'VjkcwT0NNt7FbyY6mbOWvGvrRG3BdwUXDQxkmqbPaWTzH41amTD7VklHgeIhp4Qw'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.3493196019563!2d120.69987131498561!3d24.089208081665554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693cb73414071f%3A0x3ebaf9372a193a70!2zNDEy5Y-w5Lit5biC5aSn6YeM5Y2A5aGX5Z-O6LevNDky5be3MjLlvIQyMeiZnw!5e0!3m2!1szh-TW!2stw!4v1598456264351!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <iframe v-if="product.id === '3tq9h2QtuU8dWiDbMMvHcLBjFKVDGeGOejz90jKUgtOPG8YehiMRc8A57Df9PlOA'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.769873736545!2d120.63261801498753!3d24.07440718443064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA0JzI3LjkiTiAxMjDCsDM4JzA1LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1598458341439!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="col-sm-5">
        <ul class="text-left">
          <li class="text-outside row">
            <div class="col mr-auto">
              <h2 class="text-success">{{product.title}}</h2>
            </div>
            <div class="col btn-group">
              <button type="button" class="btn btn-primary" @click.prevent="addCart(product)">預約看屋</button>
              <button type="button" class="btn btn-success" @click.prevent="back()">返回</button>
            </div>
          </li>
          <li class="text-outside"><span class="text-success">地址：</span>{{product.category}} </li>
          <li class="text-outside"><span class="text-success">生活機能：</span>{{product.content}}</li>
          <li class="text-outside"><span class="text-success">坪數：</span>{{product.origin_price}}坪</li>
          <li class="text-outside"><span class="text-success">售價：</span>{{product.price}}萬元</li>
          <li class="text-outside"><span class="text-success">附近交通：</span>{{product.description}}</li>
          <img :src="product.imageUrl[0]" class=" img-fluid" style="height:200px;" alt="">
        </ul>
      </div>
    </div>
    <div class="row process">
      <div class="col-12">
        <h2 class="text-center">建築過程</h2>
      </div>
        <div class="d-flex flex-wrap" v-for="(item,index) in product.imageUrl" :key="index">
              <div class="col-sm-3 mb-3">
                <div class="card Regular shadow fadder" style="width: 18rem;">
                  <img :src="item" class=" img-fluid" style="height:200px;" alt="" @click="show(index)">
                </div>
              </div>
        </div>
      <div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import Toast from '../../Toast'
// import L from 'leaflet'
export default {
  data () {
    return {
      product: {
        imageUrl: []
      },
      imgs: [], // Img Url , string or Array
      visible: false,
      index: null,
      cart: {}
    }
  },
  created () {
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    this.isLoading = true
    this.$http
      .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((response) => {
        console.log(response)
        this.product = response.data.data
        this.imgs = response.data.data.imageUrl
        this.isLoading = false
      }).catch((error) => {
        console.log(error)
        this.isLoading = false
      })
  },
  // mounted () {
  //   var mymap = L.map('mapid', {
  //     center: [24.143175, 120.636880],
  //     zoom: 16
  //   })
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(mymap)
  //   L.marker([24.143175, 120.636880]).addTo(mymap)
  //     .bindPopup('<h3>捷登房屋</h3><p><br>台中市南屯區五權西路二段748號</p>')
  //     .openPopup()
  // },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    },
    addCart (item, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity
      }
      this.$http.post(url, cart).then(res => {
        this.$bus.$emit('update')
        Toast.fire({
          title: '已幫您加入預約列表，請前往前言版',
          icon: 'success'
        })
        console.log(res)
      }).catch(error => {
        const errorData = error.response.data.errors
        if (errorData) {
          console.log(errorData)
          Toast.fire({
            title: '已經預約此間了',
            icon: 'warning'
          })
          this.$router.push('/cart')
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
</style>
