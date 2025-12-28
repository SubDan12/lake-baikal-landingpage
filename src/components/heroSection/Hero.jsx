import HeroCard from "./HeroCard";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-visible">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-ice.jpg')" }}
        />

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Glass card (OVERFLOWING HERO) */}
        <HeroCard />

        {/* Big background title */}
        <div className="pointer-events-none absolute inset-0 z-30 flex py-40 justify-center">
          <h1 className="text-white/70 text-[clamp(6rem,14vw,13rem)] font-light tracking-[0.45em] translate-x-[0.225em]">
            BAIKAL
          </h1>
        </div>
      </section>
    </>
  );
}
