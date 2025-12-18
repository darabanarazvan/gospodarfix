"use client";

import { useState } from "react";
import LocationAutocomplete from "./components/LocationAutocomplete";



/* ===== Servicii ===== */
const SERVICES = [
  {
    label: "⚡ Electricitate",
    options: [
      { value: "electrician", label: "Electrician" },
      { value: "reparatii-electrice", label: "Reparații electrice" },
      { value: "iluminat", label: "Montaj prize și iluminat" },
    ],
  },
  {
    label: "🚿 Instalații",
    options: [
      { value: "instalator", label: "Instalator" },
      { value: "canalizare", label: "Desfundare canalizare" },
      { value: "centrala", label: "Montaj centrală" },
    ],
  },
  {
    label: "🎨 Zugrăveli",
    options: [
      { value: "zugrav", label: "Zugrav" },
      { value: "gletuire", label: "Gletuire" },
      { value: "tapet", label: "Tapet" },
    ],
  },
  {
    label: "🧹 Curățenie",
    options: [
      { value: "curatenie", label: "Curățenie generală" },
      { value: "menaj", label: "Menaj" },
    ],
  },
];

type LocationData = {
  city: string;
  county: string;
  country: string;
  lat: number;
  lng: number;
  
};



export default function Home() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState<LocationData | null>(null);

  const handleSearch = () => {
    if (!service || !location) return;

    const params = new URLSearchParams({
      service,
      city: location.city,
      county: location.county,
      country: location.country,
      lat: location.lat.toString(),
      lng: location.lng.toString(),
    });

    window.location.href = `/mesteri?${params.toString()}`;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050B2E] via-[#0A144A] to-[#020617] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xl font-semibold">
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-400"
          >
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
            <path
              d="M30 55 L50 30 L70 55"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="43" y="55" width="14" height="18" fill="currentColor" />
          </svg>
          GospodarFix
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="/devino-mester" className="hover:text-white">
            Devino meșter
          </a>
          <a href="/autentificare" className="hover:text-white">
            Autentificare
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl font-bold leading-tight">
          Găsește rapid un{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            meșter de încredere
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Electricieni, instalatori, zugravi și alți meseriași verificați, oriunde în România.
        </p>

        {/* Search */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6">
  <div className="flex flex-col md:flex-row gap-4 md:items-center">
    
    {/* Serviciu */}
    <div className="md:flex-1">
      <select
  value={service}
  onChange={(e) => setService(e.target.value)}
  className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-gray-200 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
>
  <option value="">Alege serviciul</option>

  {SERVICES.map((group) => (
    <optgroup key={group.label} label={group.label}>
      {group.options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </optgroup>
  ))}
</select>

    </div>

    {/* Locație */}
    <div className="md:flex-1">
      <LocationAutocomplete onSelect={setLocation} />
    </div>

    {/* Button */}
    <div className="md:flex-none">
      <button
        onClick={handleSearch}
        disabled={!service || !location}
        className="w-full md:w-auto rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition disabled:opacity-50"
      >
        Caută meșteri
      </button>
    </div>

  </div>

  {/* Preview locație */}
  {location && (
    <p className="mt-3 text-xs text-gray-400 text-center">
      Locație selectată:{" "}
      <span className="text-white font-medium">
        {location.city} ({location.county}), {location.country}
      </span>
    </p>
  )}
</div>

      </section>

      {/* Social Proof */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <div>✔ Meșteri verificți</div>
          <div>✔ Fără comision</div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cum funcționează GospodarFix
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { step: "1", title: "Cauți un serviciu", desc: "Selectezi tipul și zona." },
            { step: "2", title: "Alegi meșterul", desc: "Vezi recenzii și rating." },
            { step: "3", title: "Rezolvi rapid", desc: "Contact direct, fără intermediari." },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                {item.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer COMPLET */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-400">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Informații</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/despre-noi" className="hover:text-white">Despre noi</a></li>
              <li><a href="/termeni" className="hover:text-white">Termeni și condiții</a></li>
              <li><a href="/confidentialitate" className="hover:text-white">Politica de confidențialitate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Suport clienți</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/intrebari-frecvente" className="hover:text-white">Întrebări frecvente</a></li>
              <li><a href="/raporteaza" className="hover:text-white">Raportează o problemă</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 text-lg font-semibold text-white">Te ținem la curent!</h4>
            <p className="mb-4 text-sm text-gray-400">
              Descoperă trenduri, idei și noutăți din industrie.
            </p>

            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="w-full rounded-xl bg-black/30 px-4 py-2 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
              />
              <button className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white">
                OK
              </button>
            </div>

            <p className="mb-4 text-xs text-gray-500">
              Acest site este protejat de reCAPTCHA și se aplică Politica de confidențialitate și Termenii Google.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} GospodarFix. Toate drepturile rezervate.
        </div>
      </footer>
    </main>
  );
}
