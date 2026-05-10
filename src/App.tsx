import { ExternalLink, Code } from 'lucide-react';

export default function App() {
  const handleVisitWebsite = () => {
    window.location.href = 'https://www.slashdev.online';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white overflow-hidden relative flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-red-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-5 py-2 mb-8">
          <Code size={18} className="text-red-400" />
          <span className="text-sm font-bold tracking-widest text-red-400 uppercase">
            Under Construction
          </span>
        </div>
        
        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="block text-white">We're Building</span>
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Something Great
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Our new website is coming soon. Stay tuned for cutting-edge development solutions.
          </p>
        </div>

        {/* Brand name */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            <span className="text-red-500">/</span> Slash Development
          </h2>
        </div>

        {/* Visit Website Button */}
        <button
          onClick={handleVisitWebsite}
          className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold px-10 py-5 rounded-xl transition-all hover:shadow-2xl hover:shadow-red-500/50 active:scale-95 text-lg"
        >
          Visit Our Website
          <ExternalLink size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Social proof badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">Quality Code</div>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">Support</div>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">LK</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">Based</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-white/5">
        <p className="text-slate-400 text-sm mb-2">
          © 2026 Slash Development. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs">
          Developed by <span className="text-red-400 font-semibold">MJ Technology Solutions</span> · Made with <span className="text-red-500">❤</span> in Sri Lanka
        </p>
      </footer>
    </div>
  );
}