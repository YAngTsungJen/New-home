<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-pulse-n5w7ej7np6"><div class="ldio-y8241lbpf5">
      <div></div><div></div><div></div>
      </div></div>
    </loading>
    <div class="container">
      <div class="text-right mt-4">
        <button type="button" class="btn btn-more" @click="openmodal('new')">新增房間</button>
      </div>
      <div class="table-responsive mt-2">
        <table class="table table-striped table-more">
          <thead>
            <tr>
              <th width="140">建案位址</th>
              <th width="250">建案名稱</th>
              <th width="250">設施服務</th>
              <th width="140">坪數</th>
              <th width="140">價格</th>
              <th width="250">按鈕</th>
              <th width="140">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in products" :key=" item.id">
              <th scope="row">{{ item.category }}</th>
              <td width="300">{{ item.title }}</td>
              <td></td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
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
                    class="btn btn-more btn-sm" @click.prevent="openmodal('edit',item)"
                    >更新
                  </button>
                  <button type="button" class="btn btn-dark btn-sm" @click.prevent="openmodal('del',item)"
                  >刪除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 分頁元件 -->
      <Pagination class="justify-content-center" :pages="pagination" @update="getProducts"></Pagination>
      <!-- 新增和編輯 -->
      <Productmodal ref="productModal" :product="tempProduct" :isNew = 'isNew' @update = "getProducts" />
      <!-- 刪除元件 -->
      <DelProducts ref="delProductModal" :temp-product = 'tempProduct' @update = "getProducts" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination.vue'
import Productmodal from '@/components/backend/Productmodal.vue'
import DelProducts from '@/components/backend/DelProducts.vue'
export default {
  data () {
    return {
      isLoading: true,
      products: [],
      tempProduct: {
        // 第二層結構要定義才能雙向綁定
        imageUrl: [],
        options: {
          nearplace: [],
          map: [],
          images: []
        }
      },
      pagination: {},
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
  methods: {
    getProducts (num = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data
          this.pagination = res.data.meta.pagination
          if (this.tempProduct.id || this.isNew) {
            this.tempProduct = {
              imageUrl: [''],
              options: {
                nearplace: [],
                map: [],
                images: []
              }
            }
          }
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    openmodal (type, item) {
      if (type === 'new') {
        this.$refs.productModal.tempProduct = {
          imageUrl: [''],
          options: {
            nearplace: [],
            map: [],
            images: []
          }
        }
        this.isNew = true
        $('#productModal').modal('show')
      } else if (type === 'edit') {
        this.isNew = false
        this.$refs.productModal.getProduct(item.id)
      } else if (type === 'del') {
        this.tempProduct = { ...item }
        $('#delProductModal').modal('show')
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
