import {
  Bird,
  Building2,
  Bus,
  Camera,
  Car,
  Crown,
  Drama,
  Flame,
  FlameKindling,
  Footprints,
  Heart,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  Mountain,
  Music2,
  Plane,
  ScrollText,
  Ship,
  Sparkles,
  Star,
  Tent,
  Train,
  TreePine,
  UserCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import type { TourCardProps } from "../../Bhutan/landing/card";

export const BhutanItem: TourCardProps[] = [
  {
    title: "11 Days Bhutan Tour with Haa Valley",
    place: "Paro",
    itinerary:
      "1N Paro • 2N Thimphu • 1N Punakha • 1N Phobjikha • 1N Tang Valley • 1N Bumthang • 1N Thimphu • 1N Haa • 2N Paro",
    country: "Bhutan",
    price: 'From $3,370', // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
    type:["Cultural","Family"],
    tags: [
      "10N/11D",
      "Cultural Tour",
      "Valley Explorer",
      "Haa Valley",
      "Max 16 Guests",
    ],
    images: [
      "/Haa_Valley.jpg", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels & Homestay" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Guided Hikes" },
      { icon: Flame, label: "Hot Stone Bath" },
    ],
  },
  {
    title: "Jomolhari Trekking in Bhutan",
    place: "Pharo",
    itinerary:
      "2N Paro • 1N Shingkharap • 1N Soi Thangkha • 2N Jangothang • 1N Lingzhi • 1N Shodu • 1N Thimphu • 1N Punakha • 1N Paro",
    country: "Bhutan",
    price: '$ 3,980', // To be filled
    oldPrice: 0, // To be filled
    discount:"", // To be filled
    type:["Trekking"],
    tags: ["11N/12D", "Trekking", "Himalayan Adventure", "Max 16 Guests"],
    images: [
      "/Jomolhari.jpg",
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Tent, label: "Camp Stay" },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Guided Treks" },
    ],
  },

  // {
  //   title: "Dagala Thousand Lakes Trek in Bhutan",
  //   place: "Paro",
  //   itinerary:
  //     "2N Paro • 1N Gur • 1N Labatama • 1N Kheri Khewa • 1N Tshokam • 1N Thimphu • 1N Paro",
  //   country: "Bhutan",
  //   price:"$3,600", // To be filled
  //   oldPrice: 0, // To be filled
  //   discount: "", // To be filled
  //       type:["Trekking"],

  //   tags: ["8N/9D", "Trekking", "Thousand Lakes", "Max 16 Guests"],
  //   images: [
  //     "/dagala.jpg", // To be filled
  //     "", // To be filled
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Tent, label: "Camp Stay" },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Car, label: "Transfers" },
  //     { icon: UserCheck, label: "Licensed Guide" },
  //     { icon: Mountain, label: "Guided Treks" },
  //   ],
  // },
  // {
  //   title: "Glimpse of Bhutan",
  //   place: "Paro",
  //   itinerary: "2N Thimphu • 1N Punakha • 2N Paro",
  //   country: "Bhutan",
  //   price:"$ 1,690", // To be filled
  //   oldPrice: 0, // To be filled
  //   discount: "",
  //       type:["Family","Cultural"],

  //   tags: ["5N/6D", "Cultural Tour", "Tiger's Nest", "Max 16 Guests"],
  //   images: [
  //     "/glimpse.jpg", // To be filled
  //     "", // To be filled
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Car, label: "Transfers" },
  //     { icon: UserCheck, label: "Licensed Guide" },
  //     { icon: Mountain, label: "Tiger's Nest Hike" },
  //   ],
  // },
  {
    title: "Bhutan Short Trip",
    place: "Paro",
    itinerary: "1N Thimphu • 2N Paro",
    country: "Bhutan",
    price: "$ 1,065", // To be filled
    oldPrice: 0, // To be filled
    discount: "", 
     type:["Family","Cultural"],
    tags: ["3N/4D", "Cultural Tour", "Tiger's Nest", "Max 16 Guests"],
    images: [
      "/short_trip.jpg", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
    ],
  },
  {
    title: "Paro Festival Tour",
    place: "Paro",
    itinerary: "2N Thimphu • 2N Punakha • 3N Paro",
    country: "Bhutan",
    price:"$ 2,300", // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
     type:["Family","Festivals"],
    tags: ["7N/8D", "Festival Tour", "Paro Tsechu", "Max 16 Guests"],
    images: [
      "", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Landmark, label: "Festival Entry" },
    ],
  },
  {
    title: "Best of Bhutan Tour",
    place: "Paro",
    itinerary: "2N Thimphu • 2N Phobjikha • 1N Punakha • 2N Paro",
    country: "Bhutan",
    price:"$ 2,550", // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
            type:["Family","Cultural"],

    tags: [
      "8N/9D",
      "Cultural Tour",
      "Tiger's Nest",
      "Black-Necked Cranes",
      "Max 16 Guests",
    ],
    images: [
      "", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Bird, label: "Crane Sanctuary Visit" },
    ],
  },
  //   {
  //   title: "Thimphu Festival Tour",
  //   place: "Paro",
  //   itinerary: "2N Thimphu • 1N Phobjikha • 2N Punakha • 2N Paro",
  //   country: "Bhutan",
  //   price: "$ 2,300",
  //   oldPrice: 0, // To be filled
  //   discount: "",
  //        type:["Family","Festivals"],

  //   tags: [
  //     "7N/8D",
  //     "Cultural Tour",
  //     "Thimphu Tshechu",
  //     "Tiger's Nest",
  //     "Max 16 Guests",
  //   ],
  //   images: [
  //     "", // To be filled
  //     "", // To be filled
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Car, label: "Transfers" },
  //     { icon: UserCheck, label: "Licensed Guide" },
  //     { icon: Mountain, label: "Tiger's Nest Hike" },
  //     { icon: Bird, label: "Crane Sanctuary Visit" },
  //   ],
  // },
  // {
  //   title: "Punakha Festival Tour",
  //   place: "Paro",
  //   itinerary: "2N Thimphu • 3N Punakha • 2N Paro",
  //   country: "Bhutan",
  //   price: "$2,400", // To be filled
  //   oldPrice: 0, // To be filled
  //   discount: "", // To be filled
  //       type:["Family","Festivals"],
  //   tags: [
  //     "7N/8D",
  //     "Festival Tour",
  //     "Punakha Drubchen",
  //     "Tiger's Nest",
  //     "Max 16 Guests",
  //   ],
  //   images: [
  //     "", // To be filled
  //     "", // To be filled
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Car, label: "Transfers" },
  //     { icon: UserCheck, label: "Licensed Guide" },
  //     { icon: Mountain, label: "Tiger's Nest Hike" },
  //     { icon: Landmark, label: "Festival Entry" },
  //   ],
  // },
