"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface DateFieldProps {
  label: string;
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  placeholder?: string;
  subPlaceholder?: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode; // for custom trigger content (e.g. round-trip upsell)
}

export function DateField({
  label,
  date,
  onDateChange,
  placeholder = "Select Date",
  className,
  disabled = false,
  children,
}: DateFieldProps) {
  const [open, setOpen] = useState(false);

  if (children && disabled) {
    return (
      <div className={cn("flex-1 px-4 py-3 border-r border-gray-200 flex flex-col justify-center min-w-0 cursor-pointer hover:bg-gray-50 transition-colors", className)}>
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        {children}
      </div>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex-1 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-r border-gray-200 min-w-0",
            className
          )}
        >
          <p className="text-xs text-gray-500 mb-0.5">{label}</p>
          <p className="text-2xl font-bold text-gray-900">
            {date ? format(date, "d MMM''yy") : placeholder}
          </p>
          <p className="text-xs text-gray-400">
            {date ? format(date, "EEEE") : ""}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            onDateChange(d);
            setOpen(false);
          }}
          initialFocus
          disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
        />
      </PopoverContent>
    </Popover>
  );
}
