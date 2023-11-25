import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';

interface ItemViewProps {
  item: FileNodeModel;
  icon: JSX.Element;
}

const ItemView: React.FC<ItemViewProps> = ({ item, icon }) => {
  return (
    <Box w="100%" h="100%">
      <Button>
        <HStack>
          <Icon>{icon}</Icon>

          <Text>{item.name}</Text>
          <Text>{item.size}</Text>
        </HStack>
      </Button>
    </Box>
  );
};

export default ItemView;
