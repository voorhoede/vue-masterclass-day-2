<template>
  <form class="search-form" v-on:submit.prevent="onSubmit">
    <input type="search" v-model="searchText" placeholder="Search" class="reset-text search-field">
  </form>
</template>

<script>
export default {
  data: function () {
    return window.chat;
  },
  methods: {
    onSubmit() {
      this.searching = true;
    }
  }
}
</script>
