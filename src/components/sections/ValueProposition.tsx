import React from 'react';
import { MapPin } from 'lucide-react';

import { STORGE_WHATSAPP_URL } from '@/lib/site';

export const ValueProposition = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left: Image (Hug) */}
        <div className="relative order-2 lg:order-1 group">
          <div className="absolute inset-0 bg-storge-primary/5 rounded-storge -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
          <div className="relative rounded-storge overflow-hidden aspect-square shadow-2xl border border-gray-100">
            <img
              src="/assets/photos/value-proposition.jpg"
              alt="Cuidado e afeto Storge Care"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </div>

          {/* Badge: Belém */}
          <div className="absolute -bottom-6 -right-6 lg:right-12 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow border border-storge-primary/10">
            <div className="w-12 h-12 bg-storge-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="text-storge-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-storge-dark/40 uppercase tracking-widest leading-none mb-1">Área de Atuação</p>
              <p className="text-base font-bold text-storge-dark">Belém e região metropolitana</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-10 order-1 lg:order-2 text-center lg:text-left">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-storge-dark leading-tight tracking-tighter">
              Muito mais que um <br />
              <span className="text-storge-primary">serviço de saúde.</span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-medium text-storge-dark/30 italic">
              Um ecossistema para <br />
              você viver melhor.
            </h3>
          </div>

          <p className="text-xl text-storge-dark/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
            A Storge Care é uma plataforma de saúde domiciliar que entende que o lar é lugar de cuidado.
            Nosso objetivo é simplificar o acesso à saúde para quem cuida e para quem precisa ser cuidado.
          </p>

          <div className="pt-4">
            <a
              href={STORGE_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-16 w-full sm:w-auto items-center justify-center rounded-full bg-storge-primary px-10 text-lg font-bold text-white shadow-xl shadow-storge-primary/20 transition-all hover:scale-105 hover:bg-storge-primary/90"
            >
              Agendar atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
