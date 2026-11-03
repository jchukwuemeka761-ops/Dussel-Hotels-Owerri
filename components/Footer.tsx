import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0B0E] border-t border-[#1F222B] text-stone-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <span className="text-2xl font-serif tracking-widest text-[#F3EFE6] block">
              <span className="text-[#C5A059] font-bold">DUSSEL</span> HOTELS
            </span>
            <p className="text-stone-400 text-sm leading-relaxed">
              Upscale, tastefully furnished hospitality centrally located in a serene environment along MCC Uratta Road, Owerri. Featuring continuous 24/7 power supply, Olympic swimming pool, and authentic dining.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-stone-400">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#C5A059]" /> Uninterrupted Generator Power Backup
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Gated Compound & 24/7 Physical Security
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Rooms & Rates (₦30k – ₦45k+)
                </Link>
              </li>
              <li>
                <Link href="/dining-pool" className="hover:text-white transition-colors">
                  African Restaurant & Olympic Pool
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Dussel Hotels
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Driving Directions & Google Map
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-[#C5A059] hover:underline transition-colors font-medium">
                  Instant Room Reservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Room Rates & Amenities */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Rooms & Schedule
            </h4>
            <div className="space-y-2.5 text-sm text-stone-400">
              <div>
                <p className="text-stone-200 font-medium">Standard / Classic Room</p>
                <p className="text-xs text-[#C5A059]">₦30,000 – ₦35,000 / night</p>
              </div>
              <div>
                <p className="text-stone-200 font-medium">Executive Suite</p>
                <p className="text-xs text-[#C5A059]">₦40,000 – ₦45,000+ / night</p>
              </div>
              <div className="pt-2 border-t border-[#1F222B] flex items-center gap-2 text-xs text-stone-400">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Front Desk: 24 Hours / 7 Days a Week</span>
              </div>
            </div>
          </div>

          {/* Contact & Physical Address */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  MCC, Uratta Road, Ikenegbu, Owerri 460281, Imo State (After ABC Workshop Uratta)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+2349134764393" className="hover:text-white transition-colors">
                  +234 913 476 4393
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="https://wa.me/2349134764393"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +234 913 476 4393
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:dusselhotel@gmail.com" className="hover:text-white transition-colors">
                  dusselhotel@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://www.google.com/maps/place/Dussel+Hotels/@5.4907042,7.0548521,17z"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#0D0E11] font-semibold bg-[#C5A059] hover:bg-[#DFCA97] px-3.5 py-2 rounded transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                Open Live Google Map
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#1A1C22] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Dussel Hotels. All rights reserved.</p>
          <p>Mcc, Uratta Road, Ikenegbu, Owerri, Imo State · 24/7 Luxury Lodging</p>
        </div>
      </div>
    </footer>
  );
}
