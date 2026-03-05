"use client";
import Link from "next/link";
import Image from "next/image";
import navigation from "@/utils/constants/navigation";
import { NavigationMenu } from "radix-ui";
import { twMerge } from "tailwind-merge";
import { navLinks } from "./data";
import { usePathname } from "next/navigation";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="shadow shadow-brand-primary-900/10">
      <div
        className={twMerge(
          "w-11/12 max-w-[1440px] mx-auto",
          "flex justify-between items-center py-5",
          "hidden sm:flex",
        )}
      >
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/brand/full_logo_2x.png"
              width={80}
              height={80}
              alt="tech tank full logo"
              className="w-auto h-auto"
            />
          </Link>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex items-center justify-end gap-6">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="text-base/7 font-medium">
                  <Link
                    href={href}
                    className={twMerge(
                      "hover:underline transition-colors",
                      isActive && "underline font-semibold",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="text-base/7 font-medium">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://join.slack.com/t/techtank/shared_invite"
                className="hover:underline"
              >
                Join us on Slack &#8599;
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
