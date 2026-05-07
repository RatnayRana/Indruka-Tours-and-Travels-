import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, UserPlus, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Booking",
    value: "1,200",
    change: "+2.98%",
    positive: true,
    icon: CalendarCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    label: "Total New Customers",
    value: "2,845",
    change: "-1.45%",
    positive: false,
    icon: UserPlus,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-400",
  },
  {
    label: "Total Earnings",
    value: "$12,890",
    change: "+3.75%",
    positive: true,
    icon: DollarSign,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className="border border-gray-100 shadow-none rounded-2xl"
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                  stat.iconBg
                )}
              >
                <Icon className={cn("w-5 h-5", stat.iconColor)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 leading-tight">
                  {stat.value}
                </p>
              </div>
              <span
                className={cn(
                  "text-xs font-semibold px-2 py-1 rounded-lg shrink-0",
                  stat.positive
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-500"
                )}
              >
                {stat.change}
              </span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
