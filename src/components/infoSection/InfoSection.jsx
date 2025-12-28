export default function InfoSection() {
  return (
    <section
      className="
        relative
        -mt-[30vh]
        bg-[#3f4c50]
        pt-[38vh]
        pb-40
        text-white
        overflow-hidden
      "
    >
      {/* TOPOGRAPHIC BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.12]
          bg-[url('/typographic.svg')]
          bg-repeat
          bg-size:800px_800px
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-4xl uppercase tracking-[0.35em] opacity-80">
          IN THE BEGINNING
        </h2>

        <p className="mt-3 text-xs opacity-60">Of your personal adventure</p>

        <p className="mt-12 text-sm leading-relaxed opacity-75">
          In the opinion of experienced traveler, the winter season on Lake
          Baikal is the best time to visit. Each and every day is different from
          the last. The 32,000 sq km lake is your frozen playground. Around
          every corner you will find a new phenomenon, and no matter how varied
          your desires, there is always a new adventure to undertake.
        </p>

        {/* WATCH THE MOVIE */}
        <div className="mt-24 flex flex-col items-center">
          <span className="mb-6 text-xs tracking-wide opacity-60">
            Watch the Movie
          </span>

          <div className="relative flex items-center justify-center">
            {/* OUTER AMBIENT GLOW */}
            <div
              className="
                absolute
                top-6
                h-56
                w-56
                rounded-full
                bg-cyan-500/15
                blur-[90px]
              "
            />

            {/* INNER GLOW */}
            <div
              className="
                absolute
                top-2
                h-28
                w-28
                rounded-full
                bg-cyan-400/25
                blur-3xl
              "
            />

            {/* STRUCTURAL RING (GRAY FRAME) */}
            <div
              className="
                absolute
                h-20
                w-20
                rounded-full
                border
                border-white/20
              "
            />

            {/* PLAY BUTTON */}
            <button
              className="
    relative
    z-10
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-linear-to-br
    from-cyan-300
    via-violet-400
    to-pink-600
    shadow-[0_12px_28px_rgba(0,0,0,0.55)]
    transition-transform
    hover:scale-135 hover:cursor-pointer
  "
            >
              {/* INNER HIGHLIGHT */}
              <span
                className="
      absolute
      inset-0
      rounded-full
      bg-white/10
      blur-[1px]
    "
              />

              {/* PLAY ICON */}
              <span className="relative ml-px text-[11px] text-white">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
