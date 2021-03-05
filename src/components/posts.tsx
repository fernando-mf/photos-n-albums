import React from 'react'

import { useRequest } from '@/hooks/use-request'
import { fetchFullPosts } from '@/api/request'
import Post from '@/components/post'
import Loader from '@/components/loader'

export default function Posts() {
  const { data: posts = [], loading } = useRequest(fetchFullPosts)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </>
  )
}
