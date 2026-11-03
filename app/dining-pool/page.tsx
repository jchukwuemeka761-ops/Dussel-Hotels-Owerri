import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Waves, Utensils, Clock, Check, Sparkles, MessageSquare, Phone } from 'lucide-react';

export const metadata = {
  title: 'African Restaurant & Olympic Swimming Pool | Dussel Hotels Owerri',
  description:
    'Indulge in delicious African dishes, traditional soups, and unwind by our standard Olympic-size swimming pool at Dussel Hotels on MCC Uratta Road, Owerri.',
};

export default function DiningAndPoolPage() {
  const menuCategories = [
    {
      title: 'Traditional Nigerian Soups & Swallows',
      subtitle: 'Prepared fresh with authentic local spices & choice proteins',
      items: [
        {
          name: 'Authentic Ofe Owerri',
          desc: 'The iconic heritage soup of Owerri, prepared with aromatic Ukazi & Uziza leaves, dried fish, stockfish, and tender beef.',
          tags: ['Signature Dish', 'Imo State Heritage'],
        },
        {
          name: 'Rich Melon Egusi Soup',
          desc: 'Hearty ground melon seed soup enriched with spinach, bitterleaf, smoked fish, and cow foot.',
          tags: ['Guest Favorite'],
        },
        {
          name: 'Vegetable / Edikang Ikong Style',
          desc: 'Nutritious waterleaf and fluted pumpkin soup loaded with diced meat, kpomo, and dry fish.',
          tags: ['Healthy Choice'],
        },
        {
          name: 'Swallow Choices',
          desc: 'Freshly prepared Pounded Yam, Semovita, Wheat, or Golden Garri (Eba).',
          tags: ['Included with Soups'],
        },
      ],
    },
    {
      title: 'Pepper Soups & Evening Grills',
      subtitle: 'Spicy, flavorful, and made to order',
      items: [
        {
          name: 'Fresh Catfish Point & Kill Pepper Soup',
          desc: 'Freshly caught catfish simmered in spicy aromatic broth with local African herbs, scent leaf, and Uda pepper.',
          tags: ['Made to Order', 'Spicy'],
        },
        {
          name: 'Goat Meat Pepper Soup (Isi Ewu Style)',
          desc: 'Tender diced goat meat cooked slow in a rich, peppery herbal reduction.',
          tags: ['Traditional'],
        },
        {
          name: 'Authentic Nkwobi Delicacy',
          desc: 'Chopped cow foot tossed in rich, savory spiced palm oil paste garnished with fresh Utazi leaves and onion rings.',
          tags: ['Eastern Special'],
        },
        {
          name: 'Spicy Asun & Peppered Chicken',
          desc: 'Smoky grilled goat meat or poultry tossed with fiery Scotch bonnet peppers and onions.',
          tags: ['Bar Favorite'],
        },
      ],
    },
    {
      title: 'Rice Specialties & Continental Breakfast',
      subtitle: 'Served hot all day long',
      items: [
        {
          name: 'Smoky Party-Style Jollof Rice',
          desc: 'Slow-cooked in savory tomato reduction, served with sweet fried dodo (plantains) and your choice of beef or chicken.',
          tags: ['Classic'],
        },
        {
          name: 'Special Fried Rice with Seafood',
          desc: 'Fragrant basmati rice tossed with garden sweet peas, sweet corn, carrots, and prawns.',
          tags: ['Chef Special'],
        },
        {
          name: 'Quality Breakfast Set',
          desc: 'Choice of fluffy scrambled/fried eggs, boiled or fried yam/plantain, served with hot tea, coffee, or hot chocolate.',
          tags: ['Morning Special'],
        },
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            Recreation &amp; Gastronomy
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] font-bold">
            Olympic-Size Pool &amp; Authentic African Dining
          </h1>
          <p className="mt-4 text-stone-300 text-base leading-relaxed">
            Dussel Hotels is renowned for offering one of the finest recreation and dining atmospheres in Owerri. Whether taking a swim in our full standard Olympic-size swimming pool or enjoying freshly prepared Nigerian soups, our facilities are crafted for relaxation.
          </p>
        </div>
      </div>

      {/* 1. OLYMPIC SWIMMING POOL FEATURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141B] border border-[#262A37] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative h-80 sm:h-[460px] w-full">
              <Image
                src="/images/actual_pool_wide.jpg"
                alt="Actual Olympic-size Swimming Pool at Dussel Hotels Owerri from Google Maps"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md text-xs text-[#C5A059] font-semibold border border-[#262A36]">
                Actual Dussel Hotels Swimming Pool
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
                  <Waves className="w-4 h-4" />
                  <span>The Aquatic Center</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6] font-semibold">
                  Standard Olympic-Size Swimming Pool
                </h2>
                <p className="text-sm text-stone-300 mt-3 leading-relaxed">
                  Engineered to full standard Olympic dimensions with dedicated swim lanes and spacious recreational areas, our pool offers both lap fitness and peaceful leisurely swimming. Surrounded by manicured tropical plants, sun loungers, and evening lighting.
                </p>

                <div className="mt-6 space-y-3 text-xs text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Complimentary Access:</strong> All in-house hotel lodging guests enjoy unlimited access.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Rigorous Filtration:</strong> Continuous automated filtration and daily chemical balancing.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Poolside Service:</strong> Enjoy cold drinks, grilled chops, and mocktails served directly to your deck chair.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Evening Illumination:</strong> Underwater LED lighting and golden lanterns for safe night swims.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#232734] flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  Pool Hours: 7:00 AM – 10:00 PM Daily
                </span>
                <Link
                  href="/book"
                  className="px-4 py-2 bg-[#C5A059] hover:bg-[#DFCA97] text-[#0D0E11] font-semibold uppercase rounded transition-colors"
                >
                  Book Stay &amp; Swim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. AFRICAN RESTAURANT FEATURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141B] border border-[#262A37] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
                  <Utensils className="w-4 h-4" />
                  <span>The Culinary Experience</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6] font-semibold">
                  Authentic African Restaurant &amp; Cocktail Bar
                </h2>
                <p className="text-sm text-stone-300 mt-3 leading-relaxed">
                  Indulge in authentic Nigerian hospitality. Our master chefs prepare fresh, local soups with deep traditional flavors, paired with chilled premium beverages from our fully stocked lounge bar.
                </p>

                <div className="mt-6 space-y-3 text-xs text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Fresh Ingredients Daily:</strong> Sourced directly from trusted local farmers and markets in Imo State.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Room Delivery Available:</strong> Hot meals delivered straight to your suite with zero hassle.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Quality Breakfast:</strong> Wholesome options to jumpstart your day in Owerri.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#232734] flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  Open 24/7 for In-House Guests
                </span>
                <a
                  href="tel:+2349134764393"
                  className="px-4 py-2 bg-[#1E222D] hover:bg-[#2A2F3E] text-stone-200 border border-[#353A4C] font-semibold uppercase rounded transition-colors"
                >
                  Order Room Service
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-80 sm:h-[460px] w-full order-1 lg:order-2">
              <Image
                src="/images/actual_pool_night.jpg"
                alt="Actual Poolside Lounge and Dining Area at Dussel Hotels from Google Maps"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-[#0D0E11]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md text-xs text-[#C5A059] font-semibold border border-[#262A36]">
                Actual Poolside Dining &amp; Bar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CURATED RESTAURANT MENU HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
            Carefully Crafted
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
            Featured African Menu Selections
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            Sample selections of what our culinary team serves daily to hotel guests and visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#14161E] border border-[#262A36] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-serif text-[#F3EFE6] font-semibold">{cat.title}</h3>
                <p className="text-xs text-[#C5A059] mt-0.5 mb-6">{cat.subtitle}</p>

                <div className="space-y-5">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-[#222530] pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-stone-200">{item.name}</h4>
                      </div>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">{item.desc}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] text-[#C5A059] font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222530] text-center">
                <span className="text-xs text-stone-400">Custom orders accommodated on request</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#171922] via-[#1B1E2A] to-[#171922] border border-[#2C3142] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-[#F3EFE6] font-bold">
              Join Us for a Refreshing Swim or Authentic Dinner
            </h3>
            <p className="text-sm text-stone-300 mt-2 max-w-xl">
              Table reservations, pool day passes, and suite bookings are easily arranged with our front desk team.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+2349134764393"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#C5A059] text-[#0D0E11] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#DFCA97] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +234 913 476 4393
            </a>
            <a
              href="https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20the%20pool"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-[#0A1A0F] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#20BE5A] transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
