import { useState } from 'react';
import { Mail, ArrowRight, Code } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // WhatsApp and Email notification
      const message = `New Newsletter Signup%0A%0AEmail: ${email}`;
      const whatsappUrl = `https://wa.me/94767246019?text=${message}`;
      const emailUrl = `mailto:methullakvindu5@gmail.com?subject=New Newsletter Signup&body=Email: ${email}`;
      
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        window.location.href = emailUrl;
      }, 500);
      
      setSubmitted(true);
    }
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
        
        {/* Logo */}
        <div className="mb-12 relative">
          <img 
            src="/Gemini_Generated_Image_7dzam97dzam97dza.png" 
            alt="Slash Development Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-float"
          />
          <div className="absolute inset-0 bg-red-600/20 blur-3xl -z-10 animate-pulse" />
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 rounded-full px-5 py-2 mb-6">
            <Code size={18} className="text-red-400" />
            <span className="text-sm font-bold tracking-widest text-red-400 uppercase">
              Under Construction
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="block text-white">We're Building</span>
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Something Great
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            Our new website is coming soon. Stay tuned for cutting-edge development solutions.
          </p>
        </div>

        {/* Brand name */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            <span className="text-red-500">/</span> Slash Development
          </h2>
        </div>

        {/* Email capture */}
        <div className="w-full max-w-md mb-8">
          {submitted ? (
            <div className="bg-red-600/10 border border-red-500/40 rounded-2xl px-8 py-6 text-center backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg mb-2">Thank You!</p>
              <p className="text-slate-300 text-sm">We'll notify you when we launch.</p>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
                >
                  Notify Me
                  <ArrowRight size={18} />
                </button>
              </form>
              <p className="text-center text-sm text-slate-400 mt-4">
                Be the first to know when we launch
              </p>
            </div>
          )}
        </div>

        {/* Social proof badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}