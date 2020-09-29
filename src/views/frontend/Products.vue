<template>
  <div class="mt-5">
    <loading :active.sync="isLoading">
    </loading>
    <section class="container-fluid text-white banner-img">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-md-12 h-100">
            <div class="d-flex align-items-end h-100">
              <div class="mb-5">
                <h2>最新建案</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <nav aria-label="breadcrumb" class="mt-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">最新建案</li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="container mt-2 py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-9">
          <ul class="list-group list-group-horizontal justify-content-md-center card-hov">
            <li class="list-group-item" @click.prevent="filterCategory = ''" :class="{ active: filterCategory === '' }">
              全部建案
            </li>
            <li class="list-group-item" @click.prevent="filterCategory = item"
                :class="{ active: item === filterCategory }"
                v-for="item in categories" :key="item"> {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-md-4 mt-3" v-for="item in filterCategories" :key="item.id">
          <div class="card h-100 Regular shadow work-item">
            <div @click="goPage(item)">
              <img :src="item.imageUrl[0]" class="card-img-top img-fluid fadder" alt="建案照片">
              <span class="ink"></span>
              <span class="search"><i class="fas fa-search-plus"></i></span>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}
                <span class="badge badge-pill badge-success float-right ">{{ item.category }}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5 py-5">
      <div class="row">
        <div class="col">
          <Pagination :pages="pagination" @update="getProducts" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  data () {
    return {
      products: [],
      filterCategory: '',
      categories: ['烏日區', '大里區', '南屯區', '南區', '西區'],
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
  height: 100%;
}
.fadder{
  overflow: hidden;
  height: 100%;
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
  height: 100%;
  width: 100%;
  background: #e7a247;
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
.changecolor{
background-color: #B67965;
}
.card-hov{
  cursor: pointer;
}
.banner-img{
  background-image: url(https://images.unsplash.com/photo-1466350380309-a09bb7347af9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-position:center center;
  height: 300px;
}
@media (max-width: 575px) {
  .list-group-horizontal {
  flex-direction: column;
  }
}
</style>
