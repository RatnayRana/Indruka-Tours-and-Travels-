"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

type Place = {
  id: number;
  name: string;
  region: string;
  category: string;
  rating: number;
  reviews: number;
  tag: string;
  image: string;
};

const places: Place[] = [
  {
    id: 1,
    name: "Paro Taktsang",
    region: "Paro Valley",
    category: "Monastery",
    rating: 4.9,
    reviews: 3241,
    tag: "Iconic",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
  {
    id: 2,
    name: "Punakha Dzong",
    region: "Punakha",
    category: "Fortress",
    rating: 4.8,
    reviews: 1879,
    tag: "Heritage",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  },
  {
    id: 3,
    name: "Dochula Pass",
    region: "Thimphu",
    category: "Mountain Pass",
    rating: 4.7,
    reviews: 1102,
    tag: "Scenic",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
  },
  {
    id: 4,
    name: "Bumthang Valley",
    region: "Central Bhutan",
    category: "Valley",
    rating: 4.8,
    reviews: 942,
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
  },
  {
    id: 5,
    name: "Haa Valley",
    region: "Haa District",
    category: "Valley",
    rating: 4.6,
    reviews: 631,
    tag: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
  },
  {
    id: 6,
    name: "Trongsa Dzong",
    region: "Trongsa",
    category: "Fortress",
    rating: 4.7,
    reviews: 788,
    tag: "Historical",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
  },
];

const tabs = ["All", "Monastery", "Fortress", "Mountain Pass", "Valley"];

export default function TopTrendingPlaces() {
  const [activeTab, setActiveTab] = useState("All");
  const [animating, setAnimating] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
    }, 200);
  };

  const filtered =
    activeTab === "All"
      ? places
      : places.filter((p) => p.category === activeTab);

  return (

    <div className="w-full overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4">

   
        {/* <div
          className="pointer-events-none select-none absolute left-0 top-[40px] w-[280px] h-[360px] opacity-[0.15]"
          style={{ animation: "floatBridge 6s ease-in-out infinite" }}
          aria-hidden="true"
        >
          <img
            src="/shape-8.png"        
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* ── Floating background image RIGHT ─────────────────────────── */}
        {/* <div
          className="pointer-events-none select-none absolute right-0 top-[100px] w-[240px] h-[320px] opacity-[0.15]"
          style={{ animation: "floatPlane 7.5s ease-in-out infinite 1.8s" }}
          aria-hidden="true"
        >
          <img
            src="/shape-9.png"         
            alt=""
            className="w-full h-full object-contain"
          />
        </div> */} 

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="relative z-10 text-center max-w-2xl mx-auto py-10">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">
            Explore More
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Top <span className="text-blue-600">Trending</span> Places
          </h3>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Discover the most breathtaking destinations across the Kingdom of
            Bhutan — from ancient monasteries to pristine valleys.
          </p>
        </div>

        {/* ── Tabs ────────────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
              )}
            </button>
          ))}
        </div>

        {/* ── Grid ────────────────────────────────────────────────────── */}
        <div
          className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 transition-all duration-200 ${
            animating
              ? "opacity-0 translate-y-4 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {filtered.map((place, i) => (
            <div
              key={place.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              <Card className="group relative overflow-hidden rounded-3xl shadow-2xl border-0 m-0 p-0 cursor-pointer h-[400px]">
                <div
                  className="absolute inset-0 bg-gray-400 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${place.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 z-10">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-[11px] font-semibold text-white">Trending</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-md bg-white/10 border-t border-white/20 z-10">
                  <h3 className="text-xl font-semibold text-white">{place.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{place.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-300" />
                      <span className="text-xs text-gray-300">{place.region}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-white">{place.rating}</span>
                      <span className="text-xs text-gray-300">
                        ({place.reviews.toLocaleString()})
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-20 text-gray-400">
              <p className="text-lg font-medium">No places found</p>
              <p className="text-sm mt-1">Try selecting a different category</p>
            </div>
          )}
        </div>

        {/* ── Keyframes ───────────────────────────────────────────────── */}
        <style jsx>{`
          @keyframes floatBridge {
            0%   { transform: translateY(0px) rotate(0deg); }
            50%  { transform: translateY(-16px) rotate(0.8deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes floatPlane {
            0%   { transform: translateY(0px) rotate(0deg); }
            50%  { transform: translateY(-22px) rotate(-1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.35s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}