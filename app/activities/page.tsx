import Link from "next/link";
import React from "react";
import { ACTITIVIES, ORGANIZERS } from "@/utils/constants/activities";

export default function page() {
  return (
    <div className="[&>section:last-child]:pb-[128px] [&>section:nth-child(even)_.aspect-video]:md:order-last">
      {ACTITIVIES.map((activity, index) => (
        <section key={index} className="pt-[128px]">
          <EventCard
            Title={activity.title}
            Description={activity.description}
            EventImage={activity.imageUrl}
            Organizers={activity.organizers}
          />
        </section>
      ))}
    </div>
  );
}

function EventCard({ Title, Description, EventImage, Organizers }: any) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[80px] pl-[128px] pr-[128px]">
      <div className="aspect-video max-w-[750px] rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
        <img src={EventImage} alt="" />
      </div>

      <div className="space-y-10 font-inter text-base">
        <h2 className="text-4xl">
          {Title || "Virtual Panel Discussion Series"}
        </h2>
        <p className="text-xl">{Description || " "}</p>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {Organizers.map((name: any, index: number) => (
            <div key={index} className="flex items-center gap-4">
              <div className="relative size-10 rounded-full bg-gray-900 overflow-hidden -z-1">
                <img src={ORGANIZERS[name].avatarUrl} alt="" />
              </div>
              <span className="text-base">
                {name}{" "}
                <Link href={ORGANIZERS[name].linkedinUrl} className="underline">
                  (Linkedin)
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
