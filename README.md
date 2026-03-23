# Storge Care - Site Institucional

Site institucional construído com Next.js 16, Payload CMS 3.0, PostgreSQL e Docker.

## 🚀 Stack Tecnológica

- **Frontend**: Next.js 16 + React 19
- **CMS**: Payload CMS 3.0
- **Banco de Dados**: PostgreSQL 15
- **Estilização**: TailwindCSS 4
- **Containerização**: Docker + Docker Compose
- **TypeScript**: TypeScript 5

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Node.js 20+ (para desenvolvimento local sem Docker)
- Git

## 🔧 Configuração Inicial

### 1. Clone o repositório

```bash
git clone <seu-repositorio>
cd site_storge_care
```

### 2. Configure as variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite as variáveis conforme necessário
nano .env
```

**Variáveis obrigatórias:**
- `PAYLOAD_SECRET`: Segredo único para o Payload CMS
- `DATABASE_URI`: String de conexão com PostgreSQL
- `NEXT_PUBLIC_SERVER_URL`: URL do servidor

### 3. Configure o Git (se necessário)

```bash
# Configure o usuário do Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Adicione o remote do GitHub
git remote add origin https://github.com/seu-usuario/site_storge_care.git
```

## 🐳 Desenvolvimento com Docker

### Ambiente de Desenvolvimento

```bash
# Subir os containers
npm run docker:dev

# Ou reconstruindo a imagem
npm run docker:dev:build

# Ver logs
npm run docker:logs

# Parar containers
npm run docker:dev:down
```

O site estará disponível em: http://localhost:3000

### Ambiente de Produção

1. **Configure o arquivo de produção:**

```bash
cp .env.example .env.production
nano .env.production
```

⚠️ **IMPORTANTE:** Altere TODAS as senhas e segredos!

2. **Suba os containers de produção:**

```bash
npm run docker:prod
```

3. **Parar produção:**

```bash
npm run docker:prod:down
```

## 💻 Desenvolvimento Local (sem Docker)

### Instalação

```bash
# Instale as dependências
npm install

# Configure o banco de dados PostgreSQL localmente
# ou use Docker apenas para o DB:
docker-compose up -d db

# Execute em modo desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Build da aplicação
npm run build

# Iniciar produção
npm start
```

## 🚀 Deploy em Produção

### Servidor com Docker

1. **Configure o ambiente:**
```bash
# No servidor
git clone <seu-repositorio>
cd site_storge_care

# Configure .env.production
cp .env.example .env.production
nano .env.production
```

2. **Inicie os containers:**
```bash
npm run docker:prod
```

### Reverse Proxy (Nginx)

Configure o Nginx para fazer proxy da porta 3000:

```nginx
server {
    listen 80;
    server_name seu-dominio.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL com Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com.br
```

## 🔐 Segurança

### Checklist de Produção

- [ ] Alterar `PAYLOAD_SECRET` para um valor único e longo
- [ ] Usar senhas fortes para o PostgreSQL
- [ ] Configurar firewall para portas necessárias apenas
- [ ] Habilitar SSL/HTTPS
- [ ] Configurar backups automáticos do banco de dados
- [ ] Limitar taxa de requisições (rate limiting)
- [ ] Configurar monitoramento e logs

### Backup do Banco de Dados

```bash
# Backup
docker exec storge-care-db-prod pg_dump -U postgres storge_care > backup.sql

# Restore
docker exec -i storge-care-db-prod psql -U postgres storge_care < backup.sql
```

## 📊 Google Tag Manager

O Google Tag Manager está configurado no arquivo [src/app/layout.tsx](src/app/layout.tsx).

O ID do GTM é configurado via variável de ambiente:
```env
NEXT_PUBLIC_GTM_ID=AW-17990509984
```

## 🛠️ Comandos Úteis

```bash
# Ver logs dos containers
docker-compose logs -f app
docker-compose logs -f db

# Entrar no container
docker exec -it storge-care-app sh

# Limpar tudo (cuidado!)
npm run docker:clean

# Ver status dos containers
docker ps

# Reconstruir imagem
docker-compose build --no-cache
```

## 📁 Estrutura do Projeto

```
site_storge_care/
├── src/
│   ├── app/              # App Router do Next.js
│   ├── components/       # Componentes React
│   └── styles/           # Estilos globais
├── public/               # Arquivos estáticos
├── Dockerfile            # Imagem Docker
├── docker-compose.yml    # Ambiente de dev
├── docker-compose.prod.yml # Ambiente de prod
├── .env.example          # Variáveis de exemplo
├── .env.production       # Variáveis de prod (não commitar)
├── .gitignore           # Arquivos ignorados pelo Git
└── package.json         # Dependências e scripts
```

## 🐛 Troubleshooting

### Porta já em uso

```bash
# Ver processo usando porta 3000
lsof -i :3000

# Matar processo
kill -9 <PID>
```

### Problemas com permissões

```bash
# Reconstruir com permissões corretas
docker-compose down
docker-compose up --build
```

### Reset completo do ambiente

```bash
npm run docker:clean
docker volume prune
```

## 📞 Suporte

Para suporte, abra uma issue no repositório ou entre em contato com a equipe de desenvolvimento.

## 📄 Licença

Este projeto é propriedade da Storge Care.
