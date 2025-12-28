export default function HeroCard() {
  return (
    <div className="relative z-20 flex h-full items-center justify-center">
      <div
        className="
          relative
          top-[8vh]
          h-[65vh]
          w-110
         
          border border-white/30
          backdrop-blur-xs
          shadow-[0_40px_100px_rgba(0,0,0,0.6)]
          overflow-hidden

          mask-[linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)]
        "
      >
        {/* MAIN COLOR WASH */}
        <div
          className="
            pointer-events-none
            absolute inset-0
         bg-linear-to-br
    from-cyan-300
    via-violet-400
    to-pink-600
          "
        />

        {/* BOTTOM COLOR GRADING (DEPTH) */}
        <div
          className="
            pointer-events-none
            absolute bottom-0 left-0 right-0
            h-[35%]
            bg-linear-to-t
            from-[#0b4aa6]/80
            via-[#0b4aa6]/40
            to-transparent
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-white">
          <p className="mb-6 text-xs uppercase tracking-widest opacity-80">
            Adventure & Resort
          </p>

          <p className="text-sm leading-relaxed opacity-90">
            Baikal is a unique lake in the centre of Siberia in Russian Asia.
          </p>

          <div className="mt-10 flex h-10 w-10 items-center justify-center rounded border border-white/50">
            ↓
          </div>
        </div>
      </div>
    </div>
  );
}
