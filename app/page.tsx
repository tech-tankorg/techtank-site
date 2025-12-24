import { Hero } from "./components/Hero";
import { JoinUs } from "./components/JoinUs";
import { Sponsors } from "./components/Sponsors";
import { Contact } from "./components/Contact";

const Home = () => {
  return (
    <main className="wrapper min-h-dvh space-y-32 pb-32">
      <Hero />
      <JoinUs />
      <Sponsors />
      <Contact />
    </main>
  );
};

export default Home;
