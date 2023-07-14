import React, { MouseEventHandler, ReactNode } from 'react';
import Button, {
  ButtonPropsColorOverrides,
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
} from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';

type Props = {
  children?: ReactNode;
  color?: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    ButtonPropsColorOverrides
  >;
  disabled?: boolean;
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >;
  sx?: SxProps;
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  onClick,
}: Props) => (
  <Button
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}
    sx={sx}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default CommonButton;
