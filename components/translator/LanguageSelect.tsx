"use client";

import type { LangKey } from "@/types/term";

type Props = {
  label: string;
  value: LangKey;
  onChange: (value: LangKey) => void;
};

const options: { value: LangKey; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "uz", label: "O‘zbek" },
];

export default function LanguageSelect({ label, value, onChange }: Props) {
  return (
    <label className="block">
      <span className="mb-2 inline-block text-sm font-semibold text-slate-600">
        {label}
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as LangKey)}
        className="h-14 w-full rounded-2xl border border-indigo-100 bg-white px-4 text-slate-900 shadow-sm outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
