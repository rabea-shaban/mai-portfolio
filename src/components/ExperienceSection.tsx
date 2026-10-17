"use client";

import React from "react";
import { experiences } from "@/data/experienceData";
import { CheckCircle2, Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase block mb-2">
            Journey & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trainings & Mentorship
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on scholarships, developer mentorship, and student leadership demonstrating practical execution and commitment to learning.
          </p>
        </div>

        {/* Clean Timeline */}
        <div className="space-y-4">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0a0d16] border border-white/5 hover:border-white/10 p-6 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    {item.organization}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-mono self-start sm:self-auto">
                  {item.period}
                </span>
              </div>

              {/* 2 Concise Bullets */}
              <ul className="space-y-1.5 pt-2 border-t border-white/5">
                {item.bullets.slice(0, 2).map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
