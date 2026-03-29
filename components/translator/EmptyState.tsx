"use client";

type Props = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex min-h-70 flex-col items-center justify-center rounded-3xl border border-indigo-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(99,102,241,0.08)]">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-pink-500 to-indigo-500 text-2xl font-black text-white shadow-lg">
        ✦
      </div>

      <h3 className="mb-2 text-2xl font-black text-slate-900">{title}</h3>
      <p className="max-w-xl text-sm leading-7 text-slate-500">{description}</p>
    </div>
  );
}
