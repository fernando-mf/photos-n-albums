describe('Local storage', () => {
  const localStorageSet = jest.fn()
  const localStorageGet = jest.fn()
  const localStorageRemove = jest.fn()

  beforeAll(() => {
    ;(global as any).localStorage = {
      setItem: localStorageSet,
      getItem: localStorageGet,
      removeItem: localStorageRemove,
    }

    jest.mock('@/utils/client', () => ({
      isClient: () => true,
    }))
  })

  describe('set', () => {
    test('should serialize the given object', async () => {
      const { default: storage } = await import('../local-storage')
      storage.set('test', { foo: 'bar' })

      expect(localStorageSet).toHaveBeenCalledWith('test', '{"foo":"bar"}')
    })
  })

  describe('get', () => {
    test('should parse the serialized data', async () => {
      localStorageGet.mockReturnValue(JSON.stringify({ foo: 'bar' }))

      const { default: storage } = await import('../local-storage')

      const actual = storage.get('test')

      expect(actual).toStrictEqual({
        foo: 'bar',
      })
    })
  })
})
