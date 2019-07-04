<template>
  <section class="chat-section">
    <div ref="messages" class="chat-section__messages">
      <message-list :messages="messages"/>
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"/>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MessageList from "./message-list";
import MessageField from "./message-field";

export default {
  components: {
    MessageList,
    MessageField
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        const messagesEl = this.$refs.messages
        messagesEl.scrollTop = messagesEl.scrollHeight
      })
    }
  },
  computed: {
    ...mapGetters(['messages', 'currentUser'])
  },
  methods: {
    // TODO: add actions as method using mapActions
    ...mapMutations(['addMessage']),
    createMessage() {
      return {
        date: new Date(),
        user: this.currentUser._id,
        id: this.messages.length
      };
    },
    onSubmit(text) {
      let message = this.createMessage();

      if (text.indexOf("/cat") === 0) {
        message.messageType = "cat";
      } else {
        message.messageType = "text";
        message.text = text;
      }

      // TODO: use action from the store to send the message
      this.addMessage(message)
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
