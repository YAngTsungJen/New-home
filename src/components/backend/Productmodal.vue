<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel ">
              <span>{{ isNew ?'新增房間':'重訂房間' }}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    id="imageUrl"
                    v-model="tempProduct.imageUrl[0]"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="cust">上傳圖片網址</label>
                  <input type="file" id="cust" class="form-control" @change="upload()" />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt />
              </div>
              <div class="col-sm-8">
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="title">建案名稱</label>
                    <input
                      id="tempProduct.title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題"/>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="category">區域</label>
                    <input id="tempProduct.category" v-model="tempProduct.category" type="text" class="form-control" placeholder="請輸入分類"/>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="unit">單位</label>
                    <input id="tempProduct.unit" v-model="tempProduct.unit" type="text" class="form-control" placeholder="請輸入單位"/>
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="origin_price">原價</label>
                    <input id="tempProduct.origin_price" v-model="tempProduct.origin_price" type="text" class="form-control" placeholder="請輸入原價"/>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="price">售價</label>
                    <input id="tempProduct.price" v-model="tempProduct.price" type="text" class="form-control" placeholder="請輸入售價"/>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="description">產品描述</label>
                    <textarea name="description" id="tempProduct.description" v-model="tempProduct.description" class="form-control" placeholder="請輸入產品描述"></textarea>
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="unitprice">單價</label>
                    <input type="text" class="form-control" id="unitprice" v-model="tempProduct.options.unitprice" placeholder="請輸入單價">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="structure">格局</label>
                    <input id="structure" v-model="tempProduct.options.structure" type="text" class="form-control" placeholder="請輸入格局">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="homeage">屋齡</label>
                    <input type="text" class="form-control" id="homeage" v-model="tempProduct.options.homeage" placeholder="請輸入屋齡">
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="landnumber">權狀坪數</label>
                    <input type="text" class="form-control" id="landnumber" v-model="tempProduct.options.landnumber" placeholder="請輸入權狀坪數">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="floor">樓層</label>
                    <input id="floor" v-model="tempProduct.options.floor" type="text" class="form-control" placeholder="請輸入樓層">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="direction">朝向</label>
                    <input type="text" class="form-control" id="direction" v-model="tempProduct.options.direction" placeholder="請輸入朝向">
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="address">地址</label>
                    <input type="text" class="form-control" id="address" v-model="tempProduct.options.address" placeholder="請輸入地址">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="car">車位</label>
                    <input id="car" v-model="tempProduct.options.car" type="text" class="form-control" placeholder="請輸入車位">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="feature">屋況特色</label>
                    <input id="feature" v-model="tempProduct.options.feature" type="text" class="form-control" placeholder="請輸入屋況特色">
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="now">現況</label>
                    <input type="text" class="form-control" id="now" v-model="tempProduct.options.now" placeholder="請輸入現況">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="type">型態</label>
                    <input id="type" v-model="tempProduct.options.type" type="text" class="form-control" placeholder="請輸入型態">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="decoration">裝潢程度</label>
                    <input type="text" class="form-control" id="decoration" v-model="tempProduct.options.decoration" placeholder="請輸入裝潢程度">
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="managefees">管理費</label>
                    <input id="managefees" v-model="tempProduct.options.managefees"
                    type="text" class="form-control" placeholder="請輸入管理費">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="lease">帶租約</label>
                    <input type="text" class="form-control" id="lease"
                    v-model="tempProduct.options.lease" placeholder="請輸入帶租約">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="use">法定用途</label>
                    <input id="use" v-model="tempProduct.options.use"
                    type="text" class="form-control" placeholder="請輸入法定用途">
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="mainbuilding">主建物</label>
                    <input type="text" class="form-control" id="mainbuilding"
                    v-model="tempProduct.options.mainbuilding" placeholder="請輸入主建物">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="subbuilding">附屬建物</label>
                    <input id="subbuilding" v-model="tempProduct.options.subbuilding"
                    type="text" class="form-control" placeholder="請輸入附屬建物">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="land">土地坪數</label>
                    <input id="land" v-model="tempProduct.options.land" type="text" class="form-control" placeholder="請輸入土地坪數">
                  </div>
                </div>
                <div class="form-group">
                  <label for="amount">剩餘戶數</label>
                  <input id="amount" v-model="tempProduct.options.amount" type="text" class="form-control" placeholder="請輸入剩餘戶數">
                </div>
                <hr>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea name="content" id="tempProduct.content" v-model="tempProduct.content" class="form-control" placeholder="請輸入說明內容"></textarea>
                </div>
                <hr>
                <div class="form-group">
                  <div class="form-check">
                    <label for="enabled" class="form-check-label"></label>
                    <input type="checkbox" class="form-check-input" name="enabled" id="tempProduct.enabled" v-model="tempProduct.enabled"/>啟用
                  </div>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="convenience" class="form-check-input" value="便利商店" v-model="tempProduct.options.convenience">
                  <label for="convenience" class="form-check-label mr-2">便利商店</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="market" class="form-check-input" value="傳統市場" v-model="tempProduct.options.market">
                  <label for="market" class="form-check-label mr-2">傳統市場</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="park" class="form-check-input" value="公園綠地" v-model="tempProduct.options.park">
                  <label for="park" class="form-check-label mr-2">公園綠地</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="school" class="form-check-input" value="學校" v-model="tempProduct.options.school">
                  <label for="school" class="form-check-label mr-2">學校</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="nightmarket" class="form-check-input" value="夜市" v-model="tempProduct.options.nightmarket">
                  <label for="nightmarket" class="form-check-label mr-2">夜市</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct()">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      tempProduct: {
        imageUrl: [],
        options: {}
      },
      isLoading: false
    }
  },
  props: ['isNew'],
  methods: {
    getProduct (num) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${num}`
      this.$http
        .get(url).then((res) => {
          $('#productModal').modal('show')
          this.tempProduct = res.data.data
        })
    },
    updateProduct () {
      let http = 'post'
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`
      if (!this.isNew) {
        http = 'patch'
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
      }
      this.$http[http](url, this.tempProduct)
        .then((res) => {
          this.$emit('update')
        })
      $('#productModal').modal('hide')
    },
    upload () {
      const cust = document.querySelector('#cust').files[0]
      const formData = new FormData()
      formData.append('file', cust)
      this.isLoading = true
      const el = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`
      this.$http
        .post(el, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false
            this.tempProduct.imageUrl.push(res.data.data.path)
            document.querySelector('#cust').value = ''
          }
        })
        .catch(() => {
          this.isLoading = false
          document.querySelector('#cust').value = ''
        })
    }
  }
}
</script>
