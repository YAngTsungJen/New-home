<template>
  <div class="about">
    <loading :active.sync="isLoading"></loading>
    <div class="row map">
      <div class="col-sm-9">
        <div id="mapid" ref="mapElement"></div>
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
</style>
