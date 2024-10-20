"use client";

import { useEffect, useRef } from "react";

type CanvasImageWithWatermarkType = {
  imageUrl: string;
  width: number;
  height: number;
  watermarkText?: string;
  ifWatermark: boolean;
};

const CanvasImageWithWatermark = ({
  imageUrl,
  width,
  height,
  watermarkText,
  ifWatermark,
}: CanvasImageWithWatermarkType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
    const img: CanvasImageSource = new Image();
    img.src = imageUrl;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);

      if (watermarkText && ifWatermark) {
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const textWidth = 200;
        const textHeight = 50;
        for (let x = 0; x < width; x += textWidth + 20) {
          for (let y = 0; y < height; y += textHeight + 20) {
            ctx.fillText(watermarkText, x, y);
          }
        }
      }
    };
  }, [imageUrl, width, height, watermarkText]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ pointerEvents: "none" }}
      className="size-full object-contain"
    />
  );
};

export default CanvasImageWithWatermark;
