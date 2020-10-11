<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <section class="container-fluid text-white banner-img">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-md-12 h-100">
            <div class="d-flex align-items-end h-100">
              <div class="mb-5">
                <h2>預約專區</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5 ">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <ul class="list">
            <li :class="{ 'done': page === 1 || page === 2 || page === 3}">預約資訊</li>
            <li class="bar1" :class="{ 'done': page === 2 || page === 3}">填寫資料</li>
            <li class="bar2" :class="{ 'done': page === 3 }">確認訂單</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container mb-3">
      <div class="row justify-content-center">
        <div class="col-md-10 mx-auto step-3" :class="{ 'show': page === 3 }">
          <form @submit.prevent="payOrder()">
            <table class="table table-bordered text-center" style="background: #f8f9fa;">
              <thead>
                <tr>
                  <th scope="col-2"></th>
                  <th scope="col-2">案名</th>
                  <th scope="col-2">售價</th>
                </tr>
              </thead>
              <tbody v-for="item in order.products" :key="item.id">
                <tr>
                  <th scope="row" style="
                    width: 150px;
                    height:200px;
                    background-size: cover;
                    background-position: center;" class="rounded-0" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }"></th>
                  <td class="align-middle"> {{ item.product.title }} </td>
                  <td class="align-middle">  {{ item.product.price }} 萬 </td>
                </tr>
              </tbody>
            </table>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <table class="table table-bordered text-left" style="background: #f8f9fa;">
                      <tr class="border border-secondary">
                        <th scope="col">姓名</th>
                        <td> {{ form.name }} </td>
                      </tr>
                      <tr class="border border-secondary">
                        <th scope="col">信箱</th>
                        <td> {{ form.email }} </td>
                      </tr>
                      <tr class="border border-secondary">
                        <th scope="col">電話</th>
                        <td> {{ form.tel }} </td>
                      </tr>
                      <tr class="border border-secondary">
                        <th scope="col">地址</th>
                        <td> {{ form.address }} </td>
                      </tr>
                      <tr class="border border-secondary">
                        <th scope="col">預約日期</th>
                        <td> {{ form.reservation_date }} </td>
                      </tr>
                      <tr class="border border-secondary">
                        <th scope="col">預約時間</th>
                        <td> {{ form.reservation_time }} </td>
                      </tr>
                      <tr class="border border-secondary">
                        <th scope="col">留言</th>
                        <td> {{ form.message }} </td>
                      </tr>
                  </table>
                  <div class="btn-toolbar justify-content-between">
                    <button type="button" class="btn btn-cyan" @click="backtohome">返回首頁</button>
                    <button type="submit" class="btn btn-more">確認預約</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      page: 3,
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        reservation_date: '',
        reservation_time: '',
        payment: 'WebATM',
        message: ''
      },
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.data
          this.isLoading = false
        })
        .catch(() => {
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
          this.isLoading = false
        })
    },
    payOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.$http.post(url)
        .then(() => {
          this.getOrder()
          this.$bus.$emit('msg:push', '預約成功', 'success')
          this.isLoading = false
          this.$router.push('/success')
        })
        .catch(() => {
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
          this.isLoading = false
        })
    },
    backtohome () {
      this.$router.push('/')
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>

<style scoped>
.banner-img{
  background-image: url(https://images.unsplash.com/photo-1466350380309-a09bb7347af9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-position:center center;
  height: 300px;
}
</style>
