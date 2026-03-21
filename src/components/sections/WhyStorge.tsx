import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyStorge = () => {
  const benefits = [
    {
      title: "Segurança e confiança",
      description: "Profissionais certificados e treinados para atendimento domiciliar."
    },
    {
      title: "Agilidade no atendimento",
      description: "Você solicita e em poucos cliques agenda o atendimento."
    },
    {
      title: "Plataforma digital inteligente",
      description: "Prontuário eletrônico, lembretes e histórico de atendimentos."
    }
  ];

  return (
    <section className="py-24 px-4 bg-storge-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <div className="space-y-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-storge-dark leading-tight">
              Por que a Storge <br />
              <span className="text-storge-primary font-bold">é diferente?</span>
          </h2>

          <div className="space-y-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-storge-primary/5 transition-colors">
                    <CheckCircle2 className="text-storge-primary w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-storge-dark leading-none">{benefit.title}</h4>
                  <p className="text-storge-dark/60 leading-relaxed text-base max-w-sm mx-auto lg:mx-0">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image (Professional) */}
        <div className="relative group">
          <div className="absolute inset-0 bg-storge-primary/10 rounded-storge scale-105 translate-x-6 translate-y-6 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
          <div className="relative rounded-storge overflow-hidden aspect-[3/4] lg:aspect-square shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1590611380053-1fd55971a7bb?auto=format&fit=crop&q=80&w=1000" 
              alt="Profissional Storge Care"
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
