"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

export function CalendarWidget() {
  const [year, setYear] = useState(2028);
  const [month, setMonth] = useState(6); // July = 6

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const today = 19; // Highlighted date from design
  const selectedDates = [12, 13, 14, 15]; // Highlighted range

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <CardTitle className="text-sm font-semibold text-gray-800 flex items-center gap-1">
          {MONTH_NAMES[month]} {year}
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        </CardTitle>
        <div className="flex items-center gap-1">
          <button
            onClick={prevMonth}
            className="w-6 h-6 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-gray-500" />
          </button>
          <button
            onClick={nextMonth}
            className="w-6 h-6 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-4">
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map((d) => (
            <div key={d} className="text-center text-xs font-medium text-gray-400 py-1">
              {d}
            </div>
          ))}
        </div>
        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-0.5">
          {cells.map((day, idx) => {
            if (!day) return <div key={idx} />;
            const isToday = day === today;
            const isSelected = selectedDates.includes(day);
            return (
              <button
                key={idx}
                className={cn(
                  "text-xs w-7 h-7 mx-auto rounded-full flex items-center justify-center transition-colors font-medium",
                  isToday
                    ? "bg-blue-500 text-white"
                    : isSelected
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
