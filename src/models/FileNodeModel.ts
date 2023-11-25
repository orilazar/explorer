import { FileTypes } from './FileTypes';

export interface FileNodeModel {
  name: string;
  type: FileTypes;
  size: number; // in bytes
  children?: FileNodeModel[];
}
