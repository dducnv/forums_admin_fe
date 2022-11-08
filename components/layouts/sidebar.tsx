import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import {
  Box,
  AppBar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import PersonIcon from '@mui/icons-material/Person'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { deepOrange, green } from '@mui/material/colors'
import AssignmentIcon from '@mui/icons-material/Assignment'

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
    icon: PlaylistAddCheckIcon,
    name: 'Bài đăng',
    path: '/post/list',
  },
  {
    icon: PersonIcon,
    name: 'Người Dùng',
    path: '/listuser',
  },
  {
    icon: MenuIcon,
    name: 'Danh sách Tag',
    path: '/tags',
  },
  {
    icon: PlaylistAddIcon,
    name: 'Tạo bài đăng',
    path: '/post/addpost',
  },
  // {
  //   icon: PersonAddAlt1Icon,
  //   name: 'Thêm người dùng',
  //   path: '/adduser',
  // },
]
export function Sidebar({ window }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Stack direction='row' spacing={2}></Stack>
      <Toolbar style={{width: '100'}}>
        <Avatar sx={{ bgcolor: green[500] }} variant='rounded'>
          <AssignmentIcon />
        </Avatar>
          Forums
      </Toolbar>
      <Divider/>
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
