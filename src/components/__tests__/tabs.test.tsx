import React from 'react'
import { mount } from 'enzyme'
import Tabs from '../tabs'

describe('Tabs', () => {
  test('should display a single tab', () => {
    const wrapper = mount(
      <Tabs
        tabs={[
          {
            label: 'Foo',
            component: <div className='foo'>Foo tab</div>,
          },
        ]}
      />,
    )

    expect(wrapper.find('button').text()).toBe('Foo')
    expect(wrapper.find('.foo').exists()).toBeTruthy()
  })

  test('should change the content when the user clicks on a new tab', () => {
    const wrapper = mount(
      <Tabs
        tabs={[
          {
            label: 'Foo',
            component: <div className='tabContent'>Foo tab</div>,
          },
          {
            label: 'Bar',
            component: <div className='tabContent'>Bar tab</div>,
          },
        ]}
      />,
    )

    expect(wrapper.find('.tabContent').text()).toBe('Foo tab')

    wrapper.find('button').at(1).simulate('click')

    expect(wrapper.find('.tabContent').text()).toBe('Bar tab')
  })
})
