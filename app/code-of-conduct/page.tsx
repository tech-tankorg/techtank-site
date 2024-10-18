import { CoC_Contents } from "@/utils/constants/CoC_Constants";
import Header from "../components/Header";
import Link from "next/link";

export default function CoC() {
  return (
    <>
      <section className="wrapper pb-6">
        <Header />
        <div className="px-48">
          <h2 className="text-center text-5xl p-3 m-3 uppercase font-light">
            Terms & Conditions
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              TechTank, TechTank TO, or www.techtankto.com is a volunteer-run
              tech community based out of Toronto, Ontario, Canada, and will be
              referred to as TechTank below. All participants within TechTank
              and attendees at TechTank events (virtual or in-person) agree to
              the following terms and conditions.
            </p>
            {/* MEDIA WAIVER */}
            <div className="my-6">
              <h4 className="text-3xl uppercase font-light pb-2">
                Media Waiver
              </h4>
              <div className="flex flex-col gap-4">
                <p>
                  By participating with TechTank and/or attending TechTank's
                  events the participant or attendee hereby grants TechTank and
                  its representatives the right to take photographs, videos, and
                  other media of them. The participant or attendee authorizes
                  TechTank to use and publish the same in print and/or
                  electronically. The participant or attendee agrees that
                  TechTank may use such media of them for any lawful purpose,
                  including but not limited to publicity, illustration,
                  advertising, social media and web content.
                </p>
                <p>
                  The participant or attendee releases TechTank, its volunteers,
                  and all persons acting under its permission or authority, from
                  any liability related to the use of such media. The
                  participant or attendee acknowledge that they will not receive
                  any compensation for the use of such media, and waive any
                  right to inspect or approve the finished product wherein their
                  likeness appears.
                </p>
              </div>
            </div>
            {/* GENERAL */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">General</h4>
              <p>
                All community members, participants, guests or attendees agree
                to be bound by the TechTank code of conduct located on this
                page.
              </p>
              <p>
                TechTank, at its discretion, reserves the right to ban any
                community members, participants, guests or attendees from
                interacting within the TechTank community or attending future
                events. In such cases, TechTank does not have a responsibility
                to disclose the reason for the ban.
              </p>
            </div>
            {/* DONATIONS */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">Donations</h4>
              <p>
                Donations help TechTank cover general operating costs and costs
                related to hosting and running events. All donations made toward
                TechTank will hereby be bound by the following terms and
                conditions.
              </p>
              <p>
                All donations made towards TechTank will be used at the
                discretion of the administrators of TechTank within stated
                objectives.
              </p>
              <p>
                All donors understand and agree that donations do not entail a
                transactional exchange with TechTank. Donors cannot expect a
                service from TechTank in return for a donation and any such
                stipulation is hereby invalid.
              </p>
              <p>
                Donors do not receive special privileges or services and are
                also bound by the TechTank code of conduct located at
                www.techtankto.com/code-of-conduct. All enforcement of the code
                of conduct such as but not limited to temporary bans, permanent
                bans or other enforcement actions are still applicable and not
                grounds for a refund of a donation in any instance.
              </p>
              <p>
                Donations made to TechTank are non-refundable. Please contact
                the administrators at techtankto@gmail.com if you have
                additional questions or concerns.
              </p>
              <p>
                Official donation methods are using one of the methods listed.
                Donations made through means not listed are not endorsed or
                supported by TechTank:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Interac E-transfer: Using the email techtankto@gmail.com
                </li>
                <li>Stripe: Using the link www.techtankto.com/donate</li>
              </ul>
              <p>
                Personally identifiable information may be collected for
                donations for the purposes of accounting and identifying
                transactions:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Interac E-transfer: Information collected via the Interac
                  E-transfer payment method is securely stored within the
                  financial institutions sending and receiving the donation. No
                  information is stored externally by TechTank.
                </li>
                <li>
                  Stripe: Information collected via the Stripe payment method is
                  securely stored within Stripe. No information is stored
                  externally by TechTank.
                </li>
              </ul>
              <p>
                TechTank reserves the right to amend the Donation Terms &
                Conditions at any time.
              </p>
              <p>
                All terms and conditions are governed by the laws of Ontario,
                Canada and are subject to the exclusive jurisdiction of courts
                within Toronto, Ontario, Canada.
              </p>
            </div>
            {/* CODE OF CONDUCT */}
            <div className="my-6 flex flex-col gap-4">
              <h2 className="text-5xl uppercase font-light pb-2 text-center">
                Code of Conduct
              </h2>
              <p>
                We, the admin team at TechTank, are happy to have grown to such
                a large group in such a short amount of time. As we value the
                participation and enjoyment of everyone in our community, we
                have decided to release community guidelines/codes of conduct.
                Our goal and wish is that everyone has a positive experience,
                and these codes apply to ALL community spaces: our slack
                workspace, in-person and virtual social gatherings, and direct
                messages. Repeated unacceptable behaviour will lead to expulsion
                from the group as we are here to create a safe and inclusive
                space for everyone.
              </p>
            </div>
            {/* ENFORCEMENT */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">
                Enforcement
              </h4>
              <p>
                TechTank is dedicated to fostering a welcoming and inclusive
                community. To maintain this environment, we reserve the right to
                take corrective action, up to and including a permanent ban,
                against any participant or attendee who engages in abuse,
                harassment, or any other unacceptable behavior. This includes
                behaviors deemed inappropriate, threatening, offensive, or
                harmful. The determination of what constitutes unacceptable
                behavior, as well as the specific corrective action taken, is at
                the sole discretion of TechTank administrators and will not
                necessarily be disclosed.
              </p>
              <p>
                Instances of abuse, harassment or any unacceptable behavior can
                be reported to the general ops/admin team (Chris K. & Ben L.).
                Upon investigation, TechTank will take corrective action as
                deemed necessary. This could include, but is not limited to:
              </p>
              <ul>
                <li>
                  Private Communication: Contacting the individual to address
                  and correct the behavior.
                </li>
                <li>
                  Temporary Ban: Suspension from all community interactions
                  (spaces, channels, direct messages, etc.) for a designated
                  period.
                </li>
                <li>
                  Permanent Ban: Complete removal from the TechTank community
                  and a prohibition from attending future events.
                </li>
              </ul>
            </div>
            {/* UNACCEPTABLE BEHAVIOR */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">
                Unacceptable Behavior
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  No hate speech or discriminatory language: Do not engage in or
                  tolerate any form of hate speech, including but not limited to
                  racist, sexist, homophobic, transphobic, or ableist language.
                </li>
                <li>
                  No discrimination: Treat all individuals with fairness,
                  respect, and dignity, regardless of their race, gender, sexual
                  orientation, religion, nationality, disability, or any other
                  characteristic.
                </li>
                <li>
                  No harassment: Do not engage in any form of harassment,
                  including verbal, written, physical, or visual harassment.
                  This includes but is not limited to offensive jokes,
                  derogatory comments, unwelcome advances, or persistent
                  unwelcome communication. This includes asking for referrals
                  from people you have not had contact with prior.
                </li>
                <li>
                  No bullying or intimidation: Do not engage in any behaviour
                  intended to intimidate, belittle, or demean others within the
                  group.
                </li>
                <li>
                  No feigning surprise: Don't act surprised or belittle others
                  when they express not knowing something, whether it's a
                  technical or non-technical topic.
                </li>
                <li>
                  No well-actually's: Avoid making minor corrections solely for
                  the purpose of grandstanding, particularly if they don't
                  significantly contribute to the conversation.
                </li>
                <li>
                  No back-seat driving (in irl, face-to-face contexts): Refrain
                  from intermittently offering unsolicited advice or
                  interrupting ongoing conversations, as it can be disruptive
                  and disrespectful. Instead, fully engage and participate when
                  helping or joining discussions.
                </li>
                <li>Respect other people's boundaries. No means no.</li>
                <li>
                  Respect other people's time. Many folx in the group, including
                  the admins, have personal and professional lives outside of
                  the group. Expect delays in responses especially on weekends
                  and weeknights, and understand it might take time to respond
                  to your query. (N.B.: If you have a general question that you
                  think might benefit others in the group, always consider
                  posting in an appropriate channel before sending a DM to an
                  admin.)
                </li>
                <li>
                  Any other behaviour deemed inappropriate by the TechTank
                  admins.
                </li>
              </ul>
              <p className="text-xs italic ml-10">
                <Link
                  href="https://torontojs.com/p/code_of_conduct"
                  target="_blank"
                  className="hover:underline"
                >
                  *Taken from Toronto Javascript
                </Link>
              </p>
            </div>
            {/* EXAMPLES OF UNACCEPTABLES */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">
                Examples of Unaccepted Behaviors:
              </h4>
              <ul className="list-disc pl-5">
                <li>Unsolicited sexual advances</li>
                <li>Trolling, insulting, derogatory comments</li>
                <li>Public or private harassment</li>
                <li>
                  Leaking private information such as email address or physical
                  address
                </li>
                <li>Any conduct you would not do in a professional setting</li>
              </ul>
            </div>
            {/* ACCEPTABLE BEHAVIOR */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">
                Acceptable Behaviors
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  Fostering empathy and kindness. Treating others the way you
                  would want to be treated.
                </li>
                <li>
                  Respecting each other's differing opinions, viewpoints and
                  experiences
                </li>
                <li>Giving constructive feedback</li>
                <li>
                  Focusing on what is not best for us as individuals, but for
                  the overall community
                </li>
                <li>
                  Fostering empathy and kindness. Treating others the way you
                  would want to be treated.
                </li>
                <li>
                  Most importantly, having fun and creating a safe community
                </li>
              </ul>
            </div>
            {/* REFERRAL POLICY */}
            <div className="my-6 flex flex-col gap-4">
              <h4 className="text-3xl uppercase font-light pb-2">
                Referral Policy
              </h4>
              <p>
                Recognizing the importance of referrals in professional
                networking, our administrative team has identified the need for
                explicit guidelines to foster beneficial interactions and
                maintain the integrity of our organization.
              </p>
              <p>
                Referral Request Prudence: Members should refrain from
                requesting referrals during their initial interaction with an
                individual. It's essential to remember that successful referrals
                depend on a relationship of trust and mutual understanding,
                which requires more than a single interaction to establish.
              </p>
              <p>
                Respect for Professional Reputation: We must acknowledge that
                when someone provides a referral, they are staking their
                professional reputation on the line. Consequently, requesting a
                referral should not be a casual inquiry but a mindful
                consideration of the potential implications for the referring
                party.
              </p>
              <p>
                By adhering to these guidelines, we can maintain a respectful,
                professional environment that fosters genuine networking and
                promotes sustainable growth for all members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
