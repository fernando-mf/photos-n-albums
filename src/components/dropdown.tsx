import React from 'react'
import cn from 'classnames'

type DropdownProps<T extends string = any> = {
  label: string
  options: {
    label: string
    value: T
  }[]
  className?: string
  onChange?: (val: T) => void
}

export default function Dropdown<T extends string = any>({
  options,
  label,
  className,
  onChange = () => {},
}: DropdownProps<T>) {
  return (
    <div
      className={cn(className, 'flex items-center')}
      onChange={e => onChange((e.target as any).value)}
    >
      <span className='mr-4'>{label}</span>
      <select className='px-3 py-1 border-b-2 border-indigo-400 appearance-none rounded-none'>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
