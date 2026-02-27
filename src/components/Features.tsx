import { motion } from 'motion/react';
import { Shield, Zap, Eye, Cpu, Move, Settings } from 'lucide-react';

const icons = [Move, Eye, Cpu, Settings, Zap, Shield];

interface FeaturesProps {
  t: any;
}

export default function Features({ t }: FeaturesProps) {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-spot-yellow uppercase tracking-[0.3em] mb-4">{t.badge}</h2>
          <p className="text-4xl md:text-6xl font-display font-black uppercase">{t.title}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((feature: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 hover:border-spot-yellow transition-all group hover:shadow-2xl hover:shadow-spot-yellow/5"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-spot-yellow transition-colors">
                  <Icon className="w-7 h-7 text-spot-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
