"use client";

import React, { useState } from "react";
import { 
  BarChart3, 
  Database, 
  Layers, 
  Code2, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import { projectsData } from "@/data/projectsData";

export default function FeaturedCaseStudy() {
  const [modalOpen, setModalOpen] = useState(false);
  const flagshipProject = projectsData.find(p => p.id === "logistics-delivery-dashboard") || projectsData[0];

  return (
    <section id="case-study" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block mb-2">
            Flagship Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Logistics & Last-Mile Delivery Dashboard
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            An end-to-end Power BI implementation analyzing 50,000 historical deliveries across regional distribution hubs to monitor SLA compliance, carrier efficiency, and return rates.
          </p>
        </div>

        {/* Calm, High-Impact Container */}
        <div className="rounded-2xl bg-[#0a0d16] border border-white/10 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-white/5">
            <div>
              <span className="text-xs text-slate-400 block">Dataset Volume</span>
              <span className="text-2xl font-bold text-white mt-1 block">50,000</span>
              <span className="text-[11px] text-slate-400">Shipment Records</span>
            </div>

            <div>
              <span className="text-xs text-slate-400 block">Target SLA</span>
              <span className="text-2xl font-bold text-emerald-400 mt-1 block">85.0% OTIF</span>
              <span className="text-[11px] text-slate-400">On-Time & In-Full</span>
            </div>

            <div>
              <span className="text-xs text-slate-400 block">Architecture</span>
              <span className="text-2xl font-bold text-cyan-400 mt-1 block">Star Schema</span>
              <span className="text-[11px] text-slate-400">Fact + 3 Dimensions</span>
            </div>

            <div>
              <span className="text-xs text-slate-400 block">Primary Stack</span>
              <span className="text-2xl font-bold text-white mt-1 block">Power BI</span>
              <span className="text-[11px] text-slate-400">Power Query · DAX</span>
            </div>
          </div>

          {/* 3 Clear Pillars (Clean Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: ETL */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">
                1. ETL & Data Cleansing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cleaned nanosecond timestamp anomalies in Power Query without data loss. Isolated &quot;In Transit&quot; and canceled orders from null values to avoid skewing average delivery days.
              </p>
            </div>

            {/* Pillar 2: Data Modeling */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">
                2. Star Schema Modeling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modeled <code className="text-cyan-300 font-mono text-[11px]">Fact_Shipments</code> connected to <code className="text-cyan-300 font-mono text-[11px]">Dim_Cities</code>, <code className="text-cyan-300 font-mono text-[11px]">Dim_Drivers</code>, and a dynamic calendar. Used <code className="text-cyan-300 font-mono text-[11px]">USERELATIONSHIP</code> for multiple order milestones.
              </p>
            </div>

            {/* Pillar 3: DAX & KPIs */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">
                3. DAX & Business KPIs
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Authored dynamic DAX measures for OTIF % against city-specific SLAs, average delivery days (excluding weekends), return rates, and interactive driver comparison matrices.
              </p>
            </div>

          </div>

          {/* Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Power BI report (.pbix) with Gauge, Map & Drill-through views.</span>
            </div>

            <div className="flex items-center gap-3">
              {flagshipProject.behanceUrl && (
                <a
                  href={flagshipProject.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Behance Reference</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all inline-flex items-center gap-1.5"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal for detailed deep dive */}
        {modalOpen && (
          <ProjectModal
            project={flagshipProject}
            onClose={() => setModalOpen(false)}
          />
        )}

      </div>
    </section>
  );
}
