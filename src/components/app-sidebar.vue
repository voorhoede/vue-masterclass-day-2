<template>
  <aside class="app-sidebar">
    <h1 class="app-sidebar__title">De Voorhoede</h1>
    <user-profile></user-profile>
    <channel-list></channel-list>
  </aside>
</template>

<script>
import UserProfile from "./user-profile";
import ChannelList from "./channel-list";

export default {
  components: {
    UserProfile,
    ChannelList
  }
};
</script>

<style>
.app-sidebar {
  grid-area: s;
  background: #5e4557;
  padding: var(--spacing);
  color: #fff;
}

.app-sidebar__title {
  margin: 0;
  font-weight: bold;
  font-size: 1.3rem;
  height: calc(70px - var(--spacing) * 2);
  display: flex;
  place-items: center;
  margin-bottom: 1.5rem;
}
</style>
