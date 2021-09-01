<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: pages.current_page === 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pages.total_pages"
          class="page-item"
          :class="{ active: page === pages.current_page}"
          :key="page.current_page"
        >
          <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: pages.current_page === pages.total_pages }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    updatePage (page) {
      this.$emit('update', page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-item.active .page-link {
    background-color: #b06d4f;
    border-color: #b06d4f;
  }
</style>
