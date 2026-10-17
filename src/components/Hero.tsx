"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  TrendingUp, 
  Database, 
  ExternalLink,
  CheckCircle2,
  BarChart2
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

export default function Hero() {
  const [selectedMetric, setSelectedMetric] = useState<"otif" | "volume">("otif");

  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clear, Focused Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Junior Data Analyst Roles & Freelance Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Turning raw data into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                clear, actionable
              </span>{" "}
              business decisions.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal">
              Hi, I&apos;m <span className="text-white font-medium">Mai Ahmed Khairy</span>. I build intuitive Power BI dashboards, optimized Star Schemas, and DAX calculations that help businesses track performance, cut costs, and make confident choices.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all hover:scale-[1.01]"
              >
                <span>View Featured Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#hire"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
              >
                <span>Hire on Khamsat & Kafiil</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mai-ahmed-b650a3337"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Calm, uncrowded proof metrics */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-8 text-left">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block tracking-tight">50,000+</span>
                <span className="text-xs text-slate-400">Records Modeled</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400 block tracking-tight">85% SLA</span>
                <span className="text-xs text-slate-400">Target Benchmark</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block tracking-tight">DEPI</span>
                <span className="text-xs text-slate-400">Analytics Scholar</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean & Elegant Live Dashboard Snapshot */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0a0d16] border border-white/10 p-6 shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block">
                    Live Case Study Snapshot
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Logistics & Last-Mile Performance
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-lg text-[11px]">
                  <button
                    onClick={() => setSelectedMetric("otif")}
                    className={`px-2.5 py-1 rounded font-medium transition-all ${
                      selectedMetric === "otif"
                        ? "bg-emerald-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    SLA (OTIF)
                  </button>
                  <button
                    onClick={() => setSelectedMetric("volume")}
                    className={`px-2.5 py-1 rounded font-medium transition-all ${
                      selectedMetric === "volume"
                        ? "bg-emerald-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Volume
                  </button>
                </div>
              </div>

              {/* Primary KPI Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                {selectedMetric === "otif" ? (
                  <>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          88.4%
                        </span>
                        <span className="text-xs text-slate-400 ml-2">OTIF Fulfilled</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        +3.4% vs SLA Target
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full w-[88.4%]" />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Baseline: 0%</span>
                        <span className="text-emerald-400 font-semibold">Target: 85.0%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          50,000
                        </span>
                        <span className="text-xs text-slate-400 ml-2">Total Deliveries</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Star Schema Modeled
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full w-[100%]" />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Fact_Shipments</span>
                        <span className="text-cyan-400 font-semibold">3 Dimension Tables</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* 2 Supporting Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs text-slate-400 block">Avg Delivery Time</span>
                  <span className="text-lg font-bold text-white mt-1 block">3.2 Days</span>
                  <span className="text-[11px] text-emerald-400">Excl. Weekends</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs text-slate-400 block">Return Rate</span>
                  <span className="text-lg font-bold text-white mt-1 block">4.1%</span>
                  <span className="text-[11px] text-slate-400">Threshold &lt; 5.0%</span>
                </div>
              </div>

              {/* Clean Footer Link */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  Power BI · DAX · ETL
                </span>
                <a
                  href="#case-study"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
