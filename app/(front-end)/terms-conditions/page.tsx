import { INTERNAL_LINKS } from "@/utils/constants/navigation";
import { CoC_Contents } from "@/utils/constants/CoC_Constants";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function TermsConditionsPage() {
  return (
  <main
        className={twMerge(
    "max-w-[760px] w-[92%] mx-auto",
    Styles.policyText,
    "pb-12"
  )}
      >
      <h2 className="text-center text-5xl p-3 m-3 uppercase font-light">Terms & Conditions</h2>
      
      <div className="my-6">
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
      </div>

    <div className="my-6">
      <h4 className="text-3xl uppercase font-light pb-2">Media Waiver</h4>
      <ol className="my-2 ml-10 list-decimal space-y-3">
        <li>
          By participating with TechTank and/or attending TechTank’s events the
          participant or attendee hereby grants TechTank and its representatives
          the right to take photographs, videos, and other media of them. The
          participant or attendee authorizes TechTank to use and publish the
          same in print and/or electronically. The participant or attendee
          agrees that TechTank may use such media of them for any lawful
          purpose, including but not limited to publicity, illustration,
          advertising, social media and web content.
        </li>
        <li>
          The participant or attendee releases TechTank, its volunteers, and all
          persons acting under its permission or authority, from any liability
          related to the use of such media. The participant or attendee
          acknowledge that they will not receive any compensation for the use of
          such media, and waive any right to inspect or approve the finished
          product wherein their likeness appears.
        </li>
      </ol>
    </div>

    <div className="my-6">
      <h4 className="text-3xl uppercase font-light pb-2">General</h4>
      <ol className="my-2 ml-10 list-decimal space-y-3">
        <li>
          All community members, participants, guests or attendees agree to be
          bound by the TechTank code of conduct located on this page.
        </li>
        <li>
          TechTank, at its discretion, reserves the right to ban any community
          members, participants, guests or attendees from interacting within the
          TechTank community or attending future events. In such cases, TechTank
          does not have a responsibility to disclose the reason for the ban.
        </li>
      </ol>
    </div> 

    <div className="my-6">
      <h4 className="text-3xl uppercase font-light pb-2">Donations</h4>

      <p className="mb-4"> Donations help TechTank cover general operating costs and costs
          related to hosting and running events. All donations made toward
          TechTank will hereby be bound by the following terms and conditions.</p>
        
      <ol className="my-2 ml-10 list-decimal space-y-3">
        <li>
          All donations made towards TechTank will be used at the discretion of
          the administrators of TechTank within stated objectives.
        </li>
        <li>
          All donors understand and agree that donations do not entail a
          transactional exchange with TechTank. Donors cannot expect a service
          from TechTank in return for a donation and any such stipulation is
          hereby invalid.
        </li>
        <li>
          Donors do not receive special privileges or services and are also
          bound by the TechTank code of conduct located at
          <Link href={INTERNAL_LINKS.CODE_OF_CONDUCT} target="_blank">
            www.techtankto.com/code-of-conduct
          </Link>
          . All enforcement of the code of conduct such as but not limited to
          temporary bans, permanent bans or other enforcement actions are still
          applicable and not grounds for a refund of a donation in any instance.
        </li>
        <li>
          Donations made to TechTank are <strong>non-refundable.</strong> Please contact the
          administrators at{" "}
          <Link href="mailto:techtankto@gmail.com">techtankto@gmail.com</Link>{" "}
          if you have additional questions or concerns.
        </li>
        <li>
          Official donation methods are using one of the methods listed.
          Donations made through means not listed are not endorsed or supported
          by TechTank:
          <p><strong>Interac E-transfer:</strong> Using the email techtankto@gmail.com</p>
          <p>
            <strong>Stripe:</strong> Using the link{" "}
            <Link href={INTERNAL_LINKS.DONATE} target="_blank">
              www.techtankto.com/donate
            </Link>
          </p>
        </li>
        <li>
          Personally identifiable information may be collected for donations for
          the purposes of accounting and identifying transactions:
          <p>
            <strong>Interac E-transfer:</strong> Information collected via the Interac E-transfer
            payment method is securely stored within the financial institutions
            sending and receiving the donation. No information is stored
            externally by TechTank.
          </p>
          <p>
            <strong>Stripe:</strong> Information collected via the Stripe payment method is
            securely stored within Stripe. No information is stored externally
            by TechTank.
          </p>
        </li>
        <li>
          TechTank reserves the right to amend the Donation Terms & Conditions
          at any time.
        </li>
      </ol>

    <div className="my-6">
      <p>
        All terms and conditions are governed by the laws of Ontario, Canada and
        are subject to the exclusive jurisdiction of courts within Toronto,
        Ontario, Canada.
      </p>
    </div>
    </div>
  </main>
  );
}

const Styles = {
  policyText: "[&_p]:text-sm [&_li]:text-sm [&_h2]:text-4xl [&_h4]:text-2xl",
};