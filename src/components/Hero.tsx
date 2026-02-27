import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-spot-yellow/5 -skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              <button className="bg-spot-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-spot-yellow hover:text-spot-black transition-all group">
                {t.ctaQuote}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-spot-black border-2 border-spot-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://bostondynamics.com/wp-content/uploads/2023/12/spot-thermal-camera-electric-utility-scaled.jpg" 
                alt="전력 설비 현장에서 점검 중인 Spot" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-spot-yellow rounded-3xl -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-spot-black rounded-3xl -z-10" />
            
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">System Online</div>
                  <div className="text-xs text-gray-500">Autonomous Navigation Active</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
