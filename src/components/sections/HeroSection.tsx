import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-storge overflow-hidden aspect-[16/10] md:aspect-[21/9] min-h-[500px] flex items-center px-8 sm:px-16 lg:px-24">
          
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Imagem de placeholder representativa */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000" 
              alt="Atendimento Storge Care"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-2xl text-white space-y-8 animate-in fade-in slide-in-from-bottom lg:slide-in-from-left duration-1000 text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Saúde em casa, <br />
                <span className="text-storge-primary italic underline underline-offset-8">com afeto</span> e agilidade.
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Conectamos você a profissionais de enfermagem e fisioterapia, no conforto do seu lar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center lg:items-start justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-storge-primary/20">
                Agendar atendimento
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-bold">
                <Play className="mr-2 h-5 w-5 fill-white" />
                Assistir Manifesto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
