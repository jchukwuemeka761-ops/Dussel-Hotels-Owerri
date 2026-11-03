export interface RoomTier {
  id: string;
  name: string;
  pricePerNight: number;
}

export const ROOM_TIERS: RoomTier[] = [
  { id: 'classic-queen', name: 'Standard / Classic Room (Queen)', pricePerNight: 30000 },
  { id: 'classic-king', name: 'Standard / Classic Room (King)', pricePerNight: 35000 },
  { id: 'executive-suite', name: 'Executive Suite with Lounge', pricePerNight: 40000 },
  { id: 'royal-suite', name: 'Dussel Royal / Presidential Suite', pricePerNight: 45000 },
];

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 1;
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = d2.getTime() - d1.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

export function calculateTotalPrice(pricePerNight: number, nights: number): number {
  const safeNights = Math.max(1, nights);
  return pricePerNight * safeNights;
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}
