import { sortBy } from '../sort'

describe('sort utils', () => {
  describe('sortBy', () => {
    test('should sort by a specific prop', () => {
      const data = [{ val: 2 }, { val: 1 }]

      const actual = sortBy(o => o.val)(data)

      expect(actual).toStrictEqual([{ val: 1 }, { val: 2 }])
    })
  })

  describe('should sort in desc order', () => {
    const data = [{ val: 2 }, { val: 1 }, { val: 3 }]

    const actual = sortBy(o => o.val, 'desc')(data)

    expect(actual).toStrictEqual([{ val: 3 }, { val: 2 }, { val: 1 }])
  })
})
