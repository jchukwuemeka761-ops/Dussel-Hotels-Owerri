import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactBar from '@/components/FloatingContactBar';

export const metadata: Metadata = {
  title: 'Dussel Hotels & Suites | Luxury 5-Star Hotel in Owerri, Imo State',
  description:
    'Experience upscale luxury at Dussel Hotels on MCC Uratta Road, Owerri. Featuring continuous 24/7 power supply, Olympic swimming pool, authentic African restaurant, air-conditioned executive suites & gated security.',
  openGraph: {
    title: 'Dussel Hotels & Suites | Luxury Hotel in Owerri, Imo State',
    description:
      'Modern upscale luxury hotel strategically located on MCC Uratta Road, Owerri. 24/7 generator power, Olympic pool, fine African dining, and secure suites.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dussel Hotels & Suites | Luxury Hotel in Owerri, Imo State',
    description:
      'Premier hospitality in Imo Owerri with continuous power, Olympic pool, and authentic dining.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0D0E11] text-[#F3EFE6] selection:bg-[#C5A059] selection:text-[#0D0E11] pb-14 sm:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
