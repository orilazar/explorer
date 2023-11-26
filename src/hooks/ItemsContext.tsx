import React, { PropsWithChildren, createContext, useState } from 'react';
import { FileNodeModel } from '../models/FileNodeModel';
//@ts-ignore
const fs = window.require('fs');

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
  getFilesFromLocalPath: (path: string) =>
    new Promise<FileReadError>(() => FileReadError.Unknown),
});

// Create a context that contains a list of items of type FileNodeModel
// and a function to update the list of items
interface ItemsContextType {
  items: FileNodeModel[];
  updateItems: (newItems: FileNodeModel[]) => void;
  searchValue: string;
  updateSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getFilesFromLocalPath: (
    path: string,
  ) => Promise<FileNodeModel[] | FileReadError>;
}

interface ItemsProviderProps extends PropsWithChildren<{}> {}

// Create a provider component to wrap the components that need access to the items
export const ItemsProvider: React.FC<ItemsProviderProps> = ({ children }) => {
  const [items, setItems] = useState<FileNodeModel[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  // Function to update the list of items
  const updateItems = (newItems: FileNodeModel[]) => {
    setItems(newItems);
  };

  const updateSearchValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (isValidPath(newValue)) {
      const files = await getFilesFromLocalPath(newValue);
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
      console.log(files);
      return files?.map((file: any) => {
        const fileStats = fs.statSync(`${path}/${file.name}`);
        console.log(file);
        const fileNode: FileNodeModel = {
          name: file.name,
          fullPath: `${path}/${file}`,
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
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useExplorer = () => React.useContext(ItemsContext);
