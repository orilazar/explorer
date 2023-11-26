import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import FolderView from './FolderView';
import FileView from './FileView';
import { useExplorer } from '../../hooks/ItemsContext';

interface DirExplorerContentProps {}

const DirExplorerContent: React.FC<DirExplorerContentProps> = () => {
  const { items } = useExplorer();
  return (
    <TableContainer w="100%" maxH="90vh" overflowY="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Size</Th>
            <Th>Full path</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items?.map((item: FileNodeModel, index: number) =>
            item.type === 'folder' ? (
              <FolderView item={item} key={index} />
            ) : (
              <FileView item={item} key={index} />
            ),
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DirExplorerContent;
