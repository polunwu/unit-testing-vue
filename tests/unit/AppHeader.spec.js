import AppHeader from "@/components/AppHeader"
import { mount } from "@vue/test-utils";

// 1. Create a test suit(a block of tests)
describe('AppHeader', () => {
  // 2. Set up test(s)
  test('If user is logged in, show logout button', async () => {
    // 3. Mount the componet with 'vue-test-utils'
    const wrapper = mount(AppHeader)
    // 4. Set data if necessary
    wrapper.setData({ loggedIn: true })

    // 5. Wait for view-model updated data(s)
    await wrapper.vm.$nextTick()
    // 6. Assert what the result shoould be
    expect(wrapper.find('button').isVisible()).toBe(true)
  })

  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

})