import { cn } from "@/lib/utils";
import { TABS } from "../constants";
import type {  Tab, TripType } from "../types";


interface SearchTabsProps {
  activeTab: TripType;
  onTabChange: (tabId: TripType) => void;
  tabs?: Tab[];
}

export function SearchTabs({
  activeTab,
  onTabChange,
  tabs = TABS,
}: SearchTabsProps) {
  return (
    <div className="flex items-center gap-0 px-6 pt-5 pb-0">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all mr-1",
              isActive
                ? "bg-blue-50 border-2 border-blue-500 text-blue-600"
                : "text-blue-600 hover:bg-gray-50 border-2 border-transparent"
            )}
          >
            {tab.discount && (
              <span
                className={cn(
                  "absolute bg-blue-500 -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap",
                  tab.discountColor
                )}
              >
                {tab.discount}
              </span>
            )}
            <Icon className="w-4 h-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
