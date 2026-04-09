import React from 'react';

import { STORGE_WHATSAPP_URL } from '@/lib/site';

export const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto relative rounded-storge overflow-hidden aspect-[4/5] md:aspect-[16/9] min-h-[500px] md:min-h-[400px] flex items-center justify-center text-center p-8">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          <img
            src="/assets/photos/cta.jpg"
            alt="Agendamento rápido"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-xl text-white space-y-6">
          <p className="text-sm font-bold tracking-widest text-white/80 uppercase">Cuidados especializados</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Agende seu atendimento em <span className="text-storge-primary">poucos minutos.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-sm mx-auto">
            De forma simples, acessível e segura, no conforto da sua casa.
          </p>
          <div className="pt-4">
            <a
              href={STORGE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center rounded-full bg-storge-primary px-10 text-base font-bold text-white transition-all hover:scale-105 hover:bg-storge-primary/90 active:scale-95"
            >
              Agendar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
