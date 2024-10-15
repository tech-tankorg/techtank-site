"use client";

import Header from "./components/Header";
import Image from "next/image";

const sponsorSrcs = [
  "/brainstation.png",
  "/cohere.png",
  "/microsoft.svg",
  "/intuit.svg",
  "/points.png",
  "/rakuten-kobo.svg",
  "/7shifts.png",
];

const Home = () => {
  let shuffledSponsorSrcs = shuffleArray(sponsorSrcs);
  const loopedSponsorSrcs = [
    ...shuffledSponsorSrcs,
    ...shuffledSponsorSrcs,
    ...shuffledSponsorSrcs,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-100 to-white">
      <main className="wrapper">
        <Header />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-row md:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h1 className="text-5xl font-bold">Welcome to the Tank!</h1>
                <p className="text-3xl">Hope you have a good swim.</p>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA"
              >
                <div className="btn">Join us →</div>
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/full_logo_big.png"
                alt="Tank image"
                width={541}
                height={230}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="bg-white">
        <div className="wrapper container mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-1 grid-cols-4 gap-12">
            <SocialMediaColumn
              imageSrc="/slack-cropped.png"
              altText="Slack logo"
              title="Slack"
              description="Join us on our Slack channel where you can learn more about networking and social events!"
              buttonText="Join Slack"
              buttonLink="https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA"
            />
            <SocialMediaColumn
              imageSrc="/Meetup_Logo.png"
              altText="Meetup logo"
              title="Meetup"
              description="Join us on Meetup for in-person events and networking sessions based in Toronto!"
              buttonText="Join Meetup"
              buttonLink="https://www.meetup.com/techtank-to/"
            />
            <SocialMediaColumn
              imageSrc="/linkedin.jpg"
              altText="LinkedIn logo"
              title="LinkedIn"
              description="Stay connected with us on LinkedIn for the latest updates on networking and social events."
              buttonText="Join LinkedIn"
              buttonLink="https://www.linkedin.com/company/techtank-to/"
            />
            <SocialMediaColumn
              imageSrc="/ig.png"
              altText="Instagram logo"
              title="Instagram"
              description="Follow us on Instagram to see some of our latest social and networking events!"
              buttonText="Join Instagram"
              buttonLink="https://www.instagram.com/techtankto/"
            />
          </div>
        </div>
      </section>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,0L1440,0L1440,0L0,0Z M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,192C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <section className="py-24">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Past Sponsors
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex items-center animate-scroll">
              {loopedSponsorSrcs.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 px-4">
                  <Image
                    src={src}
                    alt={src}
                    width={200}
                    height={150}
                    className="mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

interface SocialMediaColumnProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const SocialMediaColumn: React.FC<SocialMediaColumnProps> = ({
  imageSrc,
  altText,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={altText}
        width={100}
        height={100}
        className="mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4 flex-grow">{description}</p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={buttonLink}
        className="btn mt-auto"
      >
        {buttonText}
      </a>
    </div>
  );
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
