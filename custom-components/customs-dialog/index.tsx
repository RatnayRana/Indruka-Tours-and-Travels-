"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Building2,
  UtensilsCrossed,
  PlaneTakeoff,
  Camera,
  Bus,
  UserCheck,
  Info,
  Infinity,
} from "lucide-react";

const tourFeatures = [
  { icon: Building2, label: "Hotel" },
  { icon: UtensilsCrossed, label: "Meals" },
  { icon: PlaneTakeoff, label: "Flight" },
  { icon: Camera, label: "Sightseeing" },
  { icon: Bus, label: "Transport" },
];

export function TourIncludesDialog() {
  return (
    <div className="flex items-center gap-1">
      <Infinity className="w-4 h-4 text-blue-600" />

      <Dialog>
        <DialogTrigger asChild>
          <button className="cursor-pointer">
            <span className="underline text-sm font-medium">All Inclusive</span>
          </button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-none p-0 overflow-hidden">
          <DialogHeader className="bg-[#F5F5F5] w-full px-5 py-4 border-b">
            <DialogTitle className="text-xl text-start font-semibold text-gray-800  gap-2">
              Tour Includes
            </DialogTitle>
          </DialogHeader>

          <div className="px-6 py-5 space-y-5">
            {/* Feature Icons Grid */}
            <div className="flex items-center justify-between gap-2">
              {tourFeatures.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 flex-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-300 transition-all duration-200">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-blue-50" />

            {/* Tour Manager */}
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck
                  className="w-5 h-5 text-blue-600"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                Tour includes the services of{" "}
                <span className="text-blue-700 font-semibold">
                  Indruka&apos;s Tour Manager.
                </span>
              </p>
            </div>

            {/* Notes */}
            <div className="space-y-2 bg-amber-50 border border-amber-100 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <Info
                  className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <div className="space-y-1.5">
                  <p className="text-xs text-amber-700 leading-relaxed">
                    <span className="font-semibold">*</span> Except for
                    Joining/Leaving, To &amp; fro economy class airfare is
                    included for all departure cities.
                  </p>
                  <p className="text-xs text-amber-700 font-semibold">
                    * Taxes Extra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </DialogContent>
      </Dialog>
      {/* <TourIncludesDialog/> */}
    </div>
  );
}
