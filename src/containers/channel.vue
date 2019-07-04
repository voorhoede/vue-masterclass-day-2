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
        // TODO: use prop passed from route to filter messages on current channel
        message
      )
    }
  },
}
</script>

