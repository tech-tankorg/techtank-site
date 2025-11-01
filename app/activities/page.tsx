"use client";

import { EXTERNAL_LINKS, INTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { SharedStyles } from "../styles/shared-styles";
import TwoColumnCard from "./TwoColumnCard";
import CollapsibleSection from "./CollapsibleSection";

export default function ActivitiesPage() {

  return (
    <main>
      {/* Panel discussion card */}
      <TwoColumnCard imageSrc="/virtual-panel.webp" title="Virtual Panel Discussion Series" bgClass="bg-white">
        <CollapsibleSection title="Description">
          <p>
            TechTank's Virtual Panel Discussion Series (aka "Guppy Talks") aims to
            support early-career devs and tech-enthusiasts in gaining more
            confidence as a dev, and providing job-search or networking
            tactics/suggestions for people to get into or flourish within the tech
            industry.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Chris Kim</p>
        </CollapsibleSection>
        <div className="mt-10">
          <Link href={EXTERNAL_LINKS.MEETUP} className={SharedStyles.button}>Upcoming Events</Link>
        </div>
      </TwoColumnCard>

      {/* Study Tank card */}
      <TwoColumnCard imageSrc="/study-tank.webp" title="Study Tank" imageRight={true} bgClass="bg-[#f0effa]">
        <CollapsibleSection title="Description">
          <p>
            Study Tank is a virtual initiative that aims to foster an environment
            where tech enthusiasts can gather and discuss topics related to
            software development, data structures & algorithms, web fundamentals,
            and more.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Nonso Otoh</p>
        </CollapsibleSection>
        {/* <div>
          <Link href={EXTERNAL_LINKS.STUDY_TANK_SLACK}>Upcoming Sessions</Link>
        </div> */}
        <div className="mt-10">
          <Link href={EXTERNAL_LINKS.STUDY_TANK_SLACK} className={SharedStyles.button}>Upcoming Sessions</Link>
        </div>
      </TwoColumnCard>
      
      {/* Mentorship cards */}
      <TwoColumnCard imageSrc="/mentorship.webp" title="Mentorship" bgClass="bg-white">
        <CollapsibleSection title="Description">
          <p>
            The Tech Tank Mentorship Program connects aspiring tech enthusiasts
            with industry experts for guidance, skill development, and networking.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Sammy Lam</p>
        </CollapsibleSection>
        <div className="flex flex-row gap-4 mt-6">
            <div className={SharedStyles.button}><Link href={EXTERNAL_LINKS.BE_A_MENTOR}>Be a Mentor</Link></div>
            <div className={SharedStyles.button}><Link href={EXTERNAL_LINKS.BE_A_MENTEE}>Be a Mentee</Link></div>
        </div>
      </TwoColumnCard>

      {/* Job Search Buddy card */}
      <TwoColumnCard imageSrc="/job-search.webp" title="Job Search Buddy" bgClass="bg-[#f0effa]" imageRight={true}>
        <CollapsibleSection title="Description">
          <p>
            The Job Search Buddy Program pairs participants to support one another
            through the job search process with regular check-ins and accountability.
          </p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Neal Panamdanam</p>
          <p>Chris</p>
          <p>Niya Panamdanam</p>
        </CollapsibleSection>
        <div className="mt-10">
          <Link href={EXTERNAL_LINKS.JOB_SEARCH_BUDDY_SIGN_UP} className={SharedStyles.button}>Sign Up</Link>
        </div>

      </TwoColumnCard>

      {/* Tech tank socials cards */}
      <TwoColumnCard imageSrc="/socials.webp" title="Tech Tank Socials" bgClass="bg-white">
        <CollapsibleSection title="Description">
          <p>Community socials for relaxation, networking, and team activities.</p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Sammy Lam, Chris Kim, Riaz Virani, Neal Panamdanam, Niya Panamdanam, Nonso Otoh</p>
        </CollapsibleSection>
        <div className="mt-10">
          <Link href={EXTERNAL_LINKS.SOCIAL_SLACK} className={SharedStyles.button}>Sign Up</Link>
        </div>
      </TwoColumnCard>

      {/* Diversity & Inclusion card */}
      <TwoColumnCard imageSrc="/diversity.webp" title="Women & Non-Binary Coffee Meets" bgClass="bg-[#f0effa]" imageRight={true}>
        <CollapsibleSection title="Description">
          <p>Inclusive meetups for women & non-binary folks in tech to connect and grow.</p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Niya Panamdanam</p>
        </CollapsibleSection>
        <div className="mt-10">
          <Link href={EXTERNAL_LINKS.DIVERSITY_SLACK} className={SharedStyles.button}>Join Us</Link>
        </div>
      </TwoColumnCard>

      {/* Events Calendar card */}
      <TwoColumnCard imageSrc="/tech-events.webp" title="Toronto Tech Events Calendar" bgClass="bg-white">
        <CollapsibleSection title="Description">
          <p>A calendar of local tech events to help the community discover and attend events.</p>
        </CollapsibleSection>
        <CollapsibleSection title="Organizers">
          <p>Neal Panamdanam</p>
        </CollapsibleSection>
        <div className="mt-10">
          <Link href={EXTERNAL_LINKS.EVENTS_CALENDAR_SLACK} className={SharedStyles.button}>Join Us</Link>
        </div>
      </TwoColumnCard>
    </main>
  );
}
