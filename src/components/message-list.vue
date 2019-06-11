<template>
  <div class="message-list">
    <div v-if="!$slots.default" class="message-list__empty">No messages</div>

    <transition-group tag="ol" class="message-list__list" name="pop">
      <slot />
    </transition-group>
  </div>
</template>

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

