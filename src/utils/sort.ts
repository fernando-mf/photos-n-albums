export type SortOrder = 'asc' | 'desc'

export const sortBy = <T = any>(
  propGetter: (val: T) => T[keyof T],
  sortOrder: SortOrder = 'asc',
) => (arr: T[]) => {
  const sorted = [...arr]

  return sorted.sort((val1, val2) => {
    const sortValue = propGetter(val1) > propGetter(val2) ? 1 : -1
    return sortOrder === 'asc' ? sortValue : sortValue * -1
  })
}
