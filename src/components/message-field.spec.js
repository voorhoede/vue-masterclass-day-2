import { mount } from '@vue/test-utils';
import MessageField from './message-field.vue';

it('emits the message when pressing enter', () => {
  const wrapper = mount(MessageField);

  // enter the text into the input field and trigger a input event
  wrapper.find('input[type=text]').setValue('Some value');

  // trigger the form submit
  wrapper.find('form').trigger('submit');

  expect(wrapper.emitted().submit).toEqual([["Some value"]]);
});

it('allows you to add emojis', () => {
  const wrapper = mount(MessageField);

  // find the emoji that i want to click (not the nicest code)
  const emoji = wrapper.findAll('button').filter(i => i.text().match('😄'));

  // click it!
  emoji.trigger('click');

  expect(wrapper.find('input[type=text]').element.value).toBe('😄');
});

it('clears the text after it has been submitted', () => {
  const wrapper = mount(MessageField);

  // enter the text into the input field and trigger a input event
  wrapper.find('input[type=text]').setValue('Some value');

  // trigger the form submit
  wrapper.find('form').trigger('submit');

  expect(wrapper.find('input[type=text]').element.value).toEqual('');
});
