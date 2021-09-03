<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-pulse-n5w7ej7np6"><div class="ldio-y8241lbpf5">
      <div></div><div></div><div></div>
      </div></div>
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
                <img class="img-fluid" :src="tempProduct.imageUrl[0]" />
                <!-- 延伸技巧，多圖 -->
                <div class="mt-5" v-if="tempProduct.options.images">
                  <div v-for="(image, key) in tempProduct.options.images" :key="key" class="mb-3 input-group" >
                    <input type="url" class="form-control"
                            placeholder="請輸入連結" v-model="tempProduct.options.images[key]">
                    <img class="img-fluid my-2" :src="tempProduct.options.images[key]" />
                    <button type="button" class="btn btn-outline-danger" @click="tempProduct.options.images.splice(key, 1)">
                      移除
                    </button>
                  </div>
                  <div v-if="tempProduct.options.images[tempProduct.options.images.length - 1] || !tempProduct.options.images.length">
                    <button @click="tempProduct.options.images.push('')" class="btn btn-outline-primary btn-sm d-block w-100">
                      新增圖片
                    </button>
                  </div>
                </div>
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
                    <label for="unit">單位（不需使用，請填0）</label>
                    <input id="tempProduct.unit" v-model="tempProduct.unit" type="text" class="form-control" placeholder="請輸入單位"/>
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="origin_price">原價（若完銷請填0，未完銷請填價格）</label>
                    <input id="tempProduct.origin_price" v-model="tempProduct.origin_price" type="text" class="form-control" placeholder="請輸入原價"/>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="price">售價（若完銷請填0，未完銷請填價格）</label>
                    <input id="tempProduct.price" v-model="tempProduct.price" type="text" class="form-control" placeholder="請輸入售價"/>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="description">產品描述（不需使用，請填0）</label>
                    <input name="description" id="tempProduct.description" v-model="tempProduct.description" class="form-control" placeholder="請輸入產品描述"/>
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="unitprice">每坪單價（請一併寫入單位）</label>
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
                    <label for="landnumber">權狀坪數（請一併寫入單位）</label>
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
                    <input  type="text" id="car" class="form-control" v-model="tempProduct.options.car" placeholder="請輸入車位">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="content">說明內容（不需使用，請填0）</label>
                    <input type="text" class="form-control" name="content" id="tempProduct.content" v-model="tempProduct.content" placeholder="請輸入說明內容">
                  </div>
                </div>
                <hr>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="now">現況（例如：已完銷、現場看屋...）</label>
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
                    <label for="mainbuilding">主建物（請一併寫入單位）</label>
                    <input type="text" class="form-control" id="mainbuilding"
                    v-model="tempProduct.options.mainbuilding" placeholder="請輸入主建物">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="subbuilding">附屬建物（請一併寫入單位）</label>
                    <input id="subbuilding" v-model="tempProduct.options.subbuilding"
                    type="text" class="form-control" placeholder="請輸入附屬建物">
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="land">土地坪數（請一併寫入單位）</label>
                    <input id="land" v-model="tempProduct.options.land" type="text" class="form-control" placeholder="請輸入土地坪數">
                  </div>
                </div>
                <div class="form-group">
                  <label for="amount">判定是否完銷（填已完銷或要賣出的價格）</label>
                  <input id="amount" v-model="tempProduct.options.amount" type="text" class="form-control" placeholder="請輸入剩餘戶數">
                </div>
                <hr>
                <div class="form-group">
                  <label for="feature">屋況特色</label>
                  <textarea id="feature" v-model="tempProduct.options.feature" type="text" class="form-control" placeholder="請輸入屋況特色"></textarea>
                </div>
                <hr>
                <div class="form-group">
                  <div class="form-check">
                    <label for="enabled" class="form-check-label"></label>
                    <input type="checkbox" class="form-check-input" name="enabled" id="tempProduct.enabled" v-model="tempProduct.enabled"/>啟用
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="map">地圖資料</label>
                  <input type="text" class="form-control" id="map" v-model="tempProduct.options.map" placeholder="請輸入map地圖">
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="convenience" class="form-check-input" value="便利商店" v-model="tempProduct.options.nearplace">
                  <label for="convenience" class="form-check-label mr-2">便利商店</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="market" class="form-check-input" value="傳統市場" v-model="tempProduct.options.nearplace">
                  <label for="market" class="form-check-label mr-2">傳統市場</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="park" class="form-check-input" value="公園綠地" v-model="tempProduct.options.nearplace">
                  <label for="park" class="form-check-label mr-2">公園綠地</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="school" class="form-check-input" value="學校" v-model="tempProduct.options.nearplace">
                  <label for="school" class="form-check-label mr-2">學校</label>
                </div>
                <div class="form-check form-check-inline mb-2">
                  <input type="checkbox" id="nightmarket" class="form-check-input" value="夜市" v-model="tempProduct.options.nearplace">
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
  props: {
    product: {
      type: Object,
      default () {
        return {
          imageUrl: [],
          options: {}
        }
      }
    },
    isNew: {
      type: Boolean,
      required: true
    }
  },
  // 使用 watch 監聽props的 product，當product有變動時，觸發watch功能
  watch: {
    product () {
      this.tempProduct = this.product
      if (!this.tempProduct.options.images) {
        this.tempProduct.options.images = []
      }
    }
  },
  methods: {
    getProduct (num) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${num}`
      this.$http
        .get(url)
        .then((res) => {
          this.tempProduct = res.data.data
          $('#productModal').modal('show')
        })
        .catch(() => {
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    updateProduct () {
      let http = 'post'
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`
      let status = '新增成功囉，ya ~'
      if (!this.isNew) {
        http = 'patch'
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
        status = '更新成功囉，ya ~'
      }
      this.$http[http](url, this.tempProduct)
        .then((res) => {
          this.$emit('update')
          this.$bus.$emit('msg:push', status, 'success')
        })
        .catch(() => {
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
      $('#productModal').modal('hide')
    },
    upload () {
      this.isLoading = true
      const cust = document.querySelector('#cust').files[0]
      const formData = new FormData()
      formData.append('file', cust)
      const el = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`
      this.$http
        .post(el, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          if (res.status === 200) {
            this.$bus.$emit('msg:push', '上傳成功囉，ya ~', 'success')
            this.tempProduct.imageUrl.push(res.data.data.path)
            document.querySelector('#cust').value = ''
            this.isLoading = false
          }
        })
        .catch(() => {
          document.querySelector('#cust').value = ''
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    }
  }
}
</script>
