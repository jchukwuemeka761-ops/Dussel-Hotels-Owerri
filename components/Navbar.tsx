'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Services', href: '/services' },
    { name: 'Dining & Pool', href: '/dining-pool' },
    { name: 'About', href: '/about' },
    { name: 'Find Hotel', href: '/location' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#14161B] border-b border-[#262832] text-xs text-[#C5A059] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              MCC Uratta Road (After ABC Workshop), Owerri, Imo State
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-300">Open 24/7 Mon – Sun</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-300">Continuous 24/7 Power Supply</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+2349134764393"
              className="hover:text-stone-100 flex items-center gap-1 text-stone-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              +234 913 476 4393
            </a>
            <a
              href="https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20would%20like%20to%20inquire%20about%20room%20availability"
              target="_blank"
              rel="noreferrer"
              className="text-[#C5A059] hover:underline flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <header className="sticky top-0 z-50 bg-[#0D0E11]/95 backdrop-blur-md border-b border-[#22252E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Single element brand wordmark */}
            <Link
              href="/"
              className="text-2xl font-serif tracking-widest text-[#F3EFE6] hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="text-[#C5A059] font-bold">DUSSEL</span> HOTELS
            </Link>

            {/* Zone 2: 4-5 single-line clean navigation links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                      isActive
                        ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                href="/book"
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0D0E11] bg-[#C5A059] hover:bg-[#DFCA97] rounded-md transition-all shadow-sm whitespace-nowrap shrink-0"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                href="/book"
                className="px-3.5 py-1.5 text-xs font-semibold uppercase text-[#0D0E11] bg-[#C5A059] rounded transition-all whitespace-nowrap shrink-0"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121317] border-b border-[#252833] px-5 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  pathname === link.href ? 'text-[#C5A059]' : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#252833] space-y-2.5">
              <a
                href="tel:+2349134764393"
                className="flex items-center gap-2 text-sm text-stone-200 py-1"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call: +234 913 476 4393
              </a>
              <a
                href="https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20want%20to%20book%20a%20room"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#C5A059] py-1"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp: +234 913 476 4393
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
