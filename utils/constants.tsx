interface Enforcement {
  id: number;
  title: string;
  text: string;
}

interface Unacceptable {
  id: string;
  title: string;
  text: string;
}

interface Referrals {
  id: number;
  title: string;
  text: string;
}

interface PageConstants {
  SCOPE_TEXT: string;
  ENFORCEMENT_TEXT: string;
  ENFORCEMENT_LIST: Enforcement[];
  UNACCEPTABLE_BEHAVIOR: Unacceptable[];
  EXAMPLES_UNACCEPTABLES: Array<string>;
  EXAMPLES_ACCEPTABLES: Array<string>;
  REFERRAL_POLICY_TEXT: string;
  REFERRAL_POLICIES: Referrals[];
  REFERRAL_POLICY_CONCL: string;
}

export const CoC_Contents: PageConstants = {
  SCOPE_TEXT:
    "We, the admin team at TechTank, are happy to have grown to such a large group in such a short amount of time. As we value the participation and enjoyment of everyone in our community, we have decided to release community guidelines/codes of conduct. Our goal and wish is that everyone has a positive experience, and these codes apply to ALL community spaces: our slack workspace, in-person and virtual social gatherings, and direct messages. Repeated unacceptable behaviour will lead to expulsion from the group as we are here to create a safe and inclusive space for everyone.",
  ENFORCEMENT_TEXT:
    "Instances of abuse, harassment or any unacceptable behavior can be reported to the workspace admins (Chris K., Sammy, Nonso, Niya, Riaz, Neal or Erik O.). We will take corrective action in response to any behavior deemed inappropriate, threatening, offensive or harmful. We have a right to protect this space and individuals within.",
  ENFORCEMENT_LIST: [
    {
      id: 1,
      title: "Notice of Correction",
      text: "You will be notified via Slack regarding your unacceptable behavior and a request to correct your behavior.",
    },
    {
      id: 2,
      title: "Temporary Ban",
      text: "A ban from the community for 2 weeks. This includes interaction in community spaces, external channels and direct messages on and off the community.",
    },
    {
      id: 3,
      title: "Permanent Ban",
      text: "Self-explanatory.",
    },
  ],
  UNACCEPTABLE_BEHAVIOR: [
    {
      id: "A",
      title: "No hate speech or discriminatory language",
      text: "Do not engage in or tolerate any form of hate speech, including but not limited to racist, sexist, homophobic, transphobic, or ableist language.",
    },
    {
      id: "B",
      title: "No discrimination",
      text: "Treat all individuals with fairness, respect, and dignity, regardless of their race, gender, sexual orientation, religion, nationality, disability, or any other characteristic.",
    },
    {
      id: "C",
      title: "No harassment",
      text: "Do not engage in any form of harassment, including verbal, written, physical, or visual harassment. This includes but is not limited to offensive jokes, derogatory comments, unwelcome advances, or persistent unwelcome communication. This includes asking for referrals from people you have not had contact with prior.",
    },
    {
      id: "D",
      title: "No bullying or intimidation",
      text: "Do not engage in any behavior intended to intimidate, belittle, or demean others within the group.",
    },
    {
      id: "E",
      title: "*No feigning surprise",
      text: "Don't act surprised or belittle others when they express not knowing something, whether it's a technical or non-technical topic.",
    },
    {
      id: "F",
      title: "*No well-actually's",
      text: "Avoid making minor corrections solely for the purpose of grandstanding, particularly if they don't significantly contribute to the conversation.",
    },
    {
      id: "G",
      title: "*No back-seat driving (in irl, face-to-face contexts)",
      text: "Refrain from intermittently offering unsolicited advice or interrupting ongoing conversations, as it can be disruptive and disrespectful. Instead, fully engage and participate when helping or joining discussions.",
    },
    {
      id: "H",
      title: "Respect other people’s boundaries",
      text: "No means no.",
    },
    {
      id: "I",
      title: "Respect other people’s time",
      text: "Many folx in the group, including the admins, have personal and professional lives outside of the group. Expect delays in responses especially on weekends and weeknights, and understand it might take time to respond to your query. (N.B.: If you have a general question that you think might benefit others in the group, always consider posting in an appropriate channel before sending a DM to an admin.)",
    },
  ],
  EXAMPLES_UNACCEPTABLES: [
    "Unsolicited sexual advances",
    "Trolling, insulting, derogatory comments",
    "Public or private harassment",
    "Leaking private information such as email address or physical address",
    "Any conduct you would not do in a professional setting",
  ],
  EXAMPLES_ACCEPTABLES: [
    "Fostering empathy and kindness. Treating others the way you would want to be treated.",
    "Respecting each other’s differing opinions, viewpoints and experiences",
    "Giving constructive feedback",
    "Focusing on what is not best for us as individuals, but for the overall community",
    "Fostering empathy and kindness. Treating others the way you would want to be treated.",
    "Most importantly, having fun and creating a safe community",
  ],
  REFERRAL_POLICY_TEXT:
    "Recognizing the importance of referrals in professional networking, our administrative team has identified the need for explicit guidelines to foster beneficial interactions and maintain the integrity of our organization.",
  REFERRAL_POLICIES: [
    {
      id: 1,
      title: "Referral Request Prudence",
      text: "Members should refrain from requesting referrals during their initial interaction with an individual. It's essential to remember that successful referrals depend on a relationship of trust and mutual understanding, which requires more than a single interaction to establish.",
    },
    {
      id: 2,
      title: "Respect for Professional Reputation",
      text: "We must acknowledge that when someone provides a referral, they are staking their professional reputation on the line. Consequently, requesting a referral should not be a casual inquiry but a mindful consideration of the potential implications for the referring party.",
    },
  ],
  REFERRAL_POLICY_CONCL:
    "By adhering to these guidelines, we can maintain a respectful, professional environment that fosters genuine networking and promotes sustainable growth for all members.",
};
