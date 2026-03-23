import React from 'react';
import { ClipboardCheck, FileText, CalendarDays } from 'lucide-react';

export const StepsSection = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-10 h-10 text-storge-primary" />,
      title: "Selecione a especialidade",
      description: "Escolha a especialidade e o tipo de atendimento que você precisa."
    },
    {
      icon: <FileText className="w-10 h-10 text-storge-primary" />,
      title: "Informe o tratamento",
      description: "Conte-nos um pouco sobre o problema ou tratamento necessário."
    },
    {
      icon: <CalendarDays className="w-10 h-10 text-storge-primary" />,
      title: "Agende seu atendimento",
      description: "Selecione o melhor dia e horário para receber nossa equipe."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-storge-primary uppercase">O Caminho do Cuidado</p>
          <h2 className="text-3xl md:text-6xl font-bold text-storge-dark tracking-tighter">
            Agende seu atendimento <br className="hidden md:block" /> em poucos minutos.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative">
          {/* Connector Line (Desktop) - Adjusted for alignment */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gray-100 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-8 group">
              <div className="w-24 h-24 bg-storge-light rounded-full flex items-center justify-center shadow-xl border border-gray-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
                <div className="transition-transform duration-500 group-hover:rotate-[10deg]">
                    {step.icon}
                </div>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-storge-primary/10 text-storge-primary text-sm font-bold mb-2">
                    {idx + 1}
                </div>
                <h4 className="text-2xl font-bold text-storge-dark">{step.title}</h4>
                <p className="text-storge-dark/60 text-lg leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
