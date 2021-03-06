import { useMemo, useState } from 'react'

import { RankingStrategyMap } from '@/utils/ranking-strategy'

export function useRakingStrategy<T extends string, R, D extends T>(
  arr: R[],
  rankingStrategyMap: RankingStrategyMap<T, R>,
  defaultStrategy: D,
) {
  const [strategy, setStrategy] = useState<T>(defaultStrategy)

  const sorted = useMemo(() => {
    if (strategy && rankingStrategyMap[strategy]) {
      return rankingStrategyMap[strategy](arr)
    }

    return arr
  }, [arr, strategy])

  return { sorted, rankBy: setStrategy }
}
