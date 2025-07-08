import { EXTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";

export default function SpeakPage() {
  return (
    <main>
      <h1>Speak at an Event</h1>
      <h2>Our speakers are from the Toronto Tech Community</h2>
      <p>
        Every month, TechTank hosts an in-person meetup or community event
        oriented around a technical talk as well as networking/mingling before
        and after. We are a part of the Toronto tech community and so are our
        speakers!
      </p>
      <Link href={EXTERNAL_LINKS.SPEAKER_FORM} target="_blank">
        Signup to Speak
      </Link>
      <h1>Why Speak?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2>Improve Your Speaking Skills</h2>
          <p>
            Technology events in the community are the best way to practice your
            speaking skills. Whether you are a seasoned pro or just trying to
            give a talk for the first time, we’ll work with you if needed to
            prepare your talk and give you the tips needed to help you succeed.
          </p>
        </div>
        <div>
          <h2>Market Your Skills</h2>
          <p>
            You’ve spent a long time to hone your skills. Why not show it off so
            that your presence and reputation in the community grow with those
            skills. If you are in the job hunt phase, there is no better way to
            get your name in front of employers!
          </p>
        </div>
        <div>
          <h2>Karma</h2>
          <p>
            The tech community is way more interrelated than we all think. Most
            companies rely upon the community to train people in new skills and
            ideas to function. Being a supporter of communities like TechTank
            that help the Toronto tech scene is just good karma. And good karma
            leads to good karma.
          </p>
        </div>
      </div>
      <h1>Let's Talk Logistics</h1>
      <Link href="/#contact-us">Contact Us</Link>
      <div>
        <h2>Venue</h2>
        <p>
          We source the venue and location for you. You simply work with us to
          prepare your marketing and event material to make sure you are ready
          to go.
        </p>
      </div>
      <div>
        <h2>Marketing</h2>
        <p>
          We take care of all marketing for the event, including promoting your
          name via our Meetup, Slack group, and LinkedIn.
        </p>
      </div>
      <div>
        <h2>Recording</h2>
        <p>
          Our team will handle recording the presentation and posting it on
          YouTube, so you have a full copy of what you
        </p>
      </div>
      <div>
        <h2>Number of Attendees</h2>
        <p>Typically 100-120 per event</p>
      </div>
      <div>
        <h2>Talk Duration</h2>
        <p>30-45 minutes</p>
      </div>
      <div>
        <h2>Topics</h2>
        <p>Anything related to tech!</p>
      </div>
    </main>
  );
}
