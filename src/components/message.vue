<template>
  <li class="message">
    <div class="message__header">
      <slot name="header">
        <img v-bind:src="user.avatar" class="message__avatar">
        <strong>{{ user.name }}</strong>
        <span class="message__date">{{ date.toLocaleTimeString() }}</span>
      </slot>
    </div>
    <div class="message__content">
      <slot name="content"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      validator: function(value) {
        return "name" in value && "avatar" in value;
      }
    },
    date: {
      type: Date,
      required: true
    }
  }
};
</script>

<style>
.message {
  padding: var(--spacing);
}

.message:hover {
  background: #fafafa;
}

.message__header {
  margin-bottom: calc(var(--spacing) * 0.5);
}

.message__date {
  margin-left: 0.25rem;
}
</style>
