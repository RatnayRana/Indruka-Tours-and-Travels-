"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface Location {
  city: string;
  code: string;
  airport: string;
}

interface Props {
  label: string;
  value: Location | null;
  options: Location[];
  recent?: Location[];
  onSelect: (val: Location) => void;
}

export function LocationField({
  label,
  value,
  options,
  recent = [],
  onSelect,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex-1 border-r border-gray-200">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start flex-col items-start h-20 px-4 hover:bg-gray-50"
          >
            <p className="text-xs text-gray-500">{label}</p>

            <p className="text-xl font-bold text-gray-900 truncate">
              {value?.city || "Select City"}
            </p>

            <p className="text-xs text-gray-400 truncate">
              {value ? `${value.code} • ${value.airport}` : "Search airport"}
            </p>

            <ChevronsUpDown className="w-4 h-4 text-gray-400 absolute right-3 top-6" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[420px] p-0">
          <Command>
            <CommandInput placeholder="Search city or airport..." />

            <CommandList>
              <CommandEmpty>No results found</CommandEmpty>

              {/* 🔥 Recent Searches */}
              {recent.length > 0 && (
                <CommandGroup heading="Recent Searches">
                  {recent.map((item, i) => (
                    <CommandItem
                      key={i}
                      onSelect={() => {
                        onSelect(item);
                        setOpen(false);
                      }}
                    >
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {item.city} ({item.code})
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {/* ✈️ Airports */}
              <CommandGroup heading="Airports">
                {options.map((item, i) => (
                  <CommandItem
                    key={i}
                    onSelect={() => {
                      onSelect(item);
                      setOpen(false);
                    }}
                  >
                    <Check className="w-4 h-4 mr-2 opacity-0" />

                    <div className="flex flex-col">
                      <span className="font-medium">
                        {item.city} ({item.code})
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.airport}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}