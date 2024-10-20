"use client";

import { useDropdownStore } from "@/store/dropdown.store";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { LoggedDropdown } from "./LoggedDropdown";

export const LoggedButton = () => {
  const down = useDropdownStore((state) => state.openDropdown);
  return (
    <LoggedDropdown>
      <Button className="flex items-center px-2 py-8 bg-transparent hover:bg-gray-700 rounded-none w-full">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full overflow-hidden mr-3">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <p className="text-2xl font-bold">F</p>
          </div>
        </div>

        <div className="text-left">
          <span className="block font-semibold text-gray-300">FredSquare</span>
        </div>

        {down ? (
          <ChevronUp className="w-5 h-5 ml-auto text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 ml-auto text-gray-400" />
        )}
      </Button>
    </LoggedDropdown>
  );
};
