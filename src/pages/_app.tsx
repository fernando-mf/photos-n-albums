import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '@/context/auth-context'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>coas</title>
        <link rel='icon' href='app-icon.jpg'></link>
      </Head>
      <AuthProvider router={router}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
