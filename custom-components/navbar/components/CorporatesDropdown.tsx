"use client";
import { Briefcase, ChevronDown, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CorporateMenuItem } from "../types";
import { useState } from "react";
import Image from "next/image";

interface CorporatesDropdownProps {
  items: CorporateMenuItem[];
  title: string;
  icon?: string;
}

export function CorporatesDropdown({ items, title, icon }: CorporatesDropdownProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-full border-gray-200 bg-white text-gray-700 text-sm font-medium h-10 px-4 shadow-sm hover:shadow-md transition"
        >
         {icon ? (
           <Image src={icon} alt={title} width={24} height={24} />
         ) : (
           <Briefcase className="w-4 h-4" />
         )}
          {title}
          <ChevronDown className="w-3 h-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="
          w-[100vw] max-w-6xl 
          p-4 
          rounded-2xl 
          border border-gray-100 
          shadow-2xl 
          bg-white
        "
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {items.map((item, i) => (
            <DropdownMenuItem
              key={i}
              className="
                flex flex-col items-start gap-1 
                p-3 
                rounded-xl 
                cursor-pointer 
                transition 
                hover:bg-pink-50 
                focus:bg-pink-50 
                hover:scale-[1.02]
              "
            >
              <span className="font-semibold text-gray-800 text-sm">
                {item.title}
              </span>
              <span className="text-gray-500 text-xl leading-snug">
                <div className="flex flex-col items-start gap-1 p-3 rounded-xl">
           

                  {/* States */}
                  <div className="text-gray-500 text-xs space-y-1">
                    {item.subtitle
                      .slice(0, expandedIndex === i ? item.subtitle.length : 4)
                      .map((state, idx) => (
                        <div
                          key={idx}
                          className="hover:text-pink-600 transition cursor-pointer text-base"
                        >
                          {state.title}
                        </div>
                      ))}

                    {item.subtitle.length > 4 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation(); // 🔥 prevents dropdown close
                          setExpandedIndex(expandedIndex === i ? null : i);
                        }}
                        className="hover:text-pink-600 text-pink-600 text-xs mt-1 hover:underline"
                      >
                        {expandedIndex === i ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>
                </div>
              </span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
