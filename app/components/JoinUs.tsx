"use client";

import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, MouseEventHandler } from "react";
import Slack from "../../public/slack-cropped.png";
import Meetup from "../../public/Meetup_Logo.png";
import Github from "../../public/GitHub_Invertocat_Logo.svg";

interface JoinUsProps {
  onContactUsClick?: MouseEventHandler<HTMLButtonElement>;
}

const JoinUs = React.forwardRef<HTMLDivElement, JoinUsProps>(
  ({ onContactUsClick }, ref) => {
    return (
      <div className="min-h-[90vh] max-w-[1440px] mx-auto my-6" ref={ref}>
        <h2 className="text-4xl text-center">Join Us!</h2>

        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-24 mt-10 lg:gap-16">
            <div className="joinUsCard">
              <Link
                target="_blank"
                href="https://join.slack.com/t/thetechtank/shared_invite/zt-1ye3x0prk-VJm0VLmdA~hmhx1vRIueiA"
                className="joinUsLink"
              >
                <Image
                  src={Slack}
                  alt="slack icon"
                  width={175}
                  height={175}
                  className="joinUsImg"
                />
                <h3>Slack</h3>
                <p>
                  Join us on our Slack channel where you can learn more about
                  networking and social events!
                </p>
              </Link>
            </div>

            <div className="joinUsCard">
              <Link
                target="_blank"
                // TODO: link needs to be revised
                href="https://www.meetup.com"
                className="joinUsLink"
              >
                <Image
                  src={Meetup}
                  alt="slack icon"
                  width={175}
                  height={175}
                  className="joinUsImg"
                />
                <h3>Meetup</h3>
                <p>
                  Join us on Meetup for in-person events and networking sessions
                  based in Toronto!
                </p>
              </Link>
            </div>

            <div className="joinUsCard">
              <Link
                target="_blank"
                href="https://github.com/tech-tankorg"
                className="joinUsLink"
              >
                <Image
                  src={Github}
                  alt="slack icon"
                  width={175}
                  height={175}
                  className="joinUsImg"
                />
                <h3>Github</h3>
                <p>
                  Join our Github organization to contribute towards our
                  open-source community!
                </p>
              </Link>
            </div>
          </div>
          <button className="btn mt-16" onClick={onContactUsClick}>
            Contact Us
          </button>
        </div>
      </div>
    );
  }
);

JoinUs.displayName = "JoinUs";
export default JoinUs;
