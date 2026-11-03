'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Copy, Check, Car, Phone, ExternalLink } from 'lucide-react';

export default function MapDirections({ fullPage = false }: { fullPage?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<'wetheral' | 'airport' | 'control'>('wetheral');

  const destinationAddress = 'Dussel Hotels, MCC Uratta Road, after ABC Workshop Uratta, Ikenegbu, Owerri 460281, Imo State';
  const driverNote = 'Take MCC Uratta Road from Wetheral/Ikenegbu. Pass Chukwuma Nwoha junction, continue straight past ABC Workshop Uratta. Dussel Hotels is on your right. Call front desk on 0913 476 4393 if needed.';

  const handleCopyNote = () => {
    navigator.clipboard.writeText(driverNote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const routes = {
    wetheral: {
      title: 'From Wetheral Road / Ikenegbu Roundabout',
      duration: 'Approx. 5–8 mins',
      steps: [
        'Turn onto MCC Uratta Road from the Wetheral Road axis.',
        'Proceed straight along MCC Road past Chukwuma Nwoha junction.',
        'Continue down towards Uratta past the well-known ABC Workshop Uratta.',
        'Dussel Hotels will be visible on your right with its prominent illuminated entrance gate.',
      ],
    },
    airport: {
      title: 'From Sam Mbakwe Cargo Airport Owerri',
      duration: 'Approx. 25–35 mins',
      steps: [
        'Head northwest from the airport exit onto the Owerri-Aba Expressway toward Owerri town.',
        'At the Aba Road junction / Egbu roundabout, merge onto MCC Road or connect via Chukwuma Nwoha.',
        'Follow MCC Uratta Road down towards Uratta.',
        'Look out for ABC Workshop Uratta; Dussel Hotels entrance is located right after it.',
      ],
    },
    control: {
      title: 'From Control Post / Port Harcourt Road',
      duration: 'Approx. 15–20 mins',
      steps: [
        'Drive through Assumpta Avenue onto Wetheral Road.',
        'Follow Wetheral Road until you reach the MCC Road intersection.',
        'Turn into MCC Uratta Road and drive straight down past ABC Workshop.',
        'Enter through the secure gated perimeter of Dussel Hotels.',
      ],
    },
  };

  return (
    <div className={`w-full ${fullPage ? '' : 'my-12'}`}>
      <div className="bg-[#12141A] border border-[#252834] rounded-xl overflow-hidden shadow-2xl">
        {/* Header strip */}
        <div className="p-6 md:p-8 bg-[#161820] border-b border-[#252834] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-1">
              <Compass className="w-4 h-4" />
              <span>Real-Time GPS Location Finder</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-[#F3EFE6]">
              Navigate Directly to Dussel Hotels Owerri
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              {destinationAddress}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=5.4907042,7.0548521"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0E11] bg-[#C5A059] hover:bg-[#DFCA97] rounded-md transition-colors shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              Start Google Maps Driving
            </a>
            <a
              href="https://www.google.com/maps/place/Dussel+Hotels/@5.4907042,7.0548521,17z"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-[#1E212B] hover:bg-[#282C3A] border border-[#323646] rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              View Map Profile
            </a>
          </div>
        </div>

        {/* Map & Guide Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-[500px] w-full bg-[#0E1015] relative">
            <iframe
              title="Dussel Hotels Owerri Google Map Location"
              src="https://maps.google.com/maps?q=5.4907042,7.0548521&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              loading="lazy"
              allowFullScreen
            />
            {/* Live badge overlay */}
            <div className="absolute top-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md border border-[#2D313D] text-xs px-3 py-1.5 rounded-md flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span className="text-stone-200 font-medium">Dussel Hotels · MCC Uratta Road</span>
            </div>
          </div>

          {/* Turn-by-turn driving selector & Driver assistance */}
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#14161C] border-t lg:border-t-0 lg:border-l border-[#252834]">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-3 flex items-center gap-2">
                <Car className="w-4 h-4 text-[#C5A059]" />
                Select Your Starting Point
              </h4>

              {/* Route switch buttons */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0E1015] rounded-lg border border-[#232631] mb-5">
                <button
                  type="button"
                  onClick={() => setSelectedRoute('wetheral')}
                  className={`py-2 px-2 text-xs font-medium rounded-md transition-all text-center ${
                    selectedRoute === 'wetheral'
                      ? 'bg-[#C5A059] text-[#0D0E11] font-semibold shadow'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  From Wetheral
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRoute('airport')}
                  className={`py-2 px-2 text-xs font-medium rounded-md transition-all text-center ${
                    selectedRoute === 'airport'
                      ? 'bg-[#C5A059] text-[#0D0E11] font-semibold shadow'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  From Airport
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRoute('control')}
                  className={`py-2 px-2 text-xs font-medium rounded-md transition-all text-center ${
                    selectedRoute === 'control'
                      ? 'bg-[#C5A059] text-[#0D0E11] font-semibold shadow'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  From Control
                </button>
              </div>

              {/* Selected Route Steps */}
              <div className="bg-[#1A1D25] border border-[#292D3B] rounded-lg p-4 mb-5">
                <div className="flex items-center justify-between mb-3 border-b border-[#292D3B] pb-2">
                  <span className="text-xs font-semibold text-[#F3EFE6]">
                    {routes[selectedRoute].title}
                  </span>
                  <span className="text-[11px] text-[#C5A059] font-medium">
                    {routes[selectedRoute].duration}
                  </span>
                </div>
                <ol className="space-y-2.5 text-xs text-stone-300">
                  {routes[selectedRoute].steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#262A36] text-[#C5A059] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Send Note to Driver / Bolt Card */}
              <div className="p-3.5 bg-[#0F1116] border border-[#272B38] rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#C5A059] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Driver / Taxi Note for Owerri
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyNote}
                    className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white bg-[#1E222D] px-2 py-1 rounded transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-stone-400" />
                        <span>Copy to Driver</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed font-mono">
                  &ldquo;{driverNote}&rdquo;
                </p>
              </div>
            </div>

            {/* Assistance hotline */}
            <div className="mt-5 pt-4 border-t border-[#232733] flex items-center justify-between text-xs text-stone-400">
              <span>Need live phone guidance while driving?</span>
              <a
                href="tel:+2349134764393"
                className="text-[#C5A059] hover:underline font-semibold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                Call +234 913 476 4393
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
