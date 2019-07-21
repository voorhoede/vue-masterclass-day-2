<template>
  <chat-section :messages="filteredMessages"/>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatSection from '../components/chat-section'

export default {
  components: {
    ChatSection
  },
  computed: {
    ...mapGetters(['messages']),
    filteredMessages() {
      return this.messages.filter(message =>
        // TODO: use $route.params to filter messages on current channel
        message
      )
    }
  },
}
</script>

