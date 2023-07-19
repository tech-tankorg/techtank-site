import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <section className="flex justify-between items-center wrapper py-5">
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/tech_tank_fish_white.png"
            alt="tech tech fish logo"
            width={50}
            height={50}
          />
          <p className="text-xl">TechTank</p>
        </Link>
      </div>
      <div>
        <Link href="/code-of-conduct">
          <div className="btn">
            <p>Code of Conduct</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
