import styles from './comment.module.css'

import React from 'react'

import { CommentDTO as CommentProps } from '@/api'

export default function Index({ body, email, name }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className='text-sm text-gray-600'>{email}</div>
      <div className='font-semibold'>{name}</div>
      <p>{body}</p>
    </div>
  )
}
