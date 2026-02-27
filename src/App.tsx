/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Applications from './components/Applications';
import Specs from './components/Specs';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';
import { Language, translations } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const t = translations[language];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-spot-yellow z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar language={language} setLanguage={setLanguage} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        
        <section id="overview" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em]">{t.overview.badge}</h2>
                <p className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
                  {t.overview.title1} <br />
                  <span className="text-spot-yellow">{t.overview.title2}</span>
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.overview.description}
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-display font-bold">14kg</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{t.overview.payload}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-display font-bold">IP54</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{t.overview.protection}</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-spot-yellow/5 absolute -z-10 animate-pulse scale-110" />
                <img 
                  src="https://www.bostondynamics.com/wp-content/uploads/2023/06/woodside-spot-with-spot-cam-scaled-cropped.jpg" 
                  alt="Spot 전면과 카메라 페이로드 근접 사진" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <img 
                  src="https://bostondynamics.com/wp-content/uploads/2026/02/2-spot-dock-industrial.jpg" 
                  alt="도크에서 충전 중인 Spot 로봇들" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em]">{t.fleet.badge}</h2>
                <p className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
                  {t.fleet.title1} <br />
                  <span className="text-spot-yellow">{t.fleet.title2}</span>
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.fleet.description}
                </p>
                <button className="bg-spot-black text-white px-8 py-4 rounded-full font-bold hover:bg-spot-yellow hover:text-spot-black transition-all">
                  {t.fleet.cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-spot-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em] mb-4">{t.hazardous.badge}</h2>
              <p className="text-4xl md:text-6xl font-display font-black uppercase">{t.hazardous.title}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-3xl">
                <img 
                  src="https://bostondynamics.com/wp-content/uploads/2023/12/spot-with-lidar-payload-mining.jpg" 
                  alt="어두운 광산 환경에서 작업하는 Spot" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{t.hazardous.miningTitle}</h3>
                  <p className="text-gray-300">{t.hazardous.miningDesc}</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl">
                <img 
                  src="https://www.bostondynamics.com/wp-content/uploads/2023/06/ratp-spot-subway-tracks-spot-cam-ir-scaled-cropped.jpg" 
                  alt="지하철 선로 위를 이동하는 Spot" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{t.hazardous.infraTitle}</h3>
                  <p className="text-gray-300">{t.hazardous.infraDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em]">{t.scanning.badge}</h2>
                <p className="text-4xl md:text-6xl font-display font-black leading-tight uppercase">
                  {t.scanning.title1} <br />
                  <span className="text-spot-yellow">{t.scanning.title2}</span>
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.scanning.description}
                </p>
                <div className="flex gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl flex-1">
                    <div className="font-bold text-lg mb-1">{t.scanning.precision}</div>
                    <div className="text-sm text-gray-500">{t.scanning.precisionDesc}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl flex-1">
                    <div className="font-bold text-lg mb-1">{t.scanning.autonomous}</div>
                    <div className="text-sm text-gray-500">{t.scanning.autonomousDesc}</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://www.bostondynamics.com/wp-content/uploads/2023/07/spot-trimble-laser-scanner-acciona-1.jpg" 
                  alt="레이저 스캐너 페이로드를 장착한 Spot" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        <Features t={t.features} />
        <Applications t={t.applications} />
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em] mb-4">{t.video.badge}</h2>
            <p className="text-4xl md:text-6xl font-display font-black mb-12 uppercase">{t.video.title}</p>
            <div className="relative max-w-4xl mx-auto group cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://fast.wistia.com/embed/medias/87pk2qnj6i/swatch" 
                  alt="Spot in Action Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-spot-yellow rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-spot-black fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Specs t={t.specs} />
      </main>
      
      <Footer t={t.footer} />
    </div>
  );
}

