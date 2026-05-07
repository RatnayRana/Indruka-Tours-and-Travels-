import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TRIP_TYPES } from "../constants";
import type { TripType } from "../types";


interface TripTypeSelectorProps {
  value: TripType;
  onChange: (value: TripType) => void;
}

export function TripTypeSelector({ value, onChange }: TripTypeSelectorProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(v) => onChange(v as TripType)}
      className="flex items-center gap-6 mb-5"
    >
      {TRIP_TYPES.map((opt) => (
        <div key={opt.value} className="flex items-center gap-2">
          <RadioGroupItem
            value={opt.value}
            id={opt.value}
            className="border-red-500 text-red-500 data-[state=checked]:border-red-500 data-[state=checked]:text-red-500"
          />
          <Label
            htmlFor={opt.value}
            className="text-sm font-medium cursor-pointer text-gray-700"
          >
            {opt.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
