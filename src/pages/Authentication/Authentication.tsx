import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => (
  <Grid item xs={8}>
    This is the authentication page
    <CommonButton variant="contained">Add User</CommonButton>
    <CommonButton variant="outlined">Add Users</CommonButton>
  </Grid>
);
export default Authentication;
