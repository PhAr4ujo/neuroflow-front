import { beforeAll, describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { i18n } from '../i18n'

beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn()
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
  }))
})

describe('App', () => {
  it('mounts renders properly', () => {
    i18n.global.locale.value = 'pt-BR'

    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
      },
    })

    expect(wrapper.text()).toContain('NeuroFlow')
    expect(wrapper.text()).toContain('Foco profundo')
  })
})
