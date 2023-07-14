import React, { ChangeEvent } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardHeaderStyles } from './styles';

const Authentication = () => {
  const getHeader = () => {
    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      console.log(event.target.value);
    };

    const addUser = () => {
      console.log('click');
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event)}
          searchBarWidth="720px"
        />
        <CommonButton
          sx={cardHeaderStyles.addUserButton}
          variant="contained"
          onClick={addUser}
          size="large"
        >
          Add user
        </CommonButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </Box>
    );
  };

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content="Auth Card Content" />
    </GridWrapper>
  );
};

export default Authentication;
