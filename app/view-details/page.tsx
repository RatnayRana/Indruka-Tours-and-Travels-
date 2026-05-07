/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";
import TourGalleryPage from "./gallery-page";
import TourHighlights from "./tour-highlights";
import ItineraryPage from "./tour-iternary";
import router from "next/router";
import {
  Building2,
  UtensilsCrossed,
  PlaneTakeoff,
  Camera,
  Bus,
} from "lucide-react";

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function TouristPageDetails() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar isActive={false} />
      <TourGalleryPage
        heroImage={{
          src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=80",
          alt: "Nepal scenic landscape",
        }}
        testimonials={[
          {
            id: 1,
            text: "This was our first time with Veena world travel...",
            author: "Vaibhavi",
            date: "Travelled Dec 22, 2024",
            manager: "Pravin More",
            managerRole: "Tour Manager",
          },
        ]}
        thumbnails={[
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&q=80",
            alt: "Nepal mountains",
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=200&q=80",
            alt: "Kathmandu temple",
          },
        ]}
        extraPhotoCount={134}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "World", href: "/world" },
          { label: "Nepal", href: "/world/nepal" },
          { label: "Best of Nepal" }, // ← no href = active crumb
        ]}
        badges={[
          { label: "GROUP TOUR", variant: "outlined", color: "blue" },
          { label: "NPCP", variant: "solid", color: "blue" },
        ]}
        title="Best of Nepal"
        durationDays={8}
        countryCount={1}
        cityCount={3}
        region="Nepal"
        itineraryStops={[
          { city: "Kathmandu", nights: 3 },
          { city: "Chitwan", nights: 2 },
          { city: "Pokhara", nights: 2 },
        ]}
        onViewItinerary={() => console.log("view itinerary clicked")}
      />
      <TourHighlights
        tourFeatures={[
          { icon: Building2, label: "Hotel" },
          { icon: UtensilsCrossed, label: "Meals" },
          { icon: PlaneTakeoff, label: "Flight" },
          { icon: Camera, label: "Sightseeing" },
          { icon: Bus, label: "Transport" },
        ]}
        tourHighlights={[
          { title: "Manakamana Devi Ropeway" },
          { title: "Folk Dance of Nepal" },
          { title: "Elephant Safari" },
          { title: "Chitwan National Park" },
        ]}
        tourManagerCompany="Indruka"
      />
      <ItineraryPage />
      <Footer />
    </div>
  );
}
