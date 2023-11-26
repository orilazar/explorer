import { FileTypes } from './FileTypes';

export interface FileNodeModel {
  fullPath: string;
  name: string;
  type: FileTypes;
  size: number; // in bytes
  children?: FileNodeModel[];
}
