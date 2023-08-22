import Image from "next/image";
import { MouseEventHandler } from "react";

interface HeroProps {
  onJoinUsClick: MouseEventHandler<HTMLButtonElement>;
  onContactUsClick?: MouseEventHandler<HTMLButtonElement>;
}

const Hero: React.FC<HeroProps> = ({ onJoinUsClick, onContactUsClick }) => {
  return (
    <section className="flex flex-nowrap wrapper items-center justify-center gap-24 min-h-[90vh]">
      <div>
        {/* H1 is visually hidden but still accessible to screen
          readers. */}
        <h1 className="absolute w-1 h-1 overflow-hidden clip [group-hover:clip-auto] m-[-0.25rem] p-0 border-0 whitespace-nowrap">
          TechTank
        </h1>
        <Image
          src="/Group 8.svg"
          width={150}
          height={150}
          sizes="100vw"
          alt="tech tech fish logo"
          className="w-auto h-auto min-w-[150px] min-h-[150px]"
          priority
        />
        <div className="flex gap-4 mt-10 justify-center">
          <button onClick={onJoinUsClick} className="btn bg-white font-normal">
            Join Us
          </button>
          <button className="btn" onClick={onContactUsClick}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
