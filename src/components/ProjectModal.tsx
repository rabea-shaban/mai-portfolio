"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projectsData";
import { 
  X, 
  CheckCircle2, 
  ExternalLink, 
  Database, 
  Layers, 
  BarChart2, 
  TrendingUp, 
  ArrowUpRight,
  Code2,
  FileCheck
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1220] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#0c1220]/95 backdrop-blur-md p-6 border-b border-white/10 flex items-start justify-between gap-4 z-20">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.categoryLabel}
              </span>
              {project.featured && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Featured Case Study
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-xl font-bold text-white mt-0.5 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Tools & Stack Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Overview & Business Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4" />
                Project Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Business Problem Addressed
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>
          </div>

          {/* Implementation Pipeline */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Database className="w-4 h-4 text-emerald-400" />
              Analytical Pipeline & Execution
            </h4>
            <div className="space-y-2.5">
              {project.solutionAndPipeline.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Technical Highlights & Challenges Solved
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.technicalHighlights.map((highlight, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes & Business Value */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Key Business Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.outcomes.map((outcome, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-slate-300">
                  <p className="leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-white">Project Deliverables:</span>
              <span>{project.deliverables.join(" · ")}</span>
            </div>

            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 font-semibold transition-colors"
              >
                <span>View Design Reference</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0c1220]/95 backdrop-blur-md p-4 sm:p-6 border-t border-white/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/10 transition-colors"
          >
            Close Case Study
          </button>

          <a
            href="#hire"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-md shadow-emerald-500/20 hover:scale-[1.02] transition-all"
          >
            <span>Request Similar Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
