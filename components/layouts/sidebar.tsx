import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import {
  Box,
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import VillaIcon from '@mui/icons-material/Villa'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
const drawerWidth = 240
type SidebarProps = {
  window?: () => Window
}

const sidebar = [
  {
    icon: HomeIcon,
    name: 'Home',
    path: '/',
  },
  {
    icon: VillaIcon,
    name: 'Test',
    path: '/test',
  },
  {
    icon: PlaylistAddCheckIcon,
    name: 'Verify Posts',
    path: '/post',
  },
  {
    icon: PlaylistAddIcon,
    name: 'Create Post',
    path: '/addpost',
  },
  {
    icon: MenuIcon,
    name: 'All Post',
    path: '/allpost',
  },
  {
    icon: PersonAddAlt1Icon,
    name: 'Add User',
    path: '/adduser',
  },
  {
    icon: PersonIcon,
    name: 'List User',
    path: '/listuser',
  },
  
]
export function Sidebar({ window }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar>Forums</Toolbar>
      <Divider />
      <List>
        {sidebar.map((item) => (
          <Link key={item.name} href={item.path}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
  const container =
    window !== undefined ? () => window().document.body : undefined
  return (
    <>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}