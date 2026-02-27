import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-spot-yellow/5 -skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spot-yellow/10 text-spot-yellow text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spot-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-spot-yellow"></span>
              </span>
              {t.badge}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6">
              {t.title1} <br />
              <span className="text-spot-yellow">{t.title2}</span> <br />
              {t.title3}
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              {t.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://planit.etevers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spot-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-spot-yellow hover:text-spot-black transition-all group"
              >
                {t.ctaQuote}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="bg-white text-spot-black border-2 border-spot-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-50 transition-all"
              >
                <Play className="w-5 h-5 fill-current" />
                {t.ctaWatch}
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-8">
              <div>
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{t.statDeployed}</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold">35+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{t.statCountries}</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full max-w-xl aspect-4/3">
              <img 
                src="https://bostondynamics.com/wp-content/uploads/2023/12/spot-thermal-camera-electric-utility-scaled.jpg" 
                alt="전력 설비 현장에서 점검 중인 Spot" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 text-white px-3 py-1 text-sm"
              onClick={() => setIsVideoOpen(false)}
            >
              닫기
            </button>
            <video
              className="w-full h-full object-cover"
              src="/boston-dynamics-spot---the-agile-mobile-robot/Spot_Launch.mp4"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
