import { CoC_Contents } from "@/src/constants/CoC_Constants";
import Header from "../components/Header";
import Link from "next/link";

export default function CoC() {
  return (
    <>
      <Header />
      <section className="wrapper">
        <h2 className="text-center text-5xl p-3 m-3 uppercase font-light">
          Code of Conduct
        </h2>
        {/* SCOPE */}
        <div className="my-6">
          <h4 className="text-3xl uppercase font-light pb-2">Scope</h4>
          <p>{CoC_Contents.SCOPE_TEXT}</p>
        </div>
        {/* ENFORCEMENT */}
        <div className="my-6">
          <h4 className="text-3xl uppercase font-light pb-2">Enforcement</h4>
          <p className="pb-2">{CoC_Contents.ENFORCEMENT_TEXT}</p>
          <ul>
            {CoC_Contents.ENFORCEMENT_LIST.map((list) => (
              <li key={list.id} className="my-2 ml-10">
                <span className="font-bold">
                  {list.id}. {list.title}:
                </span>{" "}
                {list.text}
              </li>
            ))}
          </ul>
        </div>
        {/* UNACCEPTABLE BEHAVIOR */}
        <div className="my-6">
          <h4 className="text-3xl uppercase font-light pb-2">
            Unacceptable Behavior
          </h4>
          <ul>
            {CoC_Contents.UNACCEPTABLE_BEHAVIOR.map((list) => (
              <li key={list.id} className="my-2 ml-10">
                <span className="font-bold">
                  {list.id}. {list.title}:
                </span>{" "}
                {list.text}
              </li>
            ))}
            <p className="text-xs italic ml-10">
              <Link
                href="https://torontojs.com/p/code_of_conduct"
                target="_blank"
                className="hover:underline"
              >
                *Taken from Toronto Javascript
              </Link>
            </p>
          </ul>
        </div>
        {/* TODO: make the 2 examples into a 2 column table */}
        {/* EXAMPLES OF UNACCEPTABLES */}
        <div className="my-6">
          <h4 className="text-3xl uppercase font-light pb-2">
            Examples of Unaccepted Behaviors:
          </h4>
          <ul>
            {CoC_Contents.EXAMPLES_UNACCEPTABLES.map((item) => (
              <li key={item} className="list-disc ml-10 my-1.5">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* ACCEPTABLE BEHAVIOR */}
        <div className="my-6">
          <h4 className="text-3xl uppercase font-light pb-2">
            Examples of Acceptable Behaviors
          </h4>
          <ul>
            {CoC_Contents.EXAMPLES_ACCEPTABLES.map((item) => (
              <li key={item} className="list-disc ml-10 my-1.5">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* REFERRAL POLICY */}
        <div className="my-6">
          <h4 className="text-3xl uppercase font-light pb-2">
            Referral Policy
          </h4>
          <p>{CoC_Contents.REFERRAL_POLICY_TEXT}</p>
          <ul>
            {CoC_Contents.REFERRAL_POLICIES.map((list) => (
              <li key={list.id} className="my-2 ml-10">
                <span className="font-bold">
                  {list.id}. {list.title}:
                </span>{" "}
                {list.text}
              </li>
            ))}
          </ul>
          <p>{CoC_Contents.REFERRAL_POLICY_CONCL}</p>
        </div>
      </section>
    </>
  );
}
