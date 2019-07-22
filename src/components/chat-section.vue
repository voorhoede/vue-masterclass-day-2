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
