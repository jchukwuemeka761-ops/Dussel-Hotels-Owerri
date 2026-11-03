import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  ShieldCheck,
  Wind,
  Waves,
  Utensils,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  ArrowRight,
  Check,
} from 'lucide-react';
import MapDirections from '@/components/MapDirections';

export default function HomePage() {
  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-[#252834]">
        {/* Background photo with measured contrast scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/actual_hotel_day_exterior.jpg"
            alt="Actual exterior architecture of Dussel Hotels Owerri from Google Maps"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-[#0D0E11]/80 to-[#0D0E11]/50" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0D0E11]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Unboxed editorial kicker */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#C5A059] mb-4">
            <span>MCC Uratta Road, Owerri</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Upscale 5-Star Hospitality</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Continuous 24/7 Power</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F3EFE6] font-bold max-w-4xl mx-auto tracking-tight leading-tight">
            Affordable Luxury &amp; Serene Comfort in Owerri
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to Dussel Hotels. Tastefully furnished, strategically located on MCC Uratta Road (after ABC Workshop Uratta). Enjoy uninterrupted generator power, an Olympic-size swimming pool, and authentic African dining.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#DFCA97] text-[#0D0E11] font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg shadow-amber-950/30 whitespace-nowrap"
            >
              Book a Room (From ₦30,000)
            </Link>
            <Link
              href="/location"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#171922]/90 hover:bg-[#232733] text-stone-200 border border-[#303546] font-semibold text-xs uppercase tracking-wider rounded-md transition-all whitespace-nowrap flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              Driving Directions &amp; Map
            </Link>
          </div>

          {/* Key Quick Fact Strip */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="p-3.5 rounded-lg bg-[#111319]/80 backdrop-blur-md border border-[#232734]">
              <span className="text-xs text-[#C5A059] font-mono font-semibold block">Continuous Power</span>
              <p className="text-xs text-stone-300 mt-0.5">Heavy-duty backup generator</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#111319]/80 backdrop-blur-md border border-[#232734]">
              <span className="text-xs text-[#C5A059] font-mono font-semibold block">Olympic Pool</span>
              <p className="text-xs text-stone-300 mt-0.5">Standard size recreation pool</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#111319]/80 backdrop-blur-md border border-[#232734]">
              <span className="text-xs text-[#C5A059] font-mono font-semibold block">African Cuisine</span>
              <p className="text-xs text-stone-300 mt-0.5">Gourmet restaurant &amp; bar</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#111319]/80 backdrop-blur-md border border-[#232734]">
              <span className="text-xs text-[#C5A059] font-mono font-semibold block">24/7 Security</span>
              <p className="text-xs text-stone-300 mt-0.5">Gated perimeter &amp; guards</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROOMS & SUITES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
              Accommodations &amp; Rates
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
              Tastefully Furnished Rooms &amp; Suites
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Competitive rates falling into the mid-tier budget range for Owerri without compromising on luxury, cleanliness, or climate control.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:underline flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>View All Room Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Room Card 1: Standard / Classic */}
          <div className="bg-[#12141A] border border-[#252834] rounded-xl overflow-hidden flex flex-col group hover:border-[#3E4355] transition-all">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/images/actual_hotel_room_bed.jpg"
                alt="Actual Standard / Classic Room bedroom at Dussel Hotels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md px-3 py-1 rounded text-xs text-[#C5A059] font-semibold border border-[#262A36]">
                ₦30,000 – ₦35,000 / night
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif text-[#F3EFE6] font-semibold">
                  Standard / Classic Rooms
                </h3>
                <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                  Well-appointed room featuring comfortable queen or king bedding, efficient split-unit air conditioning, flat-screen television, work desk, and full en-suite bathroom.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> Air Conditioned
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> 24/7 Generator Power
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> High-speed WiFi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> Olympic Pool Access
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-[#232632] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-400 block">Starting From</span>
                  <span className="text-lg font-bold text-[#C5A059] font-mono tabular-nums">₦30,000</span>
                  <span className="text-xs text-stone-400"> / night</span>
                </div>
                <Link
                  href="/book"
                  className="px-4 py-2 bg-[#1B1E27] hover:bg-[#C5A059] hover:text-[#0D0E11] text-stone-200 border border-[#2F3444] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Reserve Room
                </Link>
              </div>
            </div>
          </div>

          {/* Room Card 2: Executive Suites */}
          <div className="bg-[#12141A] border border-[#252834] rounded-xl overflow-hidden flex flex-col group hover:border-[#3E4355] transition-all">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/images/actual_hotel_courtyard.jpg"
                alt="Actual Executive Suites and Courtyard Balconies at Dussel Hotels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md px-3 py-1 rounded text-xs text-[#C5A059] font-semibold border border-[#262A36]">
                ₦40,000 – ₦45,000+ / night
              </div>
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif text-[#F3EFE6] font-semibold">
                  Executive / Executive Suites
                </h3>
                <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                  Generously proportioned upscale suite featuring a dedicated lounge sitting area with leather armchairs, king bed, refrigerator, ambient mood lighting, and complimentary breakfast options.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> Spacious Living Lounge
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> 24/7 Continuous Power
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> Breakfast Options
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" /> VIP Room Service
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-[#232632] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-400 block">Starting From</span>
                  <span className="text-lg font-bold text-[#C5A059] font-mono tabular-nums">₦40,000</span>
                  <span className="text-xs text-stone-400"> / night</span>
                </div>
                <Link
                  href="/book"
                  className="px-4 py-2 bg-[#C5A059] hover:bg-[#DFCA97] text-[#0D0E11] rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Reserve Suite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECREATION SPOTLIGHT: OLYMPIC-SIZE SWIMMING POOL */}
      <section className="bg-[#111318] border-y border-[#20232E] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#272B38] shadow-2xl">
              <Image
                src="/images/actual_pool_wide.jpg"
                alt="Actual standard size Olympic swimming pool and bar at Dussel Hotels Owerri"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0E11]/85 backdrop-blur-md p-3.5 rounded-lg border border-[#262A37] text-xs text-stone-300 flex items-center justify-between">
                <span className="font-semibold text-[#C5A059]">Standard Olympic Size Swimming Pool</span>
                <span className="text-stone-400">Complimentary for Guests</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                Recreation &amp; Leisure
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F3EFE6] leading-tight">
                Standard Olympic-Size Swimming Pool Area
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Take a refreshing dip or unwind by the poolside deck after a long journey or busy day in Owerri. Our full standard Olympic-size swimming pool features crystal-clear water, poolside loungers, parasols, and an evening ambient lighting setup ideal for weekend relaxation and socializing.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1F2330] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300">
                    <strong className="text-white">Crystal Clear Treated Water:</strong> Maintained under strict hygiene and safety standards daily.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1F2330] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300">
                    <strong className="text-white">Poolside Bar &amp; Loungers:</strong> Order cold beverages, cocktails, and finger foods directly to your deck chair.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/dining-pool"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:underline"
                >
                  Explore Pool &amp; Recreation Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DINING SPOTLIGHT: AUTHENTIC AFRICAN RESTAURANT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Gourmet Dining &amp; Bar
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F3EFE6] leading-tight">
              Quality African Dishes &amp; Local Specialties
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              At Dussel Hotels, dining is an authentic culinary journey. Our on-site restaurant and lounge bar prepare richly seasoned Nigerian classics made from fresh local ingredients alongside warm continental breakfast options.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#14161E] border border-[#252836] rounded-lg">
                <h4 className="text-sm font-semibold text-[#F3EFE6]">Authentic Nigerian Soups</h4>
                <p className="text-xs text-stone-400 mt-1">Rich Ofe Owerri, savory Egusi, Bitterleaf &amp; Vegetable soups paired with choice swallows.</p>
              </div>
              <div className="p-4 bg-[#14161E] border border-[#252836] rounded-lg">
                <h4 className="text-sm font-semibold text-[#F3EFE6]">Pepper Soup &amp; Grills</h4>
                <p className="text-xs text-stone-400 mt-1">Fresh catfish pepper soup, tender goat meat, spicy Asun, and succulent grilled fish.</p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/dining-pool"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:underline"
              >
                View Full Restaurant Menu &amp; Dining
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#272B38] shadow-2xl">
            <Image
              src="/images/actual_pool_night.jpg"
              alt="Actual poolside lounge, music stage and dining area at Dussel Hotels"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0D0E11]/85 backdrop-blur-md p-3.5 rounded-lg border border-[#262A37] text-xs text-stone-300 flex items-center justify-between">
              <span className="font-semibold text-[#C5A059]">On-Site Restaurant &amp; Poolside Lounge</span>
              <span className="text-stone-400">Night Ambiance &amp; Dining</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL TRUST & AMENITIES */}
      <section className="bg-[#111319] border-y border-[#20232E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
              Guaranteed Guest Comfort
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
              Why Guests Choose Dussel Hotels
            </h2>
            <p className="text-stone-400 text-sm mt-2">
              Built on dependable essentials so your business or leisure trip to Owerri is comfortable and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#151720] border border-[#262937]">
              <Zap className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-base font-semibold text-[#F3EFE6]">Continuous 24/7 Power</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Equipped with a heavy-duty backup generator setup to manage local power outages without interruption to your lighting, devices, or air conditioning.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#151720] border border-[#262937]">
              <Wind className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-base font-semibold text-[#F3EFE6]">Individual Climate Control</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Modern split-unit air conditioning installed in all functional lodging rooms for maximum comfort throughout your stay.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#151720] border border-[#262937]">
              <ShieldCheck className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-base font-semibold text-[#F3EFE6]">Gated Perimeter &amp; Security</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Secure gated parking space with physical security guard presence around the clock for guest peace of mind and vehicle safety.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#151720] border border-[#262937]">
              <MapPin className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-base font-semibold text-[#F3EFE6]">Central, Serene Location</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Situated in a quiet, serene area along MCC Uratta Road after ABC Workshop Uratta, offering easy access to town while escaping city noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. REAL HOTEL PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
            Authentic On-Site Photography
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
            Real Photos of Dussel Hotels
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            Explore genuine photographs of our premises, rooms, swimming pool, and bar on MCC Uratta Road.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#252834] bg-[#12141A]">
            <Image
              src="/images/actual_hotel_day_exterior.jpg"
              alt="Dussel Hotels daytime facade with grand pillars and sign"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3.5 left-4 right-4">
              <span className="text-xs font-semibold text-[#F3EFE6] block">Daytime Main Building &amp; Sign</span>
              <span className="text-[11px] text-[#C5A059]">Grand entrance columns &amp; murals</span>
            </div>
          </div>

          <div className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#252834] bg-[#12141A]">
            <Image
              src="/images/actual_hotel_night_facade.jpg"
              alt="Dussel Hotels illuminated facade at night"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3.5 left-4 right-4">
              <span className="text-xs font-semibold text-[#F3EFE6] block">Nighttime Illumination</span>
              <span className="text-[11px] text-[#C5A059]">Illuminated facade on MCC Uratta Road</span>
            </div>
          </div>

          <div className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#252834] bg-[#12141A]">
            <Image
              src="/images/actual_pool_wide.jpg"
              alt="Actual outdoor swimming pool and Great Beer bar"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3.5 left-4 right-4">
              <span className="text-xs font-semibold text-[#F3EFE6] block">Olympic Swimming Pool</span>
              <span className="text-[11px] text-[#C5A059]">Poolside deck &amp; Great Beer bar</span>
            </div>
          </div>

          <div className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#252834] bg-[#12141A]">
            <Image
              src="/images/actual_pool_jacuzzi.jpg"
              alt="Actual pool steps and relaxation area"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3.5 left-4 right-4">
              <span className="text-xs font-semibold text-[#F3EFE6] block">Pool Relaxation Deck</span>
              <span className="text-[11px] text-[#C5A059]">Circular steps &amp; guest seating</span>
            </div>
          </div>

          <div className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#252834] bg-[#12141A]">
            <Image
              src="/images/actual_hotel_room_bed.jpg"
              alt="Actual executive suite bedroom"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3.5 left-4 right-4">
              <span className="text-xs font-semibold text-[#F3EFE6] block">Executive Room Accommodation</span>
              <span className="text-[11px] text-[#C5A059]">Plush king bed &amp; climate control</span>
            </div>
          </div>

          <div className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#252834] bg-[#12141A]">
            <Image
              src="/images/actual_hotel_courtyard.jpg"
              alt="Actual courtyard and hotel wing with sunflower art"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/90 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-3.5 left-4 right-4">
              <span className="text-xs font-semibold text-[#F3EFE6] block">Courtyard &amp; Room Balconies</span>
              <span className="text-[11px] text-[#C5A059]">Sunflower mural &amp; guest wings</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GOOGLE MAPS LOCATION FINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapDirections />
      </section>

      {/* 7. FAST ACTION / DIRECT CONTACT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-[#171922] via-[#1C1F2B] to-[#171922] border border-[#2C3142] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Direct Reservations &amp; Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
              Planning Your Visit to Owerri?
            </h2>
            <p className="text-stone-300 text-sm max-w-xl">
              Contact our front desk team directly for instant room confirmation, special weekend rates, or event inquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="tel:+2349134764393"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#C5A059] hover:bg-[#DFCA97] text-[#0D0E11] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +234 913 476 4393
            </a>
            <a
              href="https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20BE5A] text-[#0A1A0F] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
