import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GospodarFix",
  description: "Găsește rapid meșteri locali de încredere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
