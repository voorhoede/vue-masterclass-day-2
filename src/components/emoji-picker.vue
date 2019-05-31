<template>
  <div class="emoji-picker">
    <button
      v-for="emoji in emojis"
      class="emoji-picker__emoji"
      type="button"
      :key="emoji"
      @click="$emit('pick', emoji)"
    >{{emoji}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emojis: ['😄','😤','😱','💩']
    }
  }
}
</script>

<style>
.emoji-picker {
  padding: 0 0.5rem;
}

.emoji-picker__emoji {
  height: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: 0;
  transition: 0.2s transform ease;
  cursor: pointer;
}

.emoji-picker__emoji:hover,
.emoji-picker__emoji:focus {
  transform: scale(1.1);
}
</style>

