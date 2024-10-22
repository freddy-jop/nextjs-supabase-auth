"use client";

import { getImageDimensions } from "@/lib/getImageDimension";
import { useFileStore } from "@/store/file.store";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { DragContainer } from "./DragContainer";

const maxSizeBytes = 4 * 1024 * 1024;
const maxSizeMb = maxSizeBytes / 1024 / 1024;
const acceptedFiles = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

export const ManageDropZone = () => {
  const router = useRouter();
  const setFile = useFileStore((state) => state.setFile);
  const setFileDimension = useFileStore((state) => state.setFileDimension);
  const setFileType = useFileStore((state) => state.setFileType);

  const validateFile = <T extends File>(
    file: T
  ): FileError | readonly FileError[] | null => {
    const errors: FileError[] = [];
    const acceptedFormats = acceptedFiles.map((format) => format.trim());

    // Check if the file format is in the accepted formats
    const isAcceptedFormat = acceptedFormats.some((format) => {
      if (format === "image/jpeg") {
        // Exclude .jfif extension for image/jpeg
        return (
          file.type === "image/jpeg" &&
          !file.name.toLowerCase().endsWith(".jfif")
        );
      }
      return file.type === format;
    });

    // Add an error if the format is not accepted
    if (!isAcceptedFormat) {
      errors.push({
        code: "Unsupported-type-jfif",
        message: `Unsupported file type: image/jfif. Allowed types are: ${acceptedFormats.join(
          ", "
        )}.`,
      });
    }

    // Return the errors if any exist, otherwise return null (valid file)
    return errors.length > 0 ? errors : null;
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (!acceptedFiles) {
        toast.error("File Error: probably too big Or Many Files");
        return;
      }
      if (rejectedFiles.length > 0) {
        for (let i = 0; i < rejectedFiles.length; i++) {
          if (rejectedFiles[i].errors.length > 0) {
            for (let j = 0; j < rejectedFiles[i].errors.length; j++) {
              if (rejectedFiles[i].errors[j]?.code === "file-too-large") {
                toast.error(`File is too large. Max size is ${maxSizeMb}MB`);
                break;
              }
              if (
                rejectedFiles[i].errors[j]?.code === "Unsupported-type-jfif"
              ) {
                toast.error(rejectedFiles[i].errors[j]?.message);
                break;
              }
              if (rejectedFiles[i].errors[j]?.message) {
                toast.error(rejectedFiles[i].errors[j].message);
                break;
              }
            }
          }
        }
      }

      const file = acceptedFiles[0];

      const fileType = file.type.split("/");
      setFileType(fileType[1]);
      const url = URL.createObjectURL(file);
      setFile(url);
      const dimensions = await getImageDimensions(url);
      setFileDimension(dimensions);
      router.push("/optimizer/editor");
    },
    [setFile, setFileType, setFileDimension]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "image/bmp": [".bmp"],
    },
    maxSize: maxSizeBytes,
    multiple: false,
    validator: validateFile,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <DragContainer isDragActive={isDragActive} />
    </div>
  );
};
