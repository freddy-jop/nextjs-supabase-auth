"use client";

import CanvasImageWithWatermark from "@/components/optimizerEditor/CanvasImageWithWatermark";
import { useFileStore } from "@/store/file.store";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import { useState } from "react";

export const OpimizerEditor = () => {
  const getDimensionImage = useFileStore((state) => state.fileDimension);
  const fileUrl = useFileStore((state) => state.file);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  if (!fileUrl) return;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="mx-5 flex items-center justify-center overflow-hidden rounded-3xl bg-sky-100/20"
      onMouseUp={handleMouseUp}
    >
      <div className="relative mx-auto h-[calc(100vh-150px)] max-h-[calc(70%-10px)] w-full p-10">
        <div
          className="relative m-auto size-full select-none overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
        >
          <CanvasImageWithWatermark
            imageUrl={fileUrl}
            width={getDimensionImage.width}
            height={getDimensionImage.height}
            watermarkText="Confidentiel"
            ifWatermark={true}
          />
          <div
            className="absolute inset-x-0 top-0 m-auto size-full select-none overflow-hidden"
            style={{
              clipPath: `inset(0% ${100 - sliderPosition}% 0% 0%)`,
            }}
          >
            <CanvasImageWithWatermark
              imageUrl={fileUrl}
              width={getDimensionImage.width}
              height={getDimensionImage.height}
              watermarkText="Confidentiel"
              ifWatermark={false}
            />
          </div>
          <div
            className="absolute inset-y-0 w-1 cursor-ew-resize bg-white"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          >
            <ChevronsLeftRightEllipsis className="absolute -left-6 top-[calc(50%-5px)] size-[52px] -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
