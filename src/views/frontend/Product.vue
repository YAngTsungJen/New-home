<template>
  <div>
    <loading :active.sync="isLoading">
    </loading>
    <section class="container-fluid text-white banner-img banner-product">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-md-12 h-100">
            <div class="d-flex align-items-end h-100">
              <div class="mb-5">
                <h2>{{ product.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-muted">最新建案</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="container mt-1">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="row">
            <div class="col-lg-8">
              <img :src="product.imageUrl[0]" class=" img-fluid w-100 h-100" alt="東城名邸">
            </div>
            <div class="col-lg-4 mt-3">
              <div class="row">
                <div class="col-md-12">
                  <div class="d-flex">
                    <h2 class="text-danger">{{ product.price }}<small>萬元</small></h2>
                    <div class="ml-auto">
                  <button type="button" class="btn btn-light" @click.prevent="back()">返回</button>
                  <button type="button" class="btn btn-more" @click.prevent="addCart(product,product.num)">預約看屋</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 col-md-9" style="font-size: 20px;">
                  <ul class="list-unstyled my-1">
                    <li>格局：  {{ product.options.structure }}</li>
                    <li>屋齡：  {{ product.options.homeage }}</li>
                    <li>權狀坪數：  {{ product.options.landnumber }}</li>
                    <li>樓層：  {{ product.options.floor }}</li>
                    <li>朝向：  {{ product.options.direction }}</li>
                    <li>地址：  {{ product.options.address }}</li>
                    <li class="text-danger h3 mt-3">{{ product.options.amount }}</li>
                  </ul>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-12 col-md-9">
                  <iframe :src="product.options.map" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-3">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="row">
            <div class="col-12">
              <h4 class="text-more">房屋資料</h4>
            </div>
            <div class="col-12 text-left">
              <div class="row">
                <div class="col-md-3">
                  <p><i class="fas fa-house-user pr-2"></i>現況：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.now }}
                    </span>
                  </p>
                </div>
                <div class="col-md-4">
                  <p><i class="fas fa-laptop-house pr-2"></i>型態：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.type }}
                    </span>
                  </p>
                </div>
                <div class="col-md-5">
                  <p><i class="fas fa-dungeon pr-2"></i>裝潢程度：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.decoration }}
                    </span>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <p><i class="fas fa-blender pr-2"></i>管理費：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.managefees }}
                    </span>
                  </p>
                </div>
                <div class="col-md-4">
                  <p><i class="fas fa-fan pr-2"></i>帶租約：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.lease }}
                    </span>
                  </p>
                </div>
                <div class="col-md-5">
                  <p><i class="fas fa-archway pr-2"></i>法定用途：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.use }}
                    </span>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <p><i class="fas fa-car pr-2"></i>車位：
                    <span class="text-center"
                    style="display:inline-block;">
                    {{ product.options.car }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <h4 class="text-more">坪數說明</h4>
            </div>
            <div class="col-12 col-md-12 text-left">
              <div class="row">
                <div class="col-lg-3">
                  <p><i class="fas fa-landmark pr-2"></i>主建物：
                    <span
                    style="display:inline-block;">
                    {{ product.options.mainbuilding }}
                    </span>
                  </p>
                </div>
                <div class="col-lg-4">
                  <p><i class="fas fa-landmark pr-2"></i>附屬建物：
                    <span
                    style="display:inline-block;">
                    {{ product.options.subbuilding }}
                    </span>
                  </p>
                </div>
                <div class="col-md-5">
                  <p><i class="fas fa-landmark pr-2"></i>土地坪數：
                    <span
                    style="display:inline-block;">
                    {{ product.options.land }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <h4 class="text-more">生活機能</h4>
            </div>
            <div class="col-md-9 text-left" v-if="product.options.nearplace">
              <div class="row mt-md-2">
                <div class="col-md-4">
                  <p><i class="fas fa-store pr-2"></i>{{ product.options.nearplace[0] }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p><i class="fab fa-app-store-ios pr-2"></i>{{ product.options.nearplace[1] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <h4 class="text-more">屋況特色</h4>
            </div>
            <div class="col-md-9 text-left">
              <div class="row mt-md-2">
                <div class="col-md-8">
                  <p>
                    {{ product.options.feature }}
                  </p>
                  <p>{{ product.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-12 mx-auto text-center">
          <h2 class="text-center mb-5">建築過程</h2>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="d-flex flex-wrap" v-for="(item,index) in product.imageUrl" :key="index">
              <div class="col-sm-3 mb-3">
                <div @click="show(index)" class="card card-img-sm" :style="{background: `url(${item}) center center no-repeat`, backgroundSize: 'cover', height:'300px', width: '18rem'}">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        num: 1,
        imageUrl: [],
        options: {}
      },
      imgs: [],
      visible: false,
      index: null,
      isLoading: false
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    },
    getProduct () {
      this.isLoading = true
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http
        .get(url)
        .then((response) => {
          this.product = response.data.data
          this.imgs = response.data.data.imageUrl
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    addCart (item, quantity = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity
      }
      this.$http
        .post(url, cart)
        .then(() => {
          this.$bus.$emit('get-cart')
          this.isLoading = false
          this.$bus.$emit('msg:push', '已幫您加入預約列表，請前往預約專區', 'success')
        })
        .catch(error => {
          const errorData = error.response.data.errors
          if (errorData) {
            this.isLoading = false
            this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
          }
        })
    },
    back () {
      this.$router.push('/products')
    }
  }
}
</script>
