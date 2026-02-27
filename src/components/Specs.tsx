import { motion } from 'motion/react';

interface SpecsProps {
  t: any;
}

export default function Specs({ t }: SpecsProps) {
  return (
    <section id="specs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em] mb-4">{t.badge}</h2>
            <p className="text-4xl font-display font-black mb-6 uppercase">{t.title1} <br />{t.title2}</p>
            <p className="text-gray-600 mb-8">
              {t.description}
            </p>
            <div className="p-6 bg-spot-black text-white rounded-2xl">
              <div className="text-xs uppercase tracking-widest text-spot-yellow mb-2">{t.firmware}</div>
              <div className="text-xl font-mono">v3.3.1_STABLE</div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden">
            {t.items.map((spec: any, index: number) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 hover:bg-spot-yellow/5 transition-colors"
              >
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">{spec.label}</div>
                <div className="text-3xl font-display font-bold mb-1">{spec.value}</div>
                <div className="text-sm text-gray-500 italic font-serif">{spec.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
