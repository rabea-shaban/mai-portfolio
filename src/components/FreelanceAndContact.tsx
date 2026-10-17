"use client";

import React, { useState } from "react";
import { 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Send, 
  MapPin,
  Clock
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

export default function FreelanceAndContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const emailAddress = "Khairyali753@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${senderName || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${messageText}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const platforms = [
    {
      name: "Khamsat",
      role: "Data Cleaning & Dashboard Gigs",
      link: "https://khamsat.com/user/mai59",
      desc: "Order Power BI dashboards, Excel cleaning, and automated reporting.",
      cta: "Order on Khamsat"
    },
    {
      name: "Kafiil",
      role: "Freelance Data Analyst",
      link: "https://kafiil.com/u/mai_ahmed15",
      desc: "Data modeling, DAX architecture, and business KPI tracking.",
      cta: "Hire on Kafiil"
    },
    {
      name: "LinkedIn",
      role: "Professional Network",
      link: "https://www.linkedin.com/in/mai-ahmed-b650a3337",
      desc: "Connect for junior roles, discussions, or enterprise inquiries.",
      cta: "Connect on LinkedIn"
    }
  ];

  return (
    <section id="hire" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block mb-2">
            Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Order Services or Discuss Opportunities
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Choose your preferred platform to commission a dashboard or reach out directly for open roles.
          </p>
        </div>

        {/* 3 Calm Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0a0d16] border border-white/5 hover:border-emerald-500/30 p-6 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  {p.name}
                </span>
                <h3 className="text-base font-bold text-white">
                  {p.role}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/[0.04] hover:bg-emerald-500 text-slate-200 hover:text-slate-950 transition-all border border-white/10 hover:border-emerald-500"
                >
                  <span>{p.cta}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Calm Contact Box */}
        <div id="contact" className="rounded-2xl bg-[#0a0d16] border border-white/10 p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Have a dataset that needs cleaning, a dashboard requirement, or an open data analyst role? Drop your note here or copy my direct email.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-semibold">Direct Email</span>
                      <span className="font-mono text-xs sm:text-sm text-white font-medium">{emailAddress}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Minya, Egypt (Available for Remote roles worldwide)</span>
                </div>
              </div>
            </div>

            {/* Right: Clean, simple form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah / Omar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-500 text-white text-xs sm:text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-500 text-white text-xs sm:text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Briefly describe your project or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-emerald-500 text-white text-xs sm:text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
