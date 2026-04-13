import { twMerge } from "tailwind-merge";
import { SharedStyles as Styles } from "../styles/shared-styles";

export default function CalendarPage() {
  return (
    <main>
      <section className={twMerge(Styles.section, "flex gap-16 flex-col")}>
        <div>
          <h1 className={Styles.sectionHeader}>Our Upcoming Events</h1>
          <h2 className={Styles.subHeader}>
            Stay up to date with everything happening at TechTank
          </h2>
          <p className={Styles.paragraph}>
            Don&apos;t miss our next event. Browse and register directly through
            our Luma calendar below.
          </p>
        </div>
      </section>
      <section className="px-0 py-12 md:py-20 flex flex-col lg:flex-row lg:gap-8 bg-[#f7f8f9]">
        <div className="flex justify-center w-full">
          <iframe
            src="https://lu.ma/embed/calendar/cal-ZopuHimRKxPa5U0/events?lt=light"
            className="w-full md:w-3/4 h-[1200px] sm:h-[1000px] md:h-[900px]"
            style={{
              display: "block",
              overflow: "hidden",
            }}
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
          />
        </div>
      </section>
    </main>
  );
}
