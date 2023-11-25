import { Box } from '@chakra-ui/react';
import React from 'react';
import DirExplorerBar from './common/DirExplorerBar';

interface DirExplorerProps {}

const DirExplorer: React.FC<DirExplorerProps> = () => {
  return (
    <Box position="fixed" right={0} bottom={0} width="20em" height="20em">
      <DirExplorerBar />
      <DirExplorerContent />
    </Box>
  );
};

export default DirExplorer;
