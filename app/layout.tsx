import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translator EN RU UZ",
  description: "Трёхъязычный переводчик терминов",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
