import React, { ReactNode, useEffect, useState } from 'react'
import { useAuth } from '@/hooks'
import { Loading, LoginPage } from '@/components/page_components'

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
      ) :!fistLoading && isAdmin? (
        <LoginPage />
      ) : (
        children
      )}
    </>
  )
}
