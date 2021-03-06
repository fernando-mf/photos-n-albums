import React, { useState } from 'react'

import Loader from '@/components/loader'
import { useRequest } from '@/hooks/use-request'
import { AlbumDTO, fetchAlbums } from '@/api'
import Album from '@/components/album'
import Button from '@/components/button'
import Dropdown from '@/components/dropdown'
import { AlbumRankingStrategy } from '@/constants/ranking'
import { useRakingStrategy } from '@/hooks/use-raking-strategy'
import { ALBUMS_RANKING_STRATEGY_MAP } from '@/utils/ranking-strategy'

export default function Albums() {
  const { data = [], loading } = useRequest(fetchAlbums)
  const { sorted: albums, rankBy } = useRakingStrategy(
    data,
    ALBUMS_RANKING_STRATEGY_MAP,
    AlbumRankingStrategy.ID_ASC,
  )
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
      <Dropdown
        className='mb-3'
        label='Sort by'
        options={[
          { label: 'ID asc.', value: AlbumRankingStrategy.ID_ASC },
          { label: 'ID desc.', value: AlbumRankingStrategy.ID_DESC },
          { label: 'Title asc.', value: AlbumRankingStrategy.TITLE_ASC },
          { label: 'Title desc.', value: AlbumRankingStrategy.TITLE_DESC },
        ]}
        onChange={rankBy}
      />
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
