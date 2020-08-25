<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="text-right mt-4" width="200px">
        <button type="button" class="btn btn-primary" @click="openmodal('new')">新增房間</button>
      </div>
      <div class="row">
        <div class="table-responsive">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th width="140">建案位址</th>
                <th width="250">建案名稱</th>
                <th width="250">額外服務</th>
                <th width="140">坪數</th>
                <th width="140">價格</th>
                <th width="250">設施服務</th>
                <th width="140">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in products" :key=" item.id">
                <th scope="row">{{item.category}}</th>
                <td width="300">{{item.title}}</td>
                <td></td>
                <td>{{item.origin_price}}</td>
                <td>{{item.price}}</td>
                <td>
                  <label class="switch">
                    <input type="checkbox" disabled :checked="item.enabled" />
                    <span class="slider round"></span>
                  </label>
                </td>
                <td width="180">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm" @click.prevent="openmodal('edit',item)"
                      >加入
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="openmodal('del',item)"
                    >取消</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 分頁元件 -->
      <pagination class="justify-content-center" :pages="pagination" @update="getProducts"></pagination>
      <!-- 新增和編輯 -->
      <Productmodal ref="productModal" :isNew = 'isNew' @update = "getProducts" />
      <!-- 刪除元件 -->
      <DelProducts ref="delProductModal" :temp-product = 'tempProduct' @update = "getProducts" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '../../components/Pagination'
import Productmodal from '../../components/backend/Productmodal'
import DelProducts from '../../components/backend/DelProducts'
export default {
  data () {
    return {
      isLoading: true,
      products: [],
      tempProduct: {
        imageUrl: []
      },
      pagination: [],
      loadingbtn: '',
      isNew: false,
      enabled: true
    }
  },
  components: {
    Pagination,
    Productmodal,
    DelProducts
  },
  props: ['token'],
  methods: {
    getProducts (num = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`
      this.isLoading = true
      this.$http
        .get(url).then((res) => {
          console.log(res)
          this.isLoading = false
          this.products = res.data.data
          this.pagination = res.data.meta.pagination
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openmodal (type, item) {
      if (type === 'new') {
        this.$refs.productModal.tempProduct = {
          imageUrl: []
        }
        $('#productModal').modal('show')
        this.isNew = true
      } else if (type === 'edit') {
        this.$refs.productModal.getProduct(item.id)
        this.isNew = false
      } else if (type === 'del') {
        this.tempProduct = { ...item }
        $('#delProductModal').modal('show')
      }
    }
  },
  created () {
    this.getProducts()
    // 使用token做驗證
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)iscookie\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`
    this.$http.get(url).then((res) => {
      this.products = res.data.data
    })
  }
}
</script>
