import { Box } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { FaFile, FaFolder } from 'react-icons/fa';
import ItemView from './ItemView';

interface FileViewProps {
  item: FileNodeModel;
}

const FileView: React.FC<FileViewProps> = ({ item }) => {
  return <ItemView item={item} icon={<FaFile fontSize="1.5em" />} />;
};

export default FileView;
