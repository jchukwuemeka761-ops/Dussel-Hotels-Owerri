import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Zap, Waves, Utensils, MapPin, Check, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'About Dussel Hotels | Luxury & Serene Hospitality in Owerri',
  description:
    'Learn about Dussel Hotels on MCC Uratta Road, Owerri. Our mission, upscale accommodations, continuous power, Olympic pool, and authentic hospitality in Imo State.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Strategic & Serene Location',
      description: 'Located in Imo Owerri along MCC Uratta Road (after ABC Workshop Uratta). We offer a tranquil, noise-free haven while keeping you just minutes away from Ikenegbu commercial district and transport arteries.',
    },
    {
      title: 'Continuous 24/7 Power Assurance',
      description: 'We understand that electricity is the cornerstone of comfort. Our dedicated heavy-duty backup generator system guarantees that your air conditioning, lights, and appliances remain running without pause.',
    },
    {
      title: 'Affordable Luxury Pricing',
      description: 'We believe 5-star comfort should be accessible. With standard rooms from ₦30,000 and executive suites from ₦40,000, we provide exceptional value for travelers, business executives, and visiting families.',
    },
    {
      title: 'Comprehensive Leisure & Dining',
      description: 'From our standard Olympic-size swimming pool to our on-site restaurant serving genuine Imo State culinary specialties (Ofe Owerri, fresh catfish pepper soup), everything you need is under one roof.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            The Dussel Story &amp; Hospitality Heritage
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] font-bold">
            Modern Upscale Hospitality Centrally Located in Owerri
          </h1>
          <p className="mt-4 text-stone-300 text-base leading-relaxed">
            Dussel Hotels was conceived to provide business executives, visitors, and families with a true sanctuary of elegance, comfort, and reliability in Imo State.
          </p>
        </div>
      </div>

      {/* Main Narrative Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-96 sm:h-[500px] rounded-2xl overflow-hidden border border-[#272B38] shadow-2xl">
            <Image
              src="/images/actual_hotel_night_facade.jpg"
              alt="Actual Dussel Hotels night facade architecture from Google Maps"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-stone-200">
              <span className="text-xs font-mono text-[#C5A059] uppercase block mb-1">
                MCC Uratta Road · Ikenegbu Axis
              </span>
              <p className="text-sm font-serif text-white">
                Tastefully furnished, upscale lodging in a peaceful, secure compound.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6] leading-tight">
              A Five-Star Vision with Uncompromising Reliability
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Dussel Hotels is a modern top luxurious, upscale, and tastefully furnished hospitality destination located in Imo Owerri along MCC Uratta road, conveniently situated after ABC workshop Uratta.
            </p>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              When traveling to Owerri, discerning guests require three non-negotiable standards: uninterrupted power, chilled climate control in clean rooms, and peace of mind. We have eliminated the uncertainty by investing in an industrial generator power setup, tight physical security with gated access, and attentive 24-hour customer service.
            </p>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Beyond comfortable sleep, our guests enjoy full recreation at our standard Olympic-size swimming pool and a gourmet dining experience featuring indigenous Imo dishes and quality breakfast options.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#DFCA97] text-[#0D0E11] font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                View Rooms &amp; Rates
              </Link>
              <Link
                href="/location"
                className="px-6 py-3 bg-[#171922] hover:bg-[#232733] text-stone-200 border border-[#303546] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                Visit Hotel Location
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Core Pillars */}
      <div className="bg-[#101217] border-y border-[#20232E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
              Our Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
              Built Around What Matters Most to You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#151720] border border-[#272B38] space-y-3"
              >
                <div className="text-xs font-mono text-[#C5A059] font-bold">
                  0{idx + 1}. PRINCIPLE
                </div>
                <h3 className="text-xl font-serif text-[#F3EFE6] font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Details & Quick Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14161F] border border-[#262B3A] rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block mb-2">
              Physical Location
            </span>
            <h3 className="text-2xl font-serif text-[#F3EFE6] font-semibold">
              Visit Us in Imo Owerri
            </h3>
            <p className="text-stone-300 text-sm mt-3 leading-relaxed">
              Address: MCC, Uratta Road, Ikenegbu, Owerri 460281, Imo State (Directly after ABC Workshop Uratta).
            </p>
            <div className="mt-4 space-y-1 text-xs text-stone-400">
              <p>• 25–35 minutes from Sam Mbakwe Cargo Airport</p>
              <p>• 5–8 minutes from Wetheral Road / Ikenegbu Roundabout</p>
              <p>• Open 24 Hours, 7 Days a week</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href="tel:+2349134764393"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C5A059] text-[#0D0E11] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#DFCA97] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Hotel Front Desk
            </a>
            <a
              href="https://wa.me/2349134764393"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-[#0A1A0F] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#20BE5A] transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp Front Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
