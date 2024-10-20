"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type DropZoneType = {
  isDragActive: boolean;
};

export const DragContainer = ({ isDragActive }: DropZoneType) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // Positions de départ pour empiler les cartes
  const initialStack = [
    { x: -20, y: 0, rotate: -5, zIndex: 1 },
    { x: 0, y: 0, rotate: 0, zIndex: 2 },
    { x: 20, y: 0, rotate: 5, zIndex: 3 },
  ];

  // Révélation des cartes quand la souris est dans le conteneur
  const revealedStack = [
    { x: -50, y: -20, rotate: -5, zIndex: 1 },
    { x: 0, y: -40, rotate: 0, zIndex: 2 },
    { x: 50, y: -20, rotate: 5, zIndex: 3 },
  ];
  // Icônes de type de fichier et labels pour chaque carte
  const fileTypes = [
    { label: ".gif", color: "text-pink-500", background: "bg-pink-100" }, // Rose pastel pour les GIF
    { label: ".jpg", color: "text-blue-500", background: "bg-blue-100" }, // Bleu pastel pour les JPG
    { label: ".png", color: "text-emerald-500", background: "bg-emerald-100" }, // Vert émeraude doux pour les PNG
  ];
  return (
    <div className="mx-96">
      <div
        className="flex w-full items-center justify-center rounded-xl border-2 border-dashed border-primary my-28 py-24 px-24 p-12 transition-colors hover:bg-sky-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-56 flex items-center justify-center">
          {fileTypes.map((file, index) => (
            <motion.div
              key={index}
              className={cn(
                file.background,
                "w-16 h-20 flex items-center justify-center rounded-lg shadow-md absolute"
              )}
              style={{ zIndex: initialStack[index].zIndex }}
              initial={initialStack[index]}
              animate={isHovered ? revealedStack[index] : initialStack[index]}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`${file.color} font-bold text-lg`}>
                {file.label}
              </div>
            </motion.div>
          ))}
        </div>
        {isDragActive ? (
          <div className="text-cyan-500 text-2xl font-semibold text-left flex-1 flex items-center">
            Drag image waiting...
          </div>
        ) : (
          <div className="text-cyan-500 text-2xl font-semibold text-left flex-1 flex items-center">
            Drag image here to begin
          </div>
        )}
      </div>
    </div>
  );
};
