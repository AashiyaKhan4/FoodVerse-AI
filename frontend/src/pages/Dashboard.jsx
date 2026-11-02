import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scan,
  Thermometer,
  ShieldCheck,
  ChefHat,
  Calendar,
  ArrowRight,
  Activity,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2
} from 'lucide-react';

const modules = [
  {
    title: 'Food Recognition',
    desc: 'Identify dishes & nutrition',
    path: '/food-recognition',
    icon: Scan,
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    tag: 'Vision + Audio + Text'
  },
  {
    title: 'Freshness Detector',
    desc: 'Detect spoilage instantly',
    path: '/freshness-detector',
    icon: Thermometer,
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    tag: 'Quality & Safety'
  },
  {
    title: 'Hygiene Monitor',
    desc: 'Kitchen compliance AI',
    path: '/hygiene-monitor',
    icon: ShieldCheck,
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    tag: 'CCTV Surveillance'
  },
  {
    title: 'Smart Kitchen',
    desc: 'Real-time cooking aid',
    path: '/kitchen-assistant',
    icon: ChefHat,
    color: 'from-purple-500 to-violet-600',
    iconBg: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    tag: 'Interactive AI Chef'
  },
  {
    title: 'Meal Planner',
    desc: 'Personalized diet plans',
    path: '/meal-planner',
    icon: Calendar,
    color: 'from-cyan-500 to-teal-600',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    tag: 'Clinical Nutrition'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Hero Welcome Banner (Page 47) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0e172a] via-[#0f1d36] to-[#0d2238] border border-slate-800 p-8 md:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Real-time Analysis Active
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Welcome to <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">FoodVerse AI</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            A unified multimodal AI platform revolutionizing the food lifecycle from farm to fork.
            Integrate vision-based analysis, speech-to-text cues, and clinical LLM reasoning across food safety, nutrition, and kitchen hygiene.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/food-recognition"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 group"
            >
              Start Analyzing Food
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="px-5 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm font-medium flex items-center gap-2">
              <Cpu size={16} className="text-cyan-400" />
              Meta LLaMA 4 Scout • 17B-16e Multimodal
            </div>
          </div>
        </div>
      </div>

      {/* Module Cards Grid (Page 47) */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers size={20} className="text-emerald-400" />
            Core AI Modules
          </h2>
          <span className="text-xs text-slate-400">5 Modules Online & Operational</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="bg-[#0e1628]/90 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mod.iconBg}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 bg-slate-800/70 px-2.5 py-1 rounded-full">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 mb-6">
                    {mod.desc}
                  </p>
                </div>

                <Link
                  to={mod.path}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-emerald-500/10 text-xs font-semibold text-slate-300 hover:text-emerald-400 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                >
                  <span>LAUNCH MODULE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture Highlights & Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/60">
        <div className="bg-[#0b1222] border border-slate-800/70 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Full-Stack Decoupled</div>
            <div className="text-xs text-slate-400 mt-1">FastAPI REST microservices with asynchronous multimodal endpoints and React 18 UI.</div>
          </div>
        </div>

        <div className="bg-[#0b1222] border border-slate-800/70 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
            <Activity size={22} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Multimodal Fusion</div>
            <div className="text-xs text-slate-400 mt-1">Simultaneous computer vision frame extraction, audio transcription notes, and clinical dietary knowledge.</div>
          </div>
        </div>

        <div className="bg-[#0b1222] border border-slate-800/70 rounded-2xl p-5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
            <Sparkles size={22} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">ISO & HACCP Compliant</div>
            <div className="text-xs text-slate-400 mt-1">Automated compliance scoring, live safety alerts, and downloadable audit-ready PDF inspection reports.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
