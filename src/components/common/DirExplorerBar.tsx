import { Box, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoChevronBackSharp } from 'react-icons/io5';
import { IoRefreshOutline } from 'react-icons/io5';

interface DirExplorerBarProps {}

const DirExplorerBar: React.FC<DirExplorerBarProps> = () => {
  return (
    <Box w="100%">
      <IconButton aria-label="Home" icon={<FaHome />} />
      <IconButton aria-label="Back" icon={<IoChevronBackSharp />} />
      <Input placeholder="Search" />
      <IconButton aria-label="Refresh" icon={<IoRefreshOutline />} />
    </Box>
  );
};

export default DirExplorerBar;
