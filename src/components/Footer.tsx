"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#06080f] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Summary */}
          <div className="space-y-1 text-center md:text-left">
            <span className="font-bold text-white text-base tracking-tight block">
              Mai Ahmed Khairy
            </span>
            <p className="text-xs text-slate-400">
              Junior Data Analyst & AI Automation Specialist · Egypt
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a href="#overview" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#case-study" className="hover:text-emerald-400 transition-colors">Case Study</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#hire" className="hover:text-emerald-400 transition-colors">Hire Me</a>
          </div>

          {/* External Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/mai-ahmed-b650a3337"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="https://khamsat.com/user/mai59"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 text-xs font-medium transition-colors"
            >
              Khamsat
            </a>

            <a
              href="https://kafiil.com/u/mai_ahmed15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 text-xs font-medium transition-colors"
            >
              Kafiil
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors ml-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Micro Copy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 Mai Ahmed Khairy. All rights reserved.
          </div>
          <div>
            Built with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
