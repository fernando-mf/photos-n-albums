import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { NextRouter } from 'next/router'

import {
  AuthError,
  AUTH_STORAGE_KEY,
  DEMO_PASSWORD,
  DEMO_USERNAME,
} from '@/constants/auth'
import storage from '@/utils/local-storage'

const noop = () => {}

const verifyCredentials = (user: string, pasword: string) =>
  user === DEMO_USERNAME && pasword === DEMO_PASSWORD

export interface IAuthContext {
  currentUser: string | null
  handleLogin: (username: string, password: string) => void
  handleLogout: () => void
  isLoggedIn: boolean
  authError: AuthError | null
}

export const AuthContext = React.createContext<IAuthContext>({
  currentUser: null,
  handleLogin: noop,
  handleLogout: noop,
  isLoggedIn: false,
  authError: null,
})

export function auth(router: NextRouter): IAuthContext {
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [authError, setAuthError] = useState<AuthError | null>(null)

  useEffect(() => {
    const storedUser = storage.get(AUTH_STORAGE_KEY)
    if (storedUser) {
      setCurrentUser(storedUser)
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      router.push('/')
    } else {
      router.replace('/login')
    }
  }, [currentUser])

  const handleLogin = useCallback((username: string, password: string) => {
    if (verifyCredentials(username, password)) {
      storage.set(AUTH_STORAGE_KEY, username)
      setCurrentUser(username)
      setAuthError(null)
      router.push('/')
    } else {
      setAuthError(AuthError.INCORRECT_CREDENTIALS)
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
    authError,
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
