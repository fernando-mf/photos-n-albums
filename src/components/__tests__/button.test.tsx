import React from 'react'
import { shallow } from 'enzyme'
import Button from '../button'

describe('Button', () => {
  test('should render the given text', () => {
    const wrapper = shallow(<Button>Foo</Button>)
    expect(wrapper.text()).toBe('Foo')
  })

  test('should simulate clicks', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button onClick={onClick}>Foo</Button>)

    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
