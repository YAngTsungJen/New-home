<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
        <h3>{{product.title}}</h3>
        <h3>{{product.description}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    this.isLoading = true
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      )
      .then((response) => {
        console.log(response)
        this.product = response.data.data
        console.log(this.product)
        this.isLoading = false
      }).catch((error) => {
        console.log(error)
        this.isLoading = false
      })
  }
}
</script>
