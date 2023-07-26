"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isCoC = pathname === "/code-of-conduct";
  const linkPath = isCoC ? "/" : "/code-of-conduct";
  const linkText = isCoC ? "Back" : "Code of Conduct";

  return (
    <section className="flex justify-between items-center wrapper py-5">
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/tech_tank_fish_white.png"
            width={50}
            height={50}
            alt="tech tech fish logo"
            className="w-auto h-auto"
          />
          <p className="text-xl">TechTank</p>
        </Link>
      </div>
      <div>
        <Link href={linkPath}>
          <div className="btn">
            <p>{linkText}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
