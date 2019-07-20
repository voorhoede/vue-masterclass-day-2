<template>
  <section class="chat-section">
    <!-- show the message below when an error has occured within the application -->
    <!-- <p class="error">Sorry, an error occured. Please try again later!</p> -->
    <div ref="messages" class="chat-section__messages">
      <message-list :messages="messages"/>
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"/>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MessageList from "./message-list";
import MessageField from "./message-field";

export default {
  components: {
    MessageList,
    MessageField
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      error: false,
    }
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
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions(['sendMessage']),
    createMessage() {
      return {
        date: new Date(),
        user: this.currentUser._id,
        id: this.messages.length,
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

      this.sendMessage(message);
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
