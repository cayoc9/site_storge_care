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
    <section className="py-32 px-4 bg-storge-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        {/* Left: Content */}
        <div className="space-y-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-storge-dark leading-tight tracking-tighter">
            Por que a Storge <br />
            <span className="text-storge-primary font-bold">é diferente?</span>
          </h2>

          <div className="space-y-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-storge-primary/5 transition-all duration-300 group-hover:scale-110">
                  <CheckCircle2 className="text-storge-primary w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-storge-dark leading-none">{benefit.title}</h4>
                  <p className="text-storge-dark/60 leading-relaxed text-lg max-w-sm mx-auto lg:mx-0">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image (Professional) */}
        <div className="relative group">
          <div className="absolute inset-0 bg-storge-primary/10 rounded-storge scale-105 translate-x-8 translate-y-8 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-700" />
          <div className="relative rounded-storge overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-3xl">
            <img
              src="/assets/photos/why-storge.jpg"
              alt="Profissional Storge Care"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
