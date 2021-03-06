import React from 'react'

type InputProps = {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  register?: any
}

export default function Input({
  name,
  type = 'text',
  placeholder,
  register,
}: InputProps) {
  return (
    <input
      name={name}
      ref={register()}
      className='block rounded-none px-3 py-2 border-b border-indigo-700 appearance-none'
      type={type}
      placeholder={placeholder}
    />
  )
}
