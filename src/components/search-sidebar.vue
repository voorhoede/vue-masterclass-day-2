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
      <message-list>
        <template v-for="message of filteredMessages">
          <text-message
            v-if="message.type === 'text'"
            :key="message.id"
            :date="message.date"
            :user="message.user"
            :text="message.text"
          />

          <cat-message
            v-else-if="message.type === 'cat'"
            :key="message.id"
            :date="message.date"
            :user="message.user"
          />
        </template>
      </message-list>
    </aside>
  </transition>
</template>


<script>
import MessageList from "./message-list";
import TextMessage from "./text-message";
import CatMessage from "./cat-message";

export default {
  components: {
    MessageList,
    TextMessage,
    CatMessage
  },
  props: {
    messages: {
      type: Array,
      required: true
    },
    searching: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: ''
    }
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

