import { ReactNode } from 'react'
import {
  AuthRequest,
  FooterLayout,
  Navbar,
  Sidebar,
} from '@/components/layouts'
import * as React from 'react'
import { Box, CssBaseline, Toolbar } from '@mui/material'
const drawerWidth = 240
type LayoutProps = {
  children: ReactNode
  window?: () => Window
}

export function LayoutComponent({ children }: LayoutProps) {
  return (
    <AuthRequest>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Sidebar />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}>
          <Toolbar />
          {children}
        </Box>
        <FooterLayout />
      </Box>
    </AuthRequest>
  )
}
