import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function HostPage() {
  return (
    <main>
      <section
        className={twMerge(
          Styles.section,
          "flex gap-16 flex-col lg:flex-row-reverse"
        )}
      >
        <div>
          <h1 className={Styles.sectionHeader}>Host an event</h1>
          <h2 className={Styles.subHeader}>
            TechTank is a 100% volunteer-run community.
          </h2>
          <p className={Styles.paragraph}>
            Every month, TechTank hosts an in-person meetup or community event
            oriented around a technical talk as well as networking/mingling
            before and after. We rely upon sponsorship from companies in the
            Toronto area to provide a venue and food for that event.
          </p>
          <br/>
          <p className={Styles.paragraph}>
            Interested in sponsoring a future event? Tell us about your
            company or organization and we’ll follow up with the sponsorship package and
            next steps.
          </p> 
          <Link
            href="/#contact-us"
            className={twMerge(Styles.button, "mt-12 float-end")}
          >
            Contact Us
          </Link>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/78337d59-70da-4024-ad44-fc3e0bb05d42/techtank1.jpg"
          className="flex-none self-center sm:size-120 size-64 object-cover rounded-full"
        />
      </section>
      <section className={twMerge(Styles.section, "bg-light-sand")}>
        <h1 className={Styles.sectionHeader}>Why Host?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h4 className={Styles.itemHeader}>Recruiting</h4>
            <p className={Styles.paragraph}>
              If you have any positions open, there is no more effective way to
              reach a wide audience for such a low cost. Even if you don’t have
              a lot of positions open at the moment, the goodwill created in the
              community pays dividends when someone runs across your job posting
              in the future.
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Back to the Office</h4>
            <p className={Styles.paragraph}>
              We know a lot of companies are struggling to find the right
              balance between remote and in-person work. What better way to
              encourage your people to come back to the office than hosting an
              awesome event that they themselves want to come to?
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Karma</h4>
            <p className={Styles.paragraph}>
              The tech community is way more interrelated than we all think.
              Most companies rely upon open-source projects to function. Being a
              supporter of communities like TechTank that help the Toronto tech
              scene is just good karma. And good karma leads to good karma.
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
            Contact Us
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
    header: "Speaker",
    description:
      "We can source the speaker and topic with our reach into the community; however, if you have a speaker from your company you’d like to provide, we can absolutely work with that.",
  },
  {
    header: "Marketing",
    description:
      "We take care of all the marketing, registration, and tracking. We’re happy to provide you with an attendee list afterward.",
  },
  {
    header: "AV Requirements",
    description:
      "Every event has a presentation, so we just need a projector and screen. If available, a mic would be great as well.",
  },
  {
    header: "Recording",
    description:
      "Our team will handle recording the presentation and posting it on YouTube.",
  },
];

const LogisticsExpectations = [
  {
    header: "Number of Attendees",
    description: "Typically 100-120 per event",
  },
  {
    header: "Timing",
    description: "Start at 6:00pm - 8:30pm",
  },
  {
    header: "Food and Drink",
    description: "Pizza and non-alcoholic drinks",
  },
  {
    header: "Location",
    description:
      "The venue must be reasonably accessible via TTC train or street car.",
  },
];
