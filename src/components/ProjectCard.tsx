"use client";

import React from "react";
import { Project } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article 
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-[#0a0d16] border border-white/5 hover:border-emerald-500/30 p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-black/40"
    >
      <div className="space-y-4">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-medium text-slate-400">
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Flagship
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* Tagline / Brief */}
        <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Tools in subtle tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="text-[11px] font-normal px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-400 border border-white/5"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-[11px] text-slate-400 px-1 py-0.5">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

      </div>

      {/* Clean Footer Link */}
      <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
        <span>View Details</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>

    </article>
  );
}
