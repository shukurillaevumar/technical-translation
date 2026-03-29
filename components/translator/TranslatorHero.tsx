"use client";

type Props = {
  total: number;
};

export default function TranslatorHero({ total }: Props) {
  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.10)] backdrop-blur md:p-8">
      <div className="mb-4 inline-flex rounded-full bg-linear-to-r from-pink-500 to-indigo-500 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
        3 language translator
      </div>

      <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">
        Терминологический переводчик
        <span className="mt-2 block bg-linear-to-r from-pink-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
          EN / RU / UZ
        </span>
      </h1>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
        Быстрый поиск по техническим и инженерным терминам на английском,
        русском и узбекском.
      </p>

      <p className="mt-5 text-xl font-bold">Compiled by Khilolakhon Bakirova</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
          <div className="text-2xl font-black text-slate-900">{total}</div>
          <div className="mt-1 text-sm text-slate-500">терминов в базе</div>
        </div>

        <div className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm">
          <div className="text-2xl font-black text-slate-900">3</div>
          <div className="mt-1 text-sm text-slate-500">языка перевода</div>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
          <div className="text-2xl font-black text-slate-900">942</div>
          <div className="mt-1 text-sm text-slate-500">записи из словаря</div>
        </div>
      </div>
    </section>
  );
}
