import React from 'react'
import cn from 'classnames'

type InputProps = {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  register?: any
  hasError?: boolean
}

export default function Input({
  name,
  type = 'text',
  placeholder,
  register,
  hasError,
}: InputProps) {
  const classes = cn('block rounded-none px-3 py-2 border-b appearance-none', {
    'border-indigo-700': !hasError,
    'border-red-500': hasError,
  })

  return (
    <input
      name={name}
      ref={register()}
      className={classes}
      type={type}
      placeholder={placeholder}
    />
  )
}
