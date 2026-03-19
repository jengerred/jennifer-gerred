"use client";
import React, { Suspense, useState, useEffect } from 'react';
import Scene from './Scene';
import { ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

export default function Hero3D() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 2100);
    return () => clearTimeout(mountTimer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-white dark:bg-slate-950 overflow-hidden flex items-center justify-center"> 
      
      {/* 3D Particles Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* HTML Glass Cards Layer */}
      <div className="relative z-10 w-full max-w-7xl px-6 pointer-events-none">
        {isMounted && (
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* SaaS Card */}
              <div className="group pointer-events-auto relative p-10 rounded-[3rem] border border-sky-400/20 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-sky-400/50 hover:bg-white/10">
                <div className="w-14 h-14 rounded-2xl bg-sky-400/10 flex items-center justify-center mb-8 border border-sky-400/20 group-hover:bg-sky-400 group-hover:text-white transition-colors">
                  <CreditCard size={28} className="text-sky-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter text-[#2e1065] dark:text-white mb-2">SaaS & Platforms</h3>
                <p className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Moving Beyond WordPress</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Custom subscription engines, secure <span className="font-bold text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">Stripe</span> checkout integrations, and proprietary <span className="font-bold text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">MongoDB</span> carts.
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/30 dark:border-slate-800/50">
                   {["Next.js 15", "Stripe", "MongoDB", "Node.js"].map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-2 py-1 rounded-md border border-sky-400/20">{tag}</span>
                   ))}
                </div>
              </div>

              {/* Systems Card */}
              <div className="group pointer-events-auto relative p-10 rounded-[3rem] border border-purple-400/20 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-purple-400/50 hover:bg-white/10">
                <div className="w-14 h-14 rounded-2xl bg-purple-400/10 flex items-center justify-center mb-8 border border-purple-400/20 group-hover:bg-purple-400 group-hover:text-white transition-colors">
                  <ShieldCheck size={28} className="text-purple-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter text-[#2e1065] dark:text-white mb-2">Systems & Security</h3>
                <p className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] mb-4">Engineering the Business Brain</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Robust <span className="font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">.NET/C#</span> infrastructure with a focus on <span className="font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">Biometric Auth</span>.
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/30 dark:border-slate-800/50">
                   {[".NET", "C#", "SQL Server", "SDLC"].map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-400/10 px-2 py-1 rounded-md border border-purple-400/20">{tag}</span>
                   ))}
                </div>
              </div>

              {/* AI Card */}
              <div className="group pointer-events-auto relative p-10 rounded-[3rem] border border-pink-400/20 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-pink-400/50 hover:bg-white/10">
                <div className="w-14 h-14 rounded-2xl bg-pink-400/10 flex items-center justify-center mb-8 border border-pink-400/20 group-hover:bg-pink-400 group-hover:text-white transition-colors">
                  <Sparkles size={28} className="text-pink-400 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter text-[#2e1065] dark:text-white mb-2">AI & Spatial UX</h3>
                <p className="text-[10px] font-bold text-pink-400 uppercase tracking-[0.2em] mb-4">The Future of Interaction</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Advanced <span className="font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]">Python</span> AI pipelines and immersive <span className="font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]">Three.js</span> environments.
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/30 dark:border-slate-800/50">
                   {["Python", "Three.js", "Blender", "Roblox"].map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 px-2 py-1 rounded-md border border-pink-400/20">{tag}</span>
                   ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}