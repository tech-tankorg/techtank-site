"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slack from "../../public/slack.png"
import Meetup from "../../public/Meetup_Logo.png"
import Github from "../../public/GitHub_Invertocat_Logo.svg"

const JoinUs = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  // const imageRef = React.useRef<HTMLAnchorElement>(null); // Use useRef to create the ref
  return (
    <div className="joinUs-size">
    {/* <section ref={ref}> */}
      <div className="flex flex-col justify-center p-10 w-[50%]">
        <h1 className="text-4xl">Join Us!</h1>
      </div>

      <div className="flex flex-row space-x-3">
        <div className="container">
          <div className="cardFormat"> 
            <div className="center--card">
              <Link target="_blank" href="https://join.slack.com/t/thetechtank/shared_invite/zt-1y9l2ste9-ICirf8fhVqJtW_pHfwA_yQ" className="img--joinUs">
                 <Image src={Slack} alt="slack icon" width={200} height={200} className="img--joinUs" />
               <h3 className="text-2xl">Slack</h3>
              <p className="adjust--style">
                Join us on our Slack channel where you can learn more about
                networking and social events, and learn/grow together!
              </p>
            </Link>
            </div>
          </div>

          <div className="cardFormat">
            <div className="center--card">
              <Link target="_blank" href="https://www.meetup.com" className="img--joinUs2">
                 <Image src={Meetup} alt="slack icon" width={200} height={200}/>
               <h3 className="text-2xl">Meetup</h3>
               <p className="adjust--style">
                Join us on Meetup for in-person events and networking sessions
                based in Toronto!
               </p>
             </Link>
            </div>
          </div>

          <div className="cardFormat">
            <div className="center--card">
              <Link target="_blank" href="https://github.com/tech-tankorg" className="img--joinUs">
                 <Image src={Github} alt="slack icon" width={200} height={200}/>
                <h3 className="text-2xl">Github</h3>
                <p className="adjust--style">
                Join our Github organization to contribute towards our
                open-source community and build together!
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    {/* </section> */}
    </div>
  );
});

JoinUs.displayName = "JoinUs";
export default JoinUs;