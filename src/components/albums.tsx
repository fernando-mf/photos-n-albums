import React, { useState } from 'react'

import Loader from '@/components/loader'
import { useRequest } from '@/hooks/use-request'
import { AlbumDTO, fetchAlbums } from '@/api'
import Album from '@/components/album'
import Button from '@/components/button'

export default function Albums() {
  const { data: albums = [], loading } = useRequest(fetchAlbums)
  const [activeAlbum, setActiveAlbum] = useState<AlbumDTO | null>(null)

  if (loading) {
    return <Loader />
  }

  if (activeAlbum) {
    return (
      <>
        <Button
          btnStyle='link'
          className='underline'
          onClick={() => setActiveAlbum(null)}
        >
          back
        </Button>
        <Album {...activeAlbum} />
      </>
    )
  }

  return (
    <>
      {albums.map(album => (
        <Button
          key={album.id}
          btnStyle='link'
          className='underline'
          onClick={() => setActiveAlbum(album)}
        >{`${album.id}. ${album.title}`}</Button>
      ))}
    </>
  )
}
