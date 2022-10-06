import React, { ReactNode, useState } from 'react'
import {
  AuthRequest,
  FooterLayout,
  Navbar,
  Sidebar,
} from '@/components/layouts'
type LayoutProps = {
  children: ReactNode
}
export function LayoutComponent({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <AuthRequest>
       {children}
    </AuthRequest>
  )
}
