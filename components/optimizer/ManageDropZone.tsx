"use client";

import { getImageDimensions } from "@/lib/getImageDimension";
import { useFileStore } from "@/store/file.store";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DragContainer } from "./DragContainer";

export const ManageDropZone = () => {
  const router = useRouter();
  const setFile = useFileStore((state) => state.setFile);
  const setFileDimension = useFileStore((state) => state.setFileDimension);

  const onDrop = useCallback(
    async (acceptedFiles: any) => {
      console.log("===> acceptedFiles :: ", acceptedFiles);
      const file = acceptedFiles[0];
      const url = URL.createObjectURL(file);
      setFile(url);
      const dimensions = await getImageDimensions(url);
      setFileDimension(dimensions);
      router.push("/optimizer/editor");
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <DragContainer isDragActive={isDragActive} />
    </div>
  );
};
