import { useState } from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    form.name.trim().length > 2 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    form.phone.trim().length >= 8;

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitted(false);
    setTimeout(() => setSubmitted(true), 600);
  };

  return (
    <footer className="relative overflow-hidden bg-[#3f4c50]">
      {/* topo background */}
      <div
        className="
          absolute inset-0 opacity-[0.12]
          bg-[url('/typographic.svg')]
          bg-repeat bg-[length:800px_800px]
        "
      />

      {/* CONTENT WRAP (big top padding so the Tours card can intersect) */}
      <div className="relative z-10 mx-auto max-w-6xl px-8 pt-[240px] pb-20">
        {/* 2 columns */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT: BRAND */}
          <div className="text-white/70">
            <div className="pt-10 lg:pt-24">
              <p className="text-lg tracking-wide text-white/80">
                Baikal Tours
              </p>
              <p className="mt-2 text-xs tracking-[0.35em] text-white/35">
                1976
              </p>

              <div className="mt-14 grid max-w-[420px] grid-cols-2 gap-10">
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-white/40">
                    IRKUTSK
                  </p>
                  <p className="mt-2 text-sm text-white/70">+7 3952 500 680</p>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.25em] text-white/40">
                    MOSCOW
                  </p>
                  <p className="mt-2 text-sm text-white/70">+7 499 705 85 17</p>
                </div>
              </div>

              <p className="mt-16 text-xs text-white/35">
                © 2016 Touroperator Baikal Tours
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="text-white/70">
            <div className="text-center lg:text-left">
              <h3 className="text-[42px] uppercase tracking-[0.35em] text-white/80">
                ORDER YOUR TOUR
              </h3>
              <p className="mt-4 text-xs text-white/45">
                Our Manager will contact you
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-14 w-full max-w-xl space-y-10"
            >
              {!submitted ? (
                <>
                  {/* NAME */}
                  <div>
                    <label className="block text-sm text-white/40">
                      Enter Your Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      autoComplete="name"
                      className="
                        mt-3 w-full bg-transparent
                        border-b border-white/25
                        py-2 text-white
                        outline-none transition
                        focus:border-white
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm text-white/40">
                      E-mail
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      autoComplete="email"
                      className="
                        mt-3 w-full bg-transparent
                        border-b border-white/25
                        py-2 text-white
                        outline-none transition
                        focus:border-white
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm text-white/40">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      autoComplete="tel"
                      className="
                        mt-3 w-full bg-transparent
                        border-b border-white/25
                        py-2 text-white
                        outline-none transition
                        focus:border-white
                      "
                    />
                  </div>

                  {/* SUBMIT (ONLY ONE BUTTON) */}
                  <div className="pt-6 flex justify-center lg:justify-start">
                    <button
                      type="submit"
                      disabled={!isValid}
                      className={`
                        h-12 w-[360px] max-w-full
                        text-[11px] uppercase tracking-[0.28em]
                        transition
                        ${
                          isValid
                            ? "bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:brightness-110 hover:cursor-pointer"
                            : "bg-white/10 text-white/40 cursor-not-allowed"
                        }
                      `}
                    >
                      Book a tour
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-20 text-center lg:text-left">
                  <p className="text-sm tracking-widest text-white/70">
                    THANK YOU
                  </p>
                  <p className="mt-4 text-xs text-white/50">
                    Our manager will contact you shortly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ✅ SOCIAL ROW (separate section, never overlaps anything) */}
        <div className="mt-16 flex justify-center">
          <SocialIcons />
        </div>
      </div>

      {/* dots bottom-right */}
      <div className="absolute bottom-10 right-12 z-20 flex gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>
    </footer>
  );
}
