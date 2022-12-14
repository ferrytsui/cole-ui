import Button from "./Button.vue";
import { mount } from '@vue/test-utils'

describe("按钮测试", () => {
  it("按钮能显示文本", () => {
    const content = "cyclone"
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    })
    expect(wrapper.text()).toBe(content)
  })
  it('通过size属性控制大小', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain('el-button--small')
  })
})
