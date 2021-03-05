import { deduplicate } from '../array'

describe('Array utils', () => {
  describe('deduplicate', () => {
    test('should support empty arrays', () => {
      const actual = deduplicate([])
      expect(actual).toStrictEqual([])
    })
  })
})
