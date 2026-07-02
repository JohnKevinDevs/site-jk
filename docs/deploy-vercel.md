# Deploy Vercel - Site JK

Data: 2026-07-02

## Referências consultadas

- `CODEX-HANDOFF.md`
- `Portfolio-standalone.html`
- `docs/qa-final-checklist.md`
- Implementação atual do projeto Next.js

## Estado técnico local

| Item | Resultado |
| --- | --- |
| Remote | `https://github.com/JohnKevinDevs/site-jk.git` |
| Branch | `main` |
| Framework | Next.js App Router |
| Build command | `npm run build` |
| Install command | padrão da Vercel |
| Output | padrão do Next.js |
| Environment variables | nenhuma necessária no momento |

## Comandos executados

```bash
git status -sb
git remote -v
git branch --show-current
npm run lint
npm run build
npx vercel deploy --prod --yes --name site-jk
npx vercel alias set site-54im42k9m-john-kevins-projects-e59513ac.vercel.app johnkevin.vercel.app
```

## Resultado das validações

- `npm run lint`: OK.
- `npm run build`: OK.
- Build remoto da Vercel: OK.
- `public/photo.png`: existe.
- `public/banner.png`: existe.
- `public/cv-john-kevin.pdf`: existe.
- `.gitignore`: cobre `.env*`, `.next/`, `node_modules/`, build local, logs e `.vercel`.
- Arquivos sensíveis locais: nenhum `.env`, `.env.local`, `.pem` ou token encontrado na raiz.
- Varredura de mojibake em `app`, `components`, `lib`, `docs` e `public`: OK após correção de encoding em conteúdo e metadata.

## Configuração usada na Vercel

```txt
Framework: Next.js
Repository: JohnKevinDevs/site-jk
Branch: main
Build command: npm run build
Install command: padrão da Vercel
Output: padrão do Next.js
Environment variables: nenhuma
Project: site-jk
Team/scope: john-kevins-projects-e59513ac
```

## Deploy

Deploy de produção executado pela Vercel CLI via `npx.cmd`.

```txt
Deployment ID: dpl_5B8MpX5C8DaZ7WUzh8TU3s4tY1s5
Status: READY
Production deployment: https://site-54im42k9m-john-kevins-projects-e59513ac.vercel.app
Alias validado: https://site-jk.vercel.app
Inspector: https://vercel.com/john-kevins-projects-e59513ac/site-jk/5B8MpX5C8DaZ7WUzh8TU3s4tY1s5
```

O domínio `https://johnkevin.vercel.app` foi associado por alias na CLI, mas a validação HTTP ainda retornou a página `Login - Vercel` com `X-Matched-Path: /login`. A URL pública validada para uso imediato é:

```txt
https://site-jk.vercel.app
```

## Pendências restantes

- Ajustar/verificar `https://johnkevin.vercel.app` no painel da Vercel, pois o alias aparece listado, mas a resposta pública ainda não serve o Site JK.
- FluxON segue sem link externo/case público; o card usa estado seguro de produto em validação.
- Screenshots de projetos ainda não foram adicionadas por decisão de escopo.
- Deep-dive/case da FluxON fica para uma etapa futura.

## Próximos ajustes recomendados

- Validar manualmente `https://site-jk.vercel.app` em desktop e mobile.
- Conferir preview Open Graph com `banner.png` em LinkedIn/WhatsApp.
- Resolver o alias/domínio desejado `johnkevin.vercel.app` diretamente no painel da Vercel.
- Adicionar screenshots reais dos projetos quando estiverem prontos.
- Criar case dedicado da FluxON quando houver material público.
