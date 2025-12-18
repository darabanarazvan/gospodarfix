"use client";

import { useState } from "react";

export default function DevinoMester() {
  const [formaOrganizare, setFormaOrganizare] = useState("");
  const [poze, setPoze] = useState<File[]>([]);

  const handlePozeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);

    if (filesArray.length + poze.length > 5) {
      alert("Poți încărca maximum 5 poze.");
      return;
    }

    setPoze((prev) => [...prev, ...filesArray]);
  };

  const removePoza = (index: number) => {
    setPoze((prev) => prev.filter((_, i) => i !== index));
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
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
            GF
          </span>
          GospodarFix
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="/" className="hover:text-white">Acasă</a>
          <a href="/autentificare" className="hover:text-white">Autentificare</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Devino{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            meșter GospodarFix
          </span>
        </h1>
        <p className="mt-6 text-gray-300">
          Îți aducem clienți reali din zona ta, fără comisioane ascunse.
        </p>
      </section>

      {/* Formular */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
        <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 space-y-6">

          {/* Nume */}
          <div>
            <label className="block mb-2 text-sm font-medium">Nume complet</label>
            <input
              type="text"
              placeholder="Ex: Ion Popescu"
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="email@exemplu.ro"
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block mb-2 text-sm font-medium">Telefon</label>
            <input
              type="tel"
              placeholder="07xx xxx xxx"
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Profesie */}
          <div>
            <label className="block mb-2 text-sm font-medium">Profesie</label>
            <select className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500">
              <option value="">Selectează profesia</option>
              <option>Electrician</option>
              <option>Instalator</option>
              <option>Zugrav</option>
              <option>Constructor</option>
              <option>Curățenie</option>
              <option>Altele</option>
            </select>
          </div>

          {/* Zona */}
          <div>
            <label className="block mb-2 text-sm font-medium">Zona de activitate</label>
            <select className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500">
              <option value="">București – sector</option>
              <option>Sector 1</option>
              <option>Sector 2</option>
              <option>Sector 3</option>
              <option>Sector 4</option>
              <option>Sector 5</option>
              <option>Sector 6</option>
            </select>
          </div>

          {/* Forma organizare */}
          <div>
            <label className="block mb-2 text-sm font-medium">Forma de organizare</label>
            <select
              value={formaOrganizare}
              onChange={(e) => setFormaOrganizare(e.target.value)}
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selectează forma</option>
              <option>Particular</option>
              <option>Liber profesionist</option>
              <option>PFA</option>
              <option>Societate comercială</option>
            </select>
          </div>

          {/* Descriere */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Descrie-te clienților (min. 10 cuvinte)
            </label>
            <textarea
              rows={4}
              placeholder="Spune-le clienților de ce să te aleagă..."
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Upload poze */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Poze cu lucrările tale (maxim 5)
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePozeChange}
              className="block w-full text-sm text-gray-300"
            />

            {poze.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {poze.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Lucrare"
                      className="h-24 w-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removePoza(index)}
                      className="absolute top-1 right-1 rounded-full bg-black/70 px-2 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition"
          >
            Trimite cererea
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Prin trimiterea formularului ești de acord cu termenii și condițiile GospodarFix.
        </p>
      </section>
    </main>
  );
}
