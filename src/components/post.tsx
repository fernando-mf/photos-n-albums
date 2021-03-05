import React from 'react'

import { fetchPostComments, Post as PostProps } from '@/api'
import Avatar from '@/components/avatar'
import { useRequest } from '@/hooks/use-request'
import Comment from '@/components/comment'
import Button from '@/components/button'
import { useVisibilityToggle } from '@/hooks/use-visibility-toggle'

export default function Post({ author, body, title, id }: PostProps) {
  const { data: comments = [] } = useRequest(fetchPostComments, id)
  const [
    commentSectionVisible,
    toggleCommentSectionVisibility,
  ] = useVisibilityToggle()

  return (
    <div className='rounded-lg border-2 border-indigo-400 m-5 p-5 max-w-lg'>
      <div className='flex items-center cursor-default mb-5'>
        <Avatar label={author.name} />
        <div className='ml-3'>
          <div>{author.name}</div>
          <div className='text-indigo-500 cursor-pointer'>
            @{author.username.toLowerCase()}
          </div>
        </div>
      </div>
      <h2 className='mb-5 font-bold'>{title}</h2>
      <p className='mb-5'>{body}</p>
      <Button
        spacing={false}
        btnStyle='link'
        className='m-0'
        onClick={toggleCommentSectionVisibility}
      >
        {commentSectionVisible ? 'Hide comments' : 'View comments'}
      </Button>
      {commentSectionVisible && (
        <div>
          {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </div>
  )
}
