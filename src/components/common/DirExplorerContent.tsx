import { Box, IconButton, Input } from '@chakra-ui/react';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoChevronBackSharp } from 'react-icons/io5';
import { IoRefreshOutline } from 'react-icons/io5';
import { FileNodeModel } from '../../models/FileNodeModel';
import FolderView from './FolderView';
import FileView from './FileView';

interface DirExplorerContentProps {}

const items: FileNodeModel[] = [
  {
    name: 'file 1',
    type: 'file',
    size: 0,
    children: [
      {
        name: 'File 1',
        type: 'file',
        size: 1024,
      },
      {
        name: 'File 2',
        type: 'file',
        size: 2048,
      },
    ],
  },
  {
    name: 'Folder 1',
    type: 'folder',
    size: 0,
    children: [
      {
        name: 'File 1',
        type: 'file',
        size: 1024,
      },
      {
        name: 'File 2',
        type: 'file',
        size: 2048,
      },
    ],
  },
  {
    size: 0,
    name: 'Folder 2',
    type: 'folder',
    children: [
      {
        name: 'File 1',
        type: 'file',
        size: 1024,
      },
      {
        name: 'File 2',
        type: 'file',
        size: 2048,
      },
    ],
  },
];

const DirExplorerContent: React.FC<DirExplorerContentProps> = () => {
  return (
    <Box w="100%" h="100%">
      {items.map((item: FileNodeModel) =>
        item.type === 'folder' ? (
          <FolderView item={item} />
        ) : (
          <FileView item={item} />
        ),
      )}
    </Box>
  );
};

export default DirExplorerContent;
