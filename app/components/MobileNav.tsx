"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import navigation from "@/utils/constants/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={twMerge(
        "fixed top-0 w-screen",
        "bg-brand-primary-50 dark:bg-brand-primary-900 shadow shadow-brand-primary-600/10",
        "grid sm:hidden",
        "items-center grid-cols-[1fr_auto_1fr] grid-rows-[3.5rem_1fr]",
        "px-6 py-2",
        "h-18 transition-[height] duration-300 ease-in-out",
        isOpen && "h-screen",
      )}
    >
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-8 w-8 text-4xl/7 text-black dark:text-white focus:outline-none transition-all duration-300 ease-in-out"
      >
        {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/brand/fish_logo.svg"
          width={64}
          height={64}
          alt="Tech Tank fish logo"
          className="w-auto h-auto"
        />
      </Link>

      <div
        className={twMerge(
          "col-span-full self-stretch",
          "flex-col items-center justify-center gap-4",
          isOpen ? "flex" : "hidden",
        )}
      >
        <div className="flex flex-col items-start justify-center gap-4">
          {navigation.top.map((item) =>
            item.type === "item" ? (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="text-3xl hover:underline dark:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="text-3xl flex flex-col">
                <span className="dark:text-white mb-6">{item.name}</span>
                <div className="flex flex-col items-start justify-center gap-4 border-l-2 border-black dark:border-white/70 ml-3 pl-4 pt-2">
                  {item.items.map((subItem) => (
                    <Link
                      href={subItem.href}
                      key={subItem.name}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl hover:underline dark:text-white/70"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
