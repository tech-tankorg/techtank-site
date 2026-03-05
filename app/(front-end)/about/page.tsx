import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="w-11/12 mx-auto min-h-dvh mt-24">
      <section className="flex flex-col items-start gap-6">
        <h1 className="font-display text-4xl/10 text-pretty sm:text-[5rem]/20 max-w-3xl">
          Tech for Everyone. Built by Everyone!
        </h1>
        <p className="text-base/7 lg:text-xl/8 flex max-w-3xl flex-col gap-4">
          We're a community for developers, learners, and professionals at every
          stage. Whether you’re a seasoned developer, or just starting your
          journey into the digital world, TechTank offers a space to
          collaborate, and grow.
        </p>
        <div className="relative w-full aspect-[16/10]">
          <Image
            alt=""
            fill
            loading="lazy"
            src="/techtank-about-us.webp"
            className="rounded object-cover"
          />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        {/* <!-- ... Values section ... -->  */}
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="font-display text-[2rem]/10 tracking-tight text-pretty text-brand-primary-950 sm:text-5xl/14 dark:text-white">
            About Us
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex flex-col gap-6 rounded-3xl bg-brand-primary-500/10 px-6 py-8 dark:bg-brand-primary-400/10">
                <p className="text-base/7 font-medium">01</p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl/8 tracking-tight text-brand-primary-950 dark:text-white">
                    Community
                  </h3>
                  <p className="text-base text-stone-950/70 sm:text-lg dark:text-stone-200/70">
                    TechTank is built on the belief that tech is better when
                    everyone has a seat at the table. From first-time coders to
                    seasoned engineers, we are a space where different
                    backgrounds and skill levels make the community stronger.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-3xl bg-brand-primary-500/10 px-6 py-8 dark:bg-brand-primary-400/10">
                <p className="text-base/7 font-medium">02</p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl/8 tracking-tight text-brand-primary-950 dark:text-white">
                    Innovation
                  </h3>
                  <p className="text-base text-stone-950/70 sm:text-lg dark:text-stone-200/70">
                    We push each other to experiment, build, and think beyond
                    what's comfortable. Through workshops, hackathons, and open
                    discussions, TechTank creates the conditions for new ideas
                    to surface and develop.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:mt-16">
              <div className="flex flex-col gap-6 rounded-3xl bg-brand-primary-500/10 px-6 py-8 dark:bg-brand-primary-400/10">
                <p className="text-base/7 font-medium">03</p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl/8 tracking-tight text-brand-primary-950 dark:text-white">
                    Teamwork
                  </h3>
                  <p className="text-base text-stone-950/70 sm:text-lg dark:text-stone-200/70">
                    Nothing here is solo. We grow through mentorship, peer
                    learning, and collaboration across disciplines. Whether you
                    are looking for a co-founder, a mentor, or a study partner,
                    TechTank connects people who build better together.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-3xl bg-brand-primary-500/10 px-6 py-8 dark:bg-brand-primary-400/10">
                <p className="text-base/7 font-medium">04</p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl/8 tracking-tight text-brand-primary-950 dark:text-white">
                    Respect
                  </h3>
                  <p className="text-base text-stone-950/70 sm:text-lg dark:text-stone-200/70">
                    Every space TechTank occupies, Slack, in-person events,
                    virtual meetups, and direct messages, operates under one
                    standard: everyone deserves a safe and positive experience.
                    Repeated unacceptable behaviour results in removal. Read
                    our&nbsp;
                    <Link href="/about" className="underline">
                      Code of Conduct
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:col-span-2 lg:mb-3">
          <h2 className="font-display text-[2rem]/10 tracking-tight text-pretty text-brand-primary-950 sm:text-5xl/14 dark:text-white ">
            Our Community
          </h2>
        </div>
        <div className="max-w-lg text-pretty">
          <p className="text-base/7">
            <strong className="capitalize">Students & Early Career</strong>{" "}
            exploring industry opportunities, navigating first roles, and
            building the networks that textbooks don't teach
          </p>
        </div>
        <div className="max-w-lg text-pretty">
          <p className="text-base/7">
            <strong className="capitalize">Industry Professionals</strong>{" "}
            mentoring, recruiting, and collaborating with the next generation of
            builders.
          </p>
        </div>
        <div className="max-w-lg text-pretty">
          <p className="text-base/7">
            <strong className="capitalize">Tech Enthusiasts</strong> sharing
            ideas, experimenting with emerging tech, and finding collaborators.
          </p>
        </div>
        <div className="max-w-lg text-pretty">
          <p className="text-base/7">
            <strong className="capitalize">Community Members</strong> showing up
            for a tech space that's engaging, inclusive, and socially conscious.
          </p>
        </div>
      </section>
    </main>
  );
}
