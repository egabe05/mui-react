import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import { gridWrapperStyles } from './styles';

type Props = {
  children?: ReactNode;
};

const GridWrapper = ({ children }: Props) => (
  <Grid item xs={12} sx={gridWrapperStyles}>
    {children}
  </Grid>
);

export default GridWrapper;
