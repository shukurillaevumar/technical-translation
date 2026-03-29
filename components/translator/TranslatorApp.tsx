"use client";

import { useMemo, useState } from "react";
import type { LangKey, TermItem } from "@/types/term";
import { normalizeText, safeText } from "@/lib/normalize";
import { useTranslatorData } from "@/hooks/useTranslatorData";
import TranslatorHero from "./TranslatorHero";
import LanguageSelect from "./LanguageSelect";
import SearchInput from "./SearchInput";
import ResultCard from "./ResultCard";
import EmptyState from "./EmptyState";

function rankResults(items: TermItem[], from: LangKey, query: string) {
  const q = normalizeText(query);

  return [...items].sort((a, b) => {
    const aValue = normalizeText(safeText(a[from]));
    const bValue = normalizeText(safeText(b[from]));

    const aRank =
      aValue === q ? 3 : aValue.startsWith(q) ? 2 : aValue.includes(q) ? 1 : 0;

    const bRank =
      bValue === q ? 3 : bValue.startsWith(q) ? 2 : bValue.includes(q) ? 1 : 0;

    if (aRank !== bRank) return bRank - aRank;
    return aValue.localeCompare(bValue);
  });
}

export default function TranslatorApp() {
  const { data, loading, error } = useTranslatorData();

  const [from, setFrom] = useState<LangKey>("en");
  const [to, setTo] = useState<LangKey>("ru");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = normalizeText(query);

    const filtered = data.filter((item) => {
      const value = normalizeText(safeText(item[from]));
      return value.includes(q);
    });

    return rankResults(filtered, from, query).slice(0, 50);
  }, [data, from, query]);

  function handleSwap() {
    setFrom(to);
    setTo(from);
  }

  function handleFromChange(next: LangKey) {
    if (next === to) {
      setTo(from);
    }
    setFrom(next);
  }

  function handleToChange(next: LangKey) {
    if (next === from) {
      setFrom(to);
    }
    setTo(next);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fdfcff_0%,#f4f7ff_45%,#eef5ff_100%)] px-4 py-6 md:px-6 md:py-10">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-28 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <TranslatorHero total={data.length} />

        <section className="mt-6 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_20px_60px_rgba(99,102,241,0.10)] backdrop-blur md:p-6">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <span className="mb-2 inline-block text-xs font-black uppercase tracking-[0.2em] text-pink-600">
                smart search
              </span>
              <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
                Поиск перевода
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">База</div>
                <div className="mt-1 text-2xl font-black text-slate-900">
                  {data.length}
                </div>
              </div>

              <div className="rounded-2xl border border-pink-100 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">
                  Найдено
                </div>
                <div className="mt-1 text-2xl font-black text-slate-900">
                  {results.length}
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-end gap-4 md:grid-cols-[1fr_72px_1fr]">
            <LanguageSelect
              label="С языка"
              value={from}
              onChange={handleFromChange}
            />

            <button
              type="button"
              onClick={handleSwap}
              className="h-14 rounded-2xl bg-linear-to-r from-pink-500 to-indigo-500 text-2xl font-black text-white shadow-lg transition hover:-translate-y-0.5"
              aria-label="Поменять языки местами"
            >
              ⇄
            </button>

            <LanguageSelect
              label="На язык"
              value={to}
              onChange={handleToChange}
            />
          </div>

          <div className="mt-4">
            <SearchInput value={query} onChange={setQuery} />
          </div>
        </section>

        <section className="mt-6">
          {loading ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-72 animate-pulse rounded-3xl border border-indigo-100 bg-white"
                />
              ))}
            </div>
          ) : error ? (
            <EmptyState title="Ошибка загрузки" description={error} />
          ) : !query.trim() ? (
            <EmptyState
              title="Начни вводить термин"
              description="Выбери язык источника, язык перевода и введи слово в поле поиска."
            />
          ) : results.length === 0 ? (
            <EmptyState
              title="Совпадений нет"
              description="По этому запросу в словаре ничего не найдено. Проверь написание или попробуй другой вариант."
            />
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {results.map((item, index) => (
                <ResultCard
                  key={`${item.en}-${item.ru}-${item.uz}-${index}`}
                  item={item}
                  from={from}
                  to={to}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
