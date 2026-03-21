import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export const ValueProposition = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Image (Hug) */}
        <div className="relative order-2 lg:order-1 group">
          <div className="absolute inset-0 bg-pink-100 rounded-storge -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
          <div className="relative rounded-storge overflow-hidden aspect-square shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000" 
              alt="Cuidado e afeto Storge Care"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
          
          {/* Badge: Belém */}
          <div className="absolute -bottom-6 -right-6 lg:right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="w-10 h-10 bg-storge-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="text-storge-primary w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-storge-dark uppercase tracking-wider">Atendemos em</p>
              <p className="text-sm font-bold text-storge-primary">Belém e região metropolitana</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-storge-dark leading-tight">
                Muito mais que um <br />
                <span className="text-storge-primary">serviço de saúde.</span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-storge-dark/40 italic">
                Um ecossistema para <br />
                você viver melhor.
            </h3>
          </div>
          
          <p className="text-lg text-storge-dark/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
            A StorgeCare é uma plataforma de saúde domiciliar que entende que o lar é lugar de cuidado. 
            Nosso objetivo é simplificar o acesso à saúde para quem cuida e para quem precisa ser cuidado.
          </p>

          <Button size="lg" className="w-full sm:w-auto bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-8 h-14 text-base font-bold">
            Agendar atendimento
          </Button>
        </div>
      </div>
    </section>
  );
};
