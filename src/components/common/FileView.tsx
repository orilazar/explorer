import { Box } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { FaFile, FaFolder } from 'react-icons/fa';
import ItemView from './ItemView';

interface FileViewProps {
  item: FileNodeModel;
}

const FileView: React.FC<FileViewProps> = ({ item }) => {
  return (
    <Box w="100%" h="100%">
      <ItemView item={item} icon={<FaFile />} />
    </Box>
  );
};

export default FileView;
