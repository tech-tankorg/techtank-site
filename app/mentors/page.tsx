import { EXTERNAL_LINKS } from "@/utils/constants/navigation";
import { PEOPLE } from "@/utils/constants/people";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { SharedStyles } from "../styles/shared-styles";

const MENTORS = PEOPLE.filter((person) => !!person.mentorship);

export default function MentorsPage() {
  return (
    <main>
      <section
        className={twMerge(
          SharedStyles.section,
          "gap-12"
        )}
      >
      <h1 className={Styles.sectionHeader}>Meet Our Mentors</h1>
      <p className={Styles.subHeader}>
        Unlock the joy of mentoring in tech! Join us to inspire and guide
        aspiring minds in the dynamic world of technology. Make a difference,
        share your expertise, and shape the future of tech. Become a tech mentor
        today!
      </p>
      <div className="mt-10">
        <Link href={EXTERNAL_LINKS.BE_A_MENTOR} className={SharedStyles.button}>Become A Mentor</Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {MENTORS.map((mentor) => (
          <div key={mentor.name} className="bg-white/60 border-2 border-gray-200 rounded-lg py-6 px-4 flex flex-col items-center">
            <img
              src={mentor.imageUrl}
              loading="lazy"
              className="size-18 object-cover rounded-full mb-4"
            />
            <h2 className="text-md font-bold">{mentor.name}</h2>
            <p className="text-sm mb-3">{mentor.role}</p>
            <p className="text-base text-center">{mentor.mentorship.expertise.join(", ")}</p>
            <Link href={mentor.mentorship.connectUrl} target="_blank">
              <div className="mt-3 text-sm after:content-['_↗'] underline">
               Mentor Connect
              </div>
            </Link>
          </div>
        ))}
      </div>
      </section>
    </main>
  );
}

const Styles = {
  sectionHeader: "text-4xl sm:text-6xl mb-12",
  subHeader: "text-xl/loose sm:text-2xl/loose font-light",
};
