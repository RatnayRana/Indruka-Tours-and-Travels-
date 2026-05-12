/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSearchParams } from "next/navigation";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";
import TourGalleryPage from "./gallery-page";
import TourHighlights from "./tour-highlights";
import ItineraryPage, {
  type CancellationRow,
  type MainTab,
  type TabSection,
  type UpgradeItem,
} from "./tour-iternary";
import { tours } from "../tours/data";
import { type ViewDetailsPageProps, mainTabs, tourInformationTabs, needToKnow, cancellationRows, upgrades } from "./other-important-data";



export default async function TouristPageDetails({
  searchParams,
}: ViewDetailsPageProps) {
  const params = await searchParams;

  const id = Number(params.id);

  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Tour not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar isActive={false} />

      <TourGalleryPage
        heroImage={tour.heroImage ?? { src: "", alt: tour.title }}
        testimonials={tour?.testimonials ?? []}
        thumbnails={tour.thumbnails ?? []}
        breadcrumbs={tour.breadcrumbs ?? []}
badges={
  (tour.badges ?? [])
    .filter((b) => b.variant === "solid" || b.variant === "outlined")
    .map((badge) => ({
      ...badge,
      variant: badge.variant as "solid" | "outlined",
    }))
}        title={tour.title}
        durationDays={
          (tour.durationDays ?? tour.durationTag)
            ? parseInt(tour.durationTag)
            : 0
        }
        countryCount={tour.countryCount ?? 1}
        cityCount={tour.cityCount ?? tour.destinations.length}
        region={tour.region ?? tour.place}
        itineraryStops={tour.itineraryStops ?? []}
        onViewItinerary={() => {
          document
            .getElementById("itinerary")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

      <TourHighlights
        tourFeatures={tour.tourFeatures ?? []}
        tourHighlights={tour.tourHighlights ?? []}
        tourManagerCompany={tour.tourManagerCompany ?? ""}
      />
      <div id="itinerary">
        <ItineraryPage
          mainTabs={mainTabs}
          departureDate={`${tour.durationDays} days`}
          departureCity={tour.place}
          onChangeDepartureDate={() => console.log("open date picker")}
          days={tour.days ?? []}
          knowBeforeBook={{
            note: "Seats are subject to availability at time of booking.",
            airline: "On group tours we fly with group-friendly airlines.",
            lines: [
              "Economy class by default.",
              "Upgrades to Business / First Class available on request.",
            ],
          }}
          tourDetails={tour.tourDetails ?? []}
          tourInformationTitle="Tour Information"
          tourInformationSubtitle="Read this to prepare for your tour in the best way!"
          tourInformationTabs={tourInformationTabs}
          needToKnow={needToKnow}
          cancellationRows={cancellationRows}
          upgrades={upgrades}
        />
      </div>
      <Footer />
    </div>
  );
}
