import { Box, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import {
  IoChevronBackSharp,
  IoChevronUpSharp,
  IoSearchOutline,
} from 'react-icons/io5';
import { IoRefreshOutline } from 'react-icons/io5';
import { useExplorer } from '../../hooks/ItemsContext';
import { FaSearch } from 'react-icons/fa';

interface DirExplorerBarProps {}

const DirExplorerBar: React.FC<DirExplorerBarProps> = () => {
  const { searchValue, updateSearchValue, searchItems, goBack, goUp } =
    useExplorer();

  const search = () => {
    searchItems();
  };

  return (
    <Box w="100%" display="flex" alignItems="center">
      <IconButton aria-label="Home" icon={<RiHome2Line />} />
      <IconButton
        aria-label="Back"
        icon={<IoChevronBackSharp />}
        m="0em 0.2em"
        onClick={goBack}
      />
      <IconButton
        aria-label="Up"
        icon={<IoChevronUpSharp />}
        mr="0.5em"
        onClick={goUp}
      />
      <Input
        placeholder="Search"
        value={searchValue}
        onChange={updateSearchValue}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            search();
          }
        }}
        p="0.2em 0.5em"
        borderRadius="0.7em"
        border={'0.1em solid rgba(255, 255, 255, 0.1)'}
      />
      <IconButton
        aria-label="Search"
        icon={<IoSearchOutline />}
        ml="0.5em"
        onClick={search}
      />
      <IconButton
        aria-label="Refresh"
        icon={<IoRefreshOutline />}
        ml="0.5em"
        justifyContent="end"
      />
    </Box>
  );
};

export default DirExplorerBar;
