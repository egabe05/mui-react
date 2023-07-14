import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';
import NotificationBell from '../common/NotificationBell/NotificationBell';
import CommonButton from '../common/CommonButton/CommonButton';
import { headerStyles } from './styles';

type Props = {
  title: string | null;
};

const Header = ({ title }: Props) => (
  <Box sx={headerStyles.wrapper}>
    <Box sx={headerStyles.topRow}>
      <Typography sx={headerStyles.link}>Go to docs</Typography>
      <NotificationBell />
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </Box>
    <Box sx={headerStyles.middleRow}>
      <Typography variant="h1" color="white">
        {title}
      </Typography>
      <Box>
        <CommonButton sx={headerStyles.webButton} variant="outlined">
          Web setup
        </CommonButton>
        <Tooltip title="Help">
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  </Box>
);

export default Header;
