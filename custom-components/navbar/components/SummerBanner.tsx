"use client";

import { Plane, ArrowRight } from "lucide-react";

interface VideoBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  videoSrc?: string;
  href?: string;
}

export function VideoBanner({
  title = "✈️ TripEase Deals",
  subtitle = "Explore the World Smarter",
  description = "Save up to 30% on flights & travel bookings",
  videoSrc = "/travel-video.mp4", // put inside public folder
  href = "#",
}: VideoBannerProps) {
  return (
    <div className="mt-8 px-4">
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        
        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* 🌑 Dark Overlay (important for readability) */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* 💡 Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 py-8">
          
          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{
                fontFamily: "Georgia, serif",
                background:
                  "linear-gradient(90deg, #f5c842, #f0a030, #e87820)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              {title}
            </h2>

            <p className="text-white text-lg md:text-xl font-medium mt-1">
              {subtitle}
            </p>

            <p className="text-gray-200 text-sm md:text-base mt-2">
              {description}
            </p>
          </div>

          {/* RIGHT CTA */}
          <a
            href={href}
            className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition px-5 py-3 rounded-full backdrop-blur-md"
          >
            <Plane className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Explore Now</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}