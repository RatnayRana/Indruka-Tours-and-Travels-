"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search anything"
            className="pl-9 w-64 h-9 bg-gray-50 border-gray-100 text-sm rounded-xl focus-visible:ring-blue-200"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <Bell className="w-4 h-4 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2.5 hover:bg-gray-50 rounded-xl px-2 py-1.5 transition-colors">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://i.pravatar.cc/40?img=12" />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs font-semibold">
                  RH
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-800 leading-tight">
                  Ruben Herwitz
                </p>
                <p className="text-xs text-gray-400 leading-tight">Admin</p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
