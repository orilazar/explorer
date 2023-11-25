import { Box } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { FaFolder } from 'react-icons/fa';
import ItemView from './ItemView';

interface FileViewProps {
  item: FileNodeModel;
}

const FileView: React.FC<FileViewProps> = ({ item }) => {
  return (
    <Box w="100%" h="100%">
      <ItemView item={item} icon={<FaFolder />} />
    </Box>
  );
};

export default FileView;
