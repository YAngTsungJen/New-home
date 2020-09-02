<template>
  <div>
    <div class="container mb-3">
      <div class="d-flex flex-column flex-md-row justify-content-beteewn align-items-md-center align-items-start  text-dark bg-info">
        <div class="mb-md-0 mb-1 ml-auto">
          <h2 class="mb-0 " style="font-family: 'Russo One', sans-serif;">留言版</h2>
        </div>
        <div class="img-fluid mb-0 pt-2 pb-2">
          <img src="https://images.unsplash.com/photo-1509952762474-040a7a370e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80" width="15%" height="15%" alt="">
        </div>
      </div>
      <div>
        <h2>留言版</h2>
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
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getsingleOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.$http.get(url)
        .then((response) => {
          this.order = response.data.data
          console.log(this.order)
        })
    }
  }
}
</script>
