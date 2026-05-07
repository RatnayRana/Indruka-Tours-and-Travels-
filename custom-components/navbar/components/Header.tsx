"use client";

import { ChevronDown, Phone, HeadphonesIcon, Plane, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YatraLogo } from "./YatraLogo";
import { CorporatesDropdown } from "./CorporatesDropdown";
import { BRAND_COLOR, CORPORATE_MENU_Bhutan_ITEMS, CORPORATE_MENU_ITEMS } from "../constants";

export function Header() {
  return (
    <header className="relative z-20 p-4 ">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <YatraLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <CorporatesDropdown title="India" items={CORPORATE_MENU_ITEMS} icon="/india.png" />

            <CorporatesDropdown title="Bhutan" items={CORPORATE_MENU_Bhutan_ITEMS} icon="/bhutan.png" />

            <Button
              variant="outline"
              className="flex items-center gap-1.5 rounded-full border-gray-200 text-gray-700 text-base h-9 p-4"
            >
              <HeadphonesIcon className="w-4 h-4" />
              About Us
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-1.5 rounded-full border-gray-200 text-gray-700 text-base h-9 p-4"
            >
              <Phone className="w-4 h-4" />
              Support
              <ChevronDown className="w-3 h-3" />
            </Button>
          </nav>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <Button
              className="rounded-full px-5 text-base h-9 p-4 text-white hover:opacity-90 transition-opacity bg-blue-600"
            >
              Login / Signup
            </Button>
          </div>
        
        </div>
      </div>
    </header>
  );
}
