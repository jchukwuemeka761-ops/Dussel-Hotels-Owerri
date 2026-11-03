import React from 'react';
import BookingForm from '@/components/BookingForm';
import { Phone, MessageSquare, Mail, ShieldCheck, Zap, Waves, Clock, Check } from 'lucide-react';

export const metadata = {
  title: 'Book a Room | Dussel Hotels Owerri',
  description:
    'Reserve your room at Dussel Hotels on MCC Uratta Road, Owerri. Rates starting from ₦30,000/night. Continuous 24/7 power, Olympic pool, and gated security.',
};

export default function BookPage() {
  const faqs = [
    {
      q: 'Is power supply continuous throughout the day and night?',
      a: 'Yes. Dussel Hotels is equipped with heavy-duty backup industrial generators that switch on immediately in case of local power outages, ensuring your air conditioning, lights, and appliances remain running 24/7.',
    },
    {
      q: 'What is the check-in and check-out time?',
      a: 'Standard check-in time starts at 2:00 PM, and check-out is by 12:00 PM noon. Early check-in or late check-out can be arranged with our front desk subject to room availability.',
    },
    {
      q: 'Is swimming pool access included with my room booking?',
      a: 'Yes, all registered lodging guests enjoy complimentary access to our standard Olympic-size swimming pool during opening hours (7:00 AM – 10:00 PM).',
    },
    {
      q: 'How do I pay for my reservation?',
      a: 'You can reserve online with zero upfront deposit via WhatsApp or phone call, and complete payment upon arrival via cash, direct bank transfer, or debit card (POS) at the front desk.',
    },
    {
      q: 'Is there secure parking for my vehicle?',
      a: 'Yes. We provide a gated compound parking area monitored 24/7 by physical security guards and perimeter lighting.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            Reservations &amp; Instant Booking
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F3EFE6] font-bold">
            Book Your Stay at Dussel Hotels
          </h1>
          <p className="mt-4 text-stone-300 text-base leading-relaxed">
            Reserve your suite in seconds. Select your dates and room tier below. Our front desk manager will confirm your reservation immediately via WhatsApp or phone.
          </p>
        </div>
      </div>

      {/* Booking Form Core Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingForm />
      </div>

      {/* Alternative Fast Booking Direct Contacts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#14161F] border border-[#262B3A] rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#222533] text-[#C5A059] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-200">Phone Reservation</h3>
              <p className="text-xs text-stone-400 mt-1">Speak directly with our 24/7 front desk reception.</p>
              <a
                href="tel:+2349134764393"
                className="text-xs font-semibold text-[#C5A059] hover:underline block mt-2"
              >
                +234 913 476 4393
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#14161F] border border-[#262B3A] rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1B2920] text-[#25D366] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-200">WhatsApp Instant</h3>
              <p className="text-xs text-stone-400 mt-1">Fast message chat for photos, rates, and quick booking.</p>
              <a
                href="https://wa.me/2349134764393?text=Hello%20Dussel%20Hotels,%20I%20am%20ready%20to%20book%20a%20room"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#25D366] hover:underline block mt-2"
              >
                Chat on WhatsApp (+234 913 476 4393)
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#14161F] border border-[#262B3A] rounded-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#222533] text-[#C5A059] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-200">Email Inquiry</h3>
              <p className="text-xs text-stone-400 mt-1">For corporate invoices, events, and receipts.</p>
              <a
                href="mailto:dusselhotel@gmail.com"
                className="text-xs font-semibold text-[#C5A059] hover:underline block mt-2"
              >
                dusselhotel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guest FAQs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141A] border border-[#252834] rounded-2xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
              Guest Assistance
            </div>
            <h2 className="text-2xl font-serif text-[#F3EFE6] font-semibold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-[#171922] border border-[#272B38] rounded-xl space-y-2">
                <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
