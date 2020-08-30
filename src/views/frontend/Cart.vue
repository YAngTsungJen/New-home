<template>
  <div>
    <div class="container mb-3">
      <div class="d-flex flex-column flex-md-row justify-content-beteewn align-items-md-center align-items-start  text-dark bg-info">
        <div class="mb-md-0 mb-1 ml-auto">
          <h2 class="mb-0 " style="font-family: 'Russo One', sans-serif;"> 留言 </h2>
        </div>
        <div class="img-fluid mb-0 pt-2 pb-2">
          <img src="https://images.unsplash.com/photo-1509952762474-040a7a370e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80" width="15%" height="15%" alt="">
        </div>
      </div>
      <div>
        <h2>留言版</h2>
      </div>
      <div class="my-5 row justify-content-center ">
        <validation-observer v-slot="{ invalid }" class="col-md-6 text-left">
          <form @submit.prevent="createOrder">
            <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3"
              tag="div">
                <label for="name">姓名</label>
                <input type="text" name="姓名" id="name" class="form-control" :class="classes" v-model="form.name">
                <span class="invalid-feedback"> {{errors[0]}} </span>
            </validation-provider>
            <validation-provider rules="required|email" v-slot="{ errors, classes }" class="form-group mt-3"
            tag="div">
                <label for="email">信箱</label>
                <input type="email" name="信箱" id="email" class="form-control" :class="classes" v-model="form.email">
                <span class="invalid-feedback"> {{errors[0]}} </span>
            </validation-provider>
            <validation-provider rules="required|min:8" v-slot="{ errors, classes }" class="form-group mt-3"
              tag="div">
                <label for="tel">電話</label>
                <input type=" tel" name="電話" id="tel" class="form-control" :class="classes" v-model="form.tel">
                <span class="invalid-feedback"> {{errors[0]}} </span>
            </validation-provider>
            <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                <label for="address">地址</label>
                <input type="text" name="地址" id="address" class="form-control" :class="classes"
                    v-model="form.address">
                <span class="invalid-feedback"> {{errors[0]}} </span>
            </validation-provider>
            <!-- <validation-provider  v-slot="{ errors, classes }" class="form-group mt-3"
                tag="div">
                <label for="payment">付款方式</label>
                <select type="select" name="付款方式" id="payment" class="form-control" :class="classes" v-model="form.payment">
                    <option value="" disabled selected>請選擇</option>
                    <option value="WebATM">Web ATM</option>
                    <option value="ATM">ATM</option>
                    <option value="Barcode">Barcode</option>
                    <option value="Credit">Credit</option>
                    <option value="Applepay">Apple pay</option>
                    <option value="GooglePay">Google Pay</option>
                    <option value="CVS">CVS</option>
                </select>
                <span class="invalid-feedback"> {{errors[0]}} </span>
            </validation-provider> -->
            <validation-provider v-slot="{ errors, classes }" class="form-group" tag="div">
                <label for="message">留言</label>
                <textarea type="text" name="留言" id="message" class="form-control" :class="classes"
                    v-model="form.message"></textarea>
                <span class="invalid-feedback"> {{errors[0]}} </span>
            </validation-provider>
                  <div class="text-right">
                      <button type="submit" class="btn btn-primary mt-3" :disabled="invalid">確認送出</button>
                  </div>
              </form>
          </validation-observer>
      </div>
      <div class="row my-5">
        <div class="col"><h4>詢問欄</h4>
        <ul>
          <li >
            <h5>{{ form.name }}</h5>
            <p>{{form.message}} </p>
          </li>
        </ul>
        </div>
        <div class="col-6 ml-auto">回覆您請耐心等候</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: 'WebATM',
        message: ''
      },
      // 遠端資料
      products: [],
      tempProducts: {
        num: 0
      },
      status: {
        loadingItem: ''
      },
      // 購物車
      cart: {},
      cartTotal: 0,
      quantity: 0
    }
  },
  methods: {
    createOrder () {
      console.log('送出表單')
      const vm = this
      const order = { ...vm.form }
      // if (vm.coupon.enabled === true) {
      //   order.coupon = vm.coupon.code
      // }
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.$http.post(url, order).then(res => {
        vm.getCart()
      })
    },
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then(res => {
        this.cart = res.data.data
        console.log(this.cart)
      }).catch(error => {
        console.log(error)
      })
    },
    removeAllCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http.delete(url).then(res => {
        this.getCart()
      }).catch(error => {
        console.log(error)
      })
    },
    removeCart (id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(res => {
        this.getCart()
      }).catch(error => {
        console.log(error)
      })
    },
    updateQuantity (id, num = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const updateData = {
        product: id,
        quantity: num
      }
      this.$http.patch(url, updateData).then(res => {
        this.getCart()
      }).catch(error => {
        console.log(error)
      })
    },
    addCart (id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(url, cart).then(res => {
        this.getCart()
        this.getQuantity()
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    getQuantity () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(res => {
          this.quantity = res.data.data.length === 0 ? 0 : res.data.data.map(item => item.quantity).reduce((first, current) => first + current)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getProducts (page = 1) { // 整筆 參數預設值
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}` // 加入page列表
      this.$http.get(url, this.products).then((res) => {
        this.isLoading = false
        console.log(res)
        this.products = res.data.data
        console.log(this.products)
      }).catch((error) => {
        this.isLoading = false
        console.log(error)
      })
    },
    getProduct (id) { // 單筆
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      console.log(id)
      this.$http.get(url).then(res => {
        console.log(res)
        this.tempProducts = res.data.data
        this.tempProducts.num = 1
        $('#productModal').modal('show')
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.$http.post(url, { code: this.coupon_code }).then(res => {
        console.log(res)
        this.getCart()
        this.coupon = res.data.data
      })
        .catch(error => {
          console.log(error.response.data.errors)
        })
    }
  },
  created () {
    this.getCart()
    this.getProducts()
    this.getQuantity()
  }
}
</script>
