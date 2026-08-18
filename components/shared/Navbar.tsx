"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Die Stadt", href: "#city" },
  { label: "So geht's", href: "#features" },
  { label: "Lernpfad", href: "#path" },
  { label: "Stimmen", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-surface-border/70 bg-paper/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <MapPin className="h-5 w-5 text-signal-blue" strokeWidth={2.5} />
          <span className="font-display text-lg font-semibold tracking-tight">
            Deutsch <span className="text-signal-blue">Stadt</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Anmelden
          </a>
          <a
            href="/city"
            className="rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Stadt betreten
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-sign md:hidden"
          aria-label="Menü öffnen"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-surface-border/70 px-5 pb-5 md:hidden"
        >
          <div className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sign px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-border/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/city"
              className="mt-2 rounded-pill bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Stadt betreten
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
