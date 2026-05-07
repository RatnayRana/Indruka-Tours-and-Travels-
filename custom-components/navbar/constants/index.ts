import {
  Plane,
  Hotel,
  Palmtree,
  Bus,
  TrainFront,
  Phone,
  HeadphonesIcon,
} from "lucide-react";
import type { Tab, FareType, CorporateMenuItem, NavItem, TripType, Travellers, FareTypeId ,  Location,          // ← add this
} from "../types";
import { title } from "process";


export const TABS: Tab[] = [
  {
    id: "one-way",
    label: "one-way",
    icon: Plane,
    discount: "Upto 15% Off",
    discountColor: "bg-blue-600",
  },
  {
    id: "round-trip",
    label: "Round Trip",
    icon: Hotel,
    discount: "Upto 50% Off",
    discountColor: "bg-blue-500",
  },
  { id: "multi-city", label: "Multi City", icon: Palmtree },

];

export const FARE_TYPES: FareType[] = [
  { id: "regular", label: "Regular", sublabel: "Regular Fares" },
  { id: "student", label: "Student", sublabel: "Extra Baggage" },
  { id: "armed", label: "Armed Forces", sublabel: "Extra Discount" },
  { id: "senior", label: "Senior Citizen", sublabel: "Extra Discount" },
];
export const TRIP_TYPES: { value: TripType; label: string }[] = [
  { value: "one-way", label: "One Way" },
  { value: "round-trip", label: "Round Trip" },
  { value: "multi-city", label: "Multi City" },
];

export const CORPORATE_MENU_ITEMS: CorporateMenuItem[] = [
  {
    title: "North East",
    subtitle: [
      { title: "Assam" },
      { title: "Arunachal Pradesh" },
      { title: "Manipur" },
      { title: "Meghalaya" },
      { title: "Mizoram" },
      { title: "Nagaland" },
      { title: "Sikkim" },
      { title: "Tripura" },
    ],
  },
  {
    title: "East India",
    subtitle: [
      { title: "Bihar" },
      { title: "Jharkhand" },
      { title: "Odisha" },
      { title: "West Bengal" },
    ],
  },
  {
    title: "Central India",
    subtitle: [
      { title: "Chhattisgarh" },
      { title: "Madhya Pradesh" },
    ],
  },
  {
    title: "North India",
    subtitle: [
     { title: "Delhi" },
     
      { title: "Haryana" },
      { title: "Himachal Pradesh" },
      { title: "Jammu & Kashmir" },
      { title: "Punjab" },
      { title: "Rajasthan" },
      { title: "Uttarakhand" },
      { title: "Uttar Pradesh" },
    ],
  },
  {
    title: "West India",
    subtitle: [
      { title: "Goa" },
      { title: "Gujarat" },
      { title: "Maharashtra" },
    ],
  },
  {
    title: "South India",
    subtitle: [
      { title: "Andhra Pradesh" },
      { title: "Karnataka" },
      { title: "Kerala" },
      { title: "Tamil Nadu" },
      { title: "Telangana" },
    ],
  },
];
export const CORPORATE_MENU_Bhutan_ITEMS: CorporateMenuItem[] = [
  {
    title: "First Time Traveller",
    subtitle: [
      { title: "Thimphu" },
      { title: "Paro" },
      { title: "Punakha" },
      { title: "Phobjikha Valley" },
      { title: "Dochula Pass" },
    ],
  },
  {
    title: "Nature Lover",
    subtitle: [
      { title: "Jigme Dorji National Park" },
      { title: "Phobjikha Valley" },
      { title: "Bumthang Valley" },
      { title: "Haa Valley" },
      { title: "Royal Manas National Park" },
    ],
  },
  {
    title: "Culture Enthusiast",
    subtitle: [
      { title: "Punakha Dzong" },
      { title: "Tashichho Dzong" },
      { title: "Kyichu Lhakhang" },
      { title: "Dochula 108 Chortens" },
      { title: "Buddha Dordenma Statue" },
    ],
  },
  {
    title: "Adventure Seeker",
    subtitle: [
      { title: "Druk Path Trek" },
      { title: "Snowman Trek" },
      { title: "Jomolhari Trek" },
      { title: "Tiger’s Nest Hike" },
      { title: "Bumthang Mountain Trails" },
    ],
  },
  {
    title: "Leisure Traveller",
    subtitle: [
      { title: "Paro Valley Resorts" },
      { title: "Thimphu Cafés & Streets" },
      { title: "Hot Stone Bath Experience" },
      { title: "Dochula Scenic Drive" },
    ],
  },
  {
    title: "Family Vacationer",
    subtitle: [
      { title: "Thimphu City Tour" },
      { title: "Paro Sightseeing" },
      { title: "Punakha Suspension Bridge" },
      { title: "Weekend Markets" },
      { title: "National Museum of Bhutan" },
    ],
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "For Travel Agents", icon: HeadphonesIcon },
  { label: "Support", icon: Phone, hasDropdown: true },
];



export const DEFAULT_FROM: Location = {
  city: "New Delhi",
  code: "DEL",
  airport: "Indira Gandhi International",
};

export const DEFAULT_TO: Location = {
  city: "Bhutan",
  code: "POB",
  airport: "Paro International",
};

export const DEFAULT_TRAVELLERS: Travellers = {
  count: 1,
  class: "Economy",
};

export const DEFAULT_FARE_TYPE: FareTypeId = "regular";
export const DEFAULT_TRIP_TYPE: TripType = "one-way";

export const BRAND_COLOR = "#e31937";
export const BRAND_DARK = "#c71530";
