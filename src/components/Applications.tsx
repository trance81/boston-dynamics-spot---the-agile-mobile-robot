import { motion } from 'motion/react';

interface ApplicationsProps {
  t: any;
}

export default function Applications({ t }: ApplicationsProps) {
  const apps = [
    {
      id: "01",
      title: t.items.industrial.title,
      description: t.items.industrial.description,
      image: "https://bostondynamics.com/wp-content/uploads/2023/07/spot-walking-from-behind.jpg"
    },
    {
      id: "02",
      title: t.items.construction.title,
      description: t.items.construction.description,
      image: "https://www.bostondynamics.com/wp-content/uploads/2023/07/spot-construction-site-with-rebar1-min.jpg"
    },
    {
      id: "03",
      title: t.items.safety.title,
      description: t.items.safety.description,
      image: "https://www.bostondynamics.com/wp-content/uploads/2023/07/spot-firetruck1-min.jpg"
    },
    {
      id: "04",
      title: t.items.research.title,
      description: t.items.research.description,
      image: "https://www.bostondynamics.com/wp-content/uploads/2023/07/jpl-research-payload1-min.jpg"
    }
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
                <button className="text-spot-yellow font-bold flex items-center gap-2 hover:underline">
                  {t.learnMore} 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
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
