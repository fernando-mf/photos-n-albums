import { ReactElement } from 'react'

import { useAuthContext } from '@/hooks/use-auth-context'
import Loader from '@/components/loader'

export default function WithAuthentication<T = any>(
  WrappedComponent: (props: T) => ReactElement<T>,
) {
  return (params: T) => {
    const { isLoggedIn } = useAuthContext()

    if (isLoggedIn) {
      return <WrappedComponent {...params} />
    }

    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    )
  }
}
