import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { FaFolder } from 'react-icons/fa';
import ItemView from './ItemView';

interface FolderViewProps {
  item: FileNodeModel;
}

const FolderView: React.FC<FolderViewProps> = ({ item }) => {
  if (item.children === undefined || item.children.length === 0)
    return <Text>Empty Folder</Text>;

  return (
    <Box w="100%" h="100%">
      <ItemView item={item} icon={<FaFolder color="yellow.300" />} />
    </Box>
  );
};

export default FolderView;
