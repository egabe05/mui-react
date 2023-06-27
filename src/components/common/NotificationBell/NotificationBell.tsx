import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton, {
  IconButtonPropsColorOverrides,
} from '@mui/material/IconButton';
import { OverridableStringUnion } from '@mui/types';
import Tooltip from '@mui/material/Tooltip';

type Props = {
  iconColor?: OverridableStringUnion<
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    IconButtonPropsColorOverrides
  >;
  badgeContent: number;
};

const NotificationBell = ({ iconColor, badgeContent }: Props) => {
  const newNotifications = `You have ${badgeContent} new notifications`;
  const noNotifications = 'No new notifications';

  return (
    <Tooltip title={badgeContent ? newNotifications : noNotifications}>
      <IconButton color={iconColor}>
        <Badge badgeContent={badgeContent} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationBell;
