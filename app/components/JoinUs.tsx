"use client";

import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, MouseEventHandler } from "react";
import Slack from "../../public/slack.png";
import Meetup from "../../public/Meetup_Logo.png";
import Github from "../../public/GitHub_Invertocat_Logo.svg";

interface JoinUsProps {
  onContactUsClick?: MouseEventHandler<HTMLButtonElement>;
}

const JoinUs = React.forwardRef<HTMLDivElement, JoinUsProps>(
  ({ onContactUsClick }, ref) => {
    return (
      <div className="min-h-[90vh] max-w-[1440px] mx-auto my-6 " ref={ref}>
        <h2 className="text-4xl text-center">Join Us!</h2>

        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-[100px] mt-10 ml-13">
            <div className="joinUsCard">
              <div className="flex justify-center align-center text-center">
                <Link
                  target="_blank"
                  href="https://join.slack.com/t/thetechtank/shared_invite/zt-1ye3x0prk-VJm0VLmdA~hmhx1vRIueiA"
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={Slack}
                    alt="slack icon"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-2xl">Slack</h3>
                  <p className="w-[80%] text-center mt-5 text-sm">
                    Join us on our Slack channel where you can learn more about
                    networking and social events, and learn/grow together!
                  </p>
                </Link>
              </div>
            </div>

            <div className="joinUsCard">
              <div className="flex justify-center align-center text-center">
                <Link
                  target="_blank"
                  // TODO: link needs to be revised
                  href="https://www.meetup.com"
                  className="flex flex-col items-center justify-center mt-[18px]"
                >
                  <Image
                    src={Meetup}
                    alt="slack icon"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-2xl">Meetup</h3>
                  <p className="w-[80%] text-center mt-6 text-sm">
                    Join us on Meetup for in-person events and networking
                    sessions based in Toronto!
                  </p>
                </Link>
              </div>
            </div>

            <div className="joinUsCard">
              <div className="flex justify-center align-center text-cente">
                <Link
                  target="_blank"
                  href="https://github.com/tech-tankorg"
                  className="flex flex-col items-center justify-center mt-[18px]"
                >
                  <Image
                    src={Github}
                    alt="slack icon"
                    width={200}
                    height={200}
                  />
                  <h3 className="text-2xl">Github</h3>
                  <p className="w-[80%] text-center mt-5 text-sm">
                    Join our Github organization to contribute towards our
                    open-source community and build together!
                  </p>
                </Link>
              </div>
            </div>

            <button className="btn" onClick={onContactUsClick}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
  }
);

JoinUs.displayName = "JoinUs";
export default JoinUs;
