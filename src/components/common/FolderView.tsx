import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { FaFolder } from 'react-icons/fa';
import ItemView from './ItemView';

interface FolderViewProps {
  item: FileNodeModel;
}

const FolderView: React.FC<FolderViewProps> = ({ item }) => {
  // if (item.children === undefined || item.children.length === 0)
  //   return <Text>Empty Folder</Text>;

  return (
    <ItemView item={item} icon={<FaFolder color="yellow" fontSize="1.5em" />} />
  );
};

export default FolderView;
