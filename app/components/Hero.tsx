"use client";

import Image from "next/image";
import { SharedStyles } from "../styles/shared-styles";
import { scrollToElement } from "@/utils/scroll-to-element";

export const Hero = () => {
  const onJoinUsClick = () => {
    const element = document.getElementById("join-us");
    if (element) {
      scrollToElement(element, { topOffset: 150 });
    }
  };

  const onContactUsClick = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      scrollToElement(element);
    }
  };

  return (
    <section className="min-h-[90dvh] flex flex-nowrap items-center justify-center gap-24">
      <div>
        {/* H1 is visually hidden but still accessible to screen
          readers. */}
        <h1 className="absolute w-1 h-1 overflow-hidden clip [group-hover:clip-auto] m-[-0.25rem] p-0 border-0 whitespace-nowrap">
          TechTank
        </h1>
        <Image
          src="/full_logo.svg"
          width={150}
          height={150}
          alt="tech tech fish logo"
          className="w-auto h-auto min-w-[150px] min-h-[150px] sm:px-4"
          priority
        />
        <div className="flex gap-4 mt-10 justify-center">
          <button onClick={onJoinUsClick} className={SharedStyles.button}>
            Join Us
          </button>
          <button className={SharedStyles.button} onClick={onContactUsClick}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

