import React from 'react'
import { AlbumDTO as AlbumProps, fetchAlbumPhotos } from '@/api'
import { useRequest } from '@/hooks/use-request'
import Loader from '@/components/loader'

export default function Album({ id, title }: AlbumProps) {
  const { data: photos = [], loading } = useRequest(fetchAlbumPhotos, id)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <h2 className='text-lg mb-3 text-center font-semibold'>{title}</h2>
      <div className='grid grid-cols-4 gap-3'>
        {photos.map(({ id, title, thumbnailUrl }) => (
          <img key={id} src={thumbnailUrl} alt={title} />
        ))}
      </div>
    </>
  )
}
