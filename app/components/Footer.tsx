import navigation from "@/utils/constants/navigation";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="pt-16" id="footer">
      <div className="bg-brand-primary-900/2.5 py-16 text-brand-primary-900 dark:bg-white/5 dark:text-white">
        <div className="mx-auto w-full max-w-2xl px-6 md:max-w-3xl lg:max-w-7xl lg:px-10 flex flex-col gap-16">
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 text-sm/7 lg:grid-cols-2">
            <div className="flex max-w-sm flex-col gap-2">
              <p className="font-bold text-lg">TechTank</p>
              <div className="flex flex-col gap-4 dark:text-white/80">
                <p className="text-base/6">
                  Get customer support tips, product updates and customer
                  stories that you can archive as soon as they.
                </p>
                <div className="flex gap-3">
                  {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} className="">
                      <span className="sr-only">{item.name}</span>
                      <item.icon aria-hidden="true" className="size-6" />
                    </Link>
                  ))}
                </div>
                <div className="text-brand-primary-600 dark:text-brand-primary-100/80">
                  &copy; {new Date().getFullYear()} TechTank, Inc.
                </div>
              </div>
            </div>
            <nav className="grid grid-cols-2 gap-6 sm:has-[&gt;:last-child:nth-child(3)]:grid-cols-3 sm:has-[&gt;:nth-child(5)]:grid-cols-3 md:has-[&gt;:last-child:nth-child(4)]:grid-cols-4 lg:max-xl:has-[&gt;:last-child:nth-child(4)]:grid-cols-2">
              <div>
                <h3 className="text-md tracking-wide font-semibold">Events</h3>
                <ul role="list" className="mt-2 flex flex-col gap-2">
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Code Diversity</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Happy Hour</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md tracking-wide font-semibold">Company</h3>
                <ul role="list" className="mt-2 flex flex-col gap-2">
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">About</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Careers</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md tracking-wide font-semibold">
                  Resources
                </h3>
                <ul role="list" className="mt-2 flex flex-col gap-2">
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Become A Sponsor</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Host an Event</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="#">Press Kit</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-md tracking-wide font-semibold">Legal</h3>
                <ul role="list" className="mt-2 flex flex-col gap-2">
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="/terms-conditions">Terms of Service</Link>
                  </li>
                  <li className="dark:text-white/80 hover:underline">
                    <Link href="/code-of-conduct">Code of Conduct</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
