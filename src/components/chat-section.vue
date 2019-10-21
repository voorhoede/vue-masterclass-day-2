<template>
  <section class="chat-section">
    <div ref="messages" class="chat-section__messages">
      <message-list :messages="messages"/>
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"/>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import MessageList from "./message-list";
import MessageField from "./message-field";

export default {
  components: {
    MessageList,
    MessageField
  },
  computed: {
    ...mapState({
      user: state => state.user
    }),
    ...mapGetters(['messages'])
  },
  methods: {
    ...mapActions(['sendMessage']),
    createMessage() {
      return {
        date: new Date(),
        userId: String(this.user.id),
        channel: this.$route.params.channelId
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

      this.sendMessage(message)
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
