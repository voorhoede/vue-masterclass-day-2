<template>
  <div class="message-list">
    <div v-if="messages.length === 0" class="message-list__empty">No messages</div>

    <transition-group tag="ol" class="message-list__list" name="pop">
      <template v-for="message of messages">
        <text-message
          v-if="message.type === 'text'"
          :key="message.id"
          :date="message.date"
          :user="message.user"
          :text="message.text"
        ></text-message>

        <cat-message
          v-else-if="message.type === 'cat'"
          :key="message.id"
          :date="message.date"
          :user="message.user"
        ></cat-message>
      </template>
    </transition-group>
  </div>
</template>


<script>
import TextMessage from "./text-message";
import CatMessage from "./cat-message";

export default {
  components: {
    TextMessage,
    CatMessage
  },
  props: {
    messages: {
      type: Array,
      default: () => {
        return [];
      },
      required: true
    }
  }
};
</script>

<style>
.message-list {
  display: flex;
  margin: 0;
  flex-direction: column;
}

.message-list__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.message-list__empty {
  padding: var(--spacing);
}

.message__date {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.7em;
}

.message__content {
  overflow: hidden;
}

.message__avatar {
  float: left;
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 5px;
  background: #f1f1f1;
  margin-right: calc(var(--spacing) * 0.5);
}
</style>

