<template>
  <form class="message-field" @submit.prevent="onSubmit">
    <input class="message-field__input" v-model="text" type="text" autofocus>
    <emoji-picker @pick="emoji => text = text + emoji"/>
    <input class="message-field__submit" type="submit">
  </form>
</template>

<script>
import EmojiPicker from './emoji-picker'

export default {
  components: {
    EmojiPicker
  },
  data: function() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.text !== "") {
        this.$emit("submit", this.text);
        this.text = "";
      }
    }
  }
};
</script>

<style>
.message-field {
  display: flex;
  flex-direction: row;
  margin: 0;
  height: 80px;
  padding: var(--spacing);
}

.message-field__input {
  -webkit-appearance: none;
  background: none;
  outline: none;
  font: inherit;
  flex: 1;
  border-radius: 5px;
  border: 2px solid var(--secondary-color);
  padding: 0.5em 0.6em;
}

.message-field__submit {
  display: none;
}
</style>
