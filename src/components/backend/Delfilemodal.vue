<template>
  <div>
    <div class="modal" id="delFileModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">刪除圖片</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div style="
                      height: 100px;
                      width: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                :style="{ backgroundImage: `url(${tempStorage.path})` }">
            </div>
            是否刪除圖片(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-outline-secondary"
                    data-dismiss="modal">
              取消
            </button>
            <button type="button"
                    class="btn btn-danger"
                    @click.prevent="delFile">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {

    }
  },
  props: {
    tempStorage: {
      type: Object,
      required: true
    }
  },
  methods: {
    delFile () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.tempStorage.id}`
      this.$http.delete(url).then(res => {
        $('#delFileModal').modal('hide')
        this.$emit('update')
        this.$bus.$emit('msg:push', '拿到資料囉', 'success')
      })
        .catch(() => {
          $('#delFileModal').modal('hide')
          this.$bus.$emit('msg:push', '無法取得資料，稍後再試', 'danger')
        })
    }
  }
}
</script>
