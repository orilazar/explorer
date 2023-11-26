import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import FolderView from './FolderView';
import FileView from './FileView';
import { useExplorer } from '../../hooks/ItemsContext';
import { FaFile, FaFolder } from 'react-icons/fa';
import ItemView from './ItemView';

interface DirExplorerContentProps {}

const DirExplorerContent: React.FC<DirExplorerContentProps> = () => {
  const { items, searchItems, setSearchValue } = useExplorer();
  const [selectedRow, setSelectedRow] = useState(0);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTableRowElement> | undefined,
  ) => {
    if (!event) return;

    if (event.key === 'ArrowUp') {
      setSelectedRow((prev) => Math.max(prev - 1, 0));
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      setSelectedRow((prev) =>
        Math.min(Math.max(prev + 1, 1), items.length - 1),
      );
      event.preventDefault();
    } else if (event.key === 'Enter') {
      searchItems(`${items[selectedRow].fullPath}`);
      setSearchValue(`${items[selectedRow].fullPath}`);
      setSelectedRow(0);
    }
  };

  const onSelectRow = (index: number) => {
    setSelectedRow(index);
  };

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
          {items?.map((item: FileNodeModel, index: number) => (
            <ItemView
              item={item}
              icon={
                item.type === 'folder' ? (
                  <FaFolder color="yellow" fontSize="1.5em" />
                ) : (
                  <FaFile fontSize="1.5em" />
                )
              }
              handleKeyDown={handleKeyDown}
              isSelected={index === selectedRow}
              onSelectRow={() => onSelectRow(index)}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DirExplorerContent;
