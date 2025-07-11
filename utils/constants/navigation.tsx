export const INTERNAL_LINKS = {
  ABOUT: "/about",
  ACTIVITIES: "/activities",
  MENTORS: "/mentors",
  HOST: "/host",
  SPEAK: "/speak",
  DONATE: "/donate",
  CODE_OF_CONDUCT: "/code-of-conduct",
  TERMS_CONDITIONS: "/terms-conditions",
} as const;

export const EXTERNAL_LINKS = {
  YOUTUBE: "https://www.youtube.com/@TechTankTo/videos",
  INSTAGRAM: "https://www.instagram.com/techtankto/",
  LINKEDIN: "https://www.linkedin.com/company/techtank-to/",
  MEETUP: "https://www.meetup.com/techtank-to/",
  GITHUB: "https://github.com/tech-tankorg",
  BE_A_MENTOR: "https://forms.gle/aF9EYkTxMgNE5uQ26",
  BE_A_MENTEE: "https://forms.gle/viaAkbZdzviXdApY8",
  SPEAKER_FORM:
    "https://docs.google.com/forms/d/e/1FAIpQLSdtei1QBJb45fF8Fw29yApWCJEiwHROrJEhPhI5X3eXcAnUjQ/viewform?usp=sf_link",
  JOB_SEARCH_BUDDY_SIGN_UP: "https://forms.gle/yaanoNgoYWsra1U18",
  STUDY_TANK_SLACK: "https://thetechtank.slack.com/archives/C04S75JBKPA",
  SOCIAL_SLACK: "https://thetechtank.slack.com/archives/C04UA2H8ARG",
  DIVERSITY_SLACK: "https://thetechtank.slack.com/archives/C063EFTU5F1",
  EVENTS_CALENDAR_SLACK:
    "https://join.slack.com/t/thetechtank/shared_invite/zt-1ye3x0prk-VJm0VLmdA~hmhx1vRIueiA",
} as const;

