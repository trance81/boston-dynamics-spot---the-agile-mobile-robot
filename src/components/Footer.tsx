import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import logoSvg from '../Resources/Logo-v2.svg';
import logoPng from '../Resources/logo-blue.png';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-spot-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <div className="space-y-12">            
            
            <h2 className="text-5xl md:text-7xl font-display font-black leading-none uppercase">
              {t.title1} <br />
              <span className="text-spot-yellow">{t.title2}</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              {t.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://planit.etevers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spot-yellow text-spot-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all"
              >
                {t.ctaQuote}
              </a>
              <a
                href="https://planit.etevers.com/membership/login.html?return_url=/support/interest_inquiry.html?service_type="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-spot-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                {t.ctaContact}
              </a>              
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-spot-yellow uppercase tracking-widest">{t.contactUs}</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-spot-yellow" />
                  <span>te.joo@etevers.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-spot-yellow" />
                  <span>+82 02-6004-7020</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-spot-yellow" />
                  <span>Seoul, South Korea</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">              
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div>{t.rights}</div>
          
        </div>
      </div>
    </footer>
  );
}
