import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-nowrap wrapper items-center justify-center gap-24 min-h-[75vh]">
      {/* not sure if min-h-[75vh] is the most optimal */}
      <div>
        <h1 className="text-7xl font-bold">TechTank</h1>
        <h2 className="text-2xl">Your Techie Community</h2>
        <div className="flex gap-4 mt-10">
          <button className="btn bg-white font-normal">Join Us</button>
          <button className="btn">Contact Us</button>
        </div>
      </div>

      {/* Come back to image configs */}
      <Image
        src="/tech_tank_fish_white.png"
        width={200}
        height={200}
        sizes="100vw"
        alt="tech tech fish logo"
        className="w-auto h-auto min-w-[200px] min-h-[200px]"
        priority
      />
    </section>
  );
}
