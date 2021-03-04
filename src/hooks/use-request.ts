import { useEffect, useState } from 'react'

type Request<A, T> = (...args: A[]) => Promise<T>

export function useRequest<A, T>(request: Request<A, T>, ...args: A[]) {
  const [state, setState] = useState<{
    data?: T
    error?: Error
    loading: boolean
  }>({
    data: undefined,
    error: undefined,
    loading: true,
  })

  useEffect(() => {
    request(...args)
      .then(data => {
        setState({
          data,
          loading: false,
          error: undefined,
        })
      })
      .catch(error => {
        setState({
          data: undefined,
          error,
          loading: false,
        })
      })
  }, [])

  return state
}