//   {
//   title: "Druk Path Trek",
//   place: "Paro",
//   itinerary: "1N Paro • 5N Trek (Jele Dzong → Tshokham → Jimi Langtso → Simkota → Phajoding) • 2N Thimphu • 1N Paro",
//   country: "Bhutan",
//   price: 0, // To be filled
//   oldPrice: 0, // To be filled
//   discount: "", // To be filled
//       type:["Trekking"],
//   tags: ["9N/10D", "Trekking", "Druk Path", "Max 16 Guests"],
//   images: [
//     "", // To be filled
//     "", // To be filled
//   ],
//   inclusions: [
//     { icon: Plane, label: "Flights", optional: true },
//     { icon: Tent, label: "Camping & Hotels" },
//     { icon: Camera, label: "Sightseeing" },
//     { icon: UtensilsCrossed, label: "Meals" },
//     { icon: Car, label: "Transfers" },
//     { icon: UserCheck, label: "Licensed Guide" },
//     { icon: Mountain, label: "Tiger's Nest Hike" },
//     { icon: Footprints, label: "Druk Path Trek" },
//   ],
// },
{
    title: "Bhutan Cultural Journey",
    place: "Paro",
    itinerary: "2N Thimphu • 1N Phobjikha • 1N Tang Valley • 1N Jakar • 2N Punakha • 2N Paro",
    country: "Bhutan",
    price: 0, // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
    tags: [
      "9N/10D",
      "Cultural Tour",
      "Tiger's Nest",
      "Central Bhutan",
      "Max 16 Guests",
    ],
    images: [
      "", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Bird, label: "Crane Sanctuary Visit" },
      { icon: Landmark, label: "Trongsa & Bumthang Dzongs" },
      { icon: TreePine, label: "Dochula Pass Panorama" },
    ],
},
 {
    title: "Bhutan Luxury Tour",
    place: "Paro",
    itinerary: "2N Thimphu • 2N Punakha • 2N Gangtey • 2N Bumthang • 2N Paro",
    country: "Bhutan",
    price: 0, // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
        type:["Family","Luxury"],
    tags: [
      "10N/11D",
      "Luxury",
      "Tiger's Nest",
      "Zhiwaling Heritage",
      "Indruka Tours and Travels",
    ],
    images: [
      "", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Plane, label: "Domestic Flight (Bumthang–Paro)" },
      { icon: Building2, label: "Luxury Hotels" },
      { icon: UtensilsCrossed, label: "Fine Dining" },
      { icon: Car, label: "Luxury Transfers" },
      { icon: UserCheck, label: "Expert Private Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Bird, label: "Crane Sanctuary Visit" },
      { icon: Sparkles, label: "GNH Talk & Meditation" },
      { icon: HeartHandshake, label: "Community Immersion" },
      { icon: FlameKindling, label: "Traditional Hot Stone Bath" },
      { icon: Drama, label: "Private Farewell Dinner" },
    ],
  },
  //   {
  //   title: "Happiness Trek",
  //   place: "Paro",
  //   itinerary: "2N Bumthang • 4N Camping • 2N Phobjikha • 1N Punakha • 1N Thimphu • 2N Paro",
  //   country: "Bhutan",
  //   price: 0, // To be filled
  //   oldPrice: 0, // To be filled
  //   discount: "", // To be filled
  //       type:["Trekking"],
  //   tags: [
  //     "13N/14D",
  //     "Trek & Walk",
  //     "Moderate",
  //     "Central Bhutan",
  //     "Village Immersion",
  //   ],
  //   images: [
  //     "", // To be filled
  //     "", // To be filled
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Domestic Flight (Bumthang)", optional: true },
  //     { icon: Building2, label: "Hotels & Guesthouses" },
  //     { icon: Home, label: "Village Homestays" },
  //     { icon: Tent, label: "Indruka Camping" },
  //     { icon: UtensilsCrossed, label: "All Meals" },
  //     { icon: Car, label: "Transfers" },
  //     { icon: UserCheck, label: "Expert Trek Guide" },
  //     { icon: Footprints, label: "Trekking Crew & Pack Animals" },
  //     { icon: Mountain, label: "Tiger's Nest Hike" },
  //     { icon: Bird, label: "Crane Sanctuary Visit" },
  //     { icon: Flame, label: "Campfire & Ara Tasting" },
  //     { icon: Music2, label: "Village Folk Dance Evening" },
  //   ],
  // },
    {
    title: "From Historical to Modern Day Bhutan",
    place: "Phuentsholing",
    itinerary: "2N Phuentsholing • 1N Thimphu • 2N Paro",
    country: "Bhutan",
    price: 21000,
    oldPrice: 23334,
    discount: "10% OFF",
        type:["Family","Cultural"],
    // currency: "INR",
    tags: [
      "5N/6D",
      "Cultural Tour",
      "Budget Friendly",
      "From Phuentsholing",
      "Indruka Tours and Travel",
    ],
    images: [
      "", // To be filled
      "", // To be filled
    ],
    inclusions: [
      { icon: Building2, label: "Base Category Hotels" },
      { icon: UtensilsCrossed, label: "Meals (MAP — Breakfast & Dinner)" },
      { icon: Car, label: "Non-AC Cab Transfers" },
      { icon: UserCheck, label: "Local Guide & Driver" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Landmark, label: "Dzongs & Temples" },
      { icon: ScrollText, label: "Innerline Permit Included" },
    ],
  },

];

