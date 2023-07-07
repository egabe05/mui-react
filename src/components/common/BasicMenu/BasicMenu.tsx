import React, { MouseEventHandler } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NotificationItemT } from '../NotificationBell/NotificationBell';

type Props = {
  anchorEl: null | HTMLElement;
  handleClose: MouseEventHandler;
  open: boolean;
  menuItems: NotificationItemT[];
};

const BasicMenu = ({ anchorEl, handleClose, open, menuItems }: Props) => (
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    {menuItems.map((item) => (
      <MenuItem onClick={handleClose}>{item.label}</MenuItem>
    ))}
  </Menu>
);

export default BasicMenu;
