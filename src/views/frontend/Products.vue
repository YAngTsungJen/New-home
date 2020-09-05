<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <div class="loadingio-spinner-spin-b44lsmwv628"><div class="ldio-am4phneojyb">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div>
      </template>
    </loading>
    <div class="row d-flex justify-content-between bg-info pt-4 pb-4 mb-3">
      <div class="col mt-5">
        <h2 style="font-family: 'Russo One', sans-serif;">最新建案 </h2>
      </div>
      <div class="col img-fluid">
          <img src="https://images.unsplash.com/photo-1509952762474-040a7a370e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80" width="150px" height="150px" alt="">
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
                    <li><button class="py-2 px-3 mb-2 d-block text-muted btn btn-whitegreen"
                    @click.prevent="filterCategory = item"
                    :class="{ active: item === filterCategory }"
                    v-for="item in categories"
                    :key="item"> {{item}} </button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-10 mt-3 mb-3 d-flex flex-wrap">
          <div class="col-12 col-md-6 col-lg-4 mb-2 " v-for="item in filterCategories" :key="item.id">
            <div class="col-sm-6">
              <div class="card Regular shadow work-item" style="width: 18rem;">
                <div @click="goPage(item)">
                  <img :src="item.imageUrl[0]" class="img-fluid fadder" alt="">
                  <span class="ink"></span>
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
      <div class="row mt-2">
          <div class="col">
            <Pagination :pages="pagination" @update="getProducts" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
export default {
  data () {
    return {
      products: [],
      filterCategory: '',
      categories: ['烏日區', '大里區', '彰化區'],
      isLoading: false,
      pagination: {}
    }
  },
  components: {
    Pagination
  },
  methods: {
    goPage (item) {
      this.$router.push(`/product/${item.id}`)
    },
    getProducts () {
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
        )
        .then((response) => {
          this.products = response.data.data
          this.pagination = response.data.meta.pagination
          this.isLoading = false
          const { categoryName } = this.$route.params
          if (categoryName) {
            this.filterCategory = categoryName
          }
        })
    }
  },
  created () {
    this.getProducts()
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
.ink{
  height: 300px;
  width: 286px;
  background: rgb(145, 200, 0, 1);
  position: absolute;
  left: 0;
  opacity: 0;
}
.work-item:hover .search{
  cursor: pointer;
  opacity: 1;
  transition-duration: 0.2s;
  transition: all .8s
}
.work-item:hover .ink{
  cursor: pointer;
  opacity: 50%;
  transition-duration: 0.2s;
  transition: all .8s
}
@keyframes ldio-am4phneojyb {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.ldio-am4phneojyb div > div {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ff727d;
  animation: ldio-am4phneojyb 1s linear infinite;
}.ldio-am4phneojyb div:nth-child(1) > div {
  left: 148px;
  top: 88px;
  animation-delay: -0.875s;
}
.ldio-am4phneojyb > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 160px 100px;
}.ldio-am4phneojyb div:nth-child(2) > div {
  left: 130px;
  top: 130px;
  animation-delay: -0.75s;
}
.ldio-am4phneojyb > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 142px 142px;
}.ldio-am4phneojyb div:nth-child(3) > div {
  left: 88px;
  top: 148px;
  animation-delay: -0.625s;
}
.ldio-am4phneojyb > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 100px 160px;
}.ldio-am4phneojyb div:nth-child(4) > div {
  left: 46px;
  top: 130px;
  animation-delay: -0.5s;
}
.ldio-am4phneojyb > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 58px 142px;
}.ldio-am4phneojyb div:nth-child(5) > div {
  left: 28px;
  top: 88px;
  animation-delay: -0.375s;
}
.ldio-am4phneojyb > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 40px 100px;
}.ldio-am4phneojyb div:nth-child(6) > div {
  left: 46px;
  top: 46px;
  animation-delay: -0.25s;
}
.ldio-am4phneojyb > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 58px 58px;
}.ldio-am4phneojyb div:nth-child(7) > div {
  left: 88px;
  top: 28px;
  animation-delay: -0.125s;
}
.ldio-am4phneojyb > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 100px 40px;
}.ldio-am4phneojyb div:nth-child(8) > div {
  left: 130px;
  top: 46px;
  animation-delay: 0s;
}
.ldio-am4phneojyb > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 142px 58px;
}
.loadingio-spinner-spin-b44lsmwv628 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-am4phneojyb {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-am4phneojyb div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>
