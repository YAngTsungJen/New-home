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
            <li :class="{ 'done': page === 1 || page === 2 || page === 3}">1</li>
            <li class="bar1" :class="{ 'done': page === 2 || page === 3}">2</li>
            <li class="bar2" :class="{ 'done': page === 3 }">3</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container mb-3">
      <div class="row justify-content-center">
        <div class="col-md-10 mx-auto step-2" :class="{ 'show': page === 2 }">
          <div>
            <h2 class="text-center">客戶資料</h2>
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
                        <router-link to="/reservation" class="btn btn-cyan">
                          上一步
                        </router-link>
                        <button type="submit" class="btn btn-more" :disabled="invalid">下一步</button>
                      </div>
                      <div>
                        <h3 class="text-center">預約摘要</h3>
                        <table class="table table-bordered text-center" style="background: #f8f9fa;">
                          <thead>
                            <tr>
                              <th scope="col-3"></th>
                              <th scope="col-3">案名</th>
                              <th scope="col-3">售價</th>
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
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </form>
              </validation-observer>
            </span>
          </div>
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
      isLoading: false,
      page: 2,
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
    createOrder () {
      this.isLoading = true
      const order = { ...this.form }
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.$http.post(url, order).then(res => {
        this.$bus.$emit('get-cart')
        this.$bus.$emit('msg:push', '成功建立訂單囉', 'success')
        this.orderId = res.data.data.id
        this.$router.push(`/cartcheck/${res.data.data.id}`)
        this.getCart()
        this.isLoading = false
      }).catch(() => {
        this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        this.isLoading = false
      })
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
