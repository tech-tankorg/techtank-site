"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-5 flex flex-row items-center justify-between">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/full_logo_2x.png"
              width={80}
              height={80}
              alt="tech tank full logo"
              className="w-auto h-auto xs:hidden"
            />
            <Image
              src="/fish_logo.svg"
              width={80}
              height={80}
              alt="tech tank fish logo"
              className="w-auto h-auto hidden xs:block"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center flex-row gap-8">
        <nav className="flex flex-wrap gap-4">
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/activities" className="text-sm hover:underline">
            Activities
          </Link>
          <Link href="/mentors" className="text-sm hover:underline">
            Mentors
          </Link>
          <Link href="/events" className="text-sm hover:underline">
            Events
          </Link>
          <Link href="/donate" className="text-sm hover:underline">
            Donate
          </Link>
          <Link href="/code-of-conduct" className="text-sm hover:underline">
            Code of Conduct
          </Link>
        </nav>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA"
        >
          <div className="btn">Join us →</div>
        </a>
      </div>
    </header>
  );
}
