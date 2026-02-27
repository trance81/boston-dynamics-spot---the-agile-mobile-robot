import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Language } from '@/src/translations';

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
            <div className="w-10 h-10 bg-spot-yellow flex items-center justify-center rounded-lg font-display font-black text-xl">
              BD
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase">Boston Dynamics</span>
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

            <button className="bg-spot-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-spot-yellow hover:text-spot-black transition-all duration-300">
              {t.getSpot}
            </button>
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
