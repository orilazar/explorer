import { Box } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import FolderView from './FolderView';
import FileView from './FileView';
import { useExplorer } from '../../hooks/ItemsContext';

interface DirExplorerContentProps {}

const DirExplorerContent: React.FC<DirExplorerContentProps> = () => {
  const { items } = useExplorer();
  return (
    <Box w="100%" h="100%">
      {items?.map((item: FileNodeModel, index: number) => (
        <Box>
          {item.type === 'folder' ? (
            <FolderView item={item} key={index} />
          ) : (
            <FileView item={item} key={index} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DirExplorerContent;
