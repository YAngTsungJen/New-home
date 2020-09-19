<template>
    <div>
      <loading :active.sync="isLoading">
      </loading>
      <div class="table-responsive">
        <table class="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">編號
              </th>
              <th scope="col">圖片</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in storages" :key="item.id" >
              <th>
                0
              </th>
              <td >
                  <div style="
                    height: 100px;
                    width: 100px;
                    background-size: cover;
                    background-position: center;"
                    :style="{ backgroundImage: `url(${item.path})` }">
                  </div>
              </td>
              <td>
                <button class="btn btn-outline-danger"
                    @click.prevent="openModal(item)">刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination class="justify-content-center" :pages="pagination" @update="getFiles"></pagination>
      <Delfilemodal :temp-storage ="tempStorage" @update="getFiles" />
    </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination'
import Delfilemodal from '@/components/backend/Delfilemodal'

export default {
  data () {
    return {
      categories: ['烏日區', '大里區', '彰化區'],
      storages: [],
      tempStorage: {},
      pagination: {},
      isloading: true
    }
  },
  components: {
    Pagination,
    Delfilemodal
  },
  created () {
    this.getFiles()
  },
  methods: {
    getFiles (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${page}`
      this.$http.get(url).then((res) => {
        this.storages = res.data.data
        this.pagination = res.data.meta.pagination
        this.isLoading = false
      })
        .catch(() => {
          this.isLoading = false
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    },
    openModal (item) {
      $('#delFileModal').modal('show')
      this.tempStorage = { ...item }
    }
  }
}
</script>
