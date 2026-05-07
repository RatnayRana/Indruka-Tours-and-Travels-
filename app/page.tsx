/* eslint-disable @next/next/no-img-element */
"use client";

import CustomerReviews from "@/custom-components/body/customer-review/customer-review";
import SocialCardSlider from "@/custom-components/body/employee-card/employee-card";
import TopTrendingCard from "@/custom-components/body/top-trending-card/top-trending-card";
import Footer from "@/custom-components/footer/footer";
import TourCategories from "@/custom-components/home-tabs/tour_packages_tabs";
import Navbar from "@/custom-components/navbar/navbar";

export default function Home() {
  return (
    <div className="w-full h-ful overflow-x-hidden">
      <Navbar/>

      {/* ── Hero / Card Section ───────────────────────────── */}
      <div className="w-full py-5 bg-[url('/shape-1.png')] bg-contain bg-center flex flex-col items-center justify-center">
       <div></div>
          <TourCategories />
      </div>
      {/* ✅ Add relative + overflow-hidden here */}
      <div className="w-full relative overflow-hidden shadow-lg">
        {/* Background shapes */}
        <div className="absolute inset-0 z-0">
          {/* LEFT */}
          <div className="absolute left-0 top-[40px] w-[280px] h-[360px] opacity-[0.25]">
            <img src="/shape-8.png" className="w-full h-full object-contain" />
          </div>

          {/* RIGHT */}
          <div className="absolute right-0 top-[100px] w-[240px] h-[320px] opacity-[0.25]">
            <img src="/shape-3.png" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <TopTrendingCard />
        </div>
      </div>
      <SocialCardSlider />

      <CustomerReviews />
      <Footer />
    </div>
  );
}
