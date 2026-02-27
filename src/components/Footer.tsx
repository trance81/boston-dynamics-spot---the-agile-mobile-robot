import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Youtube, Instagram, Facebook, Home, PenSquare } from 'lucide-react';
import { useState } from 'react';
import logoSvg from '../Resources/Logo-v2.svg';
import logoPng from '../Resources/logo-blue.png';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
                href="https://planit.etevers.com/membership/login.html?return_url=/support/interest_inquiry.html?service_type="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spot-yellow text-spot-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all"
              >
                {t.ctaQuote}
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
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          {[
            { Icon: Home, href: 'https://www.etevers.com/main/main.html' }, 
            { Icon: Facebook, href: 'https://www.facebook.com/ETEVERS.official/' },             
            { Icon: Instagram, href: 'https://www.instagram.com/etevers_official/' },            
            { Icon: PenSquare, href: 'https://blog.naver.com/etevers_official' },
            { Icon: Youtube, href: 'https://www.youtube.com/@ETEVERS' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-spot-yellow hover:text-spot-black transition-all"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="pt-1 text-left text-sm text-white-400 mb-2">
          서울특별시 중구 소월로 3 (주)에티버스 | 대표자. 이호준, 김범수, 정인욱 | 대표전화. 02-6004-7000 | 팩스. 02.3446-0085 |{' '}
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="text-gray-400 underline-offset-4 hover:text-spot-yellow"
          >
            개인정보보호방침
          </button>
        </div>

        <div className="pt-1 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div>{t.rights}</div>
          
        </div>
      </div>

      {isPrivacyOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="bg-white text-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b-2 border-red-100 pb-2">
              
              <h2 className="text-xl font-bold text-gray-900">개인정보보호방침</h2>
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-800"
                onClick={() => setIsPrivacyOpen(false)}
              >
                <h1 className="text-xl font-bold text-gray-900">X</h1>
              </button>
            </div>
            <p className="text-xs leading-relaxed text-gray-700">
              <strong>[개인정보 수집 · 이용 동의]</strong>
              <br />
              <br />
              {'‘㈜에티버스·보스턴 다이나믹스’는 다음과 같이 귀하의 개인 정보를 수집 및 이용합니다.'}
              <br />
              <br />
              {'· 수집하는 개인정보 항목 : 회사명, 성함 및 직급, 회사 메일주소, 전화번호'}
              <br />
              {
                "· 수집 이용 목적 : '㈜에티버스·보스턴 다이나믹스'는 제품·서비스 관련 정보 제공, 프로모션 안내, 시장 조사 등을 목적으로 온·오프라인(EDM, Call, SMS 등)을 통해 정보를 제공합니다. 귀하는 개인정보의 수집·이용에 대한 동의를 거부할 수 있으며, 동의를 거부한 경우에는 귀하에게 그와 관련된 정보나 혜택은 제공하지 않게 됩니다."
              }
              <br />
              {
                "· 보유 및 이용기간 : '㈜에티버스·보스턴 다이나믹스'는 고객 서비스 증진, 제품·서비스에 대한 정보 제공 및 판매, 프로모션 또는 시장 조사를 목적으로 귀하의 동의가 있는 경우 상기 항목을 수집하여 그 목적 달성 시까지 이용·보유 하게 됩니다. 단, 개인정보가 불필요하게 되거나 정보 주체의 요청이 있을 시에는 그 개인정보를 파기하게 됩니다."
              }
              <br />
              <br />
              <strong>[개인정보 제3자 제공 및 취급 위탁 동의]</strong>
              <br />
              <br />
              {
                "‘㈜에티버스·보스턴 다이나믹스'는 다음과 같은 마케팅과 커뮤니케이션 등의 목적으로 '㈜에티버스·보스턴 다이나믹스'를 보조하는 서비스 제공자와 공급자인 제 3자에게 개인정보를 제공하거나 취급을 위탁할 수 있습니다."
              }
              <br />
              <br />
              {'· 수탁자 : 보스턴 다이나믹스'}
              <br />
              {'· 위탁 및 수집 항목 : 회사명, 성함 및 직급, 회사 메일주소, 전화번호'}
              <br />
              {'· 이용 목적 및 위탁 업무 내용 : 세미나/이벤트 등 마케팅 프로모션 참석 및 등록 확인, 세미나/이벤트 설문지 키인 작업 및 통계 분석, 기프트 제공'}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
