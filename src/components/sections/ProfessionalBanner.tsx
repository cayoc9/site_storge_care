import React from 'react';
import { Button } from '@/components/ui/button';

export const ProfessionalBanner = () => {
  return (
    <section id="parceria" className="px-4 py-12">
      <div className="max-w-7xl mx-auto relative rounded-storge overflow-hidden aspect-[16/9] md:aspect-[21/7] min-h-[400px] flex items-center justify-center text-center p-8">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=2000" 
            alt="Profissionais de saúde parceiros"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-2xl text-white space-y-6 animate-in fade-in zoom-in duration-700">
          <p className="text-sm font-bold tracking-[0.2em] text-storge-primary uppercase">Profissionais da saúde</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Atenda mais pacientes e <br /> aumente sua renda.
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Seja conectado a pacientes domiciliares que buscam profissionais nas áreas de enfermagem, fisioterapia, odontologia e terapia ocupacional.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-10 h-14 text-base font-bold">
              Quero me cadastrar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
