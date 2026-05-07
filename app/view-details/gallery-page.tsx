"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Globe,
  Building2,
  ArrowRight,
  Info,
  MessageSquareQuote,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  date: string;
  manager: string;
  managerRole: string;
}

export interface Thumbnail {
  id: number;
  src: string;
  alt: string;
}

export interface BreadcrumbCrumb {
  label: string;
  href?: string; // omit for the active (last) crumb
}

export interface ItineraryStop {
  city: string;
  nights: number;
}

export interface TourBadge {
  label: string;
  /** "outlined" renders a border-only badge; "solid" renders filled */
  variant: "outlined" | "solid";
  color?: string; // Tailwind colour key e.g. "blue" — defaults to "blue"
}

export interface TourGalleryPageProps {
  /** Hero image */
  heroImage: {
    src: string;
    alt: string;
  };
  /** Rotating testimonial cards overlaid on the hero */
  testimonials: Testimonial[];
  /** Small thumbnail images beside the hero */
  thumbnails: Thumbnail[];
  /** Number shown on the "+N guest photos" tile */
  extraPhotoCount: number;
  /** Breadcrumb trail; last item becomes the active page crumb */
  breadcrumbs: BreadcrumbCrumb[];
  /** Small coloured labels below the breadcrumb */
  badges: TourBadge[];
  /** Main tour title */
  title: string;
  /** Trip duration in days */
  durationDays: number;
  /** Number of countries visited */
  countryCount: number;
  /** Number of cities visited */
  cityCount: number;
  /** Country / region label shown in the itinerary row */
  region: string;
  /** Ordered list of stops with overnight count */
  itineraryStops: ItineraryStop[];
  /** Text for the "view itinerary" link */
  itineraryLinkLabel?: string;
  /** Click handler for the itinerary link */
  onViewItinerary?: () => void;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const BADGE_COLOUR_MAP: Record<string, { outlined: string; solid: string }> = {
  blue: {
    outlined: "border border-blue-700 text-blue-700",
    solid: "bg-blue-600 text-white",
  },
  amber: {
    outlined: "border border-amber-600 text-amber-600",
    solid: "bg-amber-500 text-white",
  },
  green: {
    outlined: "border border-green-700 text-green-700",
    solid: "bg-green-600 text-white",
  },
};

function getTourBadgeClass(badge: TourBadge): string {
  const colour = badge.color ?? "blue";
  const map = BADGE_COLOUR_MAP[colour] ?? BADGE_COLOUR_MAP["blue"];
  return `${map[badge.variant]} text-xs font-semibold tracking-wide px-3 py-1 transition`;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function TourGalleryPage({
  heroImage,
  testimonials,
  thumbnails,
  extraPhotoCount,
  breadcrumbs,
  badges,
  title,
  durationDays,
  countryCount,
  cityCount,
  region,
  itineraryStops,
  itineraryLinkLabel = "View day-wise tour itinerary",
  onViewItinerary,
}: TourGalleryPageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () =>
    setCurrentTestimonial((p) =>
      p === 0 ? testimonials.length - 1 : p - 1
    );

  const nextTestimonial = () =>
    setCurrentTestimonial((p) =>
      p === testimonials.length - 1 ? 0 : p + 1
    );

  const t = testimonials[currentTestimonial];

  // Split breadcrumbs into trail + active
  const trailCrumbs = breadcrumbs.slice(0, -1);
  const activeCrumb = breadcrumbs[breadcrumbs.length - 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

      {/* ── Breadcrumb ── */}
      <Breadcrumb className="mb-4 text-sm">
        <BreadcrumbList>
          {trailCrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={crumb.href ?? "#"}
                  className="text-gray-500 hover:text-gray-800"
                >
                  {crumb.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </span>
          ))}
          {activeCrumb && (
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-gray-900">
                {activeCrumb.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>

     <div className="flex flex-col-reverse md:flex-col">
       {/* ── Gallery row ── */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl gap-4">

        {/* Hero image */}
        <div className="flex-1 relative rounded-xl overflow-hidden h-64 sm:h-80 lg:h-80">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full object-cover"
          />

          {/* Testimonial overlay card */}
          {testimonials.length > 0 && (
            <Card className="hidden md:block absolute top-6 right-4 left-4 sm:left-auto sm:w-72 bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100">
              <CardContent className="">
                <div className="flex justify-between border-b-2 border-b-amber-50 items-center mb-2">
                  <MessageSquareQuote size={16} className="text-amber-500" />
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full border border-gray-200"
                      onClick={prevTestimonial}
                      aria-label="Previous review"
                    >
                      <ChevronLeft size={12} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full border border-gray-200"
                      onClick={nextTestimonial}
                      aria-label="Next review"
                    >
                      <ChevronRight size={12} />
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-3 mb-3">
                  {t.text}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      {t.author}
                    </p>
                    <p className="text-[11px] text-gray-400">{t.date}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Building2 size={12} className="text-blue-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-semibold text-gray-900 leading-tight">
                        {t.manager}
                      </p>
                      <p className="text-[10px] text-gray-400 leading-tight">
                        {t.managerRole}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Thumbnails column */}
        <div className="flex  md:flex-col gap-4">
          <div className="flex md:flex-col gap-2">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="flex-1 rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Extra photos tile */}
            {extraPhotoCount > 0 && (
              <div className="flex-1 rounded bg-gray-800 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors gap-1">
                <span className="text-white font-bold text-xl leading-none">
                  +{extraPhotoCount}
                </span>
                <span className="text-gray-300 text-xs text-center leading-tight px-2">
                  guest photos
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Tour details ── */}
      <div>

        {/* Badges */}
        <div className="flex flex-wrap mt-4 mb-1">
          {badges.map((badge, idx) => (
            <div key={idx} className={getTourBadgeClass(badge)}>
              {badge.label}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-base font-mono font-bold text-gray-900 mb-1">
          {title}
        </h1>

        {/* Quick stats pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-[#EFF2FA] border-2 rounded px-3">
            <Calendar size={14} className="text-gray-500" />
            <span className="text-sm font-medium text-black">
              {durationDays} Days
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#EFF2FA] border-2 rounded px-3">
            <Globe size={14} className="text-gray-500" />
            <span className="text-sm font-medium text-black">
              {countryCount} {countryCount === 1 ? "Country" : "Countries"}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-sm font-medium text-black">
              {cityCount} {cityCount === 1 ? "City" : "Cities"}
            </span>
            <Info
              size={13}
              className="text-black cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>

        {/* Itinerary route */}
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-4 flex-wrap">
          <MapPin size={15} className="text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="font-semibold text-gray-800">{region}</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {itineraryStops.map((stop, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <span>
                  {stop.city} ({stop.nights}N)
                </span>
                {idx < itineraryStops.length - 1 && (
                  <ArrowRight size={12} className="text-gray-400" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* View itinerary link */}
        <button
          onClick={onViewItinerary}
          className=" hidden md:block md:flex  items-center gap-1 text-sm font-semibold text-black cursor-pointer transition-colors underline underline-offset-2"
        >
          {itineraryLinkLabel}
          <ArrowRight size={13} />
        </button>
      </div>
     </div>
    </div>
  );
}
