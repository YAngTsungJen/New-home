<template>
    <div>
      <loading :active.sync="isLoading">
        <template slot="default">
        </template>
      </loading>
      <div class="container">
        <div class="row p-2">
          <div class="col mt-3 mb-3">
            <h3>預約專區</h3>
          </div>
        </div>
        <div class="row d-flex justify-content-center p-2 no-gutters ">
          <div class="col-3">
            <span>1</span>
            <p class="bar" :class="{ 'focus': page === 1 }">購物車</p>
          </div>
          <div class="col-3">
            <span>2</span>
            <p class="bar" :class="{ 'focus': page === 2 }">填寫資料</p>
          </div>
          <div class="col-3">
            <span>3</span>
            <p class="bar" :class="{ 'focus': page === 3 }">確認訂單</p>
          </div>
        </div>
        <div class="row  d-flex justify-content-center p-2 no-gutters">
          <div class="col-9 step-1" :class="{ 'show': page === 1 }">
            <table class="table tablebg" style="background:#fff;">
              <thead>
                <tr>
                  <th scope="col-2"></th>
                  <th scope="col-2">案名</th>
                  <th scope="col-2">售價</th>
                  <th scope="col-2">取消</th>
                </tr>
              </thead>
              <tbody v-for="item in cart" :key="item.id">
                <tr>
                  <th scope="row" style="
                    width: 200px;
                    height:120px;
                    background-size: cover;
                    background-position: center;" class="rounded-0" :style="{ backgroundImage: `url(${ item.product.imageUrl[0] })` }"></th>
                  <td> {{item.product.title}} </td>
                  <td> {{item.product.price}} 萬 </td>
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                        @click="removeCart(item.product.id)">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row d-flex justify-content-center no-gutters">
              <button type="button" class="btn btn-cyan mr-auto">返回購物區</button>
              <button type="button" class="btn btn-success" @click="page = 2">前往結帳</button>
            </div>
          </div>
          <div class="col-9 step-2" :class="{ 'show': page === 2 }">
            <div>
              <h4 class="text-left customer">客戶資料</h4>
              <span >
                <validation-observer v-slot="{ invalid }">
                  <form @submit.prevent="createOrder" class="text-left pr-3">
                    <div class="row d-flex justify-content-center">
                      <div class="col-5">
                        <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3"
                          tag="div">
                            <label for="name" class="col-form-label col-form-label-sm">姓名</label>
                            <input type="text" name="姓名" id="name" class="form-control form-control-sm" :class="classes" v-model="form.name">
                            <span class="invalid-feedback"> {{errors[0]}} </span>
                        </validation-provider>
                        <validation-provider rules="required|email" v-slot="{ errors, classes }" class="form-group mt-3"
                        tag="div">
                            <label for="email" class="col-form-label col-form-label-sm">信箱</label>
                            <input type="email" name="信箱" id="email" class="form-control form-control-sm" :class="classes" v-model="form.email">
                            <span class="invalid-feedback"> {{errors[0]}} </span>
                        </validation-provider>
                        <validation-provider rules="required|min:8" v-slot="{ errors, classes }" class="form-group mt-3"
                          tag="div">
                            <label for="tel" class="col-form-label col-form-label-sm">電話</label>
                            <input type=" tel" name="電話" id="tel" class="form-control form-control-sm" :class="classes" v-model="form.tel">
                            <span class="invalid-feedback"> {{errors[0]}} </span>
                        </validation-provider>
                        <validation-provider rules="required" v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                            <label for="address" class="col-form-label col-form-label-sm">地址</label>
                            <input type="text" name="地址" id="address" class="form-control form-control-sm" :class="classes"
                                v-model="form.address">
                            <span class="invalid-feedback"> {{errors[0]}} </span>
                        </validation-provider>
                      </div>
                      <div class="col-5">
                        <validation-provider v-slot="{ errors, classes }" class="form-group mt-3" tag="div">
                            <label for="message" class="col-form-label col-form-label-sm">留言</label>
                            <textarea type="text" name="留言" id="message" rows="6" placeholder="請留言給告知我們" class="form-control form-control-sm" :class="classes"
                                v-model="form.message"></textarea>
                            <span class="invalid-feedback"> {{errors[0]}} </span>
                        </validation-provider>
                        <div class="text-right">
                          <button type="submit" @click="page = 3" class="btn btn-success" :disabled="invalid">提交訂單</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </validation-observer>
              </span>
              <div class="text-left">
                <button type="button" class="btn btn-cyan" @click.prevent="page = 1"> 返回購物車</button>
              </div>
            </div>
          </div>
          <div class="col-9 step-3" :class="{ 'show': page === 3 }">
            <table class="table tablebg" style="background:#fff;">
              <thead>
                <tr>
                  <th scope="col-2"></th>
                  <th scope="col-2">案名</th>
                  <th scope="col-2">售價</th>
                  <th scope="col-2">取消</th>
                </tr>
              </thead>
              <tbody v-for="item in order.products" :key="item.id">
                <tr>
                  <th scope="row" style="
                    width: 200px;
                    height:120px;
                    background-size: cover;
                    background-position: center;" class="rounded-0" :style="{ backgroundImage: `url()` }"></th>
                  <td>  </td>
                  <td>  萬 </td>
                </tr>
              </tbody>
            </table>
            <div>123</div>
            <div class="row d-flex justify-content-center">
              <div class="col-6">
                <table class="table table-borderless  ">
                    <tr class="border border-secondary">
                      <th scope="col">姓名</th>
                      <td> {{form.name}} </td>
                    </tr>
                    <tr class="border border-secondary">
                      <th scope="col">信箱</th>
                      <td> {{form.email}} </td>
                    </tr>
                    <tr class="border border-secondary">
                      <th scope="col">電話</th>
                      <td> {{form.tel}} </td>
                    </tr>
                    <tr class="border border-secondary">
                      <th scope="col">地址</th>
                      <td> {{form.address}} </td>
                    </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Toast from '../../Toast'
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
        console.log(this.cart)
        this.isLoading = false
      }).catch(error => {
        console.log(error)
        Toast.fire({
          title: '無法取得資料，稍後再試',
          icon: 'error'
        })
        this.isLoading = false
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
    createOrder () {
      console.log('送出表單')
      const vm = this
      const order = { ...vm.form }
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.$http.post(url, order).then(res => {
        vm.getCart()
      })
    },
    getsingleOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.$http.get(url)
        .then((response) => {
          this.order = response.data.data
          console.log(this.order)
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.$http.post(url)
        .then(res => {
          this.getsingleOrder()
          console.log(res)
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped>
.container{
  background: hsla(0,0%,66.7%,.1)
}
.tablebg{
  background:#fff;

}
.customer{
  background: olivedrab;
  padding: 10px;
}
</style>
