import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from '@/constants'

export function LoginPage() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  const { push, asPath } = useRouter()
  const loginWithGoogle = (e: any) => {
    e.preventDefault()
    push(GOOGLE_AUTH_URL)
  }
  const loginWithGithub = (e: any) => {
    e.preventDefault()
    push(GITHUB_AUTH_URL)
  }
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className=' w-1/4 p-3 bg-gray-400'>
          <button
            onClick={loginWithGoogle}
            className='w-full cursor-pointer py-3 bg-indigo-500 text-white font-medium'>
            Login with google
          </button>
        </div>
      </div>
    </>
  )
}
