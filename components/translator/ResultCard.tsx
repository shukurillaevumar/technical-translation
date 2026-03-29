"use client";

import type { LangKey, TermItem } from "@/types/term";
import { safeText } from "@/lib/normalize";

type Props = {
  item: TermItem;
  from: LangKey;
  to: LangKey;
};

const langMap: Record<LangKey, string> = {
  en: "English",
  ru: "Русский",
  uz: "O‘zbek",
};

export default function ResultCard({ item, from, to }: Props) {
  return (
    <article className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_10px_30px_rgba(99,102,241,0.08)]">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
          {langMap[from]}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
          →
        </span>
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
          {langMap[to]}
        </span>
      </div>

      <div className="grid gap-3">
        <div className="rounded-2xl bg-linear-to-br from-pink-50 to-white p-4">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-slate-500">
            Исходный термин
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 wrap-break-word">
            {safeText(item[from]) || "—"}
          </h3>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-indigo-50 to-white p-4">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-slate-500">
            Перевод
          </span>
          <p className="text-xl font-extrabold text-slate-900 wrap-break-word">
            {safeText(item[to]) || "—"}
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-linear-to-r from-pink-200 via-indigo-200 to-emerald-200" />

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <span className="mb-2 inline-block rounded-full bg-white px-2 py-1 text-[11px] font-black tracking-wider text-indigo-700 shadow-sm">
            EN
          </span>
          <p className="wrap-break-word text-sm font-semibold text-slate-800">
            {safeText(item.en) || "—"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <span className="mb-2 inline-block rounded-full bg-white px-2 py-1 text-[11px] font-black tracking-wider text-pink-700 shadow-sm">
            RU
          </span>
          <p className="wrap-break-word text-sm font-semibold text-slate-800">
            {safeText(item.ru) || "—"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <span className="mb-2 inline-block rounded-full bg-white px-2 py-1 text-[11px] font-black tracking-wider text-emerald-700 shadow-sm">
            UZ
          </span>
          <p className="wrap-break-word text-sm font-semibold text-slate-800">
            {safeText(item.uz) || "—"}
          </p>
        </div>
      </div>
    </article>
  );
}
