import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/button'
import Input from '@/components/input'
import { useAuthContext } from '@/hooks/use-auth-context'

type AuthParams = {
  username: string
  password: string
}

export default function Login() {
  const { handleLogin } = useAuthContext()
  const { register, handleSubmit } = useForm<AuthParams>()

  return (
    <main className='h-screen flex justify-center items-center mx-3'>
      <form
        className='space-y-6 flex flex-col w-full sm:max-w-md'
        onSubmit={handleSubmit(({ username, password }) =>
          handleLogin(username, password),
        )}
      >
        <h1 className='text-center font-bold text-2xl'>Sign In</h1>
        <Input register={register} name='username' placeholder='Username' />
        <Input
          register={register}
          name='password'
          placeholder='Password'
          type='password'
        />

        <span className='italic'>
          Try <span className='font-bold'>demo</span> as username and password
        </span>

        <Button type='submit' className='mt-10'>
          Continue
        </Button>
      </form>
    </main>
  )
}
