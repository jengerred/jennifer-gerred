"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleToggle = (e: any) => setShowLogo(e.detail.show);
    window.addEventListener('toggle-logo', handleToggle);
    return () => window.removeEventListener('toggle-logo', handleToggle);
  }, []);

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* THE POP-IN LOGO */}
        <div 
          className={`flex flex-col leading-tight transition-all duration-500 ease-out ${
            showLogo 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[11px] font-black tracking-[0.25em] bg-gradient-to-r from-[#ec4899] via-[#c084fc] to-[#7dd3fc] bg-clip-text text-transparent uppercase">
            JENNIFER
          </span>
          <span className="text-[11px] font-black tracking-[0.25em] bg-gradient-to-r from-[#ec4899] via-[#c084fc] to-[#7dd3fc] bg-clip-text text-transparent uppercase">
            GERRED
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-[#ec4899] transition-colors">Solutions</a>
          <a href="#" className="hover:text-[#7dd3fc] transition-colors">Infrastructure</a>
          <a href="#" className="hover:text-[#c084fc] transition-colors">Knowledge Base</a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : theme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}