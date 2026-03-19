"use client";
import React from 'react';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiThreedotjs, 
  SiDotnet, 
  SiPython, 
  SiMongodb, 
  SiStripe, 
  SiDocker, 
  SiFramer 
} from 'react-icons/si';
import { PiFileCSharpBold } from "react-icons/pi"; // Your C# choice
import { DiMsqlServer } from "react-icons/di";    // Reliable SQL Server icon

const techStack = [
  { name: "Next.js 15", icon: <SiNextdotjs />, color: "text-sky-400", border: "border-sky-400/20" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500", border: "border-blue-500/20" },
  { name: "Three.js", icon: <SiThreedotjs />, color: "text-pink-400", border: "border-pink-400/20" },
  { name: ".NET", icon: <SiDotnet />, color: "text-purple-400", border: "border-purple-400/20" },
  { name: "C#", icon: <PiFileCSharpBold />, color: "text-purple-500", border: "border-purple-500/20" },
  { name: "Python AI", icon: <SiPython />, color: "text-yellow-500", border: "border-yellow-500/20" },
  { name: "SQL Server", icon: <DiMsqlServer />, color: "text-red-400", border: "border-red-400/20" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", border: "border-green-400/20" },
  { name: "Stripe", icon: <SiStripe />, color: "text-indigo-400", border: "border-indigo-400/20" },
];

export default function TechTicker() {
  // Triple the array to ensure the loop is seamless even on ultrawide screens
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="relative w-full py-8 overflow-hidden border-t border-white/10 bg-white/5 dark:bg-slate-950/20 backdrop-blur-md">
      {/* Visual edge fades to blend with the background */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

      <div className="flex w-max animate-scroll">
        {duplicatedStack.map((tech, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 px-6 py-2.5 mx-4 rounded-full border bg-white/10 dark:bg-white/5 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 ${tech.border}`}
          >
            <span className={`text-xl ${tech.color} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>
              {tech.icon}
            </span>
            <span className="text-sm font-bold tracking-tight text-slate-700 dark:text-slate-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}