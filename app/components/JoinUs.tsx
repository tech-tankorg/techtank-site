import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinUs = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref}>
      <h2>Join Us!</h2>
      <h3>hey drey!</h3>
      <div>
        <ul>
          <li>
            <Link href="/">
              <Image
                src="/slack-icon.png"
                alt="slack icon"
                width={200}
                height={200}
              />
              <h3>Slack</h3>
              <p>
                Join us on our Slack channel where you can learn more about
                networking and social events, and learn/grow together!
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/meetup-icon.png"
                alt="meetup icon"
                width={200}
                height={200}
              />
              <h3>Meetup</h3>
              <p>
                Join us on Meetup for in-person events and networking sessions
                based in Toronto!
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/github-icon.png"
                alt="Github icon"
                width={200}
                height={200}
              />
              <h3>Github</h3>
              <p>
                Join our Github organization to contribute towards our
                open-source community and build together!
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
});

JoinUs.displayName = "JoinUs";
export default JoinUs;
