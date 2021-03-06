import { AlbumRankingStrategy, PostRankingStrategy } from '@/constants/ranking'
import { sortBy } from '@/utils/sort'
import { AlbumDTO, Post } from '@/api'

export type RankingStrategy<T = any> = (arr: T[]) => T[]

export type RankingStrategyMap<T extends string, R> = Record<
  T,
  RankingStrategy<R>
>

export const POSTS_RAKING_STRATEGY_MAP: RankingStrategyMap<
  PostRankingStrategy,
  Post
> = {
  [PostRankingStrategy.TITLE_DESC]: sortBy(p => p.title, 'desc'),
  [PostRankingStrategy.TITLE_ASC]: sortBy(p => p.title, 'asc'),
  [PostRankingStrategy.AUTHOR_DESC]: sortBy(p => p.author.name, 'desc'),
  [PostRankingStrategy.AUTHOR_ASC]: sortBy(p => p.author.name, 'asc'),
}

export const ALBUMS_RANKING_STRATEGY_MAP: RankingStrategyMap<
  AlbumRankingStrategy,
  AlbumDTO
> = {
  [AlbumRankingStrategy.ID_ASC]: sortBy(a => a.id, 'asc'),
  [AlbumRankingStrategy.ID_DESC]: sortBy(a => a.id, 'desc'),
  [AlbumRankingStrategy.TITLE_DESC]: sortBy(a => a.title, 'desc'),
  [AlbumRankingStrategy.TITLE_ASC]: sortBy(a => a.title, 'asc'),
}
