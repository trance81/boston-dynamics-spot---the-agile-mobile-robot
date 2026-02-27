import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Language } from '@/src/translations';
import logoSvg from '../Resources/Logo-v2.svg';
import logoPng from '../Resources/logo-blue.png';

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
              <img
                src={logoPng}
                alt="Boston Dynamics logo"
                className="h-6 md:h-6 w-auto"
              />
              <span className="text-gray-400 text-lg font-semibold">|</span>
              <img
                src={logoSvg}
                alt="Boston Dynamics logo"
                className="h-40 md:h-40 w-auto"
              />
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
              href="https://planit.etevers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-spot-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-spot-yellow hover:text-spot-black transition-all duration-300"
            >
              {t.getSpot}
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
          <button className="w-full bg-spot-black text-white py-4 rounded-xl font-bold">
            {t.getSpot}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
