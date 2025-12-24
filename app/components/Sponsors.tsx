"use client";

import Image from "next/image";
import Intuit from "../../public/intuit.svg";
import Kobo from "../../public/RakutenKobo.png";
import Microsoft from "../../public/microsoft.svg";
import Points from "../../public/points.png";
import Prema from "../../public/PremaCoffee.png";
import Vena from "../../public/Vena.svg";

export const Sponsors = () => {

  return (
    <div id="past-sponsors" className="my-6 py-24">
      <h2 className="text-4xl text-center">Our Past Sponsors</h2>
      <section>
        <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            <Image
              src={Intuit}
              alt="Intuit logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Kobo}
              alt="Kobo logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Microsoft}
              alt="Microsoft logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Points}
              alt="Points logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Prema}
              alt="Prema Coffee logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Vena}
              alt="Vena logo"
              width={175}
              height={175}
              className={Styles.img}
            />
          </div>

          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            <Image
              src={Intuit}
              alt="Intuit logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Kobo}
              alt="Kobo logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Microsoft}
              alt="Microsoft logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Points}
              alt="Points logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Prema}
              alt="Prema Coffee logo"
              width={175}
              height={175}
              className={Styles.img}
            />
            <Image
              src={Vena}
              alt="Vena logo"
              width={175}
              height={175}
              className={Styles.img}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const Styles = {
  img: "mx-8 inline",
};
