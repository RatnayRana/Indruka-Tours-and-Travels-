"use client";
 
import { CircleDotDashed, UserCheck, type LucideIcon } from "lucide-react";
import RequestCallBack from "./requestedcallback";
 
// ─── Types ───────────────────────────────────────────────────────────────────
 
export interface TourFeature {
  icon: LucideIcon;
  label: string;
}
 
export interface TourHighlight {
  title: string;
}
 
export interface TourHighlightsProps {
  /** Icons + labels rendered in the "Tour Includes" grid */
  tourFeatures: TourFeature[];
  /** List of highlight bullet points */
  tourHighlights: TourHighlight[];
  /**
   * Company name shown in the tour-manager note.
   * Renders as: "Tour includes the services of <name>'s Tour Manager."
   */
  tourManagerCompany: string;
}
 
// ─── Component ───────────────────────────────────────────────────────────────
 
export default function TourHighlights({
  tourFeatures,
  tourHighlights,
  tourManagerCompany,
}: TourHighlightsProps) {
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start">
 
        {/* ── Main Card: Tour Includes + Tour Highlights ── */}
        <div className="flex-1 bg-white rounded shadow-md p-6 flex flex-col md:flex-row gap-8 h-65">
 
          {/* LEFT - TOUR INCLUDES */}
          <div className="flex-1 md:border-r md:pr-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Tour Includes
            </h2>
 
            <div className="flex flex-wrap gap-4">
              {tourFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex  flex-nowrap items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-300 transition">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs mt-2 font-medium text-gray-600 text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
 
            <div className="flex items-start gap-3  mt-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck className="w-5 h-5 " strokeWidth={1.5} />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium mt-2">
                Tour includes the services of{" "}
                <span className="text-blue-700 font-semibold">
                  {tourManagerCompany}&apos;s Tour Manager.
                </span>
              </p>
            </div>
          </div>
 
          {/* RIGHT - TOUR HIGHLIGHTS */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Tour Highlights
            </h2>
    
          
 
            <div className="space-y-4">
              {tourHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full  group-hover:bg-blue-100 transition">
                    <CircleDotDashed className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-black transition">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* ── Separate: Request Callback (static, not dynamic) ── */}
        <div className="w-full md:w-80 shrink-0">
          <RequestCallBack />
        </div>
 
      </div>
    </div>
  );
}