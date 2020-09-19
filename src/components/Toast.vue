<template>
  <div>
    <!-- Position toasts -->
    <div style="position: fixed; top: 15px; right: 15px; z-index:10000;">
      <div
        v-for="(msg,idx) in msgs"
        :id="`toast-${idx}`"
        :key="msg.timestamp"
        class="toast fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong
            class="mr-auto"
            :class="`text-${msg.status}`"
          >
            <span>
              <i class="fas fa-comments" />
            </span> 捷登開發
          </strong>
          <small class="text-muted ml-3">現在</small>
          <button
            type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
            data-autohide="false"
            @click="closeToast(`toast-${idx}`)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          {{ msg.msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Toast',
  data () {
    return {
      msgs: [
        // 丟message進去
      ]
    }
  },
  created () {
    this.$bus.$on('msg:push', (msg, status = 'warning') => {
      this.updateMsg(msg, status)
    })
  },
  beforeDestroy () {
    this.$bus.$off('msg:push')
  },
  methods: {
    updateMsg (msg, status) {
      const timestamp = Math.floor(new Date() / 1000)
      this.msgs.push({
        msg,
        status,
        timestamp
      })
      this.removeMsgWithTiming(timestamp) // 五秒後移除該 Toast
    },
    removeMsgWithTiming (timestamp) {
      setTimeout(() => {
        this.msgs.forEach((el, idx) => {
          if (el.timestamp === timestamp) {
            this.msgs.splice(idx, 1)
          }
        })
      }, 5000)
    },
    closeToast (el) {
      // 隱藏 Toast
      $(`#${el}`).toast('hide')
    }
  }
}
</script>
