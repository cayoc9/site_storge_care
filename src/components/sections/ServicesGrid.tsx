import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Troca de curativos",
      description: "Cuidados especializados com feridas e pós-operatórios.",
      image: "/assets/photos/service-curativos.jpg"
    },
    {
      title: "Cuidadoria",
      description: "Crianças, idosos e pacientes em reabilitação.",
      image: "/assets/photos/service-cuidadoria.jpg"
    },
    {
      title: "Aplicação de medicamentos",
      description: "Administração segura de injetáveis e medicações prescritas.",
      image: "/assets/photos/service-medicamentos.jpg"
    },
    {
      title: "Acompanhamentos",
      description: "Suporte em consultas, exames e procedimentos externos.",
      image: "/assets/photos/service-acompanhamentos.jpg"
    },
    {
      title: "Cuidados com colostomia",
      description: "Orientações e cuidados especializados com estomias.",
      image: "/assets/photos/service-colostomia.jpg"
    },
    {
      title: "Fisioterapia neurológica",
      description: "Reabilitação focada em pacientes com sequelas neurológicas.",
      image: "/assets/photos/service-fisio-neuro.jpg"
    },
    {
      title: "Fisioterapia respiratória",
      description: "Cuidados específicos para saúde cardiorrespiratória.",
      image: "/assets/photos/service-fisio-resp.jpg"
    },
    {
      title: "Plantões de 6 a 24hrs",
      description: "Assistência contínua adaptada à necessidade da família.",
      image: "/assets/photos/service-plantoes.jpg"
    }
  ];

  return (
    <section id="servicos" className="bg-storge-primary py-32 px-4">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center text-white space-y-6">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter">
            Especialidades na palma da sua mão <br className="hidden md:block" /> com a Storge.
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Mais de 20 tipos de atendimento sem precisar sair de casa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-pointer bg-white/5 rounded-[2rem] p-5 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 border border-white/10">
              {/* Image Container */}
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] mb-6 shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Arrow Icon Badge */}
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-500">
                  <ArrowUpRight className="text-storge-primary w-5 h-5" />
                </div>
              </div>

              {/* Text */}
              <div className="text-white text-left space-y-2">
                <h4 className="text-xl font-bold leading-tight group-hover:text-storge-light transition-colors">{service.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
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
