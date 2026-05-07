/* eslint-disable react-hooks/refs */
"use client";

import { useState, useRef, useEffect } from "react";
import {
  Printer, Mail, ArrowLeftRight, Map, Edit2, AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import TourInformationContent from "./tabs-details";
import TourItinerary from "./itinary-dynamic";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface DayItem {
  day: number;
  date: string;
  title: string;
  details: string;
}

export interface TabSection {
  value: string;
  label: string;
  dotColor: string;
  items: string[];
}

export interface MainTab {
  value: string;
  label: string;
}

export interface TourPageProps {
  /** Departure date label shown in the alert banner, e.g. "10 Jun 2026" */
  departureDate?: string;
  /** Departure city shown in the alert banner, e.g. "Mumbai" */
  departureCity?: string;

  /** Day-by-day itinerary items */
  days?: DayItem[];

  /**
   * Tabs shown in the "Tour Information" section.
   * Each tab has a label, a dot colour class (Tailwind bg-* class) and a list of bullet items.
   */
  tourInformationTabs?: TabSection[];

  /**
   * Slot content for sections that are still placeholders.
   * Pass a React node to replace the default "… content goes here." text.
   */
  tourDetailsContent?: React.ReactNode;
  needToKnowContent?: React.ReactNode;
  cancellationContent?: React.ReactNode;
  upgradesContent?: React.ReactNode;

  /**
   * Override the navigation tab list.
   * Defaults to the standard six tabs.
   */
  mainTabs?: MainTab[];
}

// ─────────────────────────────────────────────
// Default data (same as the original hardcoded values)
// ─────────────────────────────────────────────

const DEFAULT_TABS: MainTab[] = [
  { value: "itinerary", label: "Itinerary" },
  { value: "tour-details", label: "Tour Details" },
  { value: "tour-information", label: "Tour Information" },
  { value: "need-to-know", label: "Need to Know" },
  { value: "cancellation", label: "Cancellation Policy" },
  { value: "upgrades", label: "Upgrades" },
];

const DEFAULT_DAYS: DayItem[] = [
  {
    day: 1, date: "10 Jun, 26", title: "Arrival at Kathmandu (1 Night)",
    details: "Arrive at Tribhuvan International Airport. Transfer to your hotel for check-in. The rest of the day is free for leisure. Enjoy dinner at the hotel.",
  },
  {
    day: 2, date: "11 Jun, 26", title: "Kathmandu – Chitwan (2 Nights)",
    details: "After breakfast, drive to Chitwan National Park (approx. 5 hours). Check in to your jungle resort. Afternoon canoe ride and nature walk. Dinner and cultural Tharu dance performance.",
  },
  {
    day: 3, date: "12 Jun, 26", title: "Chitwan National Park",
    details: "Full-day activities inside the UNESCO World Heritage park — jeep safari, bird watching, elephant breeding centre visit, and guided jungle walk with a naturalist.",
  },
  {
    day: 4, date: "13 Jun, 26", title: "Chitwan – Pokhara (2 Nights)",
    details: "Scenic drive to Pokhara along the Prithvi Highway with stunning mountain and river views (approx. 5 hrs). Check in to lakeside hotel. Evening free at Phewa Lake.",
  },
  {
    day: 5, date: "14 Jun, 26", title: "Pokhara",
    details: "Visit Davis Falls, Gupteshwor Mahadev Cave, Bindhyabasini Temple. Afternoon Phewa Lake boat ride to Tal Barahi Temple. Optional paragliding and sunset at Sarangkot.",
  },
  {
    day: 6, date: "15 Jun, 26", title: "Pokhara – Kathmandu (By flight) (2 Nights)",
    details: "Morning flight to Kathmandu (25 mins). Transfer to hotel. Afternoon sightseeing at Pashupatinath Temple and Boudhanath Stupa. Evening free for shopping at Thamel.",
  },
  {
    day: 7, date: "16 Jun, 26", title: "Kathmandu",
    details: "Morning visit to Swayambhunath (Monkey Temple) and Kathmandu Durbar Square. Afternoon at Patan Durbar Square and Patan Museum. Evening cultural show and dinner.",
  },
  {
    day: 8, date: "17 Jun, 26", title: "Kathmandu – Departure",
    details: "Morning free for last-minute shopping. Transfer to Tribhuvan International Airport for your onward journey. Tour ends with fond memories of Nepal.",
  },
];

const DEFAULT_TOUR_INFORMATION_TABS: TabSection[] = [
  {
    value: "inclusions",
    label: "Tour Inclusions",
    dotColor: "bg-green-500",
    items: [
      "To and fro economy class air travel for 'Mumbai to Mumbai Tour' guests as mentioned in the itinerary",
      "Airfare, Airport taxes and Visa Fees",
      "Baggage Allowance as per the airline policy",
      "Tour Manager Services throughout the tour",
      "Travel by comfortable A/C coach as per the tour itinerary",
      "Entrance fees of all sightseeing places to be visited from inside",
      "Accommodation in comfortable and convenient hotels on twin sharing basis",
      "All Meals – Breakfast, Lunch, Dinner (set menu) as mentioned in the itinerary",
      "All Tips – Guide, Driver & Restaurants",
      "Cost of internal airfare as mentioned in the itinerary",
    ],
  },
  {
    value: "exclusions",
    label: "Tour Exclusions",
    dotColor: "bg-red-400",
    items: [
      "Personal expenses such as laundry, telephone calls, tips, etc.",
      "Any expense caused by reasons beyond control (e.g. bad weather, natural disaster, etc.)",
      "Optional tours and sightseeing not mentioned in the itinerary",
      "Any increase in air fare / fuel surcharge / airport taxes",
      "Cost of upgrades, special requests, or room upgrades",
    ],
  },
  {
    value: "advance",
    label: "Advance Preparation",
    dotColor: "bg-blue-500",
    items: [
      "Carry valid passport with at least 6 months validity and Nepal visa",
      "Carry comfortable walking shoes and warm clothing for higher altitude areas",
      "Carry any personal medications you may require during the tour",
      "Keep emergency contact numbers and travel insurance documents handy",
      "Carry local currency (NPR) for personal expenses and tips",
    ],
  },
];

// ─────────────────────────────────────────────
// Sub-components (unchanged from original)
// ─────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="white"
      />
    </svg>
  );
}

function SidebarActionBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1.5 flex-1 py-3 px-2 text-center hover:bg-blue-50 transition-colors">
      <div className="text-blue-900">{icon}</div>
      <span className="text-[11px] text-gray-500 leading-tight whitespace-pre-line">{label}</span>
    </button>
  );
}

// ─────────────────────────────────────────────
// Main component — now fully prop-driven
// ─────────────────────────────────────────────

export default function ItineraryPage({
  departureDate = "10 Jun 2026",
  departureCity = "Mumbai",
  days = DEFAULT_DAYS,
  tourInformationTabs = DEFAULT_TOUR_INFORMATION_TABS,
  tourDetailsContent,
  needToKnowContent,
  cancellationContent,
  upgradesContent,
  mainTabs = DEFAULT_TABS,
}: TourPageProps) {

  const [activeTab, setActiveTab] = useState(mainTabs[0]?.value ?? "itinerary");
  const isScrollingRef = useRef(false);

  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Build section refs dynamically from mainTabs
  const sectionRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement | null>>>(
    Object.fromEntries(mainTabs.map((t) => [t.value, { current: null }]))
  );

  // Keep sectionRefs in sync if mainTabs changes
  useEffect(() => {
    mainTabs.forEach((t) => {
      if (!sectionRefs.current[t.value]) {
        sectionRefs.current[t.value] = { current: null };
      }
    });
  }, [mainTabs]);

  const updateIndicator = (value: string) => {
    const btn = tabButtonRefs.current[value];
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  };

  useEffect(() => { updateIndicator(activeTab); }, [activeTab]);

  useEffect(() => {
    const handleResize = () => updateIndicator(activeTab);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  useEffect(() => {
    const observers = Object.entries(sectionRefs.current).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current) setActiveTab(key);
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [mainTabs]);

  const scrollToSection = (value: string) => {
    setActiveTab(value);
    isScrollingRef.current = true;
    sectionRefs.current[value]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isScrollingRef.current = false; }, 800);
  };

  // Helper to attach a ref callback for each section div
  const setSectionRef = (value: string) => (el: HTMLDivElement | null) => {
    if (sectionRefs.current[value]) {
      sectionRefs.current[value].current = el;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Top Nav Tabs ── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative flex overflow-x-auto">
            {mainTabs.map((tab) => (
              <button
                key={tab.value}
                ref={(el) => { tabButtonRefs.current[tab.value] = el; }}
                onClick={() => scrollToSection(tab.value)}
                className={cn(
                  "px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors relative z-10",
                  activeTab === tab.value
                    ? "text-blue-900 font-semibold"
                    : "text-gray-500 hover:text-blue-900"
                )}
              >
                {tab.label}
              </button>
            ))}
            <span
              className="absolute bottom-0 h-0.5 bg-blue-900 rounded-full transition-all duration-300 ease-in-out"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>
        </div>
      </div>

      {/* ── Page Body ── */}
      <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col gap-16">

        {/* ════ ITINERARY ════ */}
        <div ref={setSectionRef("itinerary")}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Itinerary{" "}
                  <span className="text-sm font-normal text-gray-400">(Day Wise)</span>
                </h2>
                <button className="text-sm font-medium text-gray-800 underline underline-offset-2 hover:text-blue-900 transition-colors">
                  View all days
                </button>
              </div>

              {/* Alert banner */}
              <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-md px-4 py-3 mb-5">
                <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Viewing itinerary for{" "}
                  <strong className="text-gray-800">{departureDate}</strong> from{" "}
                  <strong className="text-gray-800">{departureCity}</strong>.{" "}
                  <button className="inline-flex items-center gap-1 text-blue-900 font-semibold hover:underline ml-0.5">
                    <Edit2 className="w-3 h-3" />
                    Change Departure Date
                  </button>
                </p>
              </div>

              {/* Timeline */}
              <TourItinerary days={days} />

              {/* Know before you book */}
              <div className="mt-7 pt-5 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-sm font-bold text-gray-900">Know, before you book</h3>
                  <button className="text-sm font-medium text-gray-800 underline underline-offset-2 hover:text-blue-900 transition-colors">
                    Read More
                  </button>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed"><strong>Please note:</strong></p>
                <p className="text-xs text-gray-500 leading-relaxed"><strong>Airline:</strong></p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  On group tours, we generally fly with airlines that are group-friendly.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Group tours are based on economy class. If you wish to travel by Premium Economy / Business Class / First Class, we can arrange...
                </p>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="w-72 flex-shrink-0 sticky top-20">
              {/* Map card */}
              <div
                className="relative rounded-lg overflow-hidden h-36 mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#e8f0e8 0%,#d4e8d0 50%,#c8dfc8 100%)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 17px,rgba(255,255,255,.3) 17px,rgba(255,255,255,.3) 18px),repeating-linear-gradient(90deg,transparent,transparent 17px,rgba(255,255,255,.3) 17px,rgba(255,255,255,.3) 18px)",
                  }}
                />
                <div className="absolute w-full h-3 bg-green-400/40 top-[42%] -rotate-2 scale-x-110" />
                <div className="absolute w-3 inset-y-0 left-[55%] bg-green-400/40 rotate-[4deg] scale-y-110" />
                <div className="absolute top-3 right-5 w-12 h-7 rounded-full bg-blue-300/60" />
                <button className="relative z-10 flex items-center gap-1.5 bg-white rounded-md px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-md hover:shadow-lg transition-shadow">
                  <Map className="w-4 h-4" />
                  Map View
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex border border-gray-200 rounded-lg bg-white overflow-hidden divide-x divide-gray-200">
                <SidebarActionBtn icon={<WhatsAppIcon />} label={"Send\nItinerary"} />
                <SidebarActionBtn icon={<Printer className="w-5 h-5" />} label={"Print\nItinerary"} />
                <SidebarActionBtn icon={<Mail className="w-5 h-5" />} label={"Email\nItinerary"} />
                <SidebarActionBtn icon={<ArrowLeftRight className="w-5 h-5" />} label={"Compare\nTour"} />
              </div>
            </div>
          </div>
        </div>

        {/* ════ TOUR DETAILS ════ */}
        <div ref={setSectionRef("tour-details")}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tour Details</h2>
          {tourDetailsContent ?? (
            <p className="text-sm text-gray-500">Tour details content goes here.</p>
          )}
        </div>

        {/* ════ TOUR INFORMATION ════ */}
        <div ref={setSectionRef("tour-information")}>
          <TourInformationContent
            title="Tour Information"
            subtitle="Read this to prepare for your tour in the best way!"
            tabs={tourInformationTabs}
          />
        </div>

        {/* ════ NEED TO KNOW ════ */}
        <div ref={setSectionRef("need-to-know")}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Need to Know</h2>
          {needToKnowContent ?? (
            <p className="text-sm text-gray-500">Need to know content goes here.</p>
          )}
        </div>

        {/* ════ CANCELLATION POLICY ════ */}
        <div ref={setSectionRef("cancellation")}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
          {cancellationContent ?? (
            <p className="text-sm text-gray-500">Cancellation policy content goes here.</p>
          )}
        </div>

        {/* ════ UPGRADES ════ */}
        <div ref={setSectionRef("upgrades")}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upgrades</h2>
          {upgradesContent ?? (
            <p className="text-sm text-gray-500">Upgrades content goes here.</p>
          )}
        </div>

      </div>
    </div>
  );
}