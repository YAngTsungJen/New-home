<template>
  <div class="about">
    <div class="d-flex flex-column flex-md-row justify-content-beteewn align-items-md-center align-items-start  text-dark bg-info">
      <div class="mb-md-0 mb-1 ml-auto">
        <h2 class="mb-0 " style="font-family: 'Russo One', sans-serif;"> 關於我們 </h2>
      </div>
      <div class="img-fluid mb-0 pt-2 pb-2">
          <img src="https://images.unsplash.com/photo-1509952762474-040a7a370e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80" width="15%" height="15%" alt="">
      </div>
    </div>
    <div class="row map">
      <div class="col-sm-7">
        <div id="mapid" ref="mapElement"></div>
      </div>
      <div class="col-sm-5">
        <ul class="text-left">
          <li class="text-outside">
            <h2 class="text-success">捷登房屋</h2>
          </li>
          <li class="text-outside mt-3">
            <p>地址：<span>台中市南屯區五權西路二段748號</span></p>
          </li>
        </ul>
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
  height: 500px;
  width: 800px;
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
