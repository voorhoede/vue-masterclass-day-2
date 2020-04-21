# Vue masterclass day 2

## Exercises

### Exercise 0 - Single-file component

Convert `search-form.js` into a [single-file component](https://vuejs.org/v2/guide/single-file-components.html).

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise0)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise0-solution)

### Exercise 1 - Create a single file component
We want to add an emoji picker to our message form. Add this by using a single file component. It should use `$emit` to add the emoji to the message text.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise1)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise1-solution)

### Exercise 2 - Prop drilling
You may not use `window.chat` in `chat-section` and `search-sidebar` anymore. Use props to pass down messages. Also use `$emit` to add a new message in `App`.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise2)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise2-solution)

### Exercise 3 - Implement Vuex store
Add a vuex store to the application. Make it possible to store messages and the user in it.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise3)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise3-solution)

### Exercise 4 - Using the store
Messages and the user should be stored in the store. Create mutations to modify the store and use `mapState` and `mapMutations` to use them in the components. Make sure `window.chat` is not used for messages or the user anymore.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise4)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise4-solution)

### Exercise 5 - Connecting to the API
Connect the application to the api by using actions in the store. Get the messages and put them in the store using a mutation.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise5)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise5-solution)

### Exercise 6 - Using the router
Make it possible to navigate between channels. Add routes to pass down the ID of the channel and load the corresponding messages. Use :channelId as dynamic route segment.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise6)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise6-solution)

### Exercise 7 - Write a test for the message-field component
Write a unit tests for the message-field component according to the requirements:
- emits the message when pressing enter
- allows you to add emoji’s
- clears the text after it has been submitted

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise7)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise7-solution)

### Exercise 8 - Add an error boundary
Handle errors in `chat-section` using `errorCaptured`.

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise8)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise8-solution)
