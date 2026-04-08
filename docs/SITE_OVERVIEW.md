# Storge Care — Site Overview

Visão geral completa da estrutura, layout e seções do site institucional da Storge Care.

---

## 📚 Stack Tecnológico

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| CMS | Payload CMS 3.0 |
| Banco de Dados | PostgreSQL 15 |
| Estilização | TailwindCSS 4 + shadcn/ui |
| Linguagem | TypeScript 5 |
| Containerização | Docker + Docker Compose |
| Analytics | Google Tag Manager (GTM) |

---

## 📁 Estrutura de Arquivos

```
site_storge_care/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (HTML, metadados SEO, GTM)
│   │   ├── page.tsx            # Página principal (/ homepage)
│   │   ├── globals.css         # Estilos globais + tokens de design
│   │   ├── robots.ts           # Configuração do robots.txt
│   │   └── sitemap.ts          # Geração dinâmica do sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Barra de navegação (fixed, responsive)
│   │   │   └── Footer.tsx      # Rodapé com contato e redes sociais
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Seção hero (banner principal)
│   │   │   ├── StepsSection.tsx        # Como agendar (3 passos)
│   │   │   ├── ValueProposition.tsx    # Proposta de valor (#sobre)
│   │   │   ├── WhyStorge.tsx           # Por que escolher a Storge
│   │   │   ├── ProfessionalBanner.tsx  # CTA para profissionais (#parceria)
│   │   │   ├── ServicesGrid.tsx        # Grade de serviços (#servicos)
│   │   │   └── CTASection.tsx          # CTA final de agendamento
│   │   └── ui/
│   │       ├── button.tsx      # Componente botão (shadcn)
│   │       ├── card.tsx        # Componente card (shadcn)
│   │       ├── checkbox.tsx    # Componente checkbox (shadcn)
│   │       └── input.tsx       # Componente input (shadcn)
│   └── lib/
│       └── utils.ts            # Utilitários (cn helper)
├── public/
│   ├── assets/
│   │   ├── logo.svg                    # Logo da marca
│   │   ├── facebook.svg / instagram.svg / x.svg  # Ícones de redes sociais
│   │   ├── icon1.svg / icon2.svg / icon3.svg      # Ícones adicionais
│   │   └── photos/                     # Fotografias utilizadas nas seções
│   │       ├── hero.jpg
│   │       ├── value-proposition.jpg
│   │       ├── why-storge.jpg
│   │       ├── professional-banner.jpg
│   │       ├── cta.jpg
│   │       └── service-*.jpg (×8)      # Fotos dos serviços
│   └── favicon*                        # Ícones do site
├── docs/
│   └── visuals/                        # Screenshots de referência visual
│       ├── FINAL-FULL-DESKTOP.png
│       ├── FINAL-FULL-PHONE.png
│       ├── FINAL-FULL-TABLET.png
│       ├── slices/                     # Cortes por seção (desktop)
│       └── slices_phone/              # Cortes por seção (mobile)
├── collections/                        # Coleções do Payload CMS
├── payload.config.ts                   # Configuração do Payload CMS
├── next.config.ts                      # Configuração do Next.js
├── tailwind.config.ts                  # Configuração do Tailwind CSS
├── docker-compose.yml                  # Ambiente de desenvolvimento
└── docker-compose.prod.yml             # Ambiente de produção
```

---

## 🎨 Sistema de Design

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `storge-primary` | `#E83152` | Cor de destaque (botões, links, ícones) |
| `storge-dark` | `#0F172A` | Textos principais |
| `storge-light` | `#FCFCFC` | Fundos off-white |

### Tipografia

- **Fonte principal:** Geist Sans (variável `--font-geist-sans`)
- **Fonte mono:** Geist Mono (variável `--font-geist-mono`)
- **Classes utilitárias:**
  - `.storge-title` — Títulos em negrito com tracking ajustado
  - `.storge-text` — Textos corridos com `leading-relaxed`

### Border Radius

- `rounded-storge` = `2rem` — Arredondamento característico das fotos e cartões

### Componentes UI Base (shadcn/ui)

- `Button` — Variantes: `default`, `outline`, `ghost`; Tamanhos: `sm`, `default`, `lg`, `icon`
- `Card` — Container com sombra e borda
- `Input` — Campo de texto estilizado
- `Checkbox` — Caixa de seleção acessível

---

## 🗺️ Rotas do Site

| Rota | Arquivo | Descrição |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage com todas as seções |
| `/robots.txt` | `src/app/robots.ts` | Regras para crawlers |
| `/sitemap.xml` | `src/app/sitemap.ts` | Mapa do site para SEO |

> O site é atualmente uma **Single Page Application (SPA)** com âncoras de navegação (`#sobre`, `#servicos`, `#parceria`).

---

## 📐 Layout da Página Principal

