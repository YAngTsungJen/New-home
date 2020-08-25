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
        <div class="col-3">
          <div class="col-12 col-lg-10 mt-3 mb-3 d-flex flex-wrap">
            <div class="col-12 col-md-6 col-lg-4 mb-2 " >
              <div class="col-sm-6">
                <div class="card Regular shadow fadder" style="width: 18rem;">
                  <img :src="product.imageUrl[1]" class=" img-fluid" style="height:200px;" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">2</div>
        <div class="col-3">3</div>
        <div class="col-3">4</div>
      <div>
    </div>

    </div>
  </div>
</template>

<script>
import L from 'leaflet'
console.log(L)
export default {
  data () {
    return {
      product: {
        imageUrl: []
      }
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
        console.log(this.product)
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
  /* background: blue; */
  /* height: 300px; */
  margin-bottom: 200px;
  padding: 3rem 3rem;
}
</style>
