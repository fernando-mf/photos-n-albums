import React from 'react'
import { shallow } from 'enzyme'
import Avatar from '../avatar'

describe('Avatar', () => {
  test('should display the first two initials', () => {
    const wrapper = shallow(<Avatar label='Jon Doe' />)
    expect(wrapper.text()).toBe('JD')
  })

  test('should preserve only two initials', () => {
    const wrapper = shallow(<Avatar label='Foo Bar Baz' />)
    expect(wrapper.text()).toBe('FB')
  })
})
