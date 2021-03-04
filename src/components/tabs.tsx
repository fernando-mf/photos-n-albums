import React, { ReactNode, useState } from 'react'

import Button from '@/components/button'

type Tab = {
  label: string
  component: ReactNode
}

type TabsProps = {
  tabs: Tab[]
}

export default function Tabs({ tabs = [] }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].label)

  const currentTab = tabs.find(t => t.label === activeTab)

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='border border-indigo-200 rounded mb-5'>
        {tabs.map(({ label }) => (
          <Button
            btnStyle='base'
            className='hover:bg-indigo-200'
            onClick={() => setActiveTab(label)}
            key={label}
          >
            {label}
          </Button>
        ))}
      </div>
      {currentTab && currentTab.component}
    </div>
  )
}
