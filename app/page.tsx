"use client";
import dynamic from 'next/dynamic';
import { Briefcase, Map, Video, ChevronRight, Laptop, Database, Globe, Layers, Zap } from 'lucide-react';

// Dynamically import the 3D Hero to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/hero/Hero3D'), { 
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
   
    </div>
  )
});

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-500 text-[#2e1065] dark:text-[#ec4899]">
      
      {/* 1. NEW 3D HERO SECTION */}
      <Hero3D />

      {/* 2. PROFESSIONAL BIO SECTION */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-slate-100 dark:bg-slate-800 rounded-full border-4 border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#ec4899]/20 to-transparent" />
               <Laptop size={64} className="text-[#c084fc] opacity-40 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-[#c084fc] font-bold mb-2">
                <Zap size={20} /> <span className="uppercase tracking-widest text-sm">Full-Stack Engineer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#2e1065] dark:text-[#ec4899] leading-tight">
                Designing Systems, Delivering Impact.
              </h2>
              <p className="text-lg text-[#2e1065] opacity-85 dark:text-slate-300 leading-relaxed max-w-3xl">
                I am a specialized software engineer with a focus on building high-performance, **enterprise-grade full-stack applications**. My passion lies in transforming complex business challenges—from ERP inventory management to multilingual AI solutions—into efficient, scalable software that drives real-world results.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-[#2e1065] dark:text-[#ec4899] pt-4 border-t dark:border-slate-800">
                 <span className="font-bold uppercase tracking-wider">Expertise:</span>
                 <span className="flex items-center gap-1.5"><Globe size={14} className="text-[#3b82f6]"/> Systems Architecture</span>
                 <span className="flex items-center gap-1.5"><Database size={14} className="text-[#c084fc]"/> High-Concurrency DBs</span>
                 <span className="flex items-center gap-1.5"><Video size={14} className="text-[#ec4899]"/> Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FLAGSHIP PROJECT */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#c084fc] font-bold mb-2">
              <Briefcase size={20} /> <span className="uppercase tracking-wider text-xs">Featured Enterprise Suite</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#2e1065] dark:text-[#ec4899]">Omni-Channel Business Management</h2>
            <p className="text-[#2e1065] opacity-75 dark:text-slate-400 mb-6 leading-relaxed">
              A comprehensive full-stack ERP solution featuring real-time inventory tracking, 
              financial reporting, and automated CRM integration.
            </p>
            <button className="btn-tri-glow text-white px-8 py-3 rounded-xl gap-2 font-black uppercase tracking-widest text-[10px]">
              View Case Study <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex-1 w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-inner border dark:border-slate-700 flex items-center justify-center overflow-hidden">
            <p className="text-[#2e1065] dark:text-[#ec4899] opacity-40 font-mono text-sm">[Interactive Dashboard Preview]</p>
          </div>
        </div>
      </section>

      {/* 4. SECONDARY PROJECT */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#ec4899] font-bold mb-2">
              <Map size={20} /> <span className="uppercase tracking-wider text-xs font-bold">Social Impact & AI</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#2e1065] dark:text-[#ec4899]">Grand Rapids Resource Navigator</h2>
            
            <p className="text-[#2e1065] opacity-85 dark:text-slate-300 mb-6 leading-relaxed text-lg">
              A community-focused platform built to bridge the gap between low-income residents and local aid. 
              By combining <span className="text-[#7dd3fc] font-medium italic">interactive mapping</span> with a custom 
              multilingual AI chatbot, this tool breaks down language barriers for the city's diverse population.
            </p>

            <ul className="grid grid-cols-1 gap-2 mb-8 text-[#2e1065] dark:text-[#ec4899] opacity-70 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" /> 
                Multilingual AI Chatbot (English/Spanish)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" /> 
                Real-time routing via Leaflet & Mapbox
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" /> 
                Mobile-optimized for on-the-go accessibility
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="https://grand-rapids-resource-navigator.vercel.app/" 
                target="_blank"
                className="btn-tri-glow text-white px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[10px] gap-2">
                Live Demo <Globe size={16} />
              </a>
              <a 
                href="https://github.com/jengerred/Grand-Rapids-Resource-Navigator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2e1065] dark:text-[#ec4899] opacity-70 font-bold hover:text-[#ec4899] transition-colors flex items-center gap-2 ml-4 text-xs uppercase tracking-widest">
                View Code <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full h-96 bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-800 flex flex-col items-center justify-center relative group overflow-hidden shadow-xl">
             <Map size={48} className="text-[#3b82f6] opacity-20" />
          </div>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#c084fc] mb-12">Technical Infrastructure</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2 text-[#2e1065] dark:text-[#ec4899] uppercase text-xs tracking-widest"><Laptop size={16}/> Frontend</h4>
              <ul className="text-[#2e1065] opacity-70 dark:text-slate-400 text-xs space-y-2 border-l border-slate-200 dark:border-slate-800 pl-4">
                <li>Next.js 15</li>
                <li>Tailwind CSS v4</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2 text-[#2e1065] dark:text-[#ec4899] uppercase text-xs tracking-widest"><Database size={16}/> Backend</h4>
              <ul className="text-[#2e1065] opacity-70 dark:text-slate-400 text-xs space-y-2 border-l border-slate-200 dark:border-slate-800 pl-4">
                <li>PostgreSQL / Prisma</li>
                <li>Node.js</li>
                <li>Redis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2 text-[#2e1065] dark:text-[#ec4899] uppercase text-xs tracking-widest"><Globe size={16}/> DevOps</h4>
              <ul className="text-[#2e1065] opacity-70 dark:text-slate-400 text-xs space-y-2 border-l border-slate-200 dark:border-slate-800 pl-4">
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2 text-[#2e1065] dark:text-[#ec4899] uppercase text-xs tracking-widest"><Layers size={16}/> Business</h4>
              <ul className="text-[#2e1065] opacity-70 dark:text-slate-400 text-xs space-y-2 border-l border-slate-200 dark:border-slate-800 pl-4">
                <li>Stripe</li>
                <li>Twilio</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TUTORIALS */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-[#7dd3fc] font-bold mb-8 uppercase tracking-widest text-xs">
          <Video size={20} /> <span>Knowledge Base</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="group border dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-[#ec4899]/40 transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900"
            >
              <div className="h-44 bg-slate-100 dark:bg-slate-800 flex items-center justify-center opacity-30 group-hover:bg-[#7dd3fc]/10 transition-colors duration-300">
                <Video size={32} />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#2e1065] dark:text-[#ec4899] group-hover:text-[#ec4899] dark:group-hover:text-[#7dd3fc] transition-colors uppercase text-sm italic">
                  Advanced Systems Design Ep. {i}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 text-center border-t dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-6 text-[#2e1065] dark:text-[#ec4899] tracking-tighter leading-none">Ready to <span className="text-[#7dd3fc] italic">scale</span>?</h2>
          <div className="flex justify-center">
            <button className="btn-tri-glow text-white font-black py-4 px-12 rounded-full uppercase tracking-[0.3em] text-[10px]">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}