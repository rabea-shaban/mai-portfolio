"use client";

import React from "react";
import { educationTimeline } from "@/data/educationData";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  Calendar,
  Sparkles
} from "lucide-react";

export default function EducationTimeline() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "academic":
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case "scholarship":
        return <Award className="w-4 h-4 text-emerald-400" />;
      case "specialization":
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-300" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-indigo-500/10 text-indigo-300 border-indigo-500/20";
      case "scholarship":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "specialization":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default:
        return "bg-white/5 text-slate-300 border-white/10";
    }
  };

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block mb-2">
            Learning Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Learning Journey
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            A structured path from university information systems theory to self-driven programming logic, database querying, and government-backed analytics scholarships.
          </p>
        </div>

        {/* Calm Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 sm:space-y-10 ml-2 sm:ml-4">
          {educationTimeline.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                  item.status === "current"
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/20"
                    : "bg-[#0a0d16] border-white/20 text-slate-400 group-hover:border-emerald-500/50"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${item.status === "current" ? "bg-emerald-400 animate-pulse" : "bg-slate-400"}`} />
              </div>

              {/* Milestone Card */}
              <div className="rounded-2xl bg-[#0a0d16] border border-white/5 hover:border-white/10 p-6 sm:p-7 space-y-4 transition-all">
                
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getTypeBadgeColor(item.type)}`}>
                      {item.typeLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.phase}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Title & Institution */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {item.keyLearnings.map((learn, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{learn}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-normal px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
