"use client";

import Image from "next/image";
import Link from "next/link";
import Slack from "../../public/slack-cropped.png";
import Meetup from "../../public/Meetup_Logo.png";
import Github from "../../public/GitHub_Invertocat_Logo.svg";
import Luma from "../../public/Luma_Logo.png";
import LinkedIn from "../../public/LinkedIn.png";
import Instagram from "../../public/Instagram.svg";
import { twMerge } from "tailwind-merge";
import { SharedStyles } from "../styles/shared-styles";
import { scrollToElement } from "@/utils/scroll-to-element";

export const JoinUs = () => {
  const onContactUsClick = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      scrollToElement(element);
    }
  };
  return (
    <div id="join-us" className="my-6">
      <h2 className="text-4xl text-center">Join Us!</h2>

      <div className="flex  flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8 mt-10 flex-col items-center lg:gap-24 md:gap-16 sm:gap-12 sm:flex-row sm:items-center">
          <div className={Styles.card}>
            <Link
              target="_blank"
              href="https://join.slack.com/t/thetechtank/shared_invite/zt-1ye3x0prk-VJm0VLmdA~hmhx1vRIueiA"
              className={Styles.link}
            >
              <Image
                src={Slack}
                alt="slack icon"
                width={175}
                height={175}
                className={Styles.img}
              />
              <h3 className={Styles.cardHeader}>Slack</h3>
              <p className={Styles.cardBody}>
                Join us on our Slack channel where you can learn more about
                networking and social events!
              </p>
            </Link>
          </div>

          <div className={Styles.card}>
            <Link
              target="_blank"
              href="https://www.meetup.com/techtank-to/"
              className={Styles.link}
            >
              <Image
                src={Meetup}
                alt="slack icon"
                width={175}
                height={175}
                className={Styles.img}
              />
              <h3 className={Styles.cardHeader}>Meetup</h3>
              <p className={Styles.cardBody}>
                Join us on Meetup for in-person events and networking sessions
                based in Toronto!
              </p>
            </Link>
          </div>

          <div className={Styles.card}>
            <Link
              target="_blank"
              href="https://luma.com/user/usr-LRrXJBjcnu8JaOF"
              className={Styles.link}
            >
              <Image
                src={Luma}
                alt="luma icon"
                width={175}
                height={175}
                className={Styles.img}
              />
              <h3 className={Styles.cardHeader}>Luma</h3>
              <p className={Styles.cardBody}>
                Join us on Luma to RSVP for in-person events and networking sessions!
              </p>
            </Link>
          </div>

          <div className={Styles.card}>
            <Link
              target="_blank"
              href="https://github.com/tech-tankorg"
              className={Styles.link}
            >
              <Image
                src={Github}
                alt="slack icon"
                width={175}
                height={175}
                className={Styles.img}
              />
              <h3 className={Styles.cardHeader}>Github</h3>
              <p className={Styles.cardBody}>
                Join our Github organization to contribute towards our
                open-source community!
              </p>
            </Link>
          </div>
          <div className={Styles.card}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/techtank-to/"
              className={Styles.link}
            >
              <Image
                src={LinkedIn}
                alt="slack icon"
                width={175}
                height={175}
                className={Styles.img}
              />
              <h3 className={Styles.cardHeader}>LinkedIn</h3>
              <p className={Styles.cardBody}>
                Stay connected with us on LinkedIn for the latest updates on networking and social events.
              </p>
            </Link>
          </div>
          <div className={Styles.card}>
            <Link
              target="_blank"
              href="https://www.instagram.com/techtankto/"
              className={Styles.link}
            >
              <Image
                src={Instagram}
                alt="slack icon"
                width={175}
                height={175}
                className={Styles.img}
              />
              <h3 className={Styles.cardHeader}>Instagram</h3>
              <p className={Styles.cardBody}>
                Follow us on Instagram to see some of  our latest social and networking events!
              </p>
            </Link>
          </div>
        </div>
        <button
          className={twMerge(SharedStyles.button, "mt-16 sm:mt-8")}
          onClick={onContactUsClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

const Styles = {
  card: twMerge(
    "flex",
    "bg-white",
    "w-[20%]",
    "rounded-custom",
    "min-w-[200px]",
    "md:min-w-[250px]",
    "h-[325px]",
    "md:h-[400px]",
    "hover:shadow-lg",
    "transition-all",
    "duration-300",
    "ease-in-out"
  ),
  cardHeader: "font-bold md:text-2xl text-xl",
  cardBody: "w-[80%] text-center md:mt-5 md:text-sm text-xs my-3",
  link: "flex flex-col items-center justify-center",
  img: "md:pb-6 w-[150px] h-auto pb-3",
};