A página principal (`/`) é composta pelas seguintes camadas:

```
<main>
  ├── <Navbar />              ← Fixed top, z-50
  └── <div.flex.flex-col>
      ├── <HeroSection />
      ├── <StepsSection />
      ├── <ValueProposition />
      ├── <WhyStorge />
      ├── <ProfessionalBanner />
      ├── <ServicesGrid />
      └── <CTASection />
  └── <Footer />
```

---

## 🧩 Seções — Descrição Detalhada

### 1. Navbar
**Arquivo:** `src/components/layout/Navbar.tsx`

- Barra de navegação **fixa** no topo (`fixed top-0 z-50`)
- Fundo branco com blur (`bg-white/80 backdrop-blur-md`)
- **Desktop:** Logo + links de navegação + telefone + botão CTA
- **Mobile:** Logo + botão hambúrguer (menu dropdown animado)
- Links de âncora: `#sobre`, `#servicos`, `#parceria`
- Telefone: `+55 91 99372-6000`

**Visual de referência:** `docs/visuals/slices/desktop_section_00.png`

---

### 2. Hero Section
**Arquivo:** `src/components/sections/HeroSection.tsx`

- Banner principal com **imagem de fundo** (`/assets/photos/hero.jpg`)
- Gradiente overlay da esquerda para direita (`from-black/80 via-black/40 to-transparent`)
- **Headline:** "Saúde de qualidade no conforto do **seu lar**."
- **Subheadline:** Descrição da plataforma de saúde domiciliar
- **CTAs:** Botão "Agendar procedimento" + Botão "Assistir Manifesto" (com ícone Play)
- Aspectos responsivos: `aspect-[4/5]` (mobile) → `aspect-[21/9]` (desktop)
- Animação de entrada: `fade-in slide-in-from-bottom` / `slide-in-from-left`

**Visual de referência:** `docs/visuals/slices/desktop_section_01.png`

---

### 3. Steps Section — "O Caminho do Cuidado"
**Arquivo:** `src/components/sections/StepsSection.tsx`

- Fundo branco (`bg-white`)
- **3 passos** para agendar um atendimento:
  1. **Selecione a especialidade** — ícone `ClipboardCheck`
  2. **Informe o tratamento** — ícone `FileText`
  3. **Agende seu atendimento** — ícone `CalendarDays`
- Layout em grid de 3 colunas (desktop) / coluna única (mobile)
- Linha conectora decorativa entre os passos (desktop)
- Numeração circular com cor primária

**Visual de referência:** `docs/visuals/slices/desktop_section_02.png`

---

### 4. Value Proposition — "Sobre Nós"
**Arquivo:** `src/components/sections/ValueProposition.tsx`  
**Âncora:** `#sobre`

- Layout de **2 colunas** (imagem + texto)
- **Imagem:** `/assets/photos/value-proposition.jpg` com efeito hover de zoom e rotação
- **Badge flutuante:** "Área de Atuação — Belém e região metropolitana" com ícone `MapPin` e animação de bounce
- **Headline:** "Muito mais que um serviço de saúde."
- **Subheadline:** "Um ecossistema para você viver melhor."
- Texto descritivo + botão CTA de agendamento
- Fundo branco, padding generoso

**Visual de referência:** `docs/visuals/slices/desktop_section_03.png`

---

### 5. Why Storge — "Por que a Storge é diferente?"
**Arquivo:** `src/components/sections/WhyStorge.tsx`

- Fundo off-white (`bg-storge-light`)
- Layout de **2 colunas** (texto + imagem)
- **3 benefícios** com ícone `CheckCircle2`:
  1. **Segurança e confiança** — Profissionais certificados
  2. **Agilidade no atendimento** — Agendamento em poucos cliques
  3. **Plataforma digital inteligente** — Prontuário eletrônico e histórico
- **Imagem:** `/assets/photos/why-storge.jpg` com efeito grayscale que remove no hover
- Decoração de fundo com offset em cor primária

**Visual de referência:** `docs/visuals/slices/desktop_section_04.png`

---

### 6. Professional Banner — "Para profissionais de saúde"
**Arquivo:** `src/components/sections/ProfessionalBanner.tsx`  
**Âncora:** `#parceria`

- Banner full-width com **imagem de fundo** (`/assets/photos/professional-banner.jpg`)
- Overlay escuro (`bg-black/60`)
- **Público-alvo:** Profissionais de saúde que desejam se tornar parceiros
- **Headline:** "Seja um profissional parceiro da nossa plataforma."
- Proposta: mais pacientes, renda extra, cursos e certificações
- Botão CTA: "Faça seu cadastro"
- Aspectos: `aspect-[16/9]` (mobile) → `aspect-[21/7]` (desktop)

**Visual de referência:** `docs/visuals/slices/desktop_section_05.png`

---

