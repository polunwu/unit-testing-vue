import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps the MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      // Mocking the child component without actually mounting itself including it's dependencies modules
      stubs: { 
        MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
      }
    })

    const message = wrapper.find('p[data-testid="message"]').element.textContent
    expect(message).toEqual('Hello from the db!')
  })
})