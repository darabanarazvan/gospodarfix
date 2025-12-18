"use client";

import { useState } from "react";

export default function ProfilMester() {
  const [descriere, setDescriere] = useState("");
  const [poze, setPoze] = useState<File[]>([]);

  const handlePozeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const fisiere = Array.from(e.target.files);
    if (fisiere.length + poze.length > 5) {
      alert("Poți încărca maximum 5 poze.");
      return;
    }

    setPoze([...poze, ...fisiere]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050B2E] via-[#0A144A] to-[#020617] text-white px-6 py-12">

      {/* Header */}
      <header className="max-w-7xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
            GF
          </span>
          GospodarFix
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="text-sm text-gray-300 hover:text-white"
        >
          Logout
        </button>
      </header>

      <div className="max-w-3xl mx-auto space-y-10">

        {/* Card Profil */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
          <h1 className="text-2xl font-bold">Ion Popescu</h1>
          <p className="text-blue-400 mt-1">Electrician</p>
          <p className="text-sm text-gray-300 mt-2">📍 București – Sector 3</p>
          <p className="mt-2 text-yellow-400">⭐⭐⭐⭐⭐ 4.9</p>
        </div>

        {/* Date profil */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold">Date profil</h2>

          <input
            type="email"
            value="ion.popescu@email.ro"
            disabled
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-gray-400 ring-1 ring-white/10"
          />

          <input
            type="tel"
            placeholder="Telefon"
            className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
          />

          <select className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500">
            <option>Persoană fizică</option>
            <option>Liber profesionist</option>
            <option>PFA</option>
            <option>Societate comercială</option>
          </select>
        </div>

        {/* Descriere */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-lg font-semibold mb-3">
            Descrie-te clienților
          </h2>
          <textarea
            rows={4}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
            placeholder="Minim 10 cuvinte despre experiența ta..."
            className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Poze lucrări */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-lg font-semibold mb-3">
            Poze lucrări (max 5)
          </h2>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePozeUpload}
            className="mb-4 text-sm"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {poze.map((file, index) => (
              <div
                key={index}
                className="h-24 rounded-xl bg-black/40 flex items-center justify-center text-xs text-gray-400"
              >
                {file.name}
              </div>
            ))}
          </div>
        </div>

        {/* Save */}
        <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition">
          Salvează modificările
        </button>

      </div>
    </main>
  );
}
