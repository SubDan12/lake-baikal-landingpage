import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function TourModal({ open, onClose, tour }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal panel */}
          <div className="relative z-[10000] flex min-h-screen items-center justify-center px-5 py-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              className="
                relative w-full max-w-xl overflow-hidden
                rounded-2xl border border-white/15
                bg-white/10 backdrop-blur-xl
                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
              "
              initial={{ y: 22, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top color wash to match your luxury vibe */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/35 via-pink-500/25 to-violet-500/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="relative z-10 p-7 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] tracking-[0.28em] text-white/70 uppercase">
                      {tour?.subtitle ?? "Tour"}
                    </p>
                    <h4 className="mt-2 text-2xl tracking-wide font-semibold">
                      {tour?.title ?? "Tour Details"}
                    </h4>
                    <p className="mt-2 text-sm text-white/75">
                      Duration:{" "}
                      <span className="text-white">
                        {tour?.duration ?? "—"}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="
                      rounded-full border border-white/25
                      px-3 py-1 text-xs tracking-widest text-white/80
                      hover:bg-white/10 hover:cursor-pointer
                    "
                  >
                    CLOSE
                  </button>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/80">
                  {tour?.description ??
                    "No description provided yet. Add it in your TOURS array."}
                </p>

                {/* Tiny CTA row (optional, looks premium) */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-[11px] tracking-[0.26em] text-white/60 uppercase">
                    Baikal Tours
                  </div>

                  <button
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-white/30
                      px-5 py-2 text-[11px] tracking-[0.28em] uppercase
                      hover:bg-white/10
                    "
                  >
                    Book this tour
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
