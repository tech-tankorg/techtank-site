import Link from "next/link";
import navigation from "../../utils/constants/navigation";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900 py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="wrapper px-6 flex flex-col sm:flex-row gap-8">
        <div className="flex-1 grid grid-cols-1 xs:grid-cols-2  gap-8">
          <div>
            <h3 className="text-white font-bold">Our Events</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.events.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-brand-primary-600 underline hover:text-white"
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
                    className="text-sm leading-6 text-brand-primary-600 underline hover:text-white"
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
                className="text-less-white hover:text-brand-primary-600"
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
