import React from 'react';
import { Play } from 'lucide-react';

import { STORGE_WHATSAPP_URL } from '@/lib/site';

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-storge overflow-hidden aspect-[4/5] md:aspect-[21/9] min-h-[600px] md:min-h-[500px] flex items-center px-6 sm:px-16 lg:px-24">

          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Imagem de placeholder representativa */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <img
              src="/assets/photos/hero.jpg"
              alt="Atendimento Storge Care"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-2xl text-white space-y-8 animate-in fade-in slide-in-from-bottom lg:slide-in-from-left duration-1000 text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Saúde de qualidade <br />
              no conforto do <span className="text-storge-primary italic underline underline-offset-8">seu lar</span>.
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Conheça a Storge, a plataforma de saúde domiciliar que conecta você à profissionais de saúde sem sair de casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center lg:items-start justify-center lg:justify-start">
              <a
                href={STORGE_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center rounded-full bg-storge-primary px-8 text-base font-bold text-white shadow-lg shadow-storge-primary/20 transition-colors hover:bg-storge-primary/90"
              >
                Agendar procedimento
              </a>
              <button className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center rounded-full border-2 border-white text-white transition-all hover:bg-white/10 px-8 text-base font-bold font-bold">
                <Play className="mr-2 h-5 w-5 fill-white" />
                Assistir Manifesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
