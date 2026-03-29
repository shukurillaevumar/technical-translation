"use client";

import { useEffect, useState } from "react";
import type { TermItem } from "@/types/term";

export function useTranslatorData() {
  const [data, setData] = useState<TermItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadTerms() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/data/terms.json", {
          cache: "force-cache",
        });

        if (!res.ok) {
          throw new Error("Не удалось загрузить словарь");
        }

        const json = (await res.json()) as TermItem[];

        if (!active) return;

        setData(Array.isArray(json) ? json : []);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Ошибка загрузки");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTerms();

    return () => {
      active = false;
    };
  }, []);

  return { data, loading, error };
}
