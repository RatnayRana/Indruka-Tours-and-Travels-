"use client";

import { useState } from "react";
import { PageBackground, Header, FlightSearchCard } from "./components";
import type { TripType } from "./types";
import { is } from "date-fns/locale";

export default function Navbar({ isActive = true }: { isActive?: boolean }) {
  const [activeTab, setActiveTab] = useState<TripType>("one-way");

  return (
    <div className="min-h-screen/2 relative overflow-hidden font-sans">
      <PageBackground />

      <Header />
     
        <main className="relative z-10 pt-10 pb-24 px-4">
           {isActive && (
          <div className="max-w-7xl pt-20 mx-auto">
            <FlightSearchCard
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
            )}
        </main>
    
    </div>
  );
}
