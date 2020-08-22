<template>
  <div>
    <div class="container">
      <div class="row flex-md-row-reverse flex-column">
        <!-- 要放banner -->
        <div class="col-md-6">
          <img
          src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
          alt=" class="img-fluid">
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3">
          <h2 class="font-weight-bold">立即預約</h2>
          <h5 class="font-weight-normal text-muted mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </h5>
          <div class="input-group mb-0 mt-4">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Swiper />
    <div class="bg-light py-7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <h3>Lorem ipsum</h3>
            <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
            <button class="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../components/frontend/Swiper'
export default {
  data () {
    return {
    }
  },
  components: {
    Swiper
  }
}
</script>
