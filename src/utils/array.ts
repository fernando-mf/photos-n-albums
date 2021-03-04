export const deduplicate = <T>(arr: T[]) =>
  arr.reduce((acc, val) => {
    if (acc.includes(val)) {
      return acc
    }

    return [...acc, val]
  }, [] as T[])
