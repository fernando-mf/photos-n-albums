export interface AlbumDTO {
  userId: number
  id: number
  title: string
}

export interface PhotoDTO {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface UserDTO {
  id: number
  name: string
  username: string
  email: string
}

export interface CommentDTO {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export interface PostDTO {
  userId: number
  id: number
  title: string
  body: string
}

export interface Post extends PostDTO {
  author: UserDTO
}
