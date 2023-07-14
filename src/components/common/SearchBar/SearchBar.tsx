import React, { ChangeEventHandler } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';

type Props = {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  searchBarWidth?: string;
};

const SearchBar = ({ placeholder, onChange, searchBarWidth }: Props) => (
  <>
    <IconButton>
      <SearchIcon />
    </IconButton>
    <Input
      placeholder={placeholder}
      onChange={onChange}
      sx={{
        width: searchBarWidth,
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '1.1rem',
      }}
      disableUnderline
    />
  </>
);

export default SearchBar;
