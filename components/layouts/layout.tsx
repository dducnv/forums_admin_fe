import React, { ReactNode, useState } from 'react'
import {Box,CssBaseline,Divider,List,ListItem,ListItemButton,
  ListItemIcon,ListItemText,Toolbar} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const drawerWidth = 240;
import {
  AuthRequest,
  Navbar,
  Sidebar,
} from '@/components/layouts'
type LayoutProps = {
  children: ReactNode,
  window?: () => Window;
}
export function LayoutComponent({ children , window}: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);}

  const drawer = (
    <div>
      <Toolbar >
        Forums
      </Toolbar>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <AuthRequest>
      <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Navbar/>
    <Sidebar/>
    <Box
    className='bg-gray-100 min-h-[100vh] p-4'
      component="main"
      sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
   {children}
    </Box>
  </Box>
    </AuthRequest>
  )
}