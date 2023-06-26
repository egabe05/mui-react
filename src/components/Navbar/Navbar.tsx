import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useParams, useNavigate } from 'react-router-dom';

import { ListItemButton } from '@mui/material';
import { mainNavbarItems } from './consts/navBarItems';

const drawerWidth = 240;

const Navbar = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#101F33',
          color: '#ffffffb3',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {mainNavbarItems.map((navbarItem) => (
          <ListItemButton
            key={navbarItem.id}
            onClick={() => navigate(navbarItem.route)}
          >
            <ListItem disablePadding>
              <ListItemIcon sx={{ color: '#ffffffb3' }}>
                {navbarItem.icon}
              </ListItemIcon>
              <ListItemText primary={navbarItem.label} />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
