/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, IconButton, InputBase } from '@material-ui/core';
import { Clear as ClearIcon, Search as SearchIcon } from '@material-ui/icons';
import { isEmpty } from 'lodash';

const SearchBar = ({
  className = '',
  formClassName = '',
  handleSearchSubmit,
  handleClearSearch
}) => {
  const [inputSearch, setInputSearch] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnSubmit = evn => {
    evn.preventDefault();
    handleSearchSubmit(inputSearch);
    setIsSubmit(true);
  };

  const handleInputOnChange = evnt => {
    evnt.preventDefault();
    const { value } = evnt.target;
    setInputSearch(value);

    if (isEmpty(value)) {
      setIsSubmit(false);
      handleClearSearch();
    }
  };

  const handleOnClickClearSearch = evnt => {
    evnt.preventDefault();
    setInputSearch('');
    setIsSubmit(false);
    handleClearSearch();
  };

  return (
    <Box
      fontFamily={'Montserrat, sans-serif'}
      component={'div'}
      mx={'auto'}
      borderRadius={150}
      display={'flex'}
      border={2}
      borderColor={'#b3b3b3'}
      pl={2}
      py={0.5}
    >
      <form className={formClassName} onSubmit={e => handleOnSubmit(e)}>
        <InputBase
          id="search-bar"
          className={className}
          onChange={e => handleInputOnChange(e)}
          value={inputSearch}
          label="Enter a post name"
          variant="outlined"
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
        />
        {!isSubmit ? (
          <IconButton type="submit" aria-label="search" disabled={isEmpty(inputSearch)}>
            <SearchIcon style={{ fill: 'currentColor' }} />
          </IconButton>
        ) : (
          <IconButton
            type="button"
            aria-label="clear-search"
            onClick={e => handleOnClickClearSearch(e)}
          >
            <ClearIcon style={{ fill: 'currentColor' }} />
          </IconButton>
        )}
      </form>
    </Box>
  );
};

export default SearchBar;
