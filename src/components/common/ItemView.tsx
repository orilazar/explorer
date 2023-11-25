import { Box, Button, HStack, Icon, Text, background } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';

interface ItemViewProps {
  item: FileNodeModel;
  icon: JSX.Element;
}

const ItemView: React.FC<ItemViewProps> = ({ item, icon }) => {
  return (
    <Button
      w="90%"
      ml={'5%'}
      _hover={{ background: 'rgba(255, 255, 255, 0.1)' }}
    >
      <HStack display={'flex'} w="100%">
        <Icon>{icon}</Icon>

        <Text>{item.name}</Text>
        <Text>{item.size}</Text>
      </HStack>
    </Button>
  );
};

export default ItemView;
