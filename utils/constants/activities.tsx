export const ORGANIZERS: Record<
  string,
  { avatarUrl: string; linkedinUrl: string }
> = {
  "Chris Kim": {
    avatarUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/897396e6-e668-4f96-ade0-5547910ca4a8/IMG_1280.JPG",
    linkedinUrl: "https://www.linkedin.com/in/chris-ty-kim/",
  },
  "George (Nonso) Otoh": {
    avatarUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/d0e5968b-143d-4893-8183-f2b3e8b99535/220402_Nonso_0124.jpg",
    linkedinUrl: "https://www.linkedin.com/in/george-ac-otoh/",
  },
  "Sammy Lam": {
    avatarUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/93f69fa2-bb1e-4f78-9c19-f36d564e5c41/profile-image+3.jpg?format=2500w",
    linkedinUrl:
      "https://www.linkedin.com/in/sammy-lam-full-stack-dev-electrician-car-wrapper-it/",
  },
  "Niya Panamdanam": {
    avatarUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/f13a154a-4fc5-426a-b874-100f02d4fb93/IMG_20200224_185409.jpg",
    linkedinUrl: "https://www.linkedin.com/in/niya-panamdanam-93402343/",
  },
  "Neal Panamdanam": {
    avatarUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/69a15fd4-de3b-40ba-97ab-f1a414760408/230928_TechTank_Neal0001.jpg?format=750w",
    linkedinUrl: "https://www.linkedin.com/in/neal-panamdanam/",
  },
  "Riaz Virani": {
    avatarUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/9f2ca10d-ee72-46fa-96b5-f869fc22cb6b/1657202713500.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/riaz-v-72538a7/",
  },
} as const;

export const ACTITIVIES: {
  title: string;
  imageUrl: string;
  description: string;
  organizers: string[];
}[] = [
  {
    title: "Virtual Panel Discussion Series",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/1700944649894-W0SIYY83I0OBJCMELPUO/image-asset.jpeg?format=2500w",
    description:
      'TechTank\'s Virtual Panel Discussion Series (aka "Guppy Talks") aims to support early-career devs and tech-enthusiasts in gaining more confidence as a dev, and providing job-search or networking tactics/suggestions for people to get into or flourish within the tech industry.',
    organizers: ["Chris Kim"],
  },
  {
    title: "Study Tank",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/1700944610634-XTM8NKQ5T8CLFJMX5POF/image-asset.jpeg?format=2500w",
    description:
      "Study Tank is a virtual initiative that aims to foster an environment where tech enthusiasts can gather and discuss topics related to software development. This includes, but is not limited to data structure & algorithm problems, web fundamentals and any other software-related topics. It also provides a space for you to seek assistance and share any challenges with code, study materials, or projects.",
    organizers: ["George (Nonso) Otoh"],
  },
  {
    title: "Mentorship",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/1700944744618-Y7203357R0QVZ1MX70GJ/image-asset.jpeg?format=2500w",
    description:
      "The Tech Tank Mentorship Program connects aspiring tech enthusiasts with industry experts. It offers valuable insights, skill development, and networking, empowering mentees to excel in the tech world.",
    organizers: ["Sammy Lam"],
  },
  {
    title: "Job Search Buddy",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/62172f88-366f-4ef6-8c0d-e22c38dac11a/pexels-cottonbro-studio-3205574.jpg?format=2500w",
    description:
      "Navigating the job search can be daunting, but the TechTank Job Search Buddy Program offers a supportive partnership. Rant, celebrate, and learn together with a like-minded companion. Participants meet 1-2 times a week, fostering success stories and a well-established buddy system. Connect with a compatible partner to navigate this journey together and keep yourself accountable.",
    organizers: ["Neal Panamdanam", "Chris Kim", "Niya Panamdanam"],
  },
  {
    title: "Tech Tank Socials",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/a9af30f3-a018-438c-8c6c-d9825e06e7eb/IMG_2045.JPG?format=2500w",
    description:
      "Tech Tank Socials are a vibrant community where developers come together for non-coding activities. From networking events to team-building outings, these gatherings foster connections, relaxation, and a well-rounded tech community experience.",
    organizers: [
      "Sammy Lam",
      "Chris Kim",
      "Riaz Virani",
      "Neal Panamdanam",
      "Niya Panamdanam",
      "George (Nonso) Otoh",
    ],
  },
  {
    title: "Women & Non Binary Coffee Meets",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/9482a9c0-a406-4af0-af79-0f9dc3720c54/IMG_3618.jpg?format=2500w",
    description:
      "Women & Non-Binary Coffee Meets in tech provide inclusive and supportive spaces for women and non-binary individuals within the tech industry to connect, share experiences, and foster professional growth. These gatherings offer opportunities for networking, mentorship, and discussions on pertinent industry topics.",
    organizers: ["Niya Panamdanam"],
  },
  {
    title: "Toronto Tech Events Calendar",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/652d226518bed85c2d800518/1707956999693-JVQCCLXPGVLQZ9BNOL7E/image-asset.jpeg?format=2500w",
    description:
      "Toronto Tech Events Calendar is a convenient resource for all tech events in Toronto, streamlining event discovery and scheduling. It's designed to enhance networking opportunities, providing a one-stop solution for staying informed and engaged in the Toronto Tech community.",
    organizers: ["Neal Panamdanam"],
  },
] as const;
