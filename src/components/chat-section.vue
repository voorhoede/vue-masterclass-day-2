<template>
  <section class="chat-section">
    <div ref="messages" class="chat-section__messages">
      <message-list>
        <template v-for="message of messages">
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
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"/>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MessageList from "./message-list";
import MessageField from "./message-field";
import TextMessage from "./text-message";
import CatMessage from "./cat-message";

export default {
  components: {
    MessageList,
    MessageField,
    TextMessage,
    CatMessage
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
    ...mapState({
      user: state => state.user,
      messages: state => state.messages
    })
  },
  methods: {
    ...mapMutations(['addMessage']),
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
