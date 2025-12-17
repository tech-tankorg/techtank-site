import { INTERNAL_LINKS } from "@/utils/constants/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function TermsConditionsPage() {
  return (
    <main>
      <section
        className={twMerge(Styles.wrapper, Styles.codeOfConduct, "pb-6")}>
        <h2 className="text-center text-5xl p-3 m-3 uppercase font-light">Terms & Conditions</h2>
        <p>
          TechTank, TechTank TO, or{" "}
          <Link href="https://www.techtankto.com" target="_blank">
            www.techtankto.com
          </Link>{" "}
          is a volunteer-run tech community based out of Toronto, Ontario, Canada,
          and will be referred to as TechTank below. All participants within
          TechTank and attendees at TechTank events (virtual or in-person) agree
          to the following terms and conditions.
        </p>
        <div className="my-6">
          <h3 className="text-3xl uppercase font-light pb-2">Media Waiver</h3>
          <ol>
            <li className="my-2 ml-10">
              <span>1. </span>By participating with TechTank and/or attending TechTank’s events the
              participant or attendee hereby grants TechTank and its representatives
              the right to take photographs, videos, and other media of them. The participant or attendee authorizes TechTank to use and publish the same in print and/or electronically. The participant or attendee agrees that TechTank may use such media of them for any lawful purpose, including but not limited to publicity, illustration, advertising, social media and web content.
            </li>
            <li className="my-2 ml-10">
              <span>2. </span>The participant or attendee releases TechTank, its volunteers, and all persons acting under its permission or authority, from any liability related to the use of such media. The participant or attendee acknowledge that they will not receive any compensation for the use of
              such media, and waive any right to inspect or approve the finished product wherein their likeness appears.
            </li>
          </ol>
        </div>
        <div className="my-6">
          <h3 className="text-3xl uppercase font-light pb-2">General</h3>
          <ol>
            <li className="my-2 ml-10">
              <span>1. </span>All community members, participants, guests or attendees agree to be
              bound by the TechTank code of conduct located on this page.
            </li>
            <li className="my-2 ml-10">
              <span>2. </span>TechTank, at its discretion, reserves the right to ban any community
              members, participants, guests or attendees from interacting within the
              TechTank community or attending future events. In such cases, TechTank
              does not have a responsibility to disclose the reason for the ban.
            </li>
          </ol>
        </div>
        <div className="my-6">
          <h3 className="text-3xl uppercase font-light pb-2">Donations</h3>

          <ol>
            <li className="my-2 ml-10">
              <span>1. </span>Donations help TechTank cover general operating costs and costs
              related to hosting and running events. All donations made toward
              TechTank will hereby be bound by the following terms and conditions.
            </li>
            <li className="my-2 ml-10">
              <span>2. </span>All donations made towards TechTank will be used at the discretion of
              the administrators of TechTank within stated objectives.
            </li>
            <li className="my-2 ml-10">
              <span>3. </span>All donors understand and agree that donations do not entail a
              transactional exchange with TechTank. Donors cannot expect a service
              from TechTank in return for a donation and any such stipulation is
              hereby invalid.
            </li>
            <li className="my-2 ml-10">
              <span>4. </span>Donors do not receive special privileges or services and are also
              bound by the TechTank code of conduct located at
              <Link href={INTERNAL_LINKS.CODE_OF_CONDUCT} target="_blank">
                www.techtankto.com/code-of-conduct
              </Link>
              . All enforcement of the code of conduct such as but not limited to
              temporary bans, permanent bans or other enforcement actions are still
              applicable and not grounds for a refund of a donation in any instance.
            </li>
            <li className="my-2 ml-10">
              <span>5. </span>Donations made to TechTank are non-refundable. Please contact the
              administrators at{" "}
              <Link href="mailto:techtankto@gmail.com">techtankto@gmail.com</Link>{" "}
              if you have additional questions or concerns.
            </li>
            <li className="my-2 ml-10">
              <span>6. </span>Official donation methods are using one of the methods listed.
              Donations made through means not listed are not endorsed or supported
              by TechTank:
              <p>Interac E-transfer: Using the email techtankto@gmail.com</p>
              <p>
                Stripe: Using the link{" "}
                <Link href={INTERNAL_LINKS.DONATE} target="_blank">
                  www.techtankto.com/donate
                </Link>
              </p>
            </li>
            <li className="my-2 ml-10">
              <span>7. </span>Personally identifiable information may be collected for donations for
              the purposes of accounting and identifying transactions:
              <p>
                Interac E-transfer: Information collected via the Interac E-transfer
                payment method is securely stored within the financial institutions
                sending and receiving the donation. No information is stored
                externally by TechTank.
              </p>
              <p>
                Stripe: Information collected via the Stripe payment method is
                securely stored within Stripe. No information is stored externally
                by TechTank.
              </p>
            </li>
            <li className="my-2 ml-10">
              <span>8. </span>TechTank reserves the right to amend the Donation Terms & Conditions
              at any time.
            </li>
          </ol>
        </div>
        <p>
          All terms and conditions are governed by the laws of Ontario, Canada and
          are subject to the exclusive jurisdiction of courts within Toronto,
          Ontario, Canada.
        </p>

      </section>
    </main>
  );
}

const Styles = {
  wrapper: "max-w-[1440px] w-[90%] m-auto",
  codeOfConduct: "[&_p]:text-sm [&_li]:text-sm [&_h2]:text-4xl [&_h4]:text-2xl",
};