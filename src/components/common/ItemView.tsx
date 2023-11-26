import {
  HStack,
  Icon,
  MenuItem,
  MenuList,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { FileNodeModel } from '../../models/FileNodeModel';
import { useExplorer } from '../../hooks/ItemsContext';
import { ContextMenu } from 'chakra-ui-contextmenu';
import { LuCopy } from 'react-icons/lu';

interface ItemViewProps {
  item: FileNodeModel;
  icon: JSX.Element;
  onPress?: () => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLTableRowElement> | undefined,
  ) => void;
  isSelected: boolean;
  onSelectRow: () => void;
}

const ItemView: React.FC<ItemViewProps> = ({
  item,
  icon,
  handleKeyDown,
  isSelected,
  onSelectRow,
}) => {
  const { searchItems, setSearchValue } = useExplorer();

  const onItemClick = () => {
    if (item.type === 'folder') {
      setSearchValue(item.fullPath);
      searchItems(item.fullPath);
    }
  };
  // create a context menu for the item that has a copy action using chakra-ui-contextmenu
  return (
    <ContextMenu<HTMLElement>
      renderMenu={() => (
        <MenuList>
          <MenuItem
            fontSize="lg"
            icon={<LuCopy fontSize="1.2em" />}
            onClick={() => navigator.clipboard.writeText(item.name)}
          >
            Copy Name
          </MenuItem>
          <MenuItem
            fontSize="lg"
            icon={<LuCopy fontSize="1.2em" />}
            onClick={() => navigator.clipboard.writeText(item.fullPath)}
          >
            Copy Full path
          </MenuItem>
        </MenuList>
      )}
    >
      {(ref: any) => (
        <Tr
          onKeyDown={handleKeyDown}
          tabIndex={0}
          _focusVisible={{ outline: 'none' }}
          ref={ref}
          _hover={{ background: 'gray.700' }}
          onDoubleClick={onItemClick}
          onClick={onSelectRow}
          background={isSelected ? 'gray.600' : 'transparent'}
        >
          <Td>
            <HStack>
              <Icon>{icon}</Icon>
              <Text>{item.name}</Text>
            </HStack>
          </Td>

          <Td>{item.size}</Td>
          <Td>{item.fullPath}</Td>
        </Tr>
      )}
    </ContextMenu>
  );
};

export default ItemView;
