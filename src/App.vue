<template>
  <div class="app" :class="{'app--searching' : searching}">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <chat-section></chat-section>
    <search-sidebar></search-sidebar>
  </div>
</template>

<script>
import AppHeader from './components/app-header'
import AppSidebar from './components/app-sidebar'
import ChatSection from './components/chat-section'
import SearchSidebar from './components/search-sidebar'

export default {
  data: function () {
    return window.chat
  },
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
    ChatSection,
    SearchSidebar,
  }
}
</script>
