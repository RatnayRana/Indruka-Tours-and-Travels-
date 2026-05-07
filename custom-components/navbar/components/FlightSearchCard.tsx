/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TripTypeSelector } from "./TripTypeSelector";
import { LocationField } from "./LocationField";
import { DateField } from "./DateField";
import { TravellersField } from "./TravellersField";
import { FareTypeSelector } from "./FareTypeSelector";
import { SearchTabs } from "./SearchTabs";
import { BRAND_COLOR } from "../constants";
import { useFlightSearch } from "../hooks/useFlightSearch";
import type { TripType } from "../types";

interface FlightSearchCardProps {
  activeTab: TripType;
  onTabChange: (tab: TripType) => void;
}

export function FlightSearchCard({
  activeTab,
  onTabChange,
}: FlightSearchCardProps) {
  const {
    state,
    setTripType,
    setFareType,
    setNonStop,
    setDepartureDate,
    setReturnDate,
    swapLocations,
    setTravellers,
    handleSearch,
    setFrom,
    setTo,
  } = useFlightSearch();

  return (
        <div className="hidden md:block">

  <div className="bg-white rounded-2xl shadow-2xl overflow-visible relative">
  {/* Tabs */}
  <SearchTabs activeTab={state.tripType} onTabChange={setTripType} />
  <Separator className="mt-4" />

  <div className="px-4 sm:px-6 py-5">
    {/* SEARCH FIELDS */}
    <div className="hidden md:flex flex-wrap lg:flex-nowrap items-stretch gap-3 lg:gap-0 border border-gray-200 rounded-xl overflow-visible relative">

      {/* Departure */}
      <div className="flex-1 min-w-[220px]">
        <LocationField
          label="Departure From"
          value={state.from}
          options={[
            { city: "New York", code: "NYC", airport: "John F. Kennedy Intl" },
            { city: "Los Angeles", code: "LAX", airport: "Los Angeles Intl" },
            { city: "Chicago", code: "ORD", airport: "O'Hare Intl" },
            { city: "London", code: "LHR", airport: "Heathrow" },
            { city: "Paris", code: "CDG", airport: "Charles de Gaulle" },
            { city: "Tokyo", code: "HND", airport: "Haneda" },
          ]}
          recent={[
            { city: "Delhi", code: "DEL", airport: "Indira Gandhi Intl" },
            { city: "Mumbai", code: "BOM", airport: "Chhatrapati Shivaji Intl" },
            { city: "Bhutan", code: "PAB", airport: "Paro International" },
          ]}
          onSelect={setFrom}
        />
      </div>

      {/* Swap button */}
      <button
        onClick={swapLocations}
        aria-label="Swap locations"
        className="
          absolute 
          md:left-1/2 md:-translate-x-1/2 
          lg:left-[calc(25%-14px)] 
          top-6 z-10 
          bg-white border border-gray-200 
          rounded-full p-1.5 hover:bg-gray-50 
          shadow-sm group transition-all
        "
      >
        <ArrowLeftRight className="w-4 h-4 text-blue-700 group-hover:rotate-180 transition-transform duration-300" />
      </button>

      {/* Destination */}
      <div className="flex-1 min-w-[220px]">
        <LocationField
          label="Going To"
          value={state.to}
          options={[
            { city: "New York", code: "NYC", airport: "John F. Kennedy Intl" },
            { city: "Los Angeles", code: "LAX", airport: "Los Angeles Intl" },
            { city: "Chicago", code: "ORD", airport: "O'Hare Intl" },
            { city: "London", code: "LHR", airport: "Heathrow" },
            { city: "Paris", code: "CDG", airport: "Charles de Gaulle" },
            { city: "Tokyo", code: "HND", airport: "Haneda" },
          ]}
          recent={[
            { city: "Delhi", code: "DEL", airport: "Indira Gandhi Intl" },
            { city: "Mumbai", code: "BOM", airport: "Chhatrapati Shivaji Intl" },
            { city: "Bhutan", code: "PAB", airport: "Paro International" },
          ]}
          onSelect={setTo}
        />
      </div>

      {/* Departure date */}
      <div className="flex-1 min-w-[180px]">
        <DateField
          label="Departure Date"
          date={state.departureDate}
          onDateChange={setDepartureDate}
        />
      </div>

      {/* Return date */}
      <div className="flex-1 min-w-[180px]">
        {state.tripType === "one-way" ? (
          <DateField
            label="Return Date"
            date={undefined}
            onDateChange={setReturnDate}
            disabled
          >
            <p className="text-sm text-blue-700 font-medium leading-tight">
              Book Round Trip
              <br />
              to save extra
            </p>
          </DateField>
        ) : (
          <DateField
            label="Return Date"
            date={state.returnDate}
            onDateChange={setReturnDate}
            placeholder="Select Return"
            className="border-r border-gray-200"
          />
        )}
      </div>

      {/* Travellers */}
      <div className="flex-1 min-w-[180px]">
        <TravellersField
          travellers={state.travellers}
          onTravellersChange={setTravellers}
        />
      </div>

      {/* Search button */}
      <div className="flex items-center justify-center w-full lg:w-auto px-2">
        <Button
          onClick={handleSearch}
          className="
            w-full lg:w-auto
            px-6 py-4 lg:px-8 lg:py-6
            rounded-xl text-base font-bold
            shadow-lg text-white hover:opacity-90 transition-opacity bg-blue-700
          "
        >
          Search
        </Button>
      </div>
    </div>

    {/* Fare + options */}
    <FareTypeSelector
      fareType={state.fareType}
      onFareTypeChange={setFareType}
      nonStop={state.nonStop}
      onNonStopChange={setNonStop}
    />
  </div>
</div>
    </div>
  );
}