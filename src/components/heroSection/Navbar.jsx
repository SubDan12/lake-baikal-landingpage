import { useEffect, useState } from "react";

const links = [
  { label: "About Baikal", href: "#about" },
  { label: "Selected Tours", href: "#tours" },
  { label: "Mystery Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white">
      {/* bar */}
      <div className="relative flex items-center justify-between px-10 py-6">
        {/* MOBILE TOGGLE (only < md) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] inline-flex h-11 w-11 items-center justify-center md:hidden"
        >
          {/* Hamburger / X */}
          <span className="relative block h-5 w-6">
            {/* top bar */}
            <span
              className={[
                "absolute left-0 top-0 block h-[2px] w-full bg-white/90 transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "rotate-0",
              ].join(" ")}
            />
            {/* middle bar */}
            <span
              className={[
                "absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-white/90 transition-all duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            {/* bottom bar */}
            <span
              className={[
                "absolute left-0 bottom-0 block h-[2px] w-full bg-white/90 transition-all duration-300",
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "rotate-0",
              ].join(" ")}
            />
          </span>
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-10 text-xs tracking-[0.28em] uppercase text-white/75">
          <li className="hover:text-white transition">About Baikal</li>
          <li className="hover:text-white transition">Selected Tours</li>
          <li className="font-semibold text-white">Baikal Tours</li>
          <li className="hover:text-white transition">Mystery Stories</li>
        </ul>

        {/* BOOK BUTTON (keep on all sizes, but it’s the only one — no duplicate in dropdown) */}
        <button
          className="
            rounded border border-white/35 px-5 py-2
            text-xs tracking-[0.28em] uppercase
            text-white/85
            hover:border-white/70 hover:text-white
            transition
          "
          onClick={() => {
            setOpen(false);
            // optionally scroll to footer form:
            // document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book a tour
        </button>
      </div>

      {/* MOBILE DROPDOWN (only < md) */}
      <div
        className={[
          "md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* panel */}
        <div
          className={[
            "fixed left-0 right-0 top-[84px] z-50 px-6 transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div
            className="
              rounded-3xl border border-white/10
              bg-black/35 backdrop-blur-xl
              shadow-[0_30px_90px_rgba(0,0,0,0.45)]
              overflow-hidden
            "
          >
            <div className="px-7 py-6">
              <div className="space-y-6">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="
                      block text-[12px] tracking-[0.35em] uppercase
                      text-white/80 hover:text-white transition
                    "
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* no second “Book a tour” here (per your request) */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
