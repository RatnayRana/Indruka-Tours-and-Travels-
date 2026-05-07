"use client";

import Image from "next/image";

export function YatraLogo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {/* Logo Image */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-white/20">
        <Image
          src="/logo.jpeg"
          alt="Yatra Logo"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          priority
        />
      </div>

      {/* Brand Name */}
      {/* Brand Name */}
      <span className="relative inline-flex text-3xl sm:text-3xl  text-white">
        TripEase
        {/* underline glow */}
        <span
          className="absolute left-0 -bottom-1 h-[2px] w-0
    bg-gradient-to-r from-pink-500 to-rose-500
    transition-all duration-300
    group-hover:w-full"
        />
      </span>
    </div>
  );
}
