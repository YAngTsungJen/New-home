<template>
  <div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row mb-6" >
        <div class="col-12 col-lg-2">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1"
                @click.prevent="filterCategory = ''"
                :class="{ active: filterCategory === '' }">
                  <h4 class="mb-0">
                    最新建案
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled" >
                    <li><a href="#" class="py-2 d-block text-muted"
                    @click.prevent="filterCategory = item"
                    :class="{ active: item === filterCategory }"
                    v-for="item in categories"
                    :key="item"> {{item}} </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-10 mt-3 mb-3 d-flex flex-wrap">
          <div class="col-12 col-md-6 col-lg-4 mb-2 " v-for="item in filterCategories" :key="item.id">
            <!-- v-for="item in products" :key="item.id" -->
            <div class="col-sm-6">
              <div class="card Regular shadow fadder" style="width: 18rem;">
                <img @click="goPage(item)" :src="item.imageUrl[0]" class=" img-fluid" style="height:200px;" alt="">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}
                    <span class="badge badge-pill badge-success float-right ">{{item.category}}</span>
                  </h5>
                </div>
              </div>
            </div>
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
      products: [],
      filterCategory: '',
      categories: ['烏日區', '大里區', '彰化區']
    }
  },
  methods: {
    goPage (item) {
      this.$router.push(`/product/${item.id}`)
    }
  },
  created () {
    console.log('uuid:', process.env.VUE_APP_UUID)
    this.$http
      .get(
        `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      )
      .then((response) => {
        console.log(response)
        this.products = response.data.data
        const { categoryName } = this.$route.params
        if (categoryName) {
          this.filterCategory = categoryName
        }
        console.log(this.products)
      })
  },
  computed: {
    filterCategories () {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase())
          return data
        })
      }
      return this.products
    }
  }
}
</script>

<style scoped>
/* .fadder:hover{
  background-color: rgba(145,200,0,1);
  z-index: 100;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
} */
</style>
