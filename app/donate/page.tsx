import { INTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";

export default function DonatePage() {
  return (
    <main>
      <h1>TechTank is a 100% volunteer-run community.</h1>
      <p>
        If you’ve gotten value from our events or community, we’d really
        appreciate your support in paying it forward to help us keep this going!{" "}
      </p>
      <p>
        Any amount you donate goes entirely to paying for event operations and
        common community infrastructure for our members.
      </p>
      <p>
        By donating to TechTank, you agree that your donation is bound by the
        <Link href={INTERNAL_LINKS.TERMS_CONDITIONS} target="_blank">
          Donation Terms & Conditions.
        </Link>
      </p>
      <div>
        <p>INTERAC e-transfer</p>
        <p>techtankto@gmail.com</p>
      </div>
    </main>
  );
}
