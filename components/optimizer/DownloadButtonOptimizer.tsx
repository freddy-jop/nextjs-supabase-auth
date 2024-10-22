"use client";

import { useFileStore } from "@/store/file.store";
import { DownloadCloud } from "lucide-react";
import { Button } from "../ui/button";

export const DownloadButtonOptimizer = () => {
  const fileData = useFileStore((state) => state.file);
  const fileType = useFileStore((state) => state.fileType);

  const handleDownload = () => {
    const link = document.createElement("a");
    if (fileData) {
      link.href = fileData;
      link.download = `optipix-optimizer-${Date.now()}.${fileType}`;
      link.click();
    }
  };

  return (
    <div className="flex-1 flex-col justify-end">
      <Button
        variant={"premium"}
        disabled={!fileData}
        className="font-bold"
        onClick={handleDownload}
      >
        <DownloadCloud className="mr-2 size-5"></DownloadCloud>
        <span className="text-center font-bold text-sm text-white">
          Download
        </span>
      </Button>
    </div>
  );
};
