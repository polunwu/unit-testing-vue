import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

// jest will take the getMessage function, and in return it will give us a mocked getMessage function
jest.mock('@/services/axios')

beforeEach(() => {
  // Clear all the mock has made and reset called times to 0
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    // mock the API call
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ "text": mockMessage })
    const wrapper = mount(MessageDisplay)
    
    // wait for promise to resolve
    await flushPromises()
    
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)

    // check that component displays message
    const message = wrapper.find('p[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    // mock the failed API call
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce({ "text": mockError })
    const wrapper = mount(MessageDisplay)

    // wait for promise to resolve
    await flushPromises()

    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)

    // check that component displays error
    const message = wrapper.find('p[data-testid="message-error"]').element.textContent
    expect(message).toEqual(mockError)
  })
})