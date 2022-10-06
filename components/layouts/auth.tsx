import React, { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '@/hooks'
import { Loading } from '../page_components'
import { LoginPage } from '../page_components/login'

type AuthProps = {
  children: ReactNode
}
export function AuthRequest({ children }: AuthProps) {
  const { profile, fistLoading } = useAuth()
  let isAdmin = profile?.role == "ADMIN"
  return (
   
    <>
      {fistLoading ? (
        <Loading />
      ) :!fistLoading && !isAdmin? (
        <LoginPage />
      ) : (
        children
      )}
    </>
  )
}
