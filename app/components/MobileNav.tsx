"use client";
import Image from "next/image";

import navigation from "@/utils/constants/navigation";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    <nav
      data-open={isOpen}
      className={twMerge(
        "fixed top-0 w-screen",
        "bg-light-sand",
        "grid sm:hidden",
        "items-center grid-cols-[1fr_auto_1fr] grid-rows-[3.5rem_1fr]",
        "px-6 py-2",
        "h-18 transition-[height] duration-300 ease-in-out",
        isOpen && "h-screen"
      )}
    >
      <button
        className={twMerge(
          "relative h-8 w-8 focus:outline-none",
          "transition-all duration-300 ease-in-out"
        )}
        onClick={toggleOverlay}
      >
        {/* top bar */}
        <span
          className={`absolute block h-0.5 w-full bg-black transition-all duration-300 ease-in-out
              ${isOpen ? "top-3.5 rotate-45" : "top-2"}
            `}
        />
        {/* middle bar */}
        <span
          className={`absolute block h-0.5 w-full bg-black transition-opacity duration-300
              ${isOpen ? "opacity-0" : "top-4 opacity-100"}
            `}
        />
        {/* bottom bar */}
        <span
          className={`absolute block h-0.5 w-full bg-black transition-all duration-300 ease-in-out
              ${isOpen ? "top-3.5 -rotate-45" : "top-6"}
            `}
        />
      </button>
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/fish_logo.svg"
          width={64}
          height={64}
          alt="tech tank fish logo"
          className="w-auto h-auto"
        />
      </Link>
      {/* overlay */}
      <div
        className={twMerge(
          "col-span-full self-stretch",
          isOpen ? "flex" : "hidden",
          "flex-col items-center justify-center gap-4"
        )}
      >
        <div className="flex flex-col items-start justify-center gap-4">
          {navigation.top.entries().map(([index, item]) =>
            item.type === "item" ? (
              <Link
                href={item.href}
                key={item.name}
                onClick={closeOverlay}
                className={twMerge("text-3xl hover:underline")}
              >
                {item.name}
              </Link>
            ) : (
              <div
                key={item.name}
                className={twMerge("text-3xl", "flex flex-col")}
              >
                <span>{item.name}</span>
                <div
                  className={twMerge(
                    "flex flex-col items-start justify-center gap-2",
                    "border-l-2 border-black pl-4 pt-2"
                  )}
                >
                  {item.items.map((subItem) => (
                    <Link
                      href={subItem.href}
                      key={subItem.name}
                      onClick={closeOverlay}
                      className={twMerge("text-xl hover:underline")}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
