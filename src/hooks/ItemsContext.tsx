import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { FileNodeModel } from '../models/FileNodeModel';
const fs = window.require('fs');
import { useStackState } from 'rooks';

export enum FileReadError {
  AccessDenied = 'Access Denied',
  NotFound = 'File Not Found',
  InvalidPath = 'Invalid Path',
  Unknown = 'Unknown Error',
}

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  updateItems: () => {},
  searchValue: '',
  updateSearchValue: () => {},
  setSearchValue: () => {},
  searchItems: (newSearchValue?: string) => {},
  goBack: () => {},
  goUp: () => {},
  getFilesFromLocalPath: (path: string) =>
    new Promise<FileReadError>(() => FileReadError.Unknown),
  lastRefreshedTime: Date.now(),
});

// Create a context that contains a list of items of type FileNodeModel
// and a function to update the list of items
interface ItemsContextType {
  items: FileNodeModel[];
  updateItems: (newItems: FileNodeModel[]) => void;
  searchValue: string;
  updateSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchItems: (newSearchValue?: string) => void;
  goBack: () => void;
  goUp: () => void;
  getFilesFromLocalPath: (
    path: string,
  ) => Promise<FileNodeModel[] | FileReadError>;
  lastRefreshedTime: number;
}

interface ItemsProviderProps extends PropsWithChildren<{}> {}

// Create a provider component to wrap the components that need access to the items
export const ItemsProvider: React.FC<ItemsProviderProps> = ({ children }) => {
  const [items, setItems] = useState<FileNodeModel[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [lastRefreshedTime, setLastRefreshedTime] = useState(Date.now());

  const [backHistory, { push: backHistoryPush, pop: backHistoryPop }] =
    useStackState<string>([]);

  // Function to update the list of items
  const updateItems = (newItems: FileNodeModel[]) => {
    backHistoryPush(searchValue);
    setItems(newItems);
  };

  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const goBack = () => {
    const newSearchValue = backHistoryPop();
    if (newSearchValue) {
      setSearchValue(newSearchValue);
      searchItems(newSearchValue);
    }
  };

  const goUp = () => {
    const newSearchValue = searchValue.substring(
      0,
      searchValue.lastIndexOf('/'),
    );
    if (newSearchValue) {
      setSearchValue(newSearchValue);
      searchItems(newSearchValue);
    }
  };

  const searchItems = async (newSearchValue?: string) => {
    const path = newSearchValue || searchValue;
    if (isValidPath(path)) {
      setLastRefreshedTime(Date.now());
      const files = await getFilesFromLocalPath(path);
      if (files instanceof Array) {
        updateItems(files);
      }
    }
  };

  const getFilesFromLocalPath = async (
    path: string,
  ): Promise<FileNodeModel[] | FileReadError> => {
    if (!isValidPath(path)) {
      return FileReadError.InvalidPath;
    }
    try {
      const files = await fs.promises.readdir(path, { withFileTypes: true });
      return files?.map((file: any) => {
        const fileStats = fs.statSync(`${path}/${file.name}`);
        const size =
          fileStats.size > 1024
            ? `${fileStats.size / 1024}KB`
            : `${fileStats.size}B`;
        const fileNode: FileNodeModel = {
          name: file.name,
          fullPath: `${path}/${file.name}`,
          size: fileStats.size,
          type: fileStats.isDirectory() ? 'folder' : 'file',
        };
        return fileNode;
      });
    } catch (error) {
      console.error('Error reading files from local path:', error);
      return FileReadError.AccessDenied;
    }
  };

  const isValidPath = (path: string): boolean => {
    try {
      fs.accessSync(path, fs.constants.R_OK);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        updateItems,
        getFilesFromLocalPath,
        searchValue,
        updateSearchValue,
        setSearchValue,
        searchItems,
        goBack,
        goUp,
        lastRefreshedTime,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useExplorer = () => React.useContext(ItemsContext);
