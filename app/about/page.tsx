import { SharedStyles as Styles } from "../styles/shared-styles";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import AboutUsPhoto from "../../public/techtank-about-us.webp";

export default function AboutPage() {
  return (
    <main>
      <section
        className={twMerge(
          Styles.section,
          "flex gap-16 flex-col"
        )}
      >
        <Image
          alt="TechTank Photo Collage"
          src={AboutUsPhoto}
          className="self-center sm:size-240 size-64 object-contain"
        />
      </section>
      <section
        className={twMerge(
          Styles.section,
          "flex flex-col lg:flex-row lg:gap-8",
          "bg-light-sand"
        )}
      >
        <div className="flex-1 xl:flex-2">
          <h1 className={Styles.sectionHeader}>About Us</h1>
        </div>
        <div className="flex-2">
          <div key="About" className={Styles.logisticsItem}>
            <h4 className={Styles.itemHeader}>About</h4>
            <p className={Styles.paragraph}>
              TechTank is a lively and inclusive tech community that welcomes
              tech enthusiasts from all walks of life. Whether you’re a seasoned
              developer, or just starting your journey into the digital world,
              TechTank offers a space to learn, collaborate, and grow.
            </p>
          </div>
          <div key="Mission" className={Styles.logisticsItem}>
            <h4 className={Styles.itemHeader}>Mission</h4>
            <p className={Styles.paragraph}>
              Our mission is to foster a supportive and inclusive environment
              where individuals of all skill levels can explore, create, and
              thrive in technology. We aim to make tech accessible, engaging,
              and empowering for everyone, proving that great ideas come from
              collaboration and diversity.
            </p>
          </div>
          <div key="Activities" className={Styles.logisticsItem}>
            <h4 className={Styles.itemHeader}>Activities</h4>
            <p className={Styles.paragraph}>
              At TechTank, we aim to provide hands-on learning through tech
              workshops, discussions, and social events, build a vibrant network
              of learners and innovators, promote diversity and inclusion within
              the tech community, and create opportunities for growth through
              mentorship, and networking.
            </p>
          </div>
        </div>
      </section>
      <section className={twMerge(Styles.section)}>
        <h1 className={Styles.sectionHeader}>Our Community</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h4 className={Styles.itemHeader}>Students</h4>
            <p className={Styles.paragraph}>
              and early-career professionals exploring opportunities
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Industry Professionals </h4>
            <p className={Styles.paragraph}>
              looking to mentor, recruit, or collaborate with passionate
              learners
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Tech Enthusiasts</h4>
            <p className={Styles.paragraph}>
              and entrepreneurs sharing ideas and discovering emerging
              technologies
            </p>
          </div>
          <div>
            <h4 className={Styles.itemHeader}>Community Members</h4>
            <p className={Styles.paragraph}>
              who value engaging, and socially impactful tech spaces
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
