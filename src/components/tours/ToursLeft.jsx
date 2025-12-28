import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import TourModal from "../modal/TourModal";

const TOURS = [
  {
    id: 1,
    days: "7",
    title: "Yarki Island",
    subtitle: "Special Tour",
    duration: "7 DAYS",
    description:
      "A pristine island known for its wild beaches and untouched Siberian landscapes.",
  },
  {
    id: 2,
    days: "5",
    title: "Olkhon Island",
    subtitle: "Special Tour",
    duration: "5 DAYS",
    description:
      "The spiritual heart of Lake Baikal, featuring cliffs, shamans, and deep-blue ice.",
  },
  {
    id: 3,
    days: "6",
    title: "Mammy Safari",
    subtitle: "Tour",
    duration: "6 DAYS",
    description:
      "A wildlife-focused expedition exploring Baikal’s frozen plains and fauna.",
  },
  {
    id: 4,
    days: "8",
    title: "Ushkany",
    subtitle: "Island VIP Tour",
    duration: "8 DAYS",
    description:
      "An exclusive journey to the Ushkany Islands, famous for Baikal seals.",
  },
];

export default function ToursLeft() {
  const [activeTour, setActiveTour] = useState(TOURS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setIsModalOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="relative min-h-[720px] overflow-visible">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tours-bg.jpg')" }}
      />

      {/* dark wash */}
      <div className="absolute inset-0 bg-black/25" />

      {/* heading */}
      <div className="relative z-10 px-10 pt-14">
        <h3 className="text-[34px] font-semibold uppercase tracking-[0.22em] text-white">
          Selected Tours
        </h3>
        <p className="mt-2 text-xs tracking-wide text-white/70">
          National Geographics Experts
        </p>
      </div>

      {/* CARD */}
      <div className="relative z-30 mt-12 flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-[420px] shadow-[0_40px_120px_rgba(0,0,0,0.55)] -mb-[180px]"
        >
          {/* GLASS TOP */}
          <div className="relative bg-gradient-to-b from-white/90 via-white/85 to-white/80 backdrop-blur-md border border-white/60">
            <div className="grid grid-cols-2">
              {TOURS.map((tour, i) => {
                const isActive = activeTour.id === tour.id;

                return (
                  <motion.div
                    key={tour.id}
                    onClick={() => setActiveTour(tour)}
                    whileHover={{
                      y: -2,
                      boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`
                      cursor-pointer px-7 py-7 text-slate-800 transition-colors
                      ${isActive ? "bg-white" : "bg-white/85"}
                    `}
                    style={{
                      borderRight:
                        i % 2 === 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                      borderBottom:
                        i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                    }}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-[38px] font-semibold ${
                          isActive ? "text-fuchsia-700" : "text-fuchsia-700/70"
                        }`}
                      >
                        {tour.id}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500">
                        Days
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400">
                        {tour.days}
                      </span>
                    </div>

                    <div className="mt-2 leading-tight">
                      <p className="text-[14px] font-medium">{tour.title}</p>
                      <p className="text-[12px] text-slate-500">
                        {tour.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FADE STRIP */}
          <div className="h-10 bg-gradient-to-b from-white/80 to-fuchsia-500" />

          {/* SOLID BOTTOM */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative px-10 pt-12 pb-10 text-white bg-gradient-to-br from-fuchsia-500 via-pink-500 to-violet-500"
          >
            <p className="text-[42px] font-semibold tracking-wide text-center">
              {activeTour.duration}
            </p>

            <p className="mt-2 text-xs text-center">
              {activeTour.subtitle}. All inclusive.
            </p>

            <p className="mt-10 text-sm leading-relaxed text-center">
              {activeTour.description}
            </p>

            <div className="mt-10 flex justify-center gap-6 text-[11px] tracking-widest">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 hover:opacity-80 hover:cursor-pointer"
              >
                <span className="inline-block h-3 w-3 border border-white" />
                LEARN MORE
              </button>

              {/* <span className="opacity-60">NATIONAL GEOGRAPHIC</span> */}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* brand */}
      <div className="relative z-10 px-10 pb-10 text-white/70">
        <p className="text-xs tracking-widest">Baikal Tours</p>
      </div>

      <TourModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tour={activeTour}
      />
    </div>
  );
}
