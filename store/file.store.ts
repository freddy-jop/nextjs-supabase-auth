import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Dimensions = {
  width: number;
  height: number;
};

export type FileType = {
  file: string | null;
  fileDimension: Dimensions;
  fileOptimized: string | null;
  setFile: (blob: string) => void;
  setFileOptimized: (blobOptima: string) => void;
  setFileDimension: (objDimension: Dimensions) => void;
  clearFile: () => void;
};

export const useFileStore = create(
  persist<FileType>(
    (set) => ({
      file: null,
      fileOptimized: null,
      fileDimension: { width: 0, height: 0 },
      setFile: (blob: string) =>
        set({
          file: blob,
        }),
      setFileOptimized: (blobOptima: string) =>
        set({
          fileOptimized: blobOptima,
        }),
      setFileDimension: (objDimension: Dimensions) =>
        set({
          fileDimension: objDimension,
        }),
      clearFile: () => set({ file: null, fileOptimized: null }),
    }),
    { name: "file-store" }
  )
);
