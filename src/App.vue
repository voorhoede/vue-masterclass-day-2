<template>
  <div class="app" :class="{'app--searching' : searching}">
    <app-header/>
    <app-sidebar/>
    <router-view />
    <search-sidebar/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from "./components/app-header";
import AppSidebar from "./components/app-sidebar";
import SearchSidebar from "./components/search-sidebar";

export default {
  name: "app",
  components: {
    AppHeader,
    AppSidebar,
    SearchSidebar
  },
  computed: {
    ...mapState({
      searching: state => state.searching
    })
  },
  created() {
    this.initChat()
  },
  methods: {
    ...mapActions(['initChat'])
  }
};
</script>
