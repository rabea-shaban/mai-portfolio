"use client";

import React from "react";
import { 
  BarChart3, 
  Database, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Layers
} from "lucide-react";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Data Analytics & BI",
      icon: BarChart3,
      iconColor: "text-emerald-400 bg-emerald-500/10",
      description: "Transforming raw business data into structured dashboards and executive KPI tracking systems.",
      skills: [
        { name: "Power BI", level: "Proficient" },
        { name: "DAX (Measures & Time Intelligence)", level: "Proficient" },
        { name: "Power Query (ETL & Cleansing)", level: "Proficient" },
        { name: "Data Modeling (Star Schema & Cardinality)", level: "Proficient" },
        { name: "Microsoft Excel (Advanced & Pivot)", level: "Advanced" },
        { name: "KPI Tracking & Executive Reporting", level: "Proficient" },
      ]
    },
    {
      title: "Databases & Querying",
      icon: Database,
      iconColor: "text-cyan-400 bg-cyan-500/10",
      description: "Writing structured analytical queries to extract, filter, and validate high-volume datasets.",
      skills: [
        { name: "SQL (Joins, Aggregations, Grouping)", level: "Working Knowledge" },
        { name: "Relational Database Concepts", level: "Proficient" },
        { name: "Data Verification & Anomaly Auditing", level: "Working Knowledge" },
        { name: "Transaction Analysis (AML & Fraud)", level: "Applied" },
      ]
    },
    {
      title: "Programming & Foundations",
      icon: Code2,
      iconColor: "text-indigo-400 bg-indigo-500/10",
      description: "Solid algorithmic and analytical thinking built on computer science foundations.",
      skills: [
        { name: "Python (Data Cleaning & EDA)", level: "Working Knowledge" },
        { name: "C++ (Algorithmic Logic & Problem Solving)", level: "Proficient" },
        { name: "Frontend Basics (HTML5 / CSS3 / JS)", level: "Working Knowledge" },
        { name: "Logic Decomposition & Debugging", level: "Proficient" },
      ]
    },
    {
      title: "AI Automation & Workflow",
      icon: Cpu,
      iconColor: "text-purple-400 bg-purple-500/10",
      description: "Leveraging modern AI tools to accelerate data preparation and streamline report generation.",
      skills: [
        { name: "AI-Assisted Data Analysis", level: "Proficient" },
        { name: "Prompt Engineering for Tabular Data", level: "Proficient" },
        { name: "Automated Executive Briefs", level: "Applied" },
        { name: "Workflow Optimization", level: "Working Knowledge" },
      ]
    }
  ];

  const coreStrengths = [
    { title: "Data Storytelling", desc: "Translating numbers into real business implications and next steps." },
    { title: "Technical Mentorship", desc: "Experience breaking down programming logic for beginners as a FYT Mentor." },
    { title: "Tenacious Troubleshooting", desc: "Resolving stubborn timestamp, formula, and relationship bugs at root." },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block mb-2">
            Core Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Organized around real analytical problem solving, from ETL and database querying to dashboard development and automated workflows.
          </p>
        </div>

        {/* 4 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0a0d16] border border-white/5 p-6 sm:p-7 space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${group.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Clean Skills List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white/[0.02] text-xs text-slate-200"
                    >
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Calm Core Strengths Strip */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 sm:p-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            How I Work & Collaborate
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreStrengths.map((str, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 block">
                  {str.title}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {str.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
