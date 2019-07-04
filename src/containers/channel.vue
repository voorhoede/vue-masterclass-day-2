<template>
  <chat-section :messages="filteredMessages"/>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import ChatSection from '../components/chat-section'

export default {
  components: {
    ChatSection
  },
  props: {
    channelId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['messages']),
    filteredMessages() {
      return this.messages.filter(message =>
        message.channel === this.channelId
      )
    }
  },
}
</script>

