import React from 'react'

type AvatarProps = {
  label: string
  size?: number
}

export default function Avatar({ label, size = 35 }: AvatarProps) {
  const initials = label
    .split(/\s/)
    .map(fragment => fragment[0].toUpperCase())
    .slice(0, 2) // we only need 2 initials
    .join('')

  return (
    <div
      className='rounded-full bg-gray-300 flex justify-center items-center text-white'
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  )
}
