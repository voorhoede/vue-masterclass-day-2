<template>
  <div class="user-profile">
    <label class="user-profile__label" for="name">Name</label>
    <input
      type="text"
      id="name"
      class="user-profile__name"
      :value="user.name"
      @input="onNameInput"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapMutations(['setUserName']),
    onNameInput(e) {
      this.setUserName(e.target.value)
    }
  }
};
</script>

<style>
.user-profile {
  margin-bottom: calc(var(--spacing) * 2);
}

.user-profile__label {
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.4);
  -webkit-font-smoothing: antialiased;
}

.user-profile__name {
  border: 0;
  -webkit-appearance: none;
  background: none;
  outline: none;
  font: inherit;
  color: #fff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 0.3em 0em;
  width: 100%;
}
</style>
