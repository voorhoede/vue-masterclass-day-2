<template>
  <header class="app-header">
    <h2 class="app-header__title">#_general</h2>
    <search-form></search-form>
  </header>
</template>


<script>
import SearchForm from "./search-form";

export default {
  components: {
    SearchForm
  }
};
</script>

<style>
.app-header {
  grid-area: h;
  grid-column-end: sf;
  padding: var(--spacing);
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}

.app-header__title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
</style>
