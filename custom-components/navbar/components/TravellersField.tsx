"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import type { Travellers } from "../types";

const CABIN_CLASSES = ["Economy", "Premium Economy", "Business", "First Class"];

interface TravellersFieldProps {
  travellers: Travellers;
  onTravellersChange: (travellers: Travellers) => void;
}

export function TravellersField({ travellers, onTravellersChange }: TravellersFieldProps) {
  const [open, setOpen] = useState(false);
  const [localCount, setLocalCount] = useState(travellers.count);
  const [localClass, setLocalClass] = useState(travellers.class);

  const handleApply = () => {
    onTravellersChange({ count: localCount, class: localClass });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex-1 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors min-w-0">
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
            Travellers &amp; Class
            <ChevronDown className="w-3 h-3" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {travellers.count} Traveller{travellers.count > 1 ? "s" : ""}
          </p>
          <p className="text-xs text-gray-400">{travellers.class}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4 shadow-xl rounded-xl" align="end">
        {/* Count selector */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Travellers
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Adults</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocalCount(Math.max(1, localCount - 1))}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                disabled={localCount <= 1}
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-sm font-semibold w-4 text-center">{localCount}</span>
              <button
                onClick={() => setLocalCount(Math.min(9, localCount + 1))}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                disabled={localCount >= 9}
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Class selector */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Cabin Class
          </p>
          <div className="grid grid-cols-2 gap-2">
            {CABIN_CLASSES.map((cls) => (
              <button
                key={cls}
                onClick={() => setLocalClass(cls)}
                className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                  localClass === cls
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        <Button
          className="w-full text-white text-sm rounded-lg"
          style={{ backgroundColor: "#e31937" }}
          onClick={handleApply}
        >
          Apply
        </Button>
      </PopoverContent>
    </Popover>
  );
}
