import React from 'react';
import Grid from '@mui/material/Grid';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';

const Authentication = () => (
  <Grid item xs={8}>
    This is the authentication page
    <NotificationBell iconColor="primary" badgeContent={4} />
  </Grid>
);
export default Authentication;
