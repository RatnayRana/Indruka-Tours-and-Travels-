/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  BookOpen,
  Calendar,
  Users,
  Compass,
  Image,
  MessageSquare,
  Tag,
  MessageCircle,
  MapPin,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type SubItem = {
  label: string;
  href: string;
};

type NavItem = {
  icon: any;
  label: string;
  href?: string;
  badge?: number;
  children?: SubItem[];
};

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },

  {
    icon: Package,
    label: "Packages",
    children: [
      { label: "All Packages", href: "/packages" },
      { label: "Add Package", href: "/packages/add" },
    ],
  },

  {
    icon: BookOpen,
    label: "Bookings",
    children: [
      { label: "All Bookings", href: "/bookings" },
      { label: "Pending", href: "/bookings/pending" },
      { label: "Completed", href: "/bookings/completed" },
    ],
  },

  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: Users, label: "Travelers", href: "/travelers" },
  { icon: Compass, label: "Guides", href: "/guides" },
  { icon: Image, label: "Gallery", href: "/gallery" },

  {
    icon: MessageSquare,
    label: "Messages",
    href: "/messages",
    badge: 7,
  },

  { icon: Tag, label: "Deals", href: "/deals" },
  { icon: MessageCircle, label: "Feedback", href: "/feedback" },
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <aside className="w-60 min-h-screen bg-white border-r border-gray-100 flex flex-col py-6 px-3 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 mb-8">
        <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
          <MapPin className="w-5 h-5 text-white fill-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">Travellie</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          const isOpen =
            openMenu === item.label ||
            item.children?.some((sub) => sub.href === pathname);

          return (
            <div key={item.label}>
              {/* Main Item */}
              <button
                onClick={() => {
                  if (item.href) {
                    router.push(item.href);
                  }

                  if (item.children) {
                    setOpenMenu(isOpen ? null : item.label);
                  }
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold transition-all duration-200 w-full text-left",
                  isActive
                    ? "bg-blue-500 text-white shadow-sm shadow-blue-200"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />

                <span>{item.label}</span>

                {/* Right side (badge + arrow) */}
                <div className="ml-auto flex items-center gap-2">
                  {item.badge && (
                    <span
                      className={cn(
                        "text-xs font-semibold px-2 py-0.5 rounded-full",
                        isActive
                          ? "bg-white text-blue-500"
                          : "bg-blue-500 text-white"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}

                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isOpen ? "rotate-180" : ""
                      )}
                    />
                  )}
                </div>
              </button>

              {/* Submenu */}
              {item.children && isOpen && (
                <div className="ml-10 mt-1 flex flex-col gap-1">
                  {item.children.map((sub) => {
                    const isSubActive = pathname === sub.href;

                    return (
                      <button
                        key={sub.label}
                        onClick={() => router.push(sub.href)}
                        className={cn(
                          "text-sm text-left py-1.5 px-2 rounded-md transition",
                          isSubActive
                            ? "text-blue-600 font-semibold bg-blue-50"
                            : "text-gray-500 hover:text-blue-500"
                        )}
                      >
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}