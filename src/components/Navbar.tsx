/**
 * Navbar
 *
 * 수정 가이드
 * - 메뉴 텍스트: src/translations.ts 의 navbar 섹션 수정
 * - 로고·외부 링크·Planit 버튼: 이 파일의 href/src 값 직접 수정
 */

import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Language } from '@/src/translations';
import logoSvg from '../Resources/Logo-v2.svg';
import logoPng from '../Resources/logo-blue.png';
import mkplogoPng from '../Resources/logo-primary.png';

// --- 수정 영역 (값만 변경, 구문/따옴표 유지) ---
const 이티버스_홈_링크 = 'https://www.etevers.com/main/main.html';
const 보스턴다이내믹스_홈_링크 = 'https://bostondynamics.com/';
const Spot_문의_링크 =
  'https://planit.etevers.com/membership/login.html?return_url=/support/interest_inquiry.html?service_type=';
const Planit_마켓플레이스_링크 = 'https://planitmkp.etevers.com';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

export default function Navbar({ language, setLanguage, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t.overview, href: '#overview' },
    { name: t.features, href: '#features' },
    { name: t.applications, href: '#applications' },
    { name: t.specs, href: '#specs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <a
                href={이티버스_홈_링크}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logoPng}
                  alt="Etevers logo"
                  className="h-6 md:h-6 w-auto"
                />
              </a>
              <span className="text-gray-400 text-lg font-semibold">|</span>
              <a
                href={보스턴다이내믹스_홈_링크}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logoSvg}
                  alt="Boston Dynamics logo"
                  className="h-40 md:h-40 w-auto"
                />
              </a>
            </div>            
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-spot-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l border-gray-200 pl-8">
              <button 
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="flex items-center gap-2 text-sm font-bold hover:text-spot-yellow transition-colors"
              >
                <Globe className="w-4 h-4" />
                {language === 'ko' ? 'EN' : 'KO'}
              </button>
            </div>

            <a
              href={Spot_문의_링크}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-spot-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-spot-yellow hover:text-spot-black transition-all duration-300"
            >
              {t.getSpot}
            </a>

            <a
              href={Planit_마켓플레이스_링크}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-spot-yellow hover:text-spot-black transition-all duration-300"
            >
              {t.getPlanit}
            </a>            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="p-2 text-sm font-bold"
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://planit.etevers.com/membership/login.html?return_url=/support/interest_inquiry.html?service_type="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center bg-spot-black text-white py-4 rounded-xl font-bold hover:bg-spot-yellow hover:text-spot-black transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.getSpot}
          </a>
          <a
            href="https://planitmkp.etevers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-spot-yellow hover:text-spot-black transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.getPlanit}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
