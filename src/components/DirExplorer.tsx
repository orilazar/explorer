import { Box } from '@chakra-ui/react';
import React from 'react';
import DirExplorerBar from './common/DirExplorerBar';
import DirExplorerContent from './common/DirExplorerContent';
import { ColorModeSwitcher } from './common/ColorModeSwitcher';

interface DirExplorerProps {}

const DirExplorer: React.FC<DirExplorerProps> = () => {
  return (
    <Box position="fixed" right={0} bottom={0} width="20em" height="20em">
      <ColorModeSwitcher />
      <DirExplorerBar />
      <DirExplorerContent />
    </Box>
  );
};

export default DirExplorer;
