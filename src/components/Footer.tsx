import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-spot-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <div className="space-y-12">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-spot-yellow flex items-center justify-center rounded-xl font-display font-black text-2xl text-spot-black">
                BD
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">Boston Dynamics</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black leading-none uppercase">
              {t.title1} <br />
              <span className="text-spot-yellow">{t.title2}</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              {t.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-spot-yellow text-spot-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all">
                {t.ctaQuote}
              </button>
              <button className="bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                {t.ctaContact}
              </button>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-spot-yellow uppercase tracking-widest">{t.contactUs}</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-spot-yellow" />
                  <span>sales@bostondynamics.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-spot-yellow" />
                  <span>+1 (617) 868-5600</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-spot-yellow" />
                  <span>Waltham, MA, USA</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-spot-yellow uppercase tracking-widest">{t.followUs}</h3>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-spot-yellow hover:text-spot-black transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="pt-6">
                <h3 className="text-sm font-bold text-spot-yellow uppercase tracking-widest mb-4">{t.newsletter}</h3>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder={t.emailPlaceholder} 
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex-1 focus:outline-none focus:border-spot-yellow"
                  />
                  <button className="bg-spot-yellow text-spot-black w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div>{t.rights}</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-spot-yellow transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-spot-yellow transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-spot-yellow transition-colors">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
