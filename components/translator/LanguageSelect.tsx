"use client";

import type { LangKey } from "@/types/term";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";

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
  const currentOption =
    options.find((option) => option.value === value) ?? options[0];

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <Menu as="div" className="relative w-full">
        <MenuButton
          className={clsx(
            "flex h-14 w-full items-center justify-between rounded-2xl border border-indigo-100 bg-white px-4 text-left text-slate-900 shadow-sm outline-none transition",
            "focus:outline-none focus:ring-4 focus:ring-pink-100 data-active:border-pink-300",
          )}
        >
          <span className="truncate">{currentOption.label}</span>

          <svg
            className="ml-3 h-5 w-5 shrink-0 text-slate-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </MenuButton>

        <MenuItems
          anchor="bottom start"
          transition
          className={clsx(
            "z-50 mt-2 w-(--button-width) max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-xl outline-none",
            "transition duration-150 ease-out",
            "data-closed:scale-95 data-closed:opacity-0",
          )}
        >
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <MenuItem key={option.value}>
                {({ focus }) => (
                  <button
                    type="button"
                    onClick={() => onChange(option.value)}
                    className={clsx(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition",
                      focus && "bg-pink-50 text-slate-900",
                      isActive
                        ? "bg-indigo-50 font-medium text-indigo-700"
                        : "text-slate-700",
                    )}
                  >
                    <span>{option.label}</span>

                    {isActive && (
                      <svg
                        className="h-4 w-4 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 4.71 9.29L8 12.586l7.296-7.296a1 1 0 0 1 1.408 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                )}
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </div>
  );
}
