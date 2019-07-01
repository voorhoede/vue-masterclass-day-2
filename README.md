# Vue masterclass day 2

## Exercises

### Exercise 1 - create a single file component
We want to add an emoji picker to our message form. Add this by using a single file component. It should use `$emit` to add the emoji to the message text.

* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise1-solution)

### Exercise 2 - Prop drilling
You may not use `window.chat` in `chat-section` and `search-sidebar` anymore. Use props to pass down messages. Also use `$emit` to add a new message in `App`.

* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise2-solution)

### Exercise 3 - Composition
Use composition for `message-list`. The goal is to not pass `messages` as prop, but instead use a `slot` to nest the list of messages.

* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise3-solution)

### Exercise 4 - Implement Vuex store
Add a vuex store to the application. Make it possible to store messages and the user in it.

* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise4-solution)

### Exercise 5 - Using the store
Messages and the user should be stored in the store. Create mutations to modify the store and use `mapState` and `mapMutations` to use them in the components. Make sure `window.chat` is not used for messages or the user anymore.

* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise5-solution)

### Exercise 6 - Connecting to the API
Connect the application to the api by using actions in the store. Get the messages and put them in the store using a mutation.

* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise6-solution)
