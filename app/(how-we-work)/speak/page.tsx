import { EXTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function SpeakPage() {
  return (
    <main>
      <section
        className={twMerge(
          Styles.section,
          "flex gap-16 flex-col lg:flex-row-reverse"
        )}
      >
        <div>
          <h1 className={Styles.sectionHeader}>Speak at an Event</h1>
          <h2 className={Styles.subHeader}>
            Our speakers are from the Toronto Tech Community
          </h2>
          <p className={Styles.paragraph}>
            Every month, TechTank hosts an in-person meetup or community event
            oriented around a technical talk as well as networking/mingling
            before and after. We are a part of the Toronto tech community and so
            are our speakers!
          </p>
          <Link
            href={EXTERNAL_LINKS.SPEAKER_FORM}
            target="_blank"
            className={twMerge(Styles.button, "mt-12")}
          >
            Signup to Speak
          </Link>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/59e1c4ea-8e83-4de9-8752-b026246bc77c/231023_TechTank_+cohere0159.jpg"
          className="flex-none self-center sm:size-120 size-64 object-cover rounded-full"
        />
      </section>
      <section className={twMerge(Styles.section, "bg-light-sand")}>
        <h1 className={Styles.sectionHeader}>Why Speak?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h4 className={Styles.itemHeader}>Improve Your Speaking Skills</h4>
            <p className={Styles.paragraph}>
              Technology events in the community are the best way to practice
              your speaking skills. Whether you are a seasoned pro or just
              trying to give a talk for the first time, we'll work with you if
              needed to prepare your talk and give you the tips needed to help
              you succeed.
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Market Your Skills</h4>
            <p className={Styles.paragraph}>
              You've spent a long time to hone your skills. Why not show it off
              so that your presence and reputation in the community grow with
              those skills. If you are in the job hunt phase, there is no better
              way to get your name in front of employers!
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Karma</h4>
            <p className={Styles.paragraph}>
              The tech community is way more interrelated than we all think.
              Most companies rely upon the community to train people in new
              skills and ideas to function. Being a supporter of communities
              like TechTank that help the Toronto tech scene is just good karma.
              And good karma leads to good karma.
            </p>
          </div>
        </div>
      </section>
      <section
        className={twMerge(
          Styles.section,
          "flex flex-col lg:flex-row lg:gap-8"
        )}
      >
        <div className="flex-1 xl:flex-2">
          <h1 className={Styles.sectionHeader}>Let's Talk Logistics</h1>
          <Link href="/#contact-us" className={twMerge(Styles.button, "mb-12")}>
            Signup to Speak
          </Link>
        </div>
        <div className="flex-2">
          {LogisticsBenefits.map((item) => (
            <div key={item.header} className={Styles.logisticsItem}>
              <h4 className={Styles.itemHeader}>{item.header}</h4>
              <p className={Styles.paragraph}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex-1">
          {LogisticsExpectations.map((item) => (
            <div key={item.header} className={Styles.logisticsItem}>
              <h4 className={Styles.itemHeader}>{item.header}</h4>
              <p className={Styles.paragraph}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const Styles = {
  section: "px-16 py-12 pb-20",
  sectionHeader: "text-6xl mb-12",
  subHeader: "text-2xl/loose",
  logisticsItem: "mb-8",
  itemHeader: "text-xl/loose font-light",
  paragraph: "text-base/loose font-light text-justify",
  button:
    "block size-max bg-black text-white px-12 py-6 rounded-full font-bold",
};

const LogisticsBenefits = [
  {
    header: "Venue",
    description:
      "We source the venue and location for you. You simply work with us to prepare your marketing and event material to make sure you are ready to go.",
  },
  {
    header: "Marketing",
    description:
      "We take care of all marketing for the event, including promoting your name via our Meetup, Slack group, and LinkedIn.",
  },
  {
    header: "Recording",
    description:
      "Our team will handle recording the presentation and posting it on YouTube, so you have a full copy of what you presented.",
  },
];

const LogisticsExpectations = [
  {
    header: "Number of Attendees",
    description: "Typically 100-120 per event",
  },
  {
    header: "Talk Duration",
    description: "30-45 minutes",
  },
  {
    header: "Topics",
    description: "Anything related to tech!",
  },
];
