import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <section>
      <div>
        <Link href="/">
          <Image
            src="/tech_tank_fish_white.png"
            alt="tech tech fish logo"
            width={50}
            height={50}
          />
          <p>TechTank</p>
        </Link>
      </div>
      <div>
        <Link href="/code-of-conduct">
          <div>
            <p>Code of Conduct</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
