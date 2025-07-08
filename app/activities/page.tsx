import { EXTERNAL_LINKS, INTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";

export default function ActivitiesPage() {
  return (
    <main>
      <section>
        <h1>Virtual Panel Discussion Series</h1>
        <p>
          TechTank's Virtual Panel Discussion Series (aka "Guppy Talks") aims to
          support early-career devs and tech-enthusiasts in gaining more
          confidence as a dev, and providing job-search or networking
          tactics/suggestions for people to get into or flourish within the tech
          industry.
        </p>
        <p>Chris Kim</p>
        <Link href={EXTERNAL_LINKS.MEETUP}>Upcoming Events</Link>
      </section>
      <section>
        <h1>Study Tank</h1>
        <p>
          Study Tank is a virtual initiative that aims to foster an environment
          where tech enthusiasts can gather and discuss topics related to
          software development. This includes, but is not limited to data
          structure & algorithm problems, web fundamentals and any other
          software-related topics. It also provides a space for you to seek
          assistance and share any challenges with code, study materials, or
          projects.
        </p>
        <p>Nonso Otoh</p>
        <Link href={EXTERNAL_LINKS.STUDY_TANK_SLACK}>Upcoming Sessions</Link>
      </section>
      <section>
        <h1>Mentorship</h1>
        <p>
          The Tech Tank Mentorship Program connects aspiring tech enthusiasts
          with industry experts. It offers valuable insights, skill development,
          and networking, empowering mentees to excel in the tech world.
        </p>
        <p>Sammy Lam</p>
        <ul>
          <li>
            <Link href={EXTERNAL_LINKS.BE_A_MENTOR}>Be a Mentor</Link>
          </li>
          <li>
            <Link href={EXTERNAL_LINKS.BE_A_MENTEE}>Be a Mentee</Link>
          </li>
        </ul>
      </section>
      <section>
        <h1>Job Search Buddy</h1>
        <p>
          Navigating the job search can be daunting, but the TechTank Job Search
          Buddy Program offers a supportive partnership. Rant, celebrate, and
          learn together with a like-minded companion. Participants meet 1-2
          times a week, fostering success stories and a well-established buddy
          system. Connect with a compatible partner to navigate this journey
          together and keep yourself accountable.
        </p>
        <p>Neal Panamdanam</p>
        <p>Chris Kim</p>
        <p>Niya Panamdanam</p>
        <Link href={EXTERNAL_LINKS.JOB_SEARCH_BUDDY_SIGN_UP}>Sign Up</Link>
      </section>
      <section>
        <h1>Tech Tank Socials</h1>
        <p>
          Tech Tank Socials are a vibrant community where developers come
          together for non-coding activities. From networking events to
          team-building outings, these gatherings foster connections,
          relaxation, and a well-rounded tech community experience.
        </p>
        <p>Sammy Lam</p>
        <p>Chris Kim</p>
        <p>Riaz Virani</p>
        <p>Neal Panamdanam</p>
        <p>Niya Panamdanam</p>
        <p>Nonso Otoh</p>
        <Link href={EXTERNAL_LINKS.SOCIAL_SLACK}>Sign Up</Link>
      </section>
      <section>
        <h1>Women & Non Binary Coffee Meets</h1>
        <p>
          Women & Non-Binary Coffee Meets in tech provide inclusive and
          supportive spaces for women and non-binary individuals within the tech
          industry to connect, share experiences, and foster professional
          growth. These gatherings offer opportunities for networking,
          mentorship, and discussions on pertinent industry topics.
        </p>
        <p>Niya Panamdanam</p>
        <Link href={EXTERNAL_LINKS.DIVERSITY_SLACK}>Join Us</Link>
      </section>
      <section>
        <h1>Toronto Tech Events Calendar</h1>
        <p>
          Toronto Tech Events Calendar is a convenient resource for all tech
          events in Toronto, streamlining event discovery and scheduling. It's
          designed to enhance networking opportunities, providing a one-stop
          solution for staying informed and engaged in the Toronto Tech
          community.
        </p>
        <p>Neal Panamdanam</p>
        <Link href={EXTERNAL_LINKS.EVENTS_CALENDAR_SLACK}>Join Us</Link>
      </section>
    </main>
  );
}
