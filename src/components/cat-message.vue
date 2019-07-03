<template>
  <message :user="user" :date="date">
    <template v-slot:content>
      <img src="http://thecatapi.com/api/images/get?format=src&type=gif">
    </template>
  </message>
</template>

<script>
import Message from './message'

export default {
  components: {
    Message
  },
  props : {
    user : {
      type : Object,
      required : true,
      validator : function (value) {
        return "name" in value && "avatar" in value;
      }
    },
    date : {
      type : Date,
      required : true
    }
  }
}
</script>
