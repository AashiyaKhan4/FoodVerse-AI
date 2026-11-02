import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Scan, Thermometer, ShieldCheck, ChefHat,
  Trash2, TrendingUp, AlertTriangle, FileText, Calendar, MapPin,
  Menu, X, Sparkles
} from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { path: '/', label: 'Overview', icon: LayoutDashboard },
  { path: '/food-recognition', label: 'Food Recognition', icon: Scan },
  { path: '/freshness-detector', label: 'Freshness Detector', icon: Thermometer },
  { path: '/hygiene-monitor', label: 'Hygiene Monitor', icon: ShieldCheck },
  { path: '/kitchen-assistant', label: 'Smart Kitchen', icon: ChefHat },
  { path: '/meal-planner', label: 'Meal Planner', icon: Calendar },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col md:flex-row font-sans selection:bg-emerald-500 selection:text-white">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#0d1424] border-b border-slate-800 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-emerald-500/20">
            🥗
          </div>
          <span className="font-bold text-lg tracking-wide text-white">FoodVerse</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-[#0a101f]/95 backdrop-blur-xl border-r border-slate-800/80 transition-transform duration-300 md:static md:translate-x-0 flex flex-col justify-between",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-5">
          {/* Logo Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/70">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                🥗
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  FoodVerse
                </h1>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                  <Sparkles size={10} /> Multimodal AI
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                    isActive
                      ? "bg-slate-800/70 text-emerald-400 font-semibold border-l-4 border-emerald-400 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  )}
                >
                  <Icon
                    size={18}
                    className={cn(
                      "transition-colors",
                      isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-slate-200"
                    )}
                  />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer: System Status */}
        <div className="p-4 border-t border-slate-800/70 bg-[#070c18]/80 m-3 rounded-xl">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">System Status</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Online</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Llama 4 Vision & Audio Active</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
