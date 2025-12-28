import { motion } from "framer-motion";

export default function ToursRight() {
  return (
    <div className="relative min-h-180 bg-[#d6e0e4] overflow-hidden pt-65 md:pt-14 pb-80">
      {/* heading */}
      <div className="relative z-10 text-center">
        <h3 className="text-[34px] font-semibold uppercase tracking-[0.22em] text-slate-700">
          Explore Baikal
        </h3>
        <p className="mt-2 text-xs tracking-wide text-slate-500">
          With Interactive Map
        </p>
      </div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mt-10 flex h-full md:mt-16"
      >
        <div className="relative flex-1">
          {/* map placeholder */}
          <svg
            viewBox="0 0 300 600"
            className="absolute right-12 top-0 h-140 opacity-60"
          >
            <path
              d="M160 20
                 C210 90, 190 170, 200 260
                 C215 360, 180 450, 150 580"
              fill="none"
              stroke="#9aa8af"
              strokeWidth="2"
            />
            {[
              [155, 80],
              [165, 140],
              [175, 210],
              [185, 280],
              [180, 340],
              [170, 410],
              [160, 470],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill="#9aa8af"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
              />
            ))}
          </svg>

          {/* floating island */}
          <div className="absolute left-24 top-32 z-20 flex flex-col items-center text-center">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-40 w-40 rounded-full bg-cover bg-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:cursor-pointer"
              style={{ backgroundImage: "url('/island.avif')" }}
            />
            <p className="mt-4 text-sm font-medium text-slate-700">
              Yarki Island
            </p>
            <p className="mt-1 text-xs tracking-widest text-cyan-700">
              LEARN MORE
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
