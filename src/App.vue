<template>
  <div class="app" :class="{'app--searching' : searching}">
    <app-header/>
    <app-sidebar/>
    <chat-section
      :messages="messages"
      :user="user"
      @newMessage="onNewMessage"
    />
    <search-sidebar
      :messages="messages"
      :search-text="searchText"
      :searching="searching"
    />
  </div>
</template>

<script>
import AppHeader from "./components/app-header";
import AppSidebar from "./components/app-sidebar";
import ChatSection from "./components/chat-section";
import SearchSidebar from "./components/search-sidebar";

export default {
  data: function() {
    return window.chat;
  },
  name: "app",
  components: {
    AppHeader,
    AppSidebar,
    ChatSection,
    SearchSidebar
  },
  methods: {
    onNewMessage(message) {
      this.messages.push(message)
    }
  }
};
</script>
