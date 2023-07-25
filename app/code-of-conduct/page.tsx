import { CoC_Contents } from "@/utils/constants";

export default function CoC() {
  return (
    <section>
      <h2>Code of Conduct</h2>
      {/* SCOPE */}
      <div>
        <h4>Scope</h4>
        <p>{CoC_Contents.SCOPE_TEXT}</p>
      </div>
      {/* ENFORCEMENT */}
      <div>
        <h4>Enforcement</h4>
        <p>{CoC_Contents.ENFORCEMENT_TEXT}</p>
        <ul>
          {CoC_Contents.ENFORCEMENT_LIST.map((list) => {
            return (
              <li key={list.id}>
                <span>
                  {list.id}. {list.title}:
                </span>{" "}
                {list.text}
              </li>
            );
          })}
        </ul>
      </div>
      {/* UNACCEPTABLE BEHAVIOR */}
      <div>
        <h4>Unacceptable Behavior</h4>
        <ul>
          {CoC_Contents.UNACCEPTABLE_BEHAVIOR.map((list) => {
            return (
              <li key={list.id}>
                {list.id}. {list.text}
              </li>
            );
          })}
          <p>*Taken from Toronto Javascript</p>

          <h5>Examples of Unaccepted Behaviors:</h5>
          <ul>
            {CoC_Contents.EXAMPLES_UNACCEPTABLES.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </ul>
      </div>
      {/* ACCEPTABLE BEHAVIOR */}
      <div>
        <h4>Acceptable Behaviors</h4>
        <ul>
          {CoC_Contents.EXAMPLES_ACCEPTABLES.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      {/* REFERRAL POLICY */}
      <div>
        <h4>Referral Policy</h4>
        <p>{CoC_Contents.REFERRAL_POLICY_TEXT}</p>
        <ul>
          {CoC_Contents.REFERRAL_POLICIES.map((list) => {
            return (
              <li key={list.id}>
                <span>
                  {list.id}. {list.title}:
                </span>{" "}
                {list.text}
              </li>
            );
          })}
        </ul>
        <p>{CoC_Contents.REFERRAL_POLICY_CONCL}</p>
      </div>
    </section>
  );
}
