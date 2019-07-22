<template>
  <section class="chat-section">
    <div ref="messages" class="chat-section__messages">
      <message-list :messages="messages"/>
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"/>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MessageList from "./message-list";
import MessageField from "./message-field";

export default {
  components: {
    MessageList,
    MessageField
  },
  // TODO: use mapState to get data from the store and omit the props
  props: {
    messages: {
      type: Array,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    createMessage() {
      return {
        date: new Date(),
        user: this.user,
        id: this.messages.length
      };
    },
    onSubmit(text) {
      let message = this.createMessage();

      if (text.indexOf("/cat") === 0) {
        message.type = "cat";
      } else {
        message.type = "text";
        message.text = text;
      }

      // TODO: use mutation to add new message instead of emitting event
      this.$emit('newMessage', message)
    }
  }
};
</script>

<style>
.chat-section {
  display: flex;
  flex-direction: column;
  grid-area: c;
}

.chat-section__messages {
  flex: 1;
  overflow: auto;
}
</style>
