<template>
  <message :user="user" :date="date">
    <template slot="content">{{ text }}</template>
  </message>
</template>

<script>
import Message from './message.vue'

export default {
  components: {
    Message
  },
  props: {
    user: {
      type: Object,
      required: true,
      validator: function (value) {
        return "name" in value && "avatar" in value;
      }
    },
    date: {
      type: Date,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
}
</script>
