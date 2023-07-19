"use client";

import { useRef, MouseEventHandler } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";

interface HomeProps {
  onJoinUsClick?: MouseEventHandler<HTMLButtonElement>;
}

const Home: React.FC<HomeProps> = () => {
  // const joinUsRef = useRef(null);
  const joinUsRef = useRef<HTMLElement>(null);

  const scrollToJoinUs = () => {
    joinUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onJoinUsClick={scrollToJoinUs} />
      <JoinUs ref={joinUsRef} />
    </main>
  );
};

export default Home;
