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
