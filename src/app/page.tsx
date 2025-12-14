"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050B2E] via-[#0A144A] to-[#020617] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">GF</span>
          GospodarFix
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">Devino meșter</a>
          <a href="#" className="hover:text-white">Autentificare</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl font-bold leading-tight">
          Găsește rapid un <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">meșter de încredere</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Electricieni, instalatori, zugravi și alți meseriași verificați, aproape de tine.
        </p>

        {/* Search */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="rounded-xl bg-black/30 px-4 py-3 text-sm text-gray-200 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500">
              <option>Serviciu</option>
              <option>Electrician</option>
              <option>Instalator</option>
              <option>Zugrav</option>
              <option>Menaj</option>
            </select>

            <select className="rounded-xl bg-black/30 px-4 py-3 text-sm text-gray-200 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500">
              <option>Zona</option>
              <option>București – Sector 1</option>
              <option>București – Sector 2</option>
              <option>București – Sector 3</option>
              <option>București – Sector 4</option>
              <option>București – Sector 5</option>
              <option>București – Sector 6</option>
            </select>

            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]">
              Caută meșteri
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Contact direct", "Meșteri locali", "Simplu și gratuit"].map((title, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                ✓
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-300">
                {title === "Contact direct" && "Discuți direct cu meșterul, fără intermediari."}
                {title === "Meșteri locali" && "Găsești profesioniști verificați din zona ta."}
                {title === "Simplu și gratuit" && "Contactul este gratuit, fără costuri ascunse."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GospodarFix. Toate drepturile rezervate.
      </footer>
    </main>
  );
}


