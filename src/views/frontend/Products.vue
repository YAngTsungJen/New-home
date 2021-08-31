<template>
  <div class="mt-5">
    <loading :active.sync="isLoading">
    </loading>
    <section class="container-fluid text-white banner-img banner-product">
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
          <div class="card">
            <div @click="goPage(item)" class="card-img-sm" :style="{background: `url(${item.imageUrl[0]}) center center no-repeat`, backgroundSize: 'cover'}">
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
import Pagination from '@/components/Pagination.vue'
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
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.$http
        .get(url)
        .then((response) => {
          this.products = response.data.data
          this.pagination = response.data.meta.pagination
          const { categoryName } = this.$route.params
          if (categoryName) {
            this.filterCategory = categoryName
          }
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    filterCategories () {
      return this.products.filter((item) =>
        item.category
          .toLowerCase()
          .includes(this.filterCategory.toLowerCase())
      )
    }
  }
}
</script>
