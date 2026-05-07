"use client";

import { Mail, Phone, ArrowUpRight, ChevronRight } from "lucide-react";

const navLinks = {
  Company: ["About Us", "Services", "Community", "Testimonials"],
  Support: ["Help Center", "Contact", "Feedback", "Webinars"],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-100">

      {/* ── Decorative background blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Diagonal accent stripe ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* ── TOP CTA BAND ── */}
      <div className="relative border-b border-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-1">
              Ready to get started?
            </p>
            <h2
              className="text-2xl font-bold text-gray-800 md:text-3xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Keep your space spotless,{" "}
              <span className="text-blue-400">every time.</span>
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-600/40 hover:gap-3 whitespace-nowrap"
          >
            Get a Free Quote
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 gap-10 md:grid-cols-5">

        {/* BRAND */}
        <div className="md:col-span-2">
          {/* Logo */}
          <div className="mb-5 inline-flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-md shadow-blue-900/50">
              {/* Simple sparkle icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5L10 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              className="text-xl font-bold text-gray-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Stay<span className="text-blue-400">Clean</span>
            </span>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-gray-500">
            Professional cleaning services built on trust, precision, and a
            passion for spotless spaces — delivered right to your door.
          </p>

          {/* Social pills */}
          <div className="mt-7 flex gap-3">
            {["FB", "TW", "IG"].map((s) => (
              <button
                key={s}
                className="h-9 w-9 rounded-full border border-gray-300 bg-white text-xs font-semibold text-gray-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* NAV COLUMNS */}
        {Object.entries(navLinks).map(([title, links]) => (
          <div key={title}>
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400"
            >
              {title}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-1 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
            Contact Us
          </h3>
          <div className="space-y-4">
            <a
              href="tel:+97598765432"
              className="group flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-blue-600"
            >
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Phone size={13} />
              </span>
              +975 98765 4321
            </a>
            <a
              href="mailto:support@mail.com"
              className="group flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-blue-600"
            >
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Mail size={13} />
              </span>
              support@mail.com
            </a>
          </div>

          {/* Newsletter mini-form */}
          <div className="mt-8">
            <p className="mb-3 text-xs font-medium text-gray-500">
              Subscribe to updates
            </p>
            <div className="flex overflow-hidden rounded-full border border-gray-300 bg-white focus-within:border-blue-500 transition-colors">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-xs text-gray-700 placeholder-gray-400 outline-none"
              />
              <button className=" rounded-full bg-blue-600 px-1 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative border-t border-blue-900/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-blue-400/60 md:flex-row">
          <p>© 2026 StayClean. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Legal"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:text-blue-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}