"use client";

import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <main className="wrapper min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-48">
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
  );
};

export default Home;