const navigation = {
  top: [
    { name: "About", type: "item", href: INTERNAL_LINKS.ABOUT },
    { name: "Activities", type: "item", href: INTERNAL_LINKS.ACTIVITIES },
    { name: "Mentors", type: "item", href: INTERNAL_LINKS.MENTORS },
    {
      name: "Events",
      type: "dropdown",
      items: [
        { name: "Videos", href: EXTERNAL_LINKS.YOUTUBE },
        { name: "Host Us", href: INTERNAL_LINKS.HOST },
        { name: "Be a Speaker", href: INTERNAL_LINKS.SPEAK },
      ],
    },
    { name: "Donate", type: "item", href: INTERNAL_LINKS.DONATE },
    {
      name: "Code of Conduct",
      type: "item",
      href: INTERNAL_LINKS.CODE_OF_CONDUCT,
    },
  ],
  events: [
    { name: "Videos", href: EXTERNAL_LINKS.YOUTUBE },
    { name: "Host Us", href: INTERNAL_LINKS.HOST },
    { name: "Be a Speaker", href: INTERNAL_LINKS.SPEAK },
  ],
  initiatives: [{ name: "Mentorship", href: INTERNAL_LINKS.MENTORS }],
  legal: [
    { name: "Terms & Conditions", href: INTERNAL_LINKS.TERMS_CONDITIONS },
    { name: "Code of Conduct", href: INTERNAL_LINKS.CODE_OF_CONDUCT },
  ],
  social: [
    {
      name: "LinkedIn",
      href: EXTERNAL_LINKS.LINKEDIN,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fill="currentColor"
            d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Meetup",
      href: "https://www.meetup.com/techtank-to/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fill="currentColor"
            d="M6.98.555a.5.5 0 0 0-.105.011a.53.53 0 1 0 .222 1.04a.533.533 0 0 0 .409-.633a.53.53 0 0 0-.526-.418m6.455.638a1 1 0 0 0-.514.143a.99.99 0 1 0 1.02 1.699a.99.99 0 0 0 .34-1.36a.99.99 0 0 0-.846-.482m-3.03 2.236a5.03 5.03 0 0 0-4.668 3.248a3.3 3.3 0 0 0-1.46.551a3.374 3.374 0 0 0-.94 4.562a3.634 3.634 0 0 0-.605 4.649a3.6 3.6 0 0 0 2.465 1.597c.018.732.238 1.466.686 2.114a3.9 3.9 0 0 0 5.423.992c.068-.047.12-.106.184-.157c.987.881 2.47 1.026 3.607.24a2.9 2.9 0 0 0 1.162-1.69a4.24 4.24 0 0 0 2.584-.739a4.274 4.274 0 0 0 1.19-5.789a2.466 2.466 0 0 0 .433-3.308a2.45 2.45 0 0 0-1.316-.934a4.44 4.44 0 0 0-.776-2.873a4.47 4.47 0 0 0-5.195-1.656a5.1 5.1 0 0 0-2.773-.807zm-5.603.817a.76.76 0 0 0-.423.135a.758.758 0 1 0 .863 1.248a.757.757 0 0 0 .193-1.055a.76.76 0 0 0-.633-.328m15.994 2.37a.84.84 0 0 0-.47.151a.845.845 0 1 0 1.175.215a.85.85 0 0 0-.705-.365zm-8.15 1.028q.095 0 .182.014a.9.9 0 0 1 .45.187c.169.134.273.241.432.393c.24.227.414.089.534.02c.208-.122.369-.219.984-.208c.633.011 1.363.237 1.514 1.317c.168 1.199-1.966 4.289-1.817 5.722c.106 1.01 1.815.299 1.96 1.22c.186 1.198-2.136.753-2.667.493c-.832-.408-1.337-1.34-1.12-2.26c.16-.688 1.7-3.498 1.757-3.93c.059-.44-.177-.476-.324-.484c-.19-.01-.34.081-.526.362c-.169.255-2.082 4.085-2.248 4.398c-.296.56-.67.694-1.044.674c-.548-.029-.798-.32-.72-.848c.047-.31 1.26-3.049 1.323-3.476c.039-.265-.013-.546-.275-.68c-.263-.135-.572.07-.664.227c-.128.215-1.848 4.706-2.032 5.038c-.316.576-.65.76-1.152.784c-1.186.056-2.065-.92-1.678-2.116c.173-.532 1.316-4.571 1.895-5.599c.389-.69 1.468-1.216 2.217-.892c.387.167.925.437 1.084.507c.366.163.759-.277.913-.412s.302-.276.49-.357c.142-.06.343-.095.532-.094m10.88 2.057a.5.5 0 0 0-.093.011a.467.467 0 0 0-.36.555a.47.47 0 0 0 .557.36a.47.47 0 0 0 .36-.557a.47.47 0 0 0-.464-.37zm-22.518.81a1 1 0 0 0-.832.434a1 1 0 1 0 1.39-.258a1 1 0 0 0-.558-.176m21.294 2.094a.6.6 0 0 0-.127.013a.627.627 0 0 0-.48.746a.63.63 0 0 0 .746.483a.63.63 0 0 0 .482-.746a.63.63 0 0 0-.621-.496m-18.24 6.097a.5.5 0 0 0-.092.012a.464.464 0 1 0 .195.908a.464.464 0 0 0 .356-.553a.465.465 0 0 0-.459-.367m13.675 1.55a1.04 1.04 0 0 0-.583.187a1.047 1.047 0 1 0 1.456.265a1.04 1.04 0 0 0-.873-.451zM11.4 22.154a.64.64 0 0 0-.36.115a.646.646 0 0 0-.164.899a.646.646 0 0 0 .899.164a.646.646 0 0 0 .164-.898a.65.65 0 0 0-.54-.28z"
          ></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: EXTERNAL_LINKS.GITHUB,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: EXTERNAL_LINKS.INSTAGRAM,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
} as const;

export default navigation;
