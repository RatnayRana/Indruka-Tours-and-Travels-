import { cn } from "@/lib/utils";

import type { FareTypeId } from "../types";
import { FARE_TYPES } from "../constants";

interface FareTypeSelectorProps {
  fareType: FareTypeId;
  onFareTypeChange: (id: FareTypeId) => void;
  nonStop: boolean;
  onNonStopChange: (checked: boolean) => void;
}

export function FareTypeSelector({
  fareType,
  onFareTypeChange,

}: FareTypeSelectorProps) {
  return (
    <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        {FARE_TYPES?.map((fare) => (
          <button
            key={fare.id}
            onClick={() => onFareTypeChange(fare.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-all",
              fareType === fare.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            {/* Custom radio dot */}
            <div
              className={cn(
                "w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                fareType === fare.id ? "border-blue-500" : "border-gray-400"
              )}
            >
              {fareType === fare.id && (
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              )}
            </div>

            <div className="text-left leading-none">
              <span className="font-medium text-gray-800 text-xs">{fare.label}</span>
              <span className="text-gray-400 text-xs ml-1">{fare.sublabel}</span>
            </div>
          </button>
        ))}      
      </div>

     
    </div>
  );
}
