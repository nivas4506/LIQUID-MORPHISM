"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Command } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = ["Overview", "Features", "Pricing", "FAQ"];

export function DynamicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const blurAmount = useTransform(scrollY, [0, 50], [0, 32]);
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.6]);

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
        backgroundColor: `rgba(var(--bg-base-rgb), ${bgOpacity})`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Dynamic Island / Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-2xl bg-text-main flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Command className="w-5 h-5 text-bg-base" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-text-main">
            Liquid<span className="font-light text-text-muted">OS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-surface/50 px-6 py-2 rounded-full border border-border-glass backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-text-main hover:bg-surface transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <MagneticButton className="px-6 py-2 text-sm">Download</MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-main p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-glass bg-bg-base/90 backdrop-blur-3xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xl font-medium text-text-muted hover:text-text-main"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex items-center justify-between pt-6 border-t border-border-glass">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 text-text-muted"
                  >
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span>Toggle Theme</span>
                  </button>
                )}
                <MagneticButton className="px-6 py-2 text-sm">Download</MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
