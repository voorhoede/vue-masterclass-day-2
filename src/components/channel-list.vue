<template>
  <div class="channel-list">
    <h2 class="channel-list__header">Channels</h2>
    <ul>
      <li class="channel-list__item channel-list__item--current">
        <span class="channel-list__bullet">#</span> Daily
      </li>
      <li class="channel-list__item">
        <span class="channel-list__bullet">#</span> General
      </li>
    </ul>
  </div>
</template>

<style>
.channel-list__header {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: normal;
  margin: 0 0 0.5em 0;
}

.channel-list > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.channel-list__item {
  color: rgba(255, 255, 255, 0.6);
  text-transform: lowercase;
  margin-left: calc(-1 * var(--spacing));
  margin-right: calc(-1 * var(--spacing));
  padding: 0.2em var(--spacing);
  cursor: pointer;
}

.channel-list__item:not(.channel-list__item--current):hover {
  background: rgba(0, 0, 0, 0.2);
}

.channel-list__item--current {
  background: var(--secondary-color);
  color: #fff;
}

.channel-list__bullet {
  opacity: 0.6;
}
</style>
