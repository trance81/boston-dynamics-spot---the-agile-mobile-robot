export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    nav: {
      overview: '개요',
      features: '주요 기능',
      applications: '활용 사례',
      specs: '기술 사양',
      getSpot: 'Spot 도입하기 - Planit',
    },
    hero: {
      badge: '전 세계 어디서나 이용 가능',
      title1: '가장 민첩한',
      title2: '모바일',
      title3: '로봇.',
      description: 'Spot은 전례 없는 기동성으로 지형을 탐사하는 민첩한 모바일 로봇입니다. 일상적인 점검 작업과 데이터 캡처를 안전하고 정확하며 빈번하게 자동화할 수 있습니다.',
      ctaQuote: '견적 요청하기',
      ctaWatch: 'Spot 작동 영상 보기',
      statDeployed: '배포된 유닛',
      statCountries: '서비스 국가',
    },
    overview: {
      badge: 'Spot 개요',
      title1: '자율 데이터 수집의',
      title2: '새로운 시대.',
      description: 'Spot은 산업 점검, 공공 안전 및 연구를 포함한 광범위한 응용 분야를 가진 다목적 로봇입니다. 거친 지형 이동성, 360도 장애물 회피 및 다양한 수준의 자율성을 제공합니다.',
      payload: '페이로드',
      protection: '보호 등급',
    },
    fleet: {
      badge: '확장성 및 신뢰성',
      title1: '대규모',
      title2: '군집 자율 주행.',
      description: 'Orbit을 통해 현장의 여러 로봇을 관리하세요. 자율 미션을 예약하고, 라이브 피드를 모니터링하며, 데이터를 기존 시스템에 원활하게 통합할 수 있습니다.',
      cta: '군집 관리 탐색하기',
    },
    hazardous: {
      badge: '위험 환경',
      title: '경계 없는 탐사.',
      miningTitle: '광산 및 지하',
      miningDesc: 'LiDAR와 특수 페이로드를 사용하여 어둡고 밀폐된 공간을 탐사합니다.',
      infraTitle: '위험 인프라',
      infraDesc: '지하철 선로 나 화학 구역과 같은 위험 지역에 원격으로 접근합니다.',
    },
    scanning: {
      badge: '디지털 트윈 및 스캐닝',
      title1: '3D 스캐닝의',
      title2: '단순화.',
      description: 'Spot에 Trimble 레이저 스캐너를 장착하여 건설 현장이나 시설의 고정밀 3D 데이터를 자동으로 캡처하세요.',
      precision: '고정밀',
      precisionDesc: 'BIM 통합을 위한 밀리미터 단위 정확도.',
      autonomous: '자율 주행',
      autonomousDesc: '사람의 개입 없는 예약 스캔.',
    },
    features: {
      badge: '핵심 역량',
      title: '실제 환경을 위해 설계되었습니다.',
      items: [
        {
          title: "독보적인 기동성",
          description: "다른 로봇이 감당할 수 없는 계단, 자갈 및 거친 지형을 탐사합니다."
        },
        {
          title: "고급 센싱",
          description: "360° 시야와 장애물 회피 기능을 갖추어 복잡한 환경에서도 안전하게 이동합니다."
        },
        {
          title: "자율 내비게이션",
          description: "현장을 매핑하고 일관된 데이터 수집을 위해 자율 미션을 예약하세요."
        },
        {
          title: "맞춤형 플랫폼",
          description: "특수 센서, 카메라 및 소프트웨어를 추가하여 Spot을 특정 요구 사항에 맞게 조정하세요."
        },
        {
          title: "산업 등급",
          description: "IP54 방진 및 방수 등급으로 -20°C에서 45°C의 온도에서 작동합니다."
        },
        {
          title: "안전한 작동",
          description: "내장된 안전 기능과 원격 조작으로 사람과 함께 일할 수 있도록 설계되었습니다."
        }
      ]
    },
    applications: {
      badge: '활용 사례',
      title1: '업무가 일어나는',
      title2: '모든 곳에서.',
      description: 'Spot은 다른 로봇이 갈 수 없는 곳으로 가도록 설계되어 가장 도전적인 환경에 자동화를 도입합니다.',
      learnMore: '자세히 보기',
      items: {
        industrial: {
          title: "산업 점검",
          description: "발전소 및 정유 공장에서 열화상 촬영, 누출 감지 및 게이지 판독을 자동화합니다."
        },
        construction: {
          title: "건설",
          description: "일일 자율 현장 순찰을 통해 진행 상황을 추적하고 3D 스캔을 캡처하며 현장 안전을 개선합니다."
        },
        safety: {
          title: "공공 안전",
          description: "생명을 위협하지 않고 위협을 평가하고 상황 인식을 제공하기 위해 위험한 상황에 Spot을 배치합니다."
        },
        research: {
          title: "연구 및 교육",
          description: "로봇 연구, AI 개발 및 차세대 엔지니어 교육을 위한 유연한 플랫폼입니다."
        }
      }
    },
    video: {
      badge: 'Spot 체험하기',
      title: 'Spot의 실제 작동 모습.',
    },
    specs: {
      badge: '기술 사양',
      title1: '정밀한',
      title2: '엔지니어링.',
      description: 'Spot의 모든 구성 요소는 가장 까다로운 산업 환경에서 신뢰성과 성능을 발휘하도록 설계되었습니다.',
      firmware: '최신 펌웨어',
      items: [
        { label: "최대 속도", value: "1.6 m/s", detail: "약 3.6 mph" },
        { label: "작동 시간", value: "90 분", detail: "표준 배터리 기준" },
        { label: "페이로드 용량", value: "14 kg", detail: "30.9 lbs" },
        { label: "지형", value: "계단 / 경사로", detail: "최대 30도" },
        { label: "보호 등급", value: "IP54", detail: "방진 및 방수" },
        { label: "작동 온도", value: "-20°C to 45°C", detail: "-4°F to 113°F" },
        { label: "연결성", value: "WiFi / LTE", detail: "엔터프라이즈 등급" },
        { label: "비전", value: "360° 스테레오", detail: "흑백 + 깊이" },
      ]
    },
    footer: {
      title1: '자동화할',
      title2: '준비가 되셨나요?',
      description: 'Spot으로 운영을 혁신하고 있는 전 세계 수천 개의 기업에 합류하세요.',
      ctaQuote: '견적 요청하기',
      ctaContact: '영업팀 문의',
      contactUs: '문의하기',
      followUs: '팔로우하기',
      newsletter: '뉴스레터',
      emailPlaceholder: '이메일을 입력하세요',
      rights: 'ⓒCopyrighy 1993 by ETEVERSgroup. All Rights Reserved',
      privacy: '개인정보 처리방침',
      terms: '서비스 약관',
      cookies: '쿠키 정책',
    }
  },
  en: {
    nav: {
      overview: 'Overview',
      features: 'Features',
      applications: 'Applications',
      specs: 'Specs',
      getSpot: 'Get Spot - Planit',
    },
    hero: {
      badge: 'Now Available Globally',
      title1: 'THE AGILE',
      title2: 'MOBILE',
      title3: 'ROBOT.',
      description: 'Spot is an agile mobile robot that navigates terrain with unprecedented mobility, allowing you to automate routine inspection tasks and data capture safely, accurately, and frequently.',
      ctaQuote: 'Request a Quote',
      ctaWatch: 'Watch Spot in Action',
      statDeployed: 'Deployed Units',
      statCountries: 'Countries',
    },
    overview: {
      badge: 'The Spot Overview',
      title1: 'A NEW ERA OF',
      title2: 'AUTONOMOUS DATA COLLECTION.',
      description: 'Spot is a general-purpose robot with broad applications, including industrial inspection, public safety, and research. Its base platform provides rough-terrain mobility, 360-degree obstacle avoidance, and various levels of autonomy.',
      payload: 'Payload',
      protection: 'Protection',
    },
    fleet: {
      badge: 'Scalable & Reliable',
      title1: 'FLEET',
      title2: 'AUTONOMY AT SCALE.',
      description: 'Manage multiple robots across your site with Orbit. Schedule autonomous missions, monitor live feeds, and integrate data into your existing systems seamlessly.',
      cta: 'Explore Fleet Management',
    },
    hazardous: {
      badge: 'Hazardous Environments',
      title: 'EXPLORE WITHOUT BOUNDARIES.',
      miningTitle: 'Mining & Underground',
      miningDesc: 'Navigate dark, confined spaces with LiDAR and specialized payloads.',
      infraTitle: 'Hazardous Infrastructure',
      infraDesc: 'Access dangerous areas like subway tracks or chemical zones remotely.',
    },
    scanning: {
      badge: 'Digital Twin & Scanning',
      title1: '3D SCANNING',
      title2: 'SIMPLIFIED.',
      description: 'Equip Spot with Trimble laser scanners to capture high-fidelity 3D data of your construction site or facility automatically.',
      precision: 'High Precision',
      precisionDesc: 'Millimeter accuracy for BIM integration.',
      autonomous: 'Autonomous',
      autonomousDesc: 'Scheduled scans without human intervention.',
    },
    features: {
      badge: 'Core Capabilities',
      title: 'BUILT FOR THE REAL WORLD.',
      items: [
        {
          title: "Unmatched Mobility",
          description: "Navigate stairs, gravel, and rough terrain that other robots simply can't handle."
        },
        {
          title: "Advanced Sensing",
          description: "Equipped with 360° vision and obstacle avoidance to navigate safely in complex environments."
        },
        {
          title: "Autonomous Navigation",
          description: "Map your site and schedule autonomous missions for consistent data collection."
        },
        {
          title: "Customizable Platform",
          description: "Add specialized sensors, cameras, and software to tailor Spot to your specific needs."
        },
        {
          title: "Industrial Grade",
          description: "IP54 rated for dust and water protection, operating in temperatures from -20°C to 45°C."
        },
        {
          title: "Safe Operation",
          description: "Designed to work alongside people with built-in safety features and remote operation."
        }
      ]
    },
    applications: {
      badge: 'Applications',
      title1: 'WHEREVER',
      title2: 'WORK HAPPENS.',
      description: 'Spot is designed to go where other robots can\'t, bringing automation to the most challenging environments on Earth.',
      learnMore: 'Learn More',
      items: {
        industrial: {
          title: "Industrial Inspection",
          description: "Automate thermal imaging, leak detection, and gauge reading in power plants and oil refineries."
        },
        construction: {
          title: "Construction",
          description: "Track progress, capture 3D scans, and improve site safety with daily autonomous site walks."
        },
        safety: {
          title: "Public Safety",
          description: "Deploy Spot in hazardous situations to assess threats and provide situational awareness without risking lives."
        },
        research: {
          title: "Research & Education",
          description: "A flexible platform for robotics research, AI development, and teaching the next generation of engineers."
        }
      }
    },
    video: {
      badge: 'Experience Spot',
      title: 'SEE SPOT IN ACTION.',
    },
    specs: {
      badge: 'Technical Specifications',
      title1: 'PRECISION',
      title2: 'ENGINEERING.',
      description: 'Every component of Spot is engineered for reliability and performance in the most demanding industrial environments.',
      firmware: 'Latest Firmware',
      items: [
        { label: "Max Speed", value: "1.6 m/s", detail: "Approx. 3.6 mph" },
        { label: "Runtime", value: "90 min", detail: "With standard battery" },
        { label: "Payload Capacity", value: "14 kg", detail: "30.9 lbs" },
        { label: "Terrain", value: "Stairs / Slopes", detail: "Up to 30 degrees" },
        { label: "Ingress Protection", value: "IP54", detail: "Dust & Water resistant" },
        { label: "Operating Temp", value: "-20°C to 45°C", detail: "-4°F to 113°F" },
        { label: "Connectivity", value: "WiFi / LTE", detail: "Enterprise grade" },
        { label: "Vision", value: "360° Stereo", detail: "Monochrome + Depth" },
      ]
    },
    footer: {
      title1: 'READY TO',
      title2: 'AUTOMATE?',
      description: 'Join the thousands of companies worldwide that are transforming their operations with Spot.',
      ctaQuote: 'Request a Quote',
      ctaContact: 'Contact Sales',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Enter your email',
      rights: 'ⓒCopyrighy 1993 by ETEVERSgroup. All Rights Reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookies',
    }
  }
};
