import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { cardStyles } from './styles';

type Props = {
  header: ReactNode;
  content: string;
};

const BasicCard = ({ header, content }: Props) => (
  <Card sx={cardStyles}>
    {header}
    <CardContent>{content}</CardContent>
  </Card>
);

export default BasicCard;
