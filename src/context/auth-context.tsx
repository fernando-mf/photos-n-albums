import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import {
  AUTH_STORAGE_KEY,
  DEMO_PASSWORD,
  DEMO_USERNAME,
} from '@/constants/auth'
import storage from '@/utils/local-storage'
import { NextRouter } from 'next/router'

const noop = () => {}

const verifyCredentials = (user: string, pasword: string) =>
  user === DEMO_USERNAME && pasword === DEMO_PASSWORD

export interface IAuthContext {
  currentUser: string | null
  handleLogin: (username: string, password: string) => void
  handleLogout: () => void
  isLoggedIn: boolean
}

export const AuthContext = React.createContext<IAuthContext>({
  currentUser: null,
  handleLogin: noop,
  handleLogout: noop,
  isLoggedIn: false,
})

export function auth(router: NextRouter): IAuthContext {
  const [currentUser, setCurrentUser] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = storage.get(AUTH_STORAGE_KEY)
    if (storedUser) {
      setCurrentUser(storedUser)
    }
  }, [])

  // useEffect(() => {
  //   if (currentUser) {
  //     router.push('/')
  //   } else {
  //     router.replace('/login')
  //   }
  // }, [currentUser])

  const handleLogin = useCallback((username: string, password: string) => {
    if (verifyCredentials(username, password)) {
      storage.set(AUTH_STORAGE_KEY, username)
      setCurrentUser(username)
      router.push('/')
    }
  }, [])

  const handleLogout = useCallback(() => {
    storage.remove(AUTH_STORAGE_KEY)
    setCurrentUser(null)
  }, [])

  return {
    currentUser,
    isLoggedIn: !!currentUser,
    handleLogout,
    handleLogin,
  }
}

export function AuthProvider({
  children,
  router,
}: {
  children: ReactNode
  router: NextRouter
}) {
  return (
    <AuthContext.Provider value={auth(router)}>{children}</AuthContext.Provider>
  )
}
