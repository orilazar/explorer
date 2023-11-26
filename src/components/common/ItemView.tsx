import { HStack, Icon, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';

interface ItemViewProps {
  item: FileNodeModel;
  icon: JSX.Element;
  onPress?: () => void;
}

const ItemView: React.FC<ItemViewProps> = ({ item, icon }) => {
  return (
    <Tr>
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
