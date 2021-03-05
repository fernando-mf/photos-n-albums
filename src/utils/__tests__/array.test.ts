import { deduplicate } from '../array'

describe('Array utils', () => {
  describe('deduplicate', () => {
    test('should support empty arrays', () => {
      const actual = deduplicate([])
      expect(actual).toStrictEqual([])
    })

    test('should keep only unique values', () => {
      const actual = deduplicate([1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 2, 3])
      expect(actual).toStrictEqual([1, 2, 3])
    })
  })
})
