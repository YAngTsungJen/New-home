<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-pulse-n5w7ej7np6"><div class="ldio-y8241lbpf5">
      <div></div><div></div><div></div>
      </div></div>
    </loading>
    <div class="mt-4 text-right">
      <button type="button" class="btn btn-primary" @click.prevent="openModal('new')" >建立優惠券</button>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered" v-if="coupons.length > 0">
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">折扣碼</th>
            <th scope="col">折扣百分比</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td> {{ item.title }} </td>
            <td> {{ item.code }} </td>
            <td> {{ item.percent }} % </td>
            <td> {{ item.deadline_at }} </td>
            <td class="text-center">
              <strong class="text-success" v-if="item.enabled">啟用</strong>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button type="button" class="btn btn-primary btn-sm" @click.prevent="openModal('edit',item)" >編輯</button>
              <button type="button" class="btn btn-danger btn-sm" @click.prevent="openModal('del',item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CouponModal ref="couponModal" :is-new="isNew" @update ="getCoupons" />
    <DelCouponModal :temp-coupons="tempCoupons" @update ="getCoupons" />
      <h2>這是後台優惠券</h2>
  </div>
</template>

<script>
import $ from 'jquery'
import CouponModal from '@/components/backend/CouponModal.vue'
import DelCouponModal from '@/components/backend/DelCouponModal.vue'
export default {
  data () {
    return {
      coupons: [],
      tempCoupons: {
        title: '',
        code: '',
        percent: 100,
        enabled: false,
        deadline_at: ''
      },
      isNew: false,
      isLoading: false
    }
  },
  components: {
    CouponModal,
    DelCouponModal
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          this.coupons = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
          this.$bus.$emit('msg:push', '拿到資料囉', 'success')
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    openModal (type, item) {
      if (type === 'new') {
        this.isNew = true
        this.$refs.couponModal.tempCoupons = {}
        $('#couponModal').modal('show')
      } else if (type === 'edit') {
        this.isNew = false
        this.$refs.couponModal.getCoupon(item.id)
      } else if (type === 'del') {
        this.tempCoupons = { ...item }
        $('#delCouponModal').modal('show')
      }
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
