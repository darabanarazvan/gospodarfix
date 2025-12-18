"use client";

import { useParams } from "next/navigation";

export default function ProfilPublicMester() {
  const params = useParams();
  const id = params.id;

  // MOCK DATA (mai târziu vine din backend)
  const mester = {
    nume: "Ion Popescu",
    profesie: "Electrician",
    zona: "București – Sector 3",
    rating: 4.9,
    descriere:
      "Electrician cu peste 10 ani de experiență în lucrări rezidențiale și comerciale. Serios, punctual și atent la detalii.",
    servicii: [
      "Reparații electrice",
      "Montaj prize",
      "Iluminat interior",
    ],
    poze: [
      "/lucrari/1.jpg",
      "/lucrari/2.jpg",
      "/lucrari/3.jpg",
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050B2E] to-[#020617] text-white px-6 py-16">

      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h1 className="text-3xl font-bold">{mester.nume}</h1>
          <p className="text-blue-400 text-lg">{mester.profesie}</p>
          <p className="text-gray-300 mt-2">{mester.zona}</p>

          <div className="mt-4 text-yellow-400">
            ⭐ {mester.rating} / 5
          </div>
        </section>

        {/* Descriere */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-4">
            Despre mine
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {mester.descriere}
          </p>
        </section>

        {/* Servicii */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-4">
            Servicii oferite
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
            {mester.servicii.map((serviciu, idx) => (
              <li key={idx} className="flex items-center gap-2">
                ✔ {serviciu}
              </li>
            ))}
          </ul>
        </section>

        {/* Galerie */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-6">
            Lucrări realizate
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mester.poze.map((src, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-xl bg-black/30 flex items-center justify-center text-gray-500"
              >
                Poză {idx + 1}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-10 py-4 text-sm font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.03] transition">
            Contactează meșterul
          </button>
        </section>

      </div>
    </main>
  );
}
