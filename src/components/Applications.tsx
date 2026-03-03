/**
 * Applications 섹션
 *
 * 수정 가이드
 * - 문구(타이틀, 설명, 각 항목 텍스트): src/translations.ts 의 applications 섹션 수정
 * - 각 항목 이미지: 이 파일 상단의 import 경로 및 apps 배열의 image 값 수정
 */

import { motion } from 'motion/react';
import imgWalkingBehind from '../Resources/spot-walking-behind.jpg';
import imgConstructionRebar from '../Resources/spot-construction-rebar.jpg';
import imgFiretruck from '../Resources/spot-firetruck.jpg';
import imgJplResearch from '../Resources/spot-jpl-research.jpg';

// --- 수정 영역 (값만 변경, 구문/따옴표 유지) ---
const 응용_산업_이미지 = imgWalkingBehind;
const 응용_건설_이미지 = imgConstructionRebar;
const 응용_안전_이미지 = imgFiretruck;
const 응용_연구_이미지 = imgJplResearch;

interface ApplicationsProps {
  t: any;
}

export default function Applications({ t }: ApplicationsProps) {
  const apps = [
    {
      id: "01",
      title: t.items.industrial.title,
      description: t.items.industrial.description,
      image: 응용_산업_이미지,
    },
    {
      id: "02",
      title: t.items.construction.title,
      description: t.items.construction.description,
      image: 응용_건설_이미지,
    },
    {
      id: "03",
      title: t.items.safety.title,
      description: t.items.safety.description,
      image: 응용_안전_이미지,
    },
    {
      id: "04",
      title: t.items.research.title,
      description: t.items.research.description,
      image: 응용_연구_이미지,
    },
  ];

  return (
    <section id="applications" className="py-24 bg-spot-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em] mb-4">{t.badge}</h2>
            <p className="text-4xl md:text-7xl font-display font-black leading-none uppercase">
              {t.title1} <br />
              <span className="text-spot-yellow">{t.title2}</span>
            </p>
          </div>
          <p className="text-gray-400 max-w-sm text-lg">
            {t.description}
          </p>
        </div>

        <div className="grid gap-12">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <span className="text-6xl font-display font-black text-white/10">{app.id}</span>
                <h3 className="text-3xl font-bold">{app.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {app.description}
                </p>                
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
