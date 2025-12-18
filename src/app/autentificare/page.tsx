"use client";

import { useState } from "react";

export default function Autentificare() {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [tipCont, setTipCont] = useState<"client" | "mester">("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMPORAR – doar flow UI
    if (tipCont === "client") {
      window.location.href = "/profil-client";
    } else {
      window.location.href = "/profil-mester";
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#050B2E] via-[#0A144A] to-[#020617] text-white flex items-center justify-center px-6">

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-2">
          Autentificare
        </h1>

        <p className="text-center text-sm text-gray-300 mb-8">
          Intră în contul tău GospodarFix
        </p>

        {/* Toggle Client / Meșter */}
        <div className="mb-6 flex rounded-xl bg-black/30 p-1">
          <button
            type="button"
            onClick={() => setTipCont("client")}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition
              ${tipCont === "client"
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                : "text-gray-400 hover:text-white"}
            `}
          >
            Client
          </button>

          <button
            type="button"
            onClick={() => setTipCont("mester")}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition
              ${tipCont === "mester"
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                : "text-gray-400 hover:text-white"}
            `}
          >
            Meșter
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemplu.ro"
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Parola */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Parolă
            </label>
            <input
              type="password"
              required
              value={parola}
              onChange={(e) => setParola(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition"
          >
            Autentificare
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Nu ai cont?{" "}
          <a href="/devino-mester" className="text-blue-400 hover:underline">
            Devino meșter
          </a>
        </div>
      </div>
    </main>
  );
}
