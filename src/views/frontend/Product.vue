<template>
  <div>
    <div class="row map">
      <div class="col-sm-5 mr-auto">
        <div id="mapid" ref="mapElement"></div>
      </div>
      <div class="col-sm-5">
        <ul class="text-left">
          <li class="text-outside">
            <h2 class="text-success">{{product.title}}</h2>
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
// import VueEasyLightbox from 'vue-easy-lightbox'
import L from 'leaflet'
console.log(L)
export default {
  data () {
    return {
      product: {
        imageUrl: []
      },
      imgs: [], // Img Url , string or Array
      visible: false,
      index: null
    }
  },
  created () {
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    this.isLoading = true
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      )
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
  mounted () {
    var mymap = L.map('mapid', {
      center: [24.143175, 120.636880],
      zoom: 16
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap)
    L.marker([24.143175, 120.636880]).addTo(mymap)
      .bindPopup('<h3>捷登房屋</h3><p><br>台中市南屯區五權西路二段748號</p>')
      .openPopup()
  },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
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
