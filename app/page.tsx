"use client";

import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "@/app/components/Footer";

const Home = () => {
  const joinUsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const scrollToJoinUs = () => {
    // NB: scrollIntoView apparently ignores all margins and scrolls to the most immediately available element with content
    const element = joinUsRef.current;
    if (element) {
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - 65;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const scrollToContactUs = () => {
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero
        onJoinUsClick={scrollToJoinUs}
        onContactUsClick={scrollToContactUs}
      />
      <JoinUs ref={joinUsRef} onContactUsClick={scrollToContactUs} />
      <Contact ref={contactUsRef} />
      <Footer />
    </main>
  );
};

export default Home;
