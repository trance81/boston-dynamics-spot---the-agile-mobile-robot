/**
 * Hero 섹션 (메인 페이지 최상단)
 *
 * 수정 가이드
 * - 문구(타이틀, 버튼 글자 등): src/translations.ts 의 hero (ko, en) 수정
 * - 링크·숫자·이미지 설명·영상: 아래 상수 구간만 수정. 그 외 코드는 변경 금지
 */

import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import spotThermalHero from '../Resources/spot-thermal-hero.jpg';

// --- 수정 영역 (값만 변경, 구문/따옴표 유지) ---
const 견적요청하기_버튼_링크 =
  'https://planit.etevers.com/membership/login.html?return_url=/support/interest_inquiry.html?service_type=';
const 영상_파일명 = '/Spot_Launch.mp4';
const 통계_숫자_1 = '1,000+';
const 통계_숫자_2 = '35+';
const 이미지_설명 = '전력 설비 현장에서 점검 중인 Spot';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
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
                href={견적요청하기_버튼_링크}
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
                <div className="text-2xl font-bold">{통계_숫자_1}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {t.statDeployed}
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold">{통계_숫자_2}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {t.statCountries}
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full max-w-xl aspect-4/3">
              <img
                src={spotThermalHero}
                alt={이미지_설명}
                className="w-full h-full object-cover"
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
              {t.closeVideo}
            </button>
            <video
              className="w-full h-full object-cover"
              src={영상_파일명}
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