export const Indiaitem: TourCardProps[] = [
  {
    title: "Himachal Pradesh Packages",
    place: "Himachal Pradesh",
    itinerary: "Manali  • Shimla ",
    country: "India",
    price: 43000,
    oldPrice: 46000,
    discount: "6% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Deluxe"],
    images: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Goa Packages",
    place: "Goa",
    itinerary: "South Goa  • North Goa ",
    country: "India",
    price: 43000,
    oldPrice: 46000,
    discount: "6% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Deluxe"],
    images: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  
  {
    title: "Nainital Packages",
    place: "Nainital",
    itinerary: "Delhi • Nainital • Corbett • Ranikhet • Almora",
    country: "India",
    price: 10900,
    oldPrice: 13300,
    discount: "18% OFF",
    tags: ["Multi-Day", "Hill Station", "Customized"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/nainital-weekend-tour.webp",
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/corbett-nainital-weekend.webp",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Darjeeling Packages",
    place: "Darjeeling",
    itinerary: "Bagdogra • Gangtok • Nathula Pass • Darjeeling",
    country: "India",
    price: 13999,
    oldPrice: 17499,
    discount: "20% OFF",
    tags: ["Multi-Day", "Hill Station", "Customized"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Gangtok-Tour-Package.jpg",
      "https://www.namasteindiatrip.com/wp-content/uploads/2019/09/Darjeeling-Gangtok-Honeymoon-Tour-Package.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Car, label: "Transfers" },
    ],
  },


  {
    title: "Kovalam Packages",
    place: "Kovalam",
    itinerary: "Cochin • Munnar • Thekkady • Alleppey • Kovalam • Trivandrum",
    country: "India",
    price: 19999,
    oldPrice: 24999,
    discount: "20% OFF",
    tags: ["Multi-Day", "Beach", "Backwaters"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Eastern-Himalayas-Tour-Package.jpg",
      "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Car, label: "Transfers" },
    ],
  },
  {
    title: "Varanasi Ayodhya Bodhgaya Chitrakoot Pilgrimage",
    place: "Varanasi",
    itinerary: "Varanasi • Bodhgaya • Ayodhya • Chitrakoot",
    country: "India",
    price: 32500,
    oldPrice: 35000,
    discount: "7% OFF",
    tags: ["7N/6D", "Pilgrimage Tour", "Popular"],
    images: [
      "https://www.namasteindiatrip.com/include/top-selling-nit-tour-8.jpg",
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 2. KEDARNATH TEMPLE ─────────────────────────────────
  {
    title: "Badrinath Kedarnath Do Dham Yatra",
    place: "Kedarnath",
    itinerary: "Haridwar • Rishikesh • Kedarnath • Badrinath",
    country: "India",
    price: 24900,
    oldPrice: 28000,
    discount: "11% OFF",
    tags: ["8N/7D", "Do Dham Yatra", "Bestseller"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Badri-kedar_t78tkd.jpg",
      "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 3. BADRINATH TEMPLE ─────────────────────────────────
  {
    title: "Char Dham Yatra Package from Delhi",
    place: "Badrinath",
    itinerary:
      "Delhi • Rishikesh • Yamunotri • Gangotri • Kedarnath • Badrinath",
    country: "India",
    price: 43900,
    oldPrice: 46900,
    discount: "6% OFF",
    tags: ["12N/11D", "Char Dham", "Top Rated"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Chardham-Yatra-Package-from-Delhi.jpg",
      "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/chardham_delhi_yg9e6o.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 4. KEDARNATH + BADRINATH — HELICOPTER (Premium) ─────
  {
    title: "Char Dham Yatra By Helicopter — Premium",
    place: "Kedarnath",
    itinerary: "Dehradun • Yamunotri • Gangotri • Kedarnath • Badrinath",
    country: "India",
    price: 230000,
    oldPrice: 235000,
    discount: "2% OFF",
    tags: ["6N/5D", "Helicopter Yatra", "Luxury"],
    images: [
      "https://www.namasteindiatrip.com/include/top-selling-nit-tour-5.jpg",
      "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/chardham_heli_slavnk.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Helicopter" },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 5. VAISHNO DEVI ─────────────────────────────────────
  {
    title: "Mata Vaishno Devi Pilgrimage Yatra",
    place: "Vaishno Devi",
    itinerary: "Delhi • Jammu • Katra • Vaishno Devi Shrine",
    country: "India",
    price: 14900,
    oldPrice: 16500,
    discount: "10% OFF",
    tags: ["4N/3D", "Pilgrimage Tour", "Popular"],
    images: [
      "https://www.namasteindiatrip.com/include/footer/uttar-pradesh-tour-packages.jpg",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 6. GOLDEN TEMPLE, AMRITSAR ──────────────────────────
  {
    title: "Golden Temple Amritsar Spiritual Tour",
    place: "Amritsar",
    itinerary: "Delhi • Amritsar • Wagah Border • Jallianwala Bagh",
    country: "India",
    price: 12500,
    oldPrice: 15000,
    discount: "17% OFF",
    tags: ["4N/3D", "Sikh Pilgrimage", "Popular"],
    images: [
      "https://www.namasteindiatrip.com/include/footer/uttarakhand-tour-packages.jpg",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 7. JAGANNATH TEMPLE, PURI ───────────────────────────
  {
    title: "Bhubaneswar Puri Konark Jagannath Temple Tour",
    place: "Puri",
    itinerary: "Bhubaneswar • Konark • Puri • Jagannath Temple",
    country: "India",
    price: 12900,
    oldPrice: 14400,
    discount: "10% OFF",
    tags: ["4N/3D", "Temple Tour", "Popular"],
    images: [
      "https://www.namasteindiatrip.com/include/top-selling-nit-tour-6.jpg",
      "https://images.unsplash.com/photo-1567591370936-b76475ef3714?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 8. RISHIKESH — YOGA + SPIRITUAL ─────────────────────
  {
    title: "Yoga & Meditation Spiritual Tour — Rishikesh",
    place: "Rishikesh",
    itinerary: "Delhi • Haridwar • Rishikesh • Triveni Ghat",
    country: "India",
    price: 70819,
    oldPrice: 76000,
    discount: "7% OFF",
    tags: ["6N/5D", "Yoga & Spiritual", "Trending"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/yoga-rishikesh.jpg",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: HeartHandshake, label: "Yoga Classes" },
      { icon: Bus, label: "Transfers" },
    ],
  },
  // ─── 1. UDAIPUR — City of Lakes · Destination Weddings ───
  {
    title: "Majestic Rajasthan Royal Tour — Udaipur",
    place: "Udaipur",
    itinerary: "Delhi • Jaipur • Jodhpur • Udaipur",
    country: "India",
    price: 78000,
    oldPrice: 85000,
    discount: "8% OFF",
    tags: ["10N/9D", "Royal Heritage", "Luxury"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      "https://images.unsplash.com/photo-1587295656906-b2a3f174e4b4?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Palace Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 2. UDAIPUR — Honeymoon / Romantic Special ───────────
  {
    title: "Rajasthan Honeymoon Tour — Jaipur Pushkar Udaipur",
    place: "Udaipur",
    itinerary: "Delhi • Jaipur • Pushkar • Udaipur • Delhi",
    country: "India",
    price: 32000,
    oldPrice: 36000,
    discount: "11% OFF",
    tags: ["6N/5D", "Honeymoon", "Romantic"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Luxury Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 3. JAIPUR — Pink City · Foreign Tourists Favourite ──
  {
    title: "Golden Triangle Tour — Delhi Agra Jaipur",
    place: "Jaipur",
    itinerary: "Delhi • Agra • Fatehpur Sikri • Mathura • Jaipur • Amritsar",
    country: "India",
    price: 12500,
    oldPrice: 15000,
    discount: "17% OFF",
    tags: ["6N/5D", "Golden Triangle", "Popular"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/11/4days-golden-triangle-tour.webp",
      "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 4. JAIPUR — Royal Rajasthan Full Circuit ─────────────
  {
    title: "Royal Rajasthan Grand Tour — Full Circuit",
    place: "Jaipur",
    itinerary:
      "Jaipur • Bikaner • Jaisalmer • Jodhpur • Udaipur • Mount Abu • Ajmer • Pushkar",
    country: "India",
    price: 78000,
    oldPrice: 85000,
    discount: "8% OFF",
    tags: ["10N/9D", "Royal Rajasthan", "Bestseller"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Heritage Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 5. JAISALMER — Desert Camps & Safari ────────────────
  {
    title: "Jaisalmer Desert Safari & Luxury Camp Experience",
    place: "Jaisalmer",
    itinerary: "Delhi • Bikaner • Jaisalmer • Sam Sand Dunes • Jodhpur",
    country: "India",
    price: 28500,
    oldPrice: 32000,
    discount: "11% OFF",
    tags: ["6N/5D", "Desert Safari", "Luxury Camp"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      "https://images.unsplash.com/photo-1524492914791-8d78c541fd82?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Tent, label: "Luxury Desert Camp" },
      { icon: Camera, label: "Camel Safari" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
      { icon: Star, label: "Cultural Show" },
    ],
  },

  // ─── 6. JAISALMER — Indian Splendour Train Tour ──────────
  {
    title: "Indian Splendour Luxury Train Tour — Rajasthan",
    place: "Jaisalmer",
    itinerary:
      "Delhi • Agra • Ranthambore • Jaipur • Bikaner • Jaisalmer • Jodhpur • Udaipur",
    country: "India",
    price: 220000,
    oldPrice: 240000,
    discount: "8% OFF",
    tags: ["7N/6D", "Luxury Train", "Premium"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2023/11/train-tour.jpg",
      "https://images.unsplash.com/photo-1524492914791-8d78c541fd82?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Train Suite" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "All Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 7. KERALA BACKWATERS — Premium Houseboat Tourism ────
  {
    title: "Kerala Beaches & Backwaters Premium Houseboat Tour",
    place: "Alleppey",
    itinerary:
      "Cochin • Munnar • Thekkady • Alleppey • Varkala • Kovalam • Trivandrum",
    country: "India",
    price: 24999,
    oldPrice: 28500,
    discount: "12% OFF",
    tags: ["7N/6D", "Houseboat", "Premium"],
    images: [
      "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Ship, label: "Premium Houseboat" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 8. KERALA BACKWATERS — Honeymoon Luxury ─────────────
  {
    title: "Kerala Honeymoon Luxury Backwaters & Hill Stations",
    place: "Munnar",
    itinerary: "Cochin • Munnar • Alleppey • Kumarakom • Kovalam",
    country: "India",
    price: 35000,
    oldPrice: 40000,
    discount: "13% OFF",
    tags: ["8N/7D", "Honeymoon", "Luxury Backwaters"],
    images: [
      "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Ship, label: "Luxury Houseboat" },
      { icon: Crown, label: "Resort Stay" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
    ],
  },
  {
    title: "Leh Ladakh Adventure Tour Package",
    place: "Leh",
    itinerary:
      "Srinagar • Gulmarg • Sonamarg • Leh • Pangong Tso • Nubra Valley • Manali",
    country: "India",
    price: 70000,
    oldPrice: 75000,
    discount: "7% OFF",
    tags: ["10N/9D", "Adventure Tour", "Trending"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  {
    title: "Rajasthan Royal Triangle — Jaipur Udaipur Jaisalmer",
    place: "Jaipur",
    itinerary: "Delhi • Jaipur • Pushkar • Jaisalmer • Jodhpur • Udaipur",
    country: "India",
    price: 52000,
    oldPrice: 58000,
    discount: "10% OFF",
    tags: ["9N/8D", "Royal Heritage", "Bestseller"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Heritage Hotels" },
      { icon: Tent, label: "Desert Camp" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
    ],
  },

  {
    title: "Jaipur Udaipur Jaisalmer Honeymoon Tour",
    place: "Udaipur",
    itinerary: "Delhi • Jaipur • Jaisalmer • Sam Sand Dunes • Udaipur",
    country: "India",
    price: 48000,
    oldPrice: 55000,
    discount: "13% OFF",
    tags: ["8N/7D", "Honeymoon", "Romantic"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      "https://images.unsplash.com/photo-1587295656906-b2a3f174e4b4?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Luxury Hotels" },
      { icon: Tent, label: "Desert Camp Night" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
      { icon: Heart, label: "Romantic Extras" },
    ],
  },

  {
    title: "Jaisalmer Desert Camp & Jaipur Heritage Circuit",
    place: "Jaisalmer",
    itinerary: "Delhi • Jaipur • Bikaner • Jaisalmer • Sam Sand Dunes",
    country: "India",
    price: 28500,
    oldPrice: 32000,
    discount: "11% OFF",
    tags: ["6N/5D", "Desert Safari", "Trending"],
    images: [
      "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      "https://images.unsplash.com/photo-1524492914791-8d78c541fd82?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Tent, label: "Luxury Desert Camp" },
      { icon: Camera, label: "Camel Safari" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 🌸  KASHMIR
  // ─────────────────────────────────────────────────────────

  {
    title: "Kashmir Tour — Srinagar Gulmarg Pahalgam Sonamarg",
    place: "Srinagar",
    itinerary: "Srinagar • Dal Lake • Pahalgam • Gulmarg • Sonamarg",
    country: "India",
    price: 22000,
    oldPrice: 26000,
    discount: "15% OFF",
    tags: ["7N/6D", "Scenic Holiday", "Bestseller"],
    images: [
      "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Ship, label: "Houseboat Stay" },
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Bus, label: "Transfers" },
    ],
  },


  {
    title: "Chardham Yatra Packages",
    place: "Dehradun",
    itinerary: "Gangotri • Yamunotri • Kedarnath • Badrinath",
    country: "India",
    price: 43900,
    oldPrice: 46900,
    discount: "6% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Deluxe"],
    images: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Amarnath Yatra Packages",
    place: "Amarnath",
    itinerary: "Srinagar • Pahalgam • Panjtarni • Amarnath Cave",
    country: "India",
    price: 25900,
    oldPrice: 28200,
    discount: "8% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Standard"],
    images: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80",
      "https://images.unsplash.com/photo-1614591276561-7b3e69347d28?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Adi Kailash & Om Parvat Yatra",
    place: "Pithoragarh",
    itinerary: "Haldwani • Dharchula • Gunji • Adi Kailash",
    country: "India",
    price: 48500,
    oldPrice: 50900,
    discount: "5% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Premium"],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Golden Triangle Tour Package",
    place: "Golden Triangle",
    itinerary: "2N Delhi • 1N Agra • 2N Jaipur • Amritsar",
    country: "India",
    price: 12500,
    oldPrice: 15000,
    discount: "17% OFF",
    tags: ["Multi-Day", "Cultural Tour", "Premium"],
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Guided Tours" },
      { icon: UtensilsCrossed, label: "Meals" },
    ],
  },
  {
    title: "Bhubaneswar Puri Konark Tour",
    place: "Bhubaneswar",
    itinerary: "Bhubaneswar • Konark • Puri",
    country: "India",
    price: 12900,
    oldPrice: 14400,
    discount: "10% OFF",
    tags: ["4N/3D", "Temple Tour", "Standard"],
    images: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Kamakhya Devi Temple Tour",
    place: "Guwahati",
    itinerary: "Guwahati • Kamakhya Devi Darshan",
    country: "India",
    price: 13500,
    oldPrice: 15300,
    discount: "12% OFF",
    tags: ["3N/2D", "Pilgrimage", "Standard"],
    images: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Varanasi Ayodhya Bodhgaya Chitrakoot",
    place: "Varanasi",
    itinerary: "Varanasi • Bodhgaya • Ayodhya • Chitrakoot",
    country: "India",
    price: 32500,
    oldPrice: 35000,
    discount: "7% OFF",
    tags: ["7N/6D", "Pilgrimage", "Deluxe"],
    images: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Pancha Dwaraka Tour",
    place: "Ahmedabad",
    itinerary: "Ahmedabad • Dwarka • Porbandar • Somnath",
    country: "India",
    price: 42900,
    oldPrice: 45200,
    discount: "5% OFF",
    tags: ["10N/9D", "Pilgrimage", "Premium"],
    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Tamil Nadu Temple Tour",
    place: "Chennai",
    itinerary: "Chennai • Pondicherry • Rameswaram • Kanyakumari • Madurai",
    country: "India",
    price: 38900,
    oldPrice: 41000,
    discount: "5% OFF",
    tags: ["8N/7D", "Temple Tour", "Deluxe"],
    images: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Andaman Island Retreat",
    place: "PortBlair",
    itinerary: "3N Port Blair • 2N Havelock • Elephant Beach",
    country: "India",
    price: 39000,
    oldPrice: 42000,
    discount: "7% OFF",
    tags: ["5N/6D", "Island Tour", "Premium"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Beach Resorts" },
      { icon: Camera, label: "Island Tours" },
      { icon: UtensilsCrossed, label: "Meals" },
    ],
  },
  {
    title: "Ladakh Adventure Tour",
    place: "Leh",
    itinerary: "Srinagar • Gulmarg • Sonmarg • Leh • Pangong Tso",
    country: "India",
    price: 70000,
    oldPrice: 75000,
    discount: "7% OFF",
    tags: ["9N/10D", "Adventure", "Deluxe"],
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
    ],
  },
  // {
  //   title: "Sikkim & Darjeeling Holiday",
  //   place: "Gangtok",
  //   itinerary: "Kalimpong • Gangtok • Darjeeling",
  //   country: "India",
  //   price: 35000,
  //   oldPrice: 37500,
  //   discount: "7% OFF",
  //   tags: ["5N/6D", "Hill Station", "Standard"],
  //   images: [
  //     "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
  //     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Excursions" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //   ],
  // },
  // {
  //   title: "Royal Rajasthan Tour",
  //   place: "Jaipur",
  //   itinerary: "Jaipur • Bikaner • Jaisalmer • Jodhpur • Udaipur • Pushkar",
  //   country: "India",
  //   price: 78000,
  //   oldPrice: 85000,
  //   discount: "8% OFF",
  //   tags: ["10N/9D", "Heritage Tour", "Luxury"],
  //   images: [
  //     "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
  //     "https://images.unsplash.com/photo-1599661046827-dacde6976549?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //   ],
  // },
  // {
  //   title: "Shirdi – Bhimashankar Pilgrimage",
  //   place: "Shirdi",
  //   itinerary: "Shirdi • Bhimashankar",
  //   country: "India",
  //   price: 26000,
  //   oldPrice: 28000,
  //   discount: "7% OFF",
  //   tags: ["5N/6D", "Pilgrimage", "Standard"],
  //   images: [
  //     "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
  //     "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Building2, label: "Hotels" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: Plane, label: "Transfers" },
  //   ],
  // },
  // {
  //   title: "Jyotirlinga Darshan Yatra",
  //   place: "Mumbai",
  //   itinerary: "12 Jyotirlinga Pilgrimage Tour across India",
  //   country: "India",
  //   price: 110000,
  //   oldPrice: 120000,
  //   discount: "8% OFF",
  //   tags: ["19N/20D", "Pilgrimage", "Deluxe"],
  //   images: [
  //     "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
  //     "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Building2, label: "Hotels" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: Plane, label: "Transfers" },
  //   ],
  // },

  // {
  //   title: "Rameshwaram Madurai Kanyakumari",
  //   place: "Chennai",
  //   itinerary: "Chennai • Mahabalipuram • Madurai • Rameshwaram • Kanyakumari",
  //   country: "India",
  //   price: 42000,
  //   oldPrice: 45000,
  //   discount: "7% OFF",
  //   tags: ["6N/5D", "Temple Tour", "Premium"],
  //   images: [
  //     "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
  //     "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //   ],
  // },
];

//  {
//     id: 511,
//     country: "India",
//     place: "Leh",
//     title: "Kashmir to Ladakh Grand Tour",
//     type: "Adventure ",
//     duration: "14 Days / 13 Nights",
//     durationTag: "14 Days",
//     startEnd: "Srinagar → Kargil → Leh → Manali",
//     destinations: [
//       "Srinagar",
//       "Gulmarg",
//       "Sonamarg",
//       "Kargil",
//       "Leh",
//       "Nubra Valley",
//       "Pangong Tso",
//       "Manali",
//     ],
//     amenities: ["Hotel & Camp", "Meals", "Transfers", "Sightseeing"],
//     price: 75000,
//     rating: 4.9,
//     reviews: 189,
//     badge: "Premium",
//     badgeColor: "bg-purple-700",
//     mode: "Road",
//     img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
//     popular: true,

//     tourFeatures: [
//       { icon: Tent, label: "Camp Stay", color: "#6C72E8", bg: "#EEF0FD" },
//       {
//         icon: UtensilsCrossed,
//         label: "Meals",
//         color: "#F4884A",
//         bg: "#FEF0E8",
//       },
//       { icon: Bike, label: "Adventure", color: "#1AADA0", bg: "#E8F7F3" },
//       { icon: Mountain, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
//     ],

//     tourHighlights: [
//       {
//         title:
//           "Dal Lake Shikara Ride — Floating Gardens & Houseboat Stay in Srinagar",
//       },
//       {
//         title:
//           "Gulmarg Gondola — World's 2nd Highest Cable Car over the Kashmir Valley",
//       },
//       {
//         title:
//           "Zoji La & Kargil — Drass War Memorial & the Coldest Town in India",
//       },
//       {
//         title:
//           "Khardung La Pass — Drive over One of the World's Highest Motorable Roads",
//       },
//       {
//         title:
//           "Nubra Valley Camel Safari — Bactrian Camels on Himalayan Sand Dunes",
//       },
//       {
//         title:
//           "Pangong Tso Sunrise — World's Highest Saltwater Lake on the Indo-China Border",
//       },
//     ],

//     tourManagerCompany: "Indruka Trips and Trip",

//     heroImage: {
//       src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
//       alt: "Kashmir to Ladakh Grand Tour — Srinagar to Manali via Kargil and Pangong",
//     },

//     testimonials: [
//       {
//         id: 1,
//         text: "14 days, two worlds — lush Kashmir and barren Ladakh. From Dal Lake's floating gardens to Pangong's blue silence, this grand tour is the ultimate Indian road journey. NIT handled every pass and valley flawlessly.",
//         author: "Vikram & Ananya Sharma",
//         date: "Travelled July 2025",
//         manager: "Indruka Trips and ",
//         managerRole: "Tour Manager",
//       },
//       {
//         id: 2,
//         text: "Kargil and Lamayuru were unexpected highlights nobody talks about. The Leh–Manali highway finale through Rohtang was surreal. One trip, every landscape India has to offer. Thank you NIT.",
//         author: "Rajesh & Pooja Mehta",
//         date: "Travelled August 2024",
//         manager: "Indruka Trips and ",
//         managerRole: "Tour Manager",
//       },
//     ],

//     thumbnails: [
//       {
//         id: 1,
//         src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
//         alt: "Pangong Tso Ladakh Grand Tour",
//       },
//       {
//         id: 2,
//         src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
//         alt: "Dal Lake Srinagar Kashmir",
//       },
//       {
//         id: 3,
//         src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
//         alt: "Nubra Valley Khardung La Ladakh",
//       },
//     ],

//     breadcrumbs: [
//       { label: "Home", href: "/" },
//       { label: "India", href: "/india" },
//       { label: "Ladakh", href: "/india/ladakh" },
//       { label: "Kashmir to Ladakh Grand Tour" },
//     ],

//     badges: [
//       { label: "PREMIUM", variant: "solid" as const, color: "purple" },
//       { label: "14 DAYS", variant: "outlined" as const, color: "cyan" },
//     ],

//     durationDays: 14,
//     countryCount: 1,
//     cityCount: 8,
//     region: "Kashmir & Ladakh, India",

//     itineraryStops: [
//       { city: "Srinagar", nights: 3 },
//       { city: "Kargil", nights: 1 },
//       { city: "Leh", nights: 3 },
//       { city: "Nubra Valley", nights: 1 },
//       { city: "Pangong Tso", nights: 2 },
//       { city: "Leh (Return)", nights: 1 },
//       { city: "Manali", nights: 2 },
//     ],

//     days: [
//       {
//         day: 1,
//         date: "Day 1",
//         title: "Arrive Srinagar — Shikara Ride on Dal Lake",
//         details:
//           "Arrive Srinagar airport. Transfer to houseboat on Dal Lake. 2-hour Shikara ride past Char Chinar Island, Floating Gardens, and the lake bazaar. Welcome dinner on the houseboat. Overnight Srinagar.",
//       },
//       {
//         day: 2,
//         date: "Day 2",
//         title: "Srinagar — Mughal Gardens & Pahalgam Excursion",
//         details:
//           "Morning visit to Nishat Bagh, Shalimar Bagh, and Chashma Shahi Mughal Gardens. Full-day excursion to Pahalgam (88 km) — Betaab Valley, Aru Valley, and Chandanwari. Return for dinner on houseboat. Overnight Srinagar.",
//       },
//       {
//         day: 3,
//         date: "Day 3",
//         title: "Srinagar — Gulmarg Gondola Ride",
//         details:
//           "Full-day excursion to Gulmarg (50 km). Ride the world's 2nd highest cable car — Gulmarg Gondola — for sweeping Himalayan views. Optional skiing and snow activities. Return to houseboat for dinner. Overnight Srinagar.",
//       },
//       {
//         day: 4,
//         date: "Day 4",
//         title: "Srinagar → Sonamarg → Kargil",
//         details:
//           "Checkout and drive to Kargil (200 km) via Sonamarg — the 'Meadow of Gold'. Cross Zoji La Pass. Stop at Drass — India's coldest town and site of the 1999 Kargil War. Visit Kargil War Memorial. Overnight Kargil.",
//       },
//       {
//         day: 5,
//         date: "Day 5",
//         title: "Kargil → Lamayuru → Leh",
//         details:
//           "Drive to Leh (200 km) via Lamayuru — Ladakh's oldest monastery perched above the surreal Moonland landscape. Visit Alchi Monastery and Magnetic Hill en route. Arrive Leh, check-in and rest. Overnight Leh.",
//       },
//       {
//         day: 6,
//         date: "Day 6",
//         title: "Leh — Acclimatization & Local Sightseeing",
//         details:
//           "Rest morning for high-altitude acclimatization (3,500 m). Afternoon visit to Shanti Stupa at sunset, 17th-century Leh Palace, and Namgyal Tsemo Monastery. Evening walk through Leh Market. Overnight Leh.",
//       },
//       {
//         day: 7,
//         date: "Day 7",
//         title: "Leh — Monastery Circuit & Sangam",
//         details:
//           "Visit Thiksey Monastery (resembles Tibet's Potala Palace), Hemis Monastery (largest in Ladakh), and Shey Palace. Sangam — confluence of the Indus and Zanskar rivers. Magnetic Hill stop. Overnight Leh.",
//       },
//       {
//         day: 8,
//         date: "Day 8",
//         title: "Leh → Khardung La → Nubra Valley",
//         details:
//           "Drive over Khardung La Pass (5,359 m) — photo stop at one of the world's highest motorable roads. Descend to Nubra Valley (120 km). Bactrian camel safari at Hunder Sand Dunes. Campfire dinner under Himalayan skies. Overnight Nubra Valley.",
//       },
//       {
//         day: 9,
//         date: "Day 9",
//         title: "Nubra Valley → Shyok River → Pangong Tso",
//         details:
//           "Drive to Pangong Tso (140 km) via the scenic Shyok River Valley. First view of the legendary blue-green lake at 4,350 m. Check-in to lakeside camp. Candlelight dinner by the water. Overnight Pangong Tso.",
//       },
//       {
//         day: 10,
//         date: "Day 10",
//         title: "Pangong Tso — Sunrise & Full Day at the Lake",
//         details:
//           "Wake before dawn for the Pangong Tso sunrise — the lake shifts from deep cobalt to blazing gold. Morning walk along the shore. Afternoon at leisure — photography, optional kayaking, or quiet time by the Indo-China border lake. Overnight Pangong Tso.",
//       },
//       {
//         day: 11,
//         date: "Day 11",
//         title: "Pangong Tso → Leh via Chang La Pass",
//         details:
//           "Drive back to Leh (220 km) over Chang La Pass (5,360 m). Afternoon free for Leh Market shopping — Pashmina, turquoise jewellery, Ladakhi handicrafts. Farewell dinner at a Leh heritage restaurant. Overnight Leh.",
//       },
//       {
//         day: 12,
//         date: "Day 12",
//         title: "Leh → Sarchu — Leh–Manali Highway Begins",
//         details:
//           "Begin the legendary Leh–Manali Highway. Drive through Upshi and cross Tanglang La Pass (5,328 m). Descend into the high plains of Morey. Arrive Sarchu (4,290 m) camp by evening. Overnight Sarchu camp.",
//       },
//       {
//         day: 13,
//         date: "Day 13",
//         title: "Sarchu → Rohtang Pass → Manali",
//         details:
//           "Cross Baralacha La (4,890 m) and Rohtang Pass (3,978 m) — dramatic shift from barren desert to pine-forested Kullu Valley. Arrive Manali by evening. Celebration dinner. Overnight Manali.",
//       },
//       {
//         day: 14,
//         date: "Day 14",
//         title: "Manali — Solang Valley & Departure",
//         details:
//           "Morning excursion to Solang Valley and Hadimba Devi Temple (16th-century pagoda in cedar forest). Last browse at Manali Mall Road. Transfer to Bhuntar Airport or bus stand. Kashmir to Ladakh Grand Tour concludes.",
//       },
//     ],

//     tourDetails: [
//       { label: "Duration", value: "14 Days / 13 Nights" },
//       {
//         label: "Destinations",
//         value:
//           "Srinagar · Pahalgam · Gulmarg · Sonamarg · Kargil · Lamayuru · Leh · Nubra Valley · Pangong Tso · Manali",
//       },
//       {
//         label: "Departure & Return",
//         value: "Srinagar (SXR) → Manali / Bhuntar (KUU)",
//       },
//       { label: "Tour Code", value: "KAL-GRAND-SXR-14" },
//       {
//         label: "Meals",
//         value:
//           "Breakfast & Dinner daily; Campfire dinner at Nubra & Pangong included",
//       },
//       { label: "Best Time", value: "June–September" },
//       { label: "Group Size", value: "Private & Small Group Tours available" },
//     ],

//     onViewItinerary: () => console.log("view itinerary clicked"),
//   },
