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
  computed: {
    ...mapGetters(['messages']),
    filteredMessages() {
      console.log(this.messages)
      return this.messages.filter(message =>
        message.channel === this.channelId
      )
    }
  },
}
</script>

