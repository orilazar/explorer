import {
  Box,
  HStack,
  IconButton,
  Input,
  Tooltip,
  Text,
  Kbd,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import {
  IoChevronBackSharp,
  IoChevronUpSharp,
  IoSearchOutline,
} from 'react-icons/io5';
import { IoRefreshOutline } from 'react-icons/io5';
import { useExplorer } from '../../hooks/ItemsContext';
import { FaSearch } from 'react-icons/fa';
import useKeyboardShortcut from 'use-keyboard-shortcut';

interface DirExplorerBarProps {}

const DirExplorerBar: React.FC<DirExplorerBarProps> = () => {
  const { searchValue, updateSearchValue, searchItems, goBack, goUp } =
    useExplorer();
  const { flushHeldKeys } = useKeyboardShortcut(
    ['Control', 'Alt', 'ArrowLeft'],
    (shortcutKeys) => goBack(),
    {
      overrideSystem: false,
      ignoreInputFields: false,
      repeatOnHold: false,
    },
  );

  const search = () => {
    searchItems();
  };

  return (
    <Box w="100%" display="flex" alignItems="center" mb="1em">
      <IconButton
        aria-label="Home"
        icon={<RiHome2Line />}
        colorScheme="facebook"
      />
      <Tooltip
        openDelay={500}
        hasArrow
        label={
          <Text p="0.5em">
            <Kbd p="0.5em">ctrl</Kbd>+<Kbd p="0.5em">alt</Kbd> +
            <Kbd p="0.5em">arrow left</Kbd>
          </Text>
        }
      >
        <IconButton
          aria-label="Back"
          icon={<IoChevronBackSharp />}
          m="0em 0.4em"
          onClick={goBack}
        />
      </Tooltip>
      <Tooltip
        openDelay={500}
        hasArrow
        label={
          <Text p="0.5em">
            <Kbd p="0.5em">ctrl</Kbd>+<Kbd p="0.5em">alt</Kbd> +
            <Kbd p="0.5em">arrow up</Kbd>
          </Text>
        }
      >
        <IconButton
          aria-label="Up"
          icon={<IoChevronUpSharp />}
          mr="0.5em"
          onClick={goUp}
        />
      </Tooltip>
      <InputGroup>
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={updateSearchValue}
          background="whiteAlpha.200"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search();
            }
          }}
          p="0.2em 0.5em"
          borderRadius="0.7em"
          border={'0.1em solid rgba(255, 255, 255, 0.1)'}
        />
        <InputRightAddon fontSize="0.8em" fontWeight="bold" color="lightgray">
          1 min ago
        </InputRightAddon>
      </InputGroup>
      <IconButton
        aria-label="Search"
        icon={<IoSearchOutline />}
        ml="0.5em"
        onClick={search}
        colorScheme="linkedin"
      />
      <IconButton aria-label="Refresh" icon={<IoRefreshOutline />} ml="0.4em" />
    </Box>
  );
};

export default DirExplorerBar;
