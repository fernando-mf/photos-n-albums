import React from 'react'
import { mount } from 'enzyme'
import Dropdown from '../dropdown'

describe('Dropdown', () => {
  test('should select the first option', () => {
    const wrapper = mount(
      <Dropdown label='test' options={[{ value: 'first', label: 'first' }]} />,
    )

    expect(wrapper.find('select').text()).toBe('first')
  })

  test('should invoke the onChange callback and pass the selected value', () => {
    const onChange = jest.fn()

    const wrapper = mount(
      <Dropdown
        onChange={onChange}
        label='test'
        options={[
          { value: 'first', label: 'first' },
          { value: 'second', label: 'second' },
        ]}
      />,
    )

    wrapper.find('select').simulate('change', { target: { value: 'second' } })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('second')
  })
})
