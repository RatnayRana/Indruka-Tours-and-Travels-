"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsRight, LayoutGrid, List, ArrowUpDown, Star } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

type ViewMode = "grid" | "list";

interface Tab {
  label: string;
  count: number;
}

interface BreadcrumbEntry {
  label: string;
  href?: string;
}

// ── Constants ──────────────────────────────────────────────────────────────────

const BREADCRUMBS: BreadcrumbEntry[] = [
  { label: "Home", href: "/" },
  { label: "Holidays", href: "/holidays" },
  { label: "India Tour Packages", href: "/holidays/india" },
  { label: "Bhutan Tour Packages" },
];

const TABS: Tab[] = [
  { label: "All Packages", count: 23 },
  { label: "Group Tours", count: 12 },
  { label: "Customised Tours", count: 11 },
  { label: "Most Booked", count: 6 },
  { label: "Recommended", count: 4 },
  { label: "Trending Now", count: 3 },
];

const SORT_OPTIONS: string[] = [
  "Price: Low to High",
  "Price: High to Low",
  "Duration: Short to Long",
  "Popularity",
  "Rating",
];

const RATING = 4.6;
const REVIEWS = "3.1k";
const TOTAL_PACKAGES = 23;

// ── Sub-components ─────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5",
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : i < rating
              ? "fill-yellow-200 text-yellow-400"
              : "fill-transparent text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

function RatingBlock() {
  return (
    <div className="flex items-stretch gap-4">
      {/* Rating */}
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-900 leading-none">{RATING}</span>
        <StarRating rating={RATING} />
      </div>

      <Separator orientation="vertical" className="h-10 self-center" />

      {/* Reviews */}
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-900 leading-none">{REVIEWS}</span>
        <span className="text-xs text-muted-foreground mt-0.5">Reviews</span>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function BPackagesHeader() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortValue, setSortValue] = useState<string | null>(null);

  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: -1 | 1) => {
    tabsRef.current?.scrollBy({ left: direction * 160, behavior: "smooth" });
  };

  return (
    <div className="w-full  border-b border-border shadow-xl border-1 rounded">
   
      {/* ── Header Row ── */}
      <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Title + Rating */}
        <div className="flex flex-wrap items-center gap-5">
          <h1 className="text-xl font-bold text-foreground whitespace-nowrap">
            {TOTAL_PACKAGES} Bhutan  Packages
          </h1>
          <RatingBlock />
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Sort icon button */}
          <Button
            variant="default"
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 text-white shrink-0"
            aria-label="Sort"
          >
            <ArrowUpDown className="w-4 h-4" />
          </Button>

          {/* Sort dropdown */}
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-sm font-normal min-w-[190px] justify-between"
              >
                <span>
                  <span className="text-muted-foreground">Sort by: </span>
                  {sortValue ?? "Select an option"}
                </span>
                <ChevronRight className="w-3.5 h-3.5 rotate-90 text-muted-foreground shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 center">
              {SORT_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt}
                  onSelect={() => setSortValue(opt)}
                  className={cn(
                    "cursor-pointer text-sm",
                    sortValue === opt && "text-blue-600 font-medium bg-blue-50"
                  )}
                >
                  {opt}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* View toggle */}
          <div className="flex border border-border rounded-lg overflow-hidden shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode("grid")}
              className={cn(
                "rounded-none h-9 w-9 transition-colors",
                viewMode === "grid"
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewMode("list")}
              className={cn(
                "rounded-none h-9 w-9 transition-colors",
                viewMode === "list"
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* ── Filter + Tabs Row ── */}
      <div className="px-6 py-2 flex items-center gap-2 border-t border-border/60 bg-gray-500/4">
        {/* Filter button */}
        <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold gap-2 shrink-0 rounded-lg px-5">
          Filter
          <ChevronsRight className="w-4 h-4" />
        </Button>

        {/* Scroll left */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollTabs(-1)}
          className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground shrink-0"
          aria-label="Scroll tabs left"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Scrollable tabs */}
        <div
          ref={tabsRef}
          className="flex gap-1 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={cn(
                "relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors",
                activeTab === i
                  ? "text-blue-600"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              <Badge
                variant={activeTab === i ? "default" : "secondary"}
                className={cn(
                  "text-xs h-4 px-1.5 rounded-full font-normal",
                  activeTab === i
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {tab.count}
              </Badge>

              {/* Active underline */}
              {activeTab === i && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Scroll right */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollTabs(1)}
          className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground shrink-0"
          aria-label="Scroll tabs right"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}