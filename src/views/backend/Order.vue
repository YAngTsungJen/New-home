<template>
    <div>
        <!-- <loading :active.sync="isLoading"></loading> -->
        <div class="table-responsive">
          <table class="table table-striped mt-4">
            <thead>
              <tr>
                <th width="140">編號</th>
                <th width="140">購買時間</th>
                <th width="140">購買款項</th>
                <th width="140">付款方式</th>
                <th width="140">是否付款</th>
                <th width="140">客戶資料</th>
              </tr>
            </thead>
            <tbody v-for="item in orders" :key="item.id">
              <tr>
                <th scope="row"> {{ item.products.length}} </th>
                <th scope="row"> {{ item.created.datetime }} </th>
                <th scope="row">
                  <ul class="list-unstyled">
                    <li v-for="(product, i) in item.products"
                      :key="i">
                      {{ product.product.title }} 數量：{{ product.quantity}}{{ product.product.unit }}
                    </li>
                  </ul>
                </th>
                <td scope="row"> {{ item.payment }} </td>
                <td>
                  <div class="custom-control custom-switch">
                    <input :id="item.id"
                          v-model="item.paid"
                          type="checkbox"
                          class="custom-control-input"
                          @change="updatePayment(item)">
                    <label class="custom-control-label"
                          :for="item.id">
                      <strong v-if="item.paid"
                              class="text-success">已付款</strong>
                      <span v-else
                            class="text-muted">尚未付款</span>
                    </label>
                  </div>
                </td>
                <td scope="row">
                  <button class="btn btn-outline-primary btn-sm mr-1"
                    @click.prevent = "openModal(item) " >
                    查看
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>訂單列表</h2>
      <!-- 分頁元件 -->
      <pagination class="justify-content-center" :pages="pagination" @update="getOrders"></pagination>
      <Ordermodal ref="orderModal" />
    </div>
</template>

<script>
import Pagination from '../../components/Pagination'
import Ordermodal from '../../components/backend/Ordermodal'
export default {
  data () {
    return {
      orders: [],
      pagination: {},
      order: {
        user: {}
      }
    }
  },
  components: {
    Pagination,
    Ordermodal
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`
      this.$http.get(url).then((res) => {
        console.log(res)
        this.orders = res.data.data
        this.pagination = res.data.meta.pagination
      })
        .catch((error) => {
          console.log(error)
        })
    },
    updatePayment (item) {
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`
      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`
      }
      this.$http
        .patch(url, item.id)
        .then((res) => {
          console.log(res)
          this.getOrders()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openModal (item) {
      this.$refs.orderModal.getOrder(item.id)
    }
  }
}
</script>
