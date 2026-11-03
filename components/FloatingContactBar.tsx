'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#101217]/95 backdrop-blur-md border-t border-[#252833] py-2 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center">
        <a
          href="tel:+2349134764393"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#1A1D24] border border-[#2D313D] text-[#F3EFE6] active:bg-[#252934] transition-colors"
          aria-label="Call Dussel Hotels"
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Call Hotel</span>
        </a>

        <a
          href="https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20am%20inquiring%20about%20booking%20a%20room"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#1F2C24] border border-[#2B4E38] text-[#93E5A5] active:bg-[#24392B] transition-colors"
          aria-label="WhatsApp Dussel Hotels"
        >
          <MessageSquare className="w-4 h-4 text-[#38D368] mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">WhatsApp</span>
        </a>

        <Link
          href="/book"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded bg-[#C5A059] text-[#0D0E11] active:bg-[#DFCA97] font-semibold transition-colors"
          aria-label="Book a room at Dussel Hotels"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tight">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
