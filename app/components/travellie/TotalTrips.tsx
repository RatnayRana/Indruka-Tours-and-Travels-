import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

export function TotalTrips() {
  const total = 1200;
  const done = 620;
  const booked = 465;
  const canceled = 115;

  const donePercent = (done / total) * 100;
  const bookedPercent = (booked / total) * 100;
  const canceledPercent = (canceled / total) * 100;

  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <Plane className="w-5 h-5 text-blue-500" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 mb-0.5">Total Trips</p>
            <p className="text-2xl font-bold text-gray-900 leading-tight">{total.toLocaleString()}</p>
          </div>

          {/* Progress bar */}
          <div className="flex-1">
            <div className="flex rounded-full overflow-hidden h-2 bg-gray-100 mb-2">
              <div
                className="bg-gray-300 transition-all"
                style={{ width: `${donePercent}%` }}
              />
              <div
                className="bg-blue-400 transition-all"
                style={{ width: `${bookedPercent}%` }}
              />
              <div
                className="bg-blue-600 transition-all"
                style={{ width: `${canceledPercent}%` }}
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>
                Done{" "}
                <span className="font-semibold text-gray-700">{done}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                Booked <span className="font-semibold text-gray-700 ml-0.5">{booked}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                Canceled <span className="font-semibold text-gray-700 ml-0.5">{canceled}</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
