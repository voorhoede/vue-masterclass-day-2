<template>
  <transition name="slide-from-right">
    <aside class="search-sidebar" v-if="searching">
      <button
        class="reset-button search-sidebar__close"
        @click="searching = false"
        aria-label="Close"
        title="Close"
      ></button>
      <h2 class="search-sidebar__header">{{ header }}</h2>
      <message-list :messages="filteredMessages"/>
    </aside>
  </transition>
</template>


<script>
import MessageList from "./message-list";

export default {
  components: {
    MessageList
  },
  data: function() {
    return window.chat;
  },
  computed: {
    filteredMessages() {
      return this.messages.filter(
        message => message.text.indexOf(this.searchText) > -1
      );
    },
    header() {
      return (
        `${this.filteredMessages.length} Message` +
        (this.filteredMessages.length !== 1 ? "s" : "")
      );
    }
  }
};
</script>

<style>
.search-sidebar {
  grid-area: ss;
  background: #f1f1f1;
  padding: var(--spacing);
}

.search-sidebar__close {
  float: right;
  cursor: pointer;
  padding: 5px;
}

.search-sidebar__close:before {
  content: "+";
  transform: rotate(45deg);
  display: block;
  line-height: 0.7em;
  font-size: 2em;
}

.search-sidebar .message-list__empty {
  padding: 0;
}

.search-sidebar .message {
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: var(--spacing);
}

.search-sidebar__header {
  font-size: 1.3rem;
  margin: 0;
  margin-bottom: 1.5rem;
}
</style>

