import { beforeAll, describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn()
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
  }))
})

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('NeuroFlow')
    expect(wrapper.text()).toContain('Foco profundo')
  })
})
