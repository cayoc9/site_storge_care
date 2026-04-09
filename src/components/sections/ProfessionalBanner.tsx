import React from 'react';
import { Button } from '@/components/ui/button';

export const ProfessionalBanner = () => {
  return (
    <section id="parceria" className="px-4 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto relative rounded-storge overflow-hidden aspect-[16/9] md:aspect-[18/7] min-h-[440px] md:min-h-[500px] flex items-center justify-center text-center p-8 md:p-10 lg:p-14">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="/assets/photos/professional-banner.jpg"
            alt="Profissionais de saúde parceiros"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl text-white space-y-6 animate-in fade-in zoom-in duration-700">
          <p className="text-sm font-bold tracking-[0.2em] text-storge-primary uppercase">Para profissionais de saúde</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Seja um profissional parceiro <br /> da nossa plataforma.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Se cadastre e consiga atender mais pacientes, ter uma renda extra e ainda ter acesso a cursos e certificações de diversos procedimentos especializados.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-10 h-14 text-base font-bold">
              Faça seu cadastro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
