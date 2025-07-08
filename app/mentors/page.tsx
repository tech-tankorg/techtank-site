import { EXTERNAL_LINKS } from "@/utils/constants/navigation";
import { PEOPLE } from "@/utils/constants/people";
import Link from "next/link";

const MENTORS = PEOPLE.filter((person) => !!person.mentorship);

export default function MentorsPage() {
  return (
    <main>
      <h1>Meet Our Mentors</h1>
      <p>
        Unlock the joy of mentoring in tech! Join us to inspire and guide
        aspiring minds in the dynamic world of technology. Make a difference,
        share your expertise, and shape the future of tech. Become a tech mentor
        today!
      </p>
      <Link href={EXTERNAL_LINKS.BE_A_MENTOR}>Become A Mentor</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MENTORS.map((mentor) => (
          <div key={mentor.name}>
            <img
              src={mentor.imageUrl}
              loading="lazy"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h2>{mentor.name}</h2>
            <p>{mentor.role}</p>
            <p>{mentor.mentorship.expertise.join(", ")}</p>
            <Link href={mentor.mentorship.connectUrl} target="_blank">
              Mentor Connect
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
