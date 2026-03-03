import React from "react";
import { Hero } from "../components/Hero";
import { JoinUs } from "../components/JoinUs";
import { Sponsors } from "../components/Sponsors";
import { Contact } from "../components/Contact";

export default function page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <JoinUs />
      <Sponsors />
      <Contact />
    </main>
  );
}
