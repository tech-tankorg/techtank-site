import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="w-11/12 mx-auto max-w-8xl min-h-dvh pt-24 space-y-48">
      <section className="flex flex-row-reverse lg:gap-12 items-center">
        <div className="">
          <h1 className="font-display capitalize text-[2rem]/10 text-pretty sm:text-6xl/14 ">
            Events
          </h1>
          <p className="text-lg/8 max-w-[80ch] text-balance mt-4">
            Every month, TechTank hosts an in-person meetup or community event
            oriented around a technical talk as well as networking/mingling
            before and after. We are a part of the Toronto tech community and so
            are our speakers!
          </p>
        </div>
        <div className="relative w-96 aspect-square">
          <Image
            fill
            src="/hosting-techtank.jpg"
            alt=""
            className="object-center object-cover rounded-full"
          />
        </div>
      </section>
      <section className="">
        <h2 className="capitalize text-[2rem]/10 text-pretty sm:text-4xl/14 ">
          Why Host An Event?
        </h2>
        <p className="max-w-[80ch] text-balance text-base/7 mt-2">
          If you have any positions open, there is no more effective way to
          reach a wide audience for such a low cost. Even if you don’t have a
          lot of positions open at the moment, the goodwill created in the
          community pays dividends when someone runs across your job posting in
          the future.
        </p>
      </section>
      <section className="">
        <h2 className="capitalize text-[2rem]/10 text-pretty sm:text-4xl/14 ">
          Speak at an Event
        </h2>
        <p className="max-w-[80ch] text-balance text-base/7 mt-2">
          Improve Your Speaking Skills in the community is the best way to
          practice your presenting skills. Whether you are a seasoned pro or
          just trying to give a talk for the first time, we'll work with you if
          needed to prepare your talk and give you the tips needed to help you
          succeed.
        </p>
      </section>
    </main>
  );
}
