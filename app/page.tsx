"use client";

import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
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
      <section className="bg-white ">
        {/* Add your new white section content here */}
        <div className="wrapper container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold">Next Section</h2>
          <p>This is where your next section content will go.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
