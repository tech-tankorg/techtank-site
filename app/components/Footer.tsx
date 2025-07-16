import Link from "next/link";
import navigation from "../../utils/constants/navigation";
import { SharedStyles } from "../styles/shared-styles";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900 py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1440px] w-[90%] px-6 flex flex-col sm:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center gap-4 sm:gap-8">
          <p className="text-3xl text-less-white text-center">Want to support us?</p>
          <Link href={"/"} className="sm:my-8">
            <div className={SharedStyles.button}>
              <p>Make A Donation</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold">Our Events</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.events.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-light-turquoise underline hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold">Our Initiatives</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.initiatives.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-light-turquoise underline hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold">Terms & Conditions</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-light-turquoise underline hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 sm:col-start-1 sm:col-span-3">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-less-white hover:text-light-turquoise"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  aria-hidden="true"
                  className="md:h-12 md:w-12 h-6 w-6"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
