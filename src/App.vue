<template>
  <div class="app" :class="{'app--searching' : searching}">
    <app-header/>
    <app-sidebar/>
    <chat-section/>
    <search-sidebar/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from "./components/app-header";
import AppSidebar from "./components/app-sidebar";
import ChatSection from "./components/chat-section";
import SearchSidebar from "./components/search-sidebar";

export default {
  name: "app",
  components: {
    AppHeader,
    AppSidebar,
    ChatSection,
    SearchSidebar
  },
  computed: {
    ...mapState({
      user: state => state.user,
      messages: state => state.messages,
      searching: state => state.searching
    })
  },
};
</script>
