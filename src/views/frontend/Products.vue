<template>
  <div>
    <div class="d-flex flex-column flex-md-row justify-content-beteewn align-items-md-center align-items-start  text-dark bg-info">
      <div class="mb-md-0 mb-1 ml-auto">
        <h2 class="mb-0 " style="font-family: 'Russo One', sans-serif;" > 最新建案 </h2>
      </div>
      <div class="img-fluid mb-0 pt-2 pb-2">
          <img src="https://images.unsplash.com/photo-1509952762474-040a7a370e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80" width="15%" height="15%" alt="">
      </div>
    </div>
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
              <div class="card Regular shadow work-item" style="width: 18rem;">
                <div class="work-item">
                  <img @click="goPage(item)" :src="item.imageUrl[0]" class=" img-fluid fadder" alt="">
                  <span class="search"><i class="fas fa-search-plus"></i></span>
                </div>
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
.work-item{
  height: 300px;
}
.fadder{
  height:200px;
  overflow: hidden;
  width: 100%;
}
.search{
  font-size: 80px;
  position: absolute;
  top: 30%;
  left: 40%;
  color: white;
  opacity: 0;
}
.work-item:hover.search{
  opacity: 1;
  transition-duration: 0.2s;
}
</style>