### 7. Services Grid — "Especialidades"
**Arquivo:** `src/components/sections/ServicesGrid.tsx`  
**Âncora:** `#servicos`

- Fundo vermelho primário (`bg-storge-primary`)
- **Headline:** "Especialidades na palma da sua mão com a Storge."
- **Subheadline:** "Mais de 20 tipos de atendimento sem precisar sair de casa."
- Grid de **8 serviços** (4 colunas no desktop, 2 no tablet, 1 no mobile):

| # | Serviço | Arquivo de imagem |
|---|---|---|
| 1 | Troca de curativos | `service-curativos.jpg` |
| 2 | Cuidadoria | `service-cuidadoria.jpg` |
| 3 | Aplicação de medicamentos | `service-medicamentos.jpg` |
| 4 | Acompanhamentos | `service-acompanhamentos.jpg` |
| 5 | Cuidados com colostomia | `service-colostomia.jpg` |
| 6 | Fisioterapia neurológica | `service-fisio-neuro.jpg` |
| 7 | Fisioterapia respiratória | `service-fisio-resp.jpg` |
| 8 | Plantões de 6 a 24hrs | `service-plantoes.jpg` |

- Cada card tem hover com zoom, elevação e badge de seta (`ArrowUpRight`)

**Visual de referência:** `docs/visuals/slices/desktop_section_06.png`

---

### 8. CTA Section — "Agende agora"
**Arquivo:** `src/components/sections/CTASection.tsx`

- Banner com **imagem de fundo** (`/assets/photos/cta.jpg`)
- Gradiente overlay de baixo para cima (`from-black/80 via-black/30 to-transparent`)
- **Headline:** "Agende seu atendimento em **poucos minutos**."
- **Subheadline:** "De forma simples, acessível e segura, no conforto da sua casa."
- Botão CTA: "Agendar agora" com animação de escala no hover/active
- Aspectos: `aspect-[4/5]` (mobile) → `aspect-[16/9]` (desktop)

---

### 9. Footer
**Arquivo:** `src/components/layout/Footer.tsx`

- Fundo vermelho primário (`bg-storge-primary`)
- **Logo** da Storge Care (invertida para branco)
- **Texto institucional** curto
- **Contato:** Telefone e localização (Belém - PA)
- **Redes sociais:** X (Twitter), Facebook, Instagram
- **Copyright:** © 2025 Storge Care

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints padrão do Tailwind:

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile (default) | < 640px | Layout em coluna única, menu hambúrguer |
| `sm` | ≥ 640px | Botões lado a lado no Hero |
| `md` | ≥ 768px | Grid 2×4 nos serviços, steps em 3 colunas |
| `lg` | ≥ 1024px | Navbar desktop, layouts 2 colunas nas seções de conteúdo |
| `xl` / `2xl` | ≥ 1280px / 1536px | Largura máxima `max-w-7xl` centralizada |

---

## 🔍 SEO e Metadados

Configurados no `src/app/layout.tsx`:

- **Title:** "StorgeCare | Saúde domiciliar com cuidado humanizado em Belém"
- **Description:** Serviços de saúde domiciliar com atendimento humanizado em Belém
- **Keywords:** storgecare, saúde domiciliar, enfermagem domiciliar, fisioterapia, Belém
- **Open Graph:** Imagem da hero, título e descrição para compartilhamento social
- **Twitter Card:** `summary_large_image`
- **Canonical URL:** Dinâmico via `NEXT_PUBLIC_SERVER_URL`
- **robots.txt** e **sitemap.xml** gerados dinamicamente

---

## 📸 Referências Visuais

Screenshots completos do site disponíveis em `docs/visuals/`:

| Arquivo | Descrição |
|---|---|
| `FINAL-FULL-DESKTOP.png` | Página inteira — visão desktop |
| `FINAL-FULL-TABLET.png` | Página inteira — visão tablet |
| `FINAL-FULL-PHONE.png` | Página inteira — visão mobile |
| `slices/desktop_section_00.png` | Navbar |
| `slices/desktop_section_01.png` | Hero Section |
| `slices/desktop_section_02.png` | Steps Section |
| `slices/desktop_section_03.png` | Value Proposition |
| `slices/desktop_section_04.png` | Why Storge |
| `slices/desktop_section_05.png` | Professional Banner |
| `slices/desktop_section_06.png` | Services Grid + CTA + Footer |
| `slices_phone/phone_section_*.png` | Cortes individuais mobile (11 fatias) |

---

## ⚙️ Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `PAYLOAD_SECRET` | ✅ | Segredo para o Payload CMS |
| `DATABASE_URI` | ✅ | String de conexão PostgreSQL |
| `NEXT_PUBLIC_SERVER_URL` | ✅ | URL do servidor (usado no SEO) |
| `NEXT_PUBLIC_GTM_ID` | ❌ | ID do Google Tag Manager |
