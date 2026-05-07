// @/custom-components/cards/DefaultTourCard.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface DefaultTourCardProps {
  remainingCount?: number;
}

export default function DefaultTourCard({
  remainingCount = 0,
}: DefaultTourCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-xl border-0 p-0 relative cursor-pointer group h-full min-h-[400px]">
      {/* Background Image */}
      <div className="relative w-full h-full min-h-[400px] overflow-hidden">
        <Image
          src="/bhutan-banner.jpg"
          alt="Explore More Tours"
          fill
          className="object-cover"
          unoptimized
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-start gap-3 p-6 text-center">
          <Button className="group mt-2 rounded-full bg-white text-blue-700 font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
            {/* Icon always visible */}

            {/* Text only appears on hover */}
            <span className="ml-0 w-0 overflow-hidden opacity-0 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              Explore More
            </span>
            <ArrowUpRight className="w-5 h-5  text-center" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
