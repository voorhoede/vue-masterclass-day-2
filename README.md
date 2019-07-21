# Vue masterclass day 2 - exercise 1

We want to add an emoji picker to our message form. Add this by using a single file component. It should use `$emit` to add the emoji to the message text.


1. Create a single file component in `src/components/emoji-picker.vue`
2. This components needs to emit an event with an emoji using `$emit()`
3. Listen for this event in the `message-field.vue` component and add it to the `text` state

* [Exercise](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise1)
* [Solution](https://codesandbox.io/s/github/voorhoede/vue-masterclass-day-2/tree/exercise1-solution)
