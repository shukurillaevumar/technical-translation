"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="block">
      <span className="mb-2 inline-block text-sm font-semibold text-slate-600">
        Поиск термина
      </span>

      <div className="flex h-16 items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 shadow-sm transition focus-within:border-pink-300 focus-within:ring-4 focus-within:ring-pink-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 shrink-0 text-slate-400"
          aria-hidden="true"
        >
          <path
            d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Например: Voltage, Самолёт, Kuchlanish..."
          className="h-full w-full border-none bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}
