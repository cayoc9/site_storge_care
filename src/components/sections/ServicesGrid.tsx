import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Cuidado materno-infantil",
      description: "Aleitamento materno, Fototerapia domiciliar, Laserterapia, Furo de orelha humanizado.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cuidadoria",
      description: "Crianças, idosos e pacientes em reabilitação.",
      image: "https://images.unsplash.com/photo-1581578731522-7452f9692182?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Enfermagem domiciliar",
      description: "Curativos e Aplicação de medicamentos.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="servicos" className="bg-storge-primary py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center text-white space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Serviços que você pode <br className="hidden md:block" /> agendar em casa:
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Mais de 20 tipos de atendimento sem precisar sair de casa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative rounded-storge overflow-hidden aspect-square shadow-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Arrow Icon Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="text-storge-primary w-6 h-6" />
                </div>
              </div>

              {/* Text */}
              <div className="text-white text-center space-y-2">
                <h4 className="text-2xl font-bold">{service.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed px-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
