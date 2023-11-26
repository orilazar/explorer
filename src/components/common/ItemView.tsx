import { HStack, Icon, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { useExplorer } from '../../hooks/ItemsContext';

interface ItemViewProps {
  item: FileNodeModel;
  icon: JSX.Element;
  onPress?: () => void;
}

const ItemView: React.FC<ItemViewProps> = ({ item, icon }) => {
  const { searchItems, setSearchValue } = useExplorer();
  const onItemClick = () => {
    if (item.type === 'folder') {
      setSearchValue(item.fullPath);
      searchItems(item.fullPath);
    }
  };

  return (
    <Tr _hover={{ background: 'gray.700' }} onDoubleClick={onItemClick}>
      <Td>
        <HStack>
          <Icon>{icon}</Icon>
          <Text>{item.name}</Text>
        </HStack>
      </Td>

      <Td>{item.size}</Td>
      <Td>{item.fullPath}</Td>
    </Tr>
  );
};

export default ItemView;
