import { Hero } from "./components/Hero";
import { JoinUs } from "./components/JoinUs";
import { Contact } from "./components/Contact";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <JoinUs />
      <Contact />
    </main>
  );
};

export default Home;
