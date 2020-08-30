<template>
  <div>
    <div class="modal fade" id="reserveModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">預約看屋</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <div class="container-fluid">
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
              </div>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      // 購物車
      cart: {}
    }
  },
  methods: {
    createOrder () {
      console.log('送出表單')
      const vm = this
      const order = { ...vm.form }
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.$http.post(url, order).then(res => {
        this.$emit('update')
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
    }
  },
  created () {
    this.getCart()
  }
}
</script>
