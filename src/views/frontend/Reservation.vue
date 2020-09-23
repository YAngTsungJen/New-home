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
      <section class="container mt-5 ">
        <div class="row justify-content-center">
          <!-- <div class="h-100" v-if="!cart[0]">
            <div class="row p-5">
              <div class="col-md-8 mx-auto text-center py-4">
                <h2 class="mb-5"> 還未做任何預約喔，請返回新案專區！</h2>
                <router-link to="/products">新案專區</router-link>
              </div>
            </div>
          </div> -->
          <div class="col-md-10 mx-auto step-1" :class="{ 'show': page === 1 }">
            <table class="table table-bordered text-center" style="background: #f8f9fa;">
              <thead>
                <tr>
                  <th scope="col-3"></th>
                  <th scope="col-3">案名</th>
                  <th scope="col-3">售價</th>
                  <th scope="col-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td scope="row" style="
                    width: 200px;
                    height:200px;
                    background-size: cover;
                    background-position: center center;" class="rounded-0" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }"></td>
                  <td class="align-middle"> {{ item.product.title }} </td>
                  <td class="align-middle"> {{ item.product.price }} 萬 </td>
                  <td class="align-middle">
                    <button type="button" class="btn btn-outline-danger"
                    @click="removeCart(item.product.id)">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row d-flex justify-content-end no-gutters">
              <button type="button" class="btn btn-more" @click="page = 2">下一步</button>
            </div>
          </div>
        </div>
      </section>
      <section class="container ">
        <div class="row justify-content-center">
          <div class="col-md-10 mx-auto step-2" :class="{ 'show': page === 2 }">
            <div>
              <h4 class="text-center">客戶資料</h4>
              <span >
                <validation-observer v-slot="{ invalid }">
                  <form @submit.prevent="createOrder" class="text-left pr-3">
                    <div class="row d-flex justify-content-center">
                      <div class="col-md-6">
                        <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3"
                          tag="div">
                            <label for="name" class="col-form-label col-form-label">姓名</label>
                            <input type="text" name="姓名" id="name" class="form-control form-control" :class="classes" v-model="form.name">
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider rules="required|email" v-slot="{ errors, classes }" class="form-group mt-3"
                        tag="div">
                            <label for="email" class="col-form-label col-form-label">信箱</label>
                            <input type="email" name="信箱" id="email" class="form-control form-control" :class="classes" v-model="form.email">
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider rules="required|min:8" v-slot="{ errors, classes }" class="form-group mt-3"
                          tag="div">
                            <label for="tel" class="col-form-label col-form-label">電話</label>
                            <input type=" tel" name="電話" id="tel" class="form-control form-control" :class="classes" v-model="form.tel">
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                            <label for="address" class="col-form-label col-form-label">地址</label>
                            <input type="text" name="地址" id="address" class="form-control form-control" :class="classes"
                                v-model="form.address">
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                            <label for="reservation_date" class="col-form-label col-form-label">預約日期</label>
                            <input type="date" name="預約日期" id="reservation_date" class="form-control form-control" :class="classes" v-model="form.reservation_date">
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                            <label for="reservation_time" class="col-form-label col-form-label">預約時間</label>
                            <input type="time" name="預約時間" id="reservation_time" class="form-control form-control" :class="classes" v-model="form.reservation_time">
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                      </div>
                      <div class="col-md-6">
                        <validation-provider v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                            <label for="message" class="col-form-label col-form-label">留言</label>
                            <textarea type="text" name="留言" id="message" rows="6" placeholder="請留言給告知我們" class="form-control form-control" :class="classes"
                                v-model="form.message"></textarea>
                            <span class="invalid-feedback"> {{ errors[0] }} </span>
                        </validation-provider>
                        <div class="text-right">
                          <button type="button" class="btn btn-cyan" @click.prevent="page = 1"> 上一步</button>
                          <button type="submit" @click="page = 3" class="btn btn-more" :disabled="invalid">下一步</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </validation-observer>
              </span>
            </div>
          </div>
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
      cart: [],
      carttotal: [],
      isLoading: false,
      page: 1,
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
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then(res => {
        this.cart = res.data.data
        this.isLoading = false
      }).catch(() => {
        this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        this.isLoading = false
      })
    },
    removeCart (id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(res => {
        this.getCart()
      })
    },
    createOrder () {
      const vm = this
      const order = { ...vm.form }
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      vm.$http.post(url, order).then(res => {
        vm.getCart()
        vm.orderId = res.data.data.id
        vm.getsingleOrder()
      })
    },
    getsingleOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.$http.get(url)
        .then((response) => {
          this.order = response.data.data
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.$http.post(url)
        .then(() => {
          this.getsingleOrder()
          this.$bus.$emit('msg:push', '預約成功', 'success')
        })
    },
    backtohome () {
      this.$router.push('/')
    }
  },
  created () {
    this.getCart()
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
