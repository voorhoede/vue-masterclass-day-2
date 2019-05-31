import { shallowMount } from '@vue/test-utils'
import Message from '../../src/components/message.vue'

describe('Component', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(Message, {
      propsData: {
        user: {
          name: "Anoniempje",
          avatar: "./images/avatar.png"
        },
        date: new Date()
      }
    })

    expect(wrapper.element).toBeTruthy()
  })
})
