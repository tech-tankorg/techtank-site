import Link from "next/link";
import navigation from '../../utils/constants/navigation'

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900 py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1440px] w-[90%] px-6 flex sm:flex-col flex-row gap-4">
        <div className="flex-1 flex flex-col justify-between sm:items-center">
          <p className="text-3xl text-white">
            Want to support us?
          </p>
          <Link href={"/"} className="sm:my-8">
            <div className="btn">
              <p>Make A Donation</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-white font-bold">Our Events</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.events.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-lightTurquoise underline hover:text-white">
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
                  <Link href={item.href} className="text-sm leading-6 text-lightTurquoise underline hover:text-white">
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
                  <Link href={item.href} className="text-sm leading-6 text-lightTurquoise underline hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex mt-12 md:gap-4 gap-1 md:col-start-1 md:col-span-3 md:justify-center justify-start col-start-3">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-lessWhite hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="md:h-12 md:w-12 h-6 w-6"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
