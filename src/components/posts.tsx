import React from 'react'

import { useRequest } from '@/hooks/use-request'
import { fetchFullPosts } from '@/api/request'
import Post from '@/components/post'
import Loader from '@/components/loader'
import Dropdown from '@/components/dropdown'
import { PostRankingStrategy } from '@/constants/ranking'
import { useRakingStrategy } from '@/hooks/use-raking-strategy'
import { POSTS_RAKING_STRATEGY_MAP } from '@/utils/ranking-strategy'

export default function Posts() {
  const { data = [], loading } = useRequest(fetchFullPosts)
  const { sorted: posts, rankBy } = useRakingStrategy(
    data,
    POSTS_RAKING_STRATEGY_MAP,
    PostRankingStrategy.AUTHOR_ASC,
  )

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Dropdown
        label='Sort by'
        onChange={rankBy}
        options={[
          {
            label: 'Author name asc.',
            value: PostRankingStrategy.AUTHOR_ASC,
          },
          {
            label: 'Author name desc.',
            value: PostRankingStrategy.AUTHOR_DESC,
          },
          {
            label: 'Post title asc.',
            value: PostRankingStrategy.TITLE_ASC,
          },
          {
            label: 'Post title desc.',
            value: PostRankingStrategy.TITLE_DESC,
          },
        ]}
      />
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </>
  )
}
