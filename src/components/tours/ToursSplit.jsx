import ToursLeft from "./ToursLeft";
import ToursRight from "./ToursRight";

export default function ToursSplit() {
  return (
    <section className="relative isolate bg-[#3f4c50] text-white overflow-visible">
      {/* topo background */}
      <div
        className="
          absolute inset-0 opacity-[0.12]
          bg-[url('/typographic.svg')]
          bg-repeat
          bg-[length:800px_800px]
        "
      />

      {/* layout root */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* columns */}
        <div className="relative flex flex-col lg:flex-row">
          {/* LEFT — must sit ABOVE RIGHT on lg+ so clicks work */}
          <div className="relative z-20 w-full lg:w-1/2">
            <ToursLeft />
          </div>

          {/* RIGHT — keep under LEFT on lg+ */}
          <div className="relative z-10 w-full lg:w-1/2">
            <ToursRight />
          </div>
        </div>

        {/* global overlap space for footer intersection */}
        <div className="pointer-events-none h-[140px]" />
      </div>
    </section>
  );
}
