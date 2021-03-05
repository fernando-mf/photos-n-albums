import React from 'react'
import { mount } from 'enzyme'
import Button from '../button'

describe('Button', () => {
  const wrap = mount(<Button>Button</Button>)

  test('should render without throwing an error', () => {
    expect(wrap)
    expect(wrap.find('button').text()).toBe('Button')
  })
})
