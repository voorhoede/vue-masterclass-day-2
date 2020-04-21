export default {
  template: `
    <template>
      <form class="search-form" @submit.prevent="onSubmit">
        <input type="search" v-model="searchText" placeholder="Search" class="search-field">
      </form>
    </template>
  `,
  data: function() {
    return window.chat;
  },
  methods: {
    onSubmit() {
      this.searching = true;
    }
  }
};

// TODO: convert this file in a single file component with the .vue extension
// TODO: styles to implement:
//
// .search-form {
//   margin-left: auto;
//   margin-bottom: 0;
//   display: flex;
//   width: 350px;
//   margin-right: calc(-1 * var(--spacing));
// }

// .search-field {
//   -webkit-appearance: none;
//   outline: none;
//   font: inherit;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   padding: 0.3em 0.4em 0.3em 2em;
//   background: url("../assets/search.svg") no-repeat 5px center;
//   line-height: 34px;
//   height: 34px;
// }

