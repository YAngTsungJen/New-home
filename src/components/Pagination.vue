<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li
          class="page-item"
          :class="{active: pages.current_page === item}"
          v-for="item in pages.total_pages"
          :key="item"
        >
          <a class="page-link" href="#" @click.prevent="updatePage(item)">{{item}}</a>
        </li>
        <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages }">
          <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (num) {
      this.$emit('update', num)
    }
  }
}
</script>
