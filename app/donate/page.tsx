import { INTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function DonatePage() {
  return (
    <main>
      <section
        className={twMerge(
          Styles.section,
          "flex flex-col gap-12 lg:flex-row-reverse"
        )}
      >
        <div>
          <h1 className={Styles.sectionHeader}>
            TechTank is a 100% volunteer-run community.
          </h1>
          <p className={Styles.subHeader}>
            If you’ve gotten value from our events or community, we’d really
            appreciate your support in paying it forward to help us keep this
            going!
          </p>
          <p className={Styles.subHeader}>
            Any amount you donate goes entirely to paying for event operations
            and common community infrastructure for our members.
          </p>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/1697678889303-6RU68FOVIKUJQRAAHQY9/20230812_204737.jpg"
          className="flex-none self-center sm:size-120 size-64 object-cover"
        />
      </section>
      <section className={twMerge(Styles.section, "flex flex-col gap-4")}>
        <div className="self-center flex flex-col sm:flex-row items-center gap-4 mb-24">
          <img
            src="/interact_logo.svg"
            alt="Interac e-transfer"
            className="size-16 sm:size-24"
          />
          <Link
            href="mailto:techtankto@gmail.com"
            className="text-xl sm:text-4xl"
          >
            techtankto@gmail.com
          </Link>
        </div>
        <p className="italic font-light text-xl text-right">
          By donating to TechTank, you agree that your donation is bound by the{" "}
          <Link
            href={INTERNAL_LINKS.TERMS_CONDITIONS}
            target="_blank"
            className="underline"
          >
            Donation Terms & Conditions.
          </Link>
        </p>
      </section>
    </main>
  );
}

const Styles = {
  section: "px-16 py-12 pb-20",
  sectionHeader: "text-4xl sm:text-6xl mb-12",
  subHeader: "text-xl/loose sm:text-2xl/loose font-light",
};
