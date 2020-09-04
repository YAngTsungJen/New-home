<template>
  <div>
    <div >
      <div class="row d-flex justify-content-between bg-info pt-4 pb-4 mb-3">
        <div class="col mt-5">
          <h2 style="font-family: 'Russo One', sans-serif;"> 關於我們 </h2>
        </div>
        <div class="col img-fluid">
            <img src="https://images.unsplash.com/photo-1509952762474-040a7a370e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80" width="150px" height="150px" alt="">
        </div>
      </div>
      <div class="container">
        <div class=" row d-flex justify-content-center">
            <div class="col">
              <div id="mapid" ref="mapElement"></div>
            </div>
            <div class="col">
              <ul class="text-left mt-4">
                <li class="text-outside">
                  <h2 class="text-success">捷登房屋</h2>
                </li>
                <li class="text-outside mt-3">
                  <p>地址：<span>台中市南屯區五權西路二段748號</span></p>
                </li>
                <li class="text-outside mt-3">
                  <p>宗旨：<span>真實，用心，經營每一個客戶</span></p>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
export default {
  data () {
    return {
    }
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
  height: 300px;
  width: 500px;
}
.map {
  padding: 3rem;
  margin-bottom: 200px;
}
.text-outside{
  list-style-type: none;
  border-bottom: 1px dashed rgba(0,0,0,.2);
  padding: 6px 6px;
}
</style>
