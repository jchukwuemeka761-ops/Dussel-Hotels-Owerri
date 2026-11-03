import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Zap, Wind, ShieldCheck, Waves, Utensils, Wifi, Clock, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Rooms & Services | Dussel Hotels Owerri',
  description: 'Explore room tiers, pricing from ₦30,000 to ₦45,000+, continuous 24/7 power, and core amenities at Dussel Hotels on MCC Uratta Road, Owerri.',
};

export default function ServicesPage() {
  const rooms = [
    {
      id: 'classic-queen',
      name: 'Standard / Classic Room (Queen Bed)',
      price: '₦30,000',
      period: 'per night',
      image: '/images/actual_hotel_room_bed.jpg',
      badge: 'Mid-Tier Budget Value',
      description: 'Ideal for solo business travelers or couples seeking a quiet, comfortable, and air-conditioned room with 24/7 power in Owerri.',
      features: [
        'Comfortable Queen-size bed with crisp linens',
        'Independent split-unit air conditioning',
        '24/7 continuous backup generator power',
        'Flat-screen cable television',
        'En-suite bathroom with walk-in shower & toiletries',
        'Dedicated work desk & chair',
        'Complimentary Olympic pool access',
        'Secure gated parking space',
      ],
    },
    {
      id: 'classic-king',
      name: 'Standard / Classic Room (King Bed)',
      price: '₦35,000',
      period: 'per night',
      image: '/images/actual_hotel_room_bed.jpg',
      badge: 'Popular Choice',
      description: 'Extra sleeping space with a plush king-size bed, soft bedside lighting, and high-speed WiFi for work or rest.',
      features: [
        'Expansive King-size bed with orthopedic mattress',
        'Independent split-unit air conditioning',
        '24/7 continuous power supply',
        'Flat-screen TV with multiple satellite channels',
        'En-suite luxury bathroom',
        'High-speed wireless internet',
        'Daily housekeeping service',
        'Olympic pool access & secure parking',
      ],
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite with Lounge Area',
      price: '₦40,000 – ₦45,000',
      period: 'per night',
      image: '/images/actual_hotel_courtyard.jpg',
      badge: 'Executive Comfort',
      description: 'Tastefully furnished suite offering more spacious lounge sitting areas with leather armchairs, bedside controls, and mini refrigerator.',
      features: [
        'Separate lounge sitting area with leather armchairs & coffee table',
        'Plush King-size master bed with gold-accented headboard',
        'Split-unit air conditioning throughout bedroom & lounge',
        'Mini refrigerator for refreshments',
        '24/7 continuous electricity & backup generator',
        'Quality breakfast options available',
        'VIP room service & priority front desk assistance',
        'Complimentary access to Olympic swimming pool',
      ],
    },
    {
      id: 'royal-suite',
      name: 'Dussel Royal / Presidential Suite',
      price: '₦45,000+',
      period: 'per night',
      image: '/images/actual_hotel_night_facade.jpg',
      badge: 'Top Upscale Tier',
      description: 'The pinnacle of luxury at Dussel Hotels. Spacious suite layout with lavish sitting lounge, dining corner, and premium amenities.',
      features: [
        'Expansive luxury lounge with premium upholstery',
        'King master bedroom with ambient cove lighting',
        'Complimentary gourmet breakfast options',
        'Mini bar & refreshment station',
        '24/7 uninterrupted power guaranteed',
        'Deep soaking tub & rainfall shower fixture',
        'Olympic pool access with reserved loungers',
        'Personalized concierge & airport transfer coordination',
      ],
    },
  ];

  const amenities = [
    {
      icon: Zap,
      title: '24/7 Power Supply',
      description: 'Equipped with heavy-duty backup generators to manage local power outages. Lighting, TV, and sockets remain active day and night.',
    },
    {
      icon: Wind,
      title: 'Climate Control',
      description: 'Whisper-quiet split-unit air conditioning units installed across all functional lodging rooms.',
    },
    {
      icon: Waves,
      title: 'Olympic-Size Swimming Pool',
      description: 'Standard size recreation pool with clean treated water, sun loungers, and evening lighting.',
    },
    {
      icon: Utensils,
      title: 'On-Site Restaurant & Bar',
      description: 'Full-service kitchen serving authentic African delicacies (Ofe Owerri, Egusi, Pepper soup) and breakfast options.',
    },
    {
      icon: ShieldCheck,
      title: 'Gated Physical Security',
      description: 'Gated parking space with physical security guard presence 24 hours a day.',
    },
    {
      icon: Clock,
      title: '24-Hour Front Desk',
      description: 'Staffed round the clock for smooth late-night check-ins, wake-up calls, and guest assistance.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            Accommodations &amp; Core Amenities
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] font-bold">
            Rooms, Rates &amp; Hospitality Services
          </h1>
          <p className="mt-4 text-stone-300 text-base leading-relaxed">
            Dussel Hotels offers modern, upscale, and tastefully furnished rooms strategically located in a serene environment in Imo Owerri. Our rates fall into the mid-tier budget range (₦30,000 to ₦45,000+ per night) with zero compromise on comfort.
          </p>
        </div>
      </div>

      {/* Room Tiers Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {rooms.map((room, idx) => (
          <div
            key={room.id}
            className="bg-[#12141A] border border-[#252834] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div className={`lg:col-span-5 relative h-72 lg:h-auto min-h-[280px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md px-3 py-1 rounded text-xs text-[#C5A059] font-semibold border border-[#252834]">
                {room.badge}
              </div>
            </div>

            <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-serif text-[#F3EFE6] font-semibold">{room.name}</h3>
                  <div className="text-left sm:text-right">
                    <span className="text-2xl font-bold text-[#C5A059] font-mono tabular-nums">{room.price}</span>
                    <span className="text-xs text-stone-400"> / {room.period}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  {room.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                  Key Amenities Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-300">
                  {room.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#232733] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-400">
                  Check-in: 2:00 PM · Check-out: 12:00 PM · 24/7 Power
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(room.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20BE5A] text-[#0A1A0F] font-semibold text-xs uppercase rounded transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    Book via WhatsApp
                  </a>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C5A059] hover:bg-[#DFCA97] text-[#0D0E11] font-semibold text-xs uppercase rounded transition-colors"
                  >
                    Select Room
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Core Amenities Grid */}
      <div className="bg-[#101217] border-y border-[#20232E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
              Standard Across Every Stay
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
              Core Hotel Amenities
            </h2>
            <p className="text-stone-400 text-sm mt-2">
              Every guest at Dussel Hotels enjoys these guaranteed amenities, regardless of room tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-[#161820] border border-[#262A37] rounded-xl space-y-3">
                  <Icon className="w-7 h-7 text-[#C5A059]" />
                  <h3 className="text-base font-semibold text-[#F3EFE6]">{item.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-[#161821] border border-[#2B303F] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif text-[#F3EFE6] font-semibold">Have Special Group or Corporate Requirements?</h3>
            <p className="text-sm text-stone-400 mt-1">Contact our management team directly for block reservations or wedding party accommodation.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+2349134764393"
              className="px-5 py-2.5 bg-[#C5A059] text-[#0D0E11] font-semibold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Call +234 913 476 4393
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
