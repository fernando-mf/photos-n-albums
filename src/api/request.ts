import {
  AlbumDTO,
  CommentDTO,
  PhotoDTO,
  Post,
  PostDTO,
  UserDTO,
} from '@/api/types'
import { deduplicate } from '@/utils/array'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPostComments = (postId: number) =>
  fetch(`${BASE_URL}/posts/${postId}/comments`).then(
    res => res.json() as Promise<CommentDTO[]>,
  )

export const fetchPosts = () =>
  fetch(`${BASE_URL}/posts`).then(res => res.json() as Promise<PostDTO[]>)

export const fetchAlbums = () =>
  fetch(`${BASE_URL}/albums`).then(res => res.json() as Promise<AlbumDTO[]>)

export const fetchUser = (userId: number) =>
  fetch(`${BASE_URL}/users/${userId}`).then(
    res => res.json() as Promise<UserDTO>,
  )

export const fetchAlbumPhotos = (albumId: number) =>
  fetch(`${BASE_URL}/albums/${albumId}/photos`).then(
    res => res.json() as Promise<PhotoDTO[]>,
  )

export async function fetchFullPosts(): Promise<Post[]> {
  const posts = await fetchPosts()
  const authorIds = deduplicate(posts.map(p => p.userId))
  const authors = await Promise.all(authorIds.map(fetchUser))

  return posts.map(post => ({
    ...post,
    author: authors.find(author => author.id === post.userId)!,
  }))
}
