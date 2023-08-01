"use client";

import { useRef, MouseEventHandler } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
// import Contact from "./components/Contact";

interface HomeProps {
  onJoinUsClick?: MouseEventHandler<HTMLButtonElement>;
}

const Home: React.FC<HomeProps> = () => {
  const joinUsRef = useRef<HTMLDivElement>(null);

  const scrollToJoinUs = () => {
    joinUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onJoinUsClick={scrollToJoinUs} />
      <JoinUs ref={joinUsRef} />
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
