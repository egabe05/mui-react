import React, { MouseEvent, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

export type NotificationItemT = {
  id: number;
  label: string;
};

const NotificationBell = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifications: NotificationItemT[] = [
    {
      id: 0,
      label: 'First notification',
    },
    {
      id: 1,
      label: 'Second notification',
    },
  ];

  const newNotifications = `You have ${notifications.length} new notifications`;
  const noNotifications = 'No new notifications';

  return (
    <>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton onClick={notifications.length ? handleOpen : undefined}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon sx={{ color: '#fff' }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        menuItems={notifications}
      />
    </>
  );
};

export default NotificationBell;
