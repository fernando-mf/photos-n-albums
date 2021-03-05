import React, { ReactNode } from 'react'
import cn from 'classnames'

type ButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  btnStyle?: 'base' | 'primary' | 'link'
  spacing?: boolean
}

export default function Button({
  children,
  className,
  onClick,
  type = 'button',
  btnStyle = 'primary',
  spacing = true,
}: ButtonProps) {
  const transitions = 'transition duration-200 ease-in-out'
  const spacingClasses = 'px-10 py-2'
  const primaryClasses = 'text-white rounded bg-indigo-500 hover:bg-indigo-700'
  const linkClasses = 'text-indigo-500 p-0'

  const classes = cn(className, transitions, {
    [spacingClasses]: spacing,
    [primaryClasses]: btnStyle === 'primary',
    [linkClasses]: btnStyle === 'link',
  })

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
