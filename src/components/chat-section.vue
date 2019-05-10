<template>
  <section class="chat-section">
    <div class="chat-section__messages">
      <message-list :messages="messages"></message-list>
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"></message-field>
  </section>
</template>

<script>
import MessageList from "./message-list";
import MessageField from "./message-field";

export default {
  components: {
    MessageList,
    MessageField
  },
  data: function() {
    return window.chat;
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

      this.messages.push(message);
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
