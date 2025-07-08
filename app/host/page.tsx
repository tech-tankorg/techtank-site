import Link from "next/link";

export default function HostPage() {
  return (
    <main>
      <section>
        <h1>Host an event.</h1>
        <h2>TechTank is a 100% volunteer-run community.</h2>
        <p>
          Every month, TechTank hosts an in-person meetup or community event
          oriented around a technical talk as well as networking/mingling before
          and after. We rely upon sponsorship from companies in the Toronto area
          to provide a venue and food for that event.
        </p>
        <Link href="/#contact-us">Contact Us</Link>
      </section>
      <section>
        <h1>Why Host?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2>Recruiting</h2>
            <p>
              If you have any positions open, there is no more effective way to
              reach a wide audience for such a low cost. Even if you don’t have
              a lot of positions open at the moment, the goodwill created in the
              community pays dividends when someone runs across your job posting
              in the future.
            </p>
          </div>
          <div>
            <h2>Back to the Office</h2>
            <p>
              We know a lot of companies are struggling to find the right
              balance between remote and in-person work. What better way to
              encourage your people to come back to the office than hosting an
              awesome event that they themselves want to come to?
            </p>
          </div>
          <div>
            <h2>Karma</h2>
            <p>
              The tech community is way more interrelated than we all think.
              Most companies rely upon open-source projects to function. Being a
              supporter of communities like TechTank that help the Toronto tech
              scene is just good karma. And good karma leads to good karma.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1>Let's Talk Logistics</h1>
        <Link href="/#contact-us">Contact Us</Link>
        <div>
          <h2>Speaker</h2>
          <p>
            We can source the speaker and topic with our reach into the
            community; however, if you have a speaker from your company you’d
            like to provide, we can absolutely work with that.
          </p>
        </div>
        <div>
          <h2>Marketing</h2>
          <p>
            We take care of all the marketing, registration, and tracking. We’re
            happy to provide you with an attendee list afterward.
          </p>
        </div>
        <div>
          <h2>AV Requirements</h2>
          <p>
            Every event has a presentation, so we just need a projector and
            screen. If available, a mic would be great as well.
          </p>
        </div>
        <div>
          <h2>Recording</h2>
          <p>
            Our team will handle recording the presentation and posting it on
            YouTube.
          </p>
        </div>
        <div>
          <h2>Number of Attendees</h2>
          <p>Typically 100-120 per event</p>
        </div>
        <div>
          <h2>Timing</h2>
          <p>Start at 6:00pm - 8:30pm</p>
        </div>
        <div>
          <h2>Food and Drink</h2>
          <p>Pizza and non-alcoholic drinks</p>
        </div>
        <div>
          <h2>Location</h2>
          <p>
            The venue must be reasonably accessible via TTC train or street car.
          </p>
        </div>
      </section>
    </main>
  );
}
