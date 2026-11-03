'use client';

import React, { useState, useId } from 'react';
import { Calendar, Users, Phone, MessageSquare, CheckCircle, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface RoomOption {
  id: string;
  name: string;
  pricePerNight: number;
  description: string;
  features: string[];
}

const ROOM_OPTIONS: RoomOption[] = [
  {
    id: 'classic-queen',
    name: 'Standard / Classic Room (Queen)',
    pricePerNight: 30000,
    description: 'Crisp, comfortable standard room with plush queen bed, air conditioning, and continuous power.',
    features: ['Queen-size Bed', 'Split Unit AC', '24/7 Generator Power', 'En-suite Bathroom', 'Flat-screen TV'],
  },
  {
    id: 'classic-king',
    name: 'Standard / Classic Room (King)',
    pricePerNight: 35000,
    description: 'Spacious classic bedroom featuring a plush king-size bed and modern workstation.',
    features: ['King-size Bed', 'Split Unit AC', 'Continuous Power', 'Work Desk', 'High-speed WiFi'],
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite with Lounge',
    pricePerNight: 40000,
    description: 'Tastefully furnished suite offering a dedicated lounge sitting area for ultimate relaxation.',
    features: ['King Bed & Living Area', 'Mini Refrigerator', 'Split Unit AC', 'Continuous 24/7 Power', 'Olympic Pool Access'],
  },
  {
    id: 'royal-suite',
    name: 'Dussel Royal / Presidential Suite',
    pricePerNight: 45000,
    description: 'Top-tier luxury accommodation with expansive sitting lounge, deluxe furnishing, and breakfast options.',
    features: ['VIP Living Lounge', 'Breakfast Options Included', 'Continuous 24/7 Power', 'Olympic Pool Access', 'Priority Room Service'],
  },
];

export default function BookingForm({ initialRoomId }: { initialRoomId?: string }) {
  const formId = useId();

  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId || 'executive-suite');
  const [checkIn, setCheckIn] = useState<string>(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Compute number of nights
  const computeNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2.getTime() - d1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const nights = computeNights();
  const selectedRoom = ROOM_OPTIONS.find((r) => r.id === selectedRoomId) || ROOM_OPTIONS[2];
  const totalPrice = selectedRoom.pricePerNight * nights;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert('Please fill in your name and phone number to proceed.');
      return;
    }

    const message = encodeURIComponent(
      `Hello Dussel Hotels!\n\n` +
      `I would like to reserve a room with the following details:\n` +
      `• Guest Name: ${guestName}\n` +
      `• Phone Number: ${guestPhone}\n` +
      `• Room Selected: ${selectedRoom.name}\n` +
      `• Rate: ₦${selectedRoom.pricePerNight.toLocaleString()} / night\n` +
      `• Check-In: ${checkIn}\n` +
      `• Check-Out: ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
      `• Guests: ${guests}\n` +
      `• Total Estimated: ₦${totalPrice.toLocaleString()}\n` +
      (specialRequests ? `• Special Requests: ${specialRequests}\n` : '') +
      `\nPlease confirm availability and payment details. Thank you!`
    );

    window.open(`https://wa.me/2349134764393?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#12141A] border border-[#252834] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Direct Hotel Booking Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#F3EFE6]">
          Reserve Your Luxury Stay at Dussel Hotels
        </h2>
        <p className="text-stone-400 text-sm mt-2">
          Transparent rates with no hidden fees. All bookings include continuous 24/7 backup power, air conditioning, gated security, and access to our Olympic swimming pool.
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-[#171C17] border border-[#2B4E38] rounded-xl p-8 text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-serif text-[#F3EFE6]">Booking Request Initiated!</h3>
          <p className="text-sm text-stone-300 max-w-lg mx-auto">
            Thank you, <strong className="text-white">{guestName}</strong>. Your reservation request for the{' '}
            <strong className="text-[#C5A059]">{selectedRoom.name}</strong> ({nights} night{nights > 1 ? 's' : ''} at ₦{totalPrice.toLocaleString()}) has been prepared. Our front desk manager will confirm your room instantly.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+2349134764393"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-[#0D0E11] text-xs font-semibold uppercase rounded-md hover:bg-[#DFCA97] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Front Desk (+234 913 476 4393)
            </a>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 text-xs text-stone-400 hover:text-white border border-[#2D313D] rounded-md transition-colors"
            >
              Make Another Reservation
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppBooking} className="space-y-8">
          {/* Step 1: Select Room Tier */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-3">
              1. Select Room Tier & Suite Type
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {ROOM_OPTIONS.map((room) => {
                const isSelected = selectedRoomId === room.id;
                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`cursor-pointer rounded-xl p-4 transition-all border ${
                      isSelected
                        ? 'bg-[#1D2029] border-[#C5A059] ring-1 ring-[#C5A059] shadow-md'
                        : 'bg-[#15171F] border-[#252834] hover:border-[#3A3F50]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F3EFE6]">{room.name}</h4>
                        <p className="text-xs text-stone-400 mt-1 line-clamp-2">{room.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-base font-bold text-[#C5A059] font-mono tabular-nums">
                          ₦{room.pricePerNight.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-stone-400 block">/ night</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#232733] flex flex-wrap gap-1.5">
                      {room.features.map((feat, idx) => (
                        <span key={idx} className="text-[11px] text-stone-300 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Dates and Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor={`${formId}-checkin`} className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                Check-in Date
              </label>
              <div className="relative">
                <input
                  id={`${formId}-checkin`}
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-[#C5A059]"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-checkout`} className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                Check-out Date
              </label>
              <div className="relative">
                <input
                  id={`${formId}-checkout`}
                  type="date"
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-[#C5A059]"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-guests`} className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                Number of Guests
              </label>
              <div className="relative">
                <select
                  id={`${formId}-guests`}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-3.5 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-[#C5A059]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4+ Guests (Family)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Guest Details */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-3">
              2. Guest Contact Information
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-4 py-2.5 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp *"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  required
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-4 py-2.5 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address (Optional)"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-4 py-2.5 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Special Requests (e.g. Late check-in, Airport pickup)"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#161820] border border-[#272B38] rounded-lg px-4 py-2.5 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>
          </div>

          {/* Pricing Summary & Direct CTAs */}
          <div className="bg-[#181B23] border border-[#2B303F] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs text-stone-400">Estimated Total for {nights} Night{nights > 1 ? 's' : ''}</div>
              <div className="text-2xl sm:text-3xl font-serif text-[#C5A059] font-bold font-mono tabular-nums">
                ₦{totalPrice.toLocaleString()}
              </div>
              <div className="text-xs text-stone-400 mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#C5A059]" /> 24/7 Power Included
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Pay at Check-in Available
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BE5A] text-[#0A1A0F] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-emerald-950/40"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Book via WhatsApp Instant
              </button>
              <a
                href="tel:+2349134764393"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1F222C] hover:bg-[#292D3B] text-stone-200 border border-[#353A4B] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call +234 913 476 4393
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
