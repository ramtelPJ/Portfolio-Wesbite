"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#profile", label: "Profile" },
  { href: "#attributes", label: "Attributes" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="relative flex w-full max-w-2xl items-center justify-center rounded-full border border-glass-border bg-background-primary/70 px-5 py-2.5 backdrop-blur-md">
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* persistent CTA, kept out of the nav pill to keep it uncluttered */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wide text-background-primary shadow-lg shadow-gold/20 transition-colors hover:bg-gold-highlight"
      >
        Hire Me
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 flex flex-col bg-background-primary md:hidden"
          >
            <div className="flex items-center justify-end px-6 py-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border text-text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-bold uppercase tracking-wide text-text-primary transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
