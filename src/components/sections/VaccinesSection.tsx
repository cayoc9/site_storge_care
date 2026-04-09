import React from 'react';
import { ShieldCheck, Snowflake, Syringe } from 'lucide-react';

import { STORGE_WHATSAPP_URL } from '@/lib/site';

const familyProfiles = ['Bebes', 'Criancas', 'Adolescentes', 'Adultos', 'Gestantes', '60+'];

const vaccines = [
  'Hepatite A e B',
  'Pentavalente',
  'VIP (Poliomielite)',
  'Rotavirus',
  'Meningococicas (B, C e ACWY)',
  'Pneumococicas 15 e 20',
  'Febre Amarela',
  'Triplice Viral (Sarampo, Caxumba e Rubeola)',
  'Varicela (Catapora)',
  'HPV',
  'Dengue',
  'Influenza (Gripe)',
  'Herpes',
  'Hexavalente',
  'DTP',
];

const safetyItems = [
  {
    icon: Snowflake,
    title: 'Armazenamento controlado',
    description: 'Vacinas mantidas em temperatura monitorada para preservar estabilidade e seguranca.',
  },
  {
    icon: ShieldCheck,
    title: 'Transporte adequado',
    description: 'Equipamentos especificos mantem as condicoes ideais ate o momento da aplicacao.',
  },
  {
    icon: Syringe,
    title: 'Atendimento preparado',
    description: 'Profissionais qualificados conduzem a aplicacao com tecnica, orientacao e acolhimento.',
  },
];

export const VaccinesSection = () => {
  return (
    <section id="vacinas" className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-storge-primary uppercase">
                Vacinacao domiciliar
              </p>
              <h2 className="text-3xl md:text-6xl font-bold text-storge-dark tracking-tighter leading-tight">
                Vacinas em casa com mais conforto, seguranca e praticidade.
              </h2>
              <p className="text-lg md:text-xl text-storge-dark/70 leading-relaxed max-w-2xl">
                Agende suas vacinas no melhor horario para a sua rotina, com atendimento domiciliar e orientacao individualizada para cada fase da vida.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {familyProfiles.map((profile) => (
                <span
                  key={profile}
                  className="rounded-full border border-storge-primary/15 bg-storge-primary/5 px-4 py-2 text-sm font-semibold text-storge-dark"
                >
                  {profile}
                </span>
              ))}
            </div>

            <div className="rounded-[2rem] bg-storge-light border border-storge-primary/10 p-6 md:p-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-storge-dark tracking-tight">
                Vacinas disponiveis
              </h3>
              <p className="text-storge-dark/65 leading-relaxed">
                As indicacoes variam conforme idade, historico e momento de saude. Nossa equipe orienta voce durante o atendimento para definir a melhor conduta.
              </p>
              <div className="flex flex-wrap gap-3">
                {vaccines.map((vaccine) => (
                  <span
                    key={vaccine}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-storge-dark shadow-sm border border-gray-100"
                  >
                    {vaccine}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-storge-dark text-white border border-storge-dark/10 shadow-2xl shadow-storge-dark/10">
            <div className="p-8 md:p-10 space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-bold tracking-[0.3em] text-white/60 uppercase">
                  Uma experiencia mais confortavel
                </p>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                  Vacinar em casa traz mais tranquilidade para criancas, mais comodidade para rotinas intensas e mais privacidade para cuidar da saude com calma.
                </p>
                <p className="text-base text-white/65 leading-relaxed">
                  Tambem utilizamos recursos que tornam a aplicacao mais leve, especialmente para o publico infantil, reduzindo a percepcao da picada quando indicado.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Seguranca em todo o processo
                </h3>
                <div className="grid gap-4">
                  {safetyItems.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="rounded-[1.5rem] bg-white/6 border border-white/10 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-storge-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold text-white">{title}</h4>
                          <p className="text-sm leading-relaxed text-white/70">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={STORGE_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-storge-primary px-8 text-base font-bold text-white transition-all hover:scale-[1.01] hover:bg-storge-primary/90"
              >
                Agendar vacinacao pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
