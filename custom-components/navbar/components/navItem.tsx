/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function NavItem({ icon: Icon, label }: any) {
  return (
    <div className="flex flex-col items-center justify-center text-xs text-gray-600">
      <Icon className="w-5 h-5 mb-0.5" />
      <span>{label}</span>
    </div>
  );
}