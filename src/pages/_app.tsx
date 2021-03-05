import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '@/context/auth-context'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>P.AL</title>
        <meta name='description' content='P.AL - Photos & ALbums' />
        <link rel='icon' href='app-icon.jpg' />
      </Head>
      <AuthProvider router={router}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
