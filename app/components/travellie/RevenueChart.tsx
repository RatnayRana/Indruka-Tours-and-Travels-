"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const data = [
  { day: "Sun", revenue: 200 },
  { day: "Mon", revenue: 380 },
  { day: "Tue", revenue: 250 },
  { day: "Wed", revenue: 635 },
  { day: "Thu", revenue: 480 },
  { day: "Fri", revenue: 520 },
  { day: "Sat", revenue: 490 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-xl shadow-lg">
        <p className="font-semibold">${payload[0].value}</p>
        <p className="text-gray-400">{label}</p>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-5">
        <CardTitle className="text-sm font-semibold text-gray-800">
          Revenue Overview
        </CardTitle>
        <Button
          variant="default"
          size="sm"
          className="h-7 px-3 text-xs bg-blue-500 hover:bg-blue-600 rounded-lg gap-1"
        >
          Weekly <ChevronDown className="w-3 h-3" />
        </Button>
      </CardHeader>
      <CardContent className="px-2 pb-4">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#3b82f6", strokeDasharray: "4 4" }} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2.5}
              fill="url(#revenueGrad)"
              dot={false}
              activeDot={{ r: 5, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
