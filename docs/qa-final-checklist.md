# QA Final - Site JK

Data: 2026-07-01

## Referencias Consultadas

- `CODEX-HANDOFF.md`
- `Portfolio-standalone.html`

## Validacoes Tecnicas

| Item | Resultado | Observacao |
| --- | --- | --- |
| `npm run lint` | OK | ESLint executado sem erros. |
| `npm run build` | OK | Build Next.js 16.2.9 compilou e gerou rota `/` estatica. |
| Console inicial no navegador | OK | Sem erros/warnings capturados na primeira carga em `http://127.0.0.1:3000`. |
| Imports e TypeScript | OK | Verificados pelo build. |
| `metadataBase` | OK | Configurado com `https://johnkevin.vercel.app`. |

## Responsividade

| Viewport | Resultado | Observacao |
| --- | --- | --- |
| 360 x 740 | OK | Sem overflow horizontal; menu mobile visivel; canvas e marquee presentes. |
| 430 x 860 | OK | Sem overflow horizontal; layout mobile preservado. |
| 768 x 1024 | OK | Sem overflow horizontal; layout intermediario preservado. |
| 1440 x 900 | OK | Sem overflow horizontal; links desktop visiveis. |
| 1920 x 1080 | OK | Sem overflow horizontal; container permanece centralizado. |

## Funcionalidades

| Item | Resultado | Observacao |
| --- | --- | --- |
| Tema dark/light | OK por revisao + build | `ThemeProvider`, `ThemeScript` e `ThemeToggle` usam `jk-theme`, aplicam `data-theme` e mitigam flash inicial. |
| Persistencia do tema | OK por revisao | `localStorage('jk-theme')` e evento `jk-theme-change`. |
| i18n PT/EN | OK por revisao + DOM | Default PT; dicionarios PT/EN integrados; `I18nProvider` aplica `lang`/`data-lang`. |
| Persistencia do idioma | OK por revisao | `localStorage('jk-lang')` e evento `jk-lang-change`. |
| Menu mobile | OK testado no navegador | Ao abrir: `aria-expanded=true`, `aria-hidden=false`, links com `tabIndex=0`. |
| Links da Navbar | OK | IDs existem: `hero`, `about`, `journey`, `projects`, `stack`, `learning`, `marquee`, `contact`. |
| CTAs do Hero | OK | Projetos e contato usam ancoras internas; GitHub usa link real. |
| Filtros da timeline | OK por revisao | Tabs por ano com `aria-selected`; dados 2024, 2025, 2026. |
| Links de projetos | OK | Links reais para SkillForge, Sistema JK, BID/Copa CEAP e LevelCorp; FluxON fica sem link por enquanto. |
| Botoes de contato | OK | LinkedIn, GitHub, WhatsApp, Gmail e curriculo habilitados com dados reais. |
| Copiar e-mail | OK por revisao | Usa Clipboard API com fallback `execCommand` e feedback em `aria-live`. |
| Constelacao | OK | Canvas presente, decorativo com `aria-hidden`, reage a mouse no desktop e respeita reduced motion. |
| Marquee | OK | Usa dados da Stack; anima com CSS e pausa em reduced motion. |

## SEO e Metadata

| Item | Resultado | Observacao |
| --- | --- | --- |
| Title | OK | `John Kevin Alves Rodrigues - Técnico em Informática`. |
| Description | OK | Alinhada ao standalone. |
| Open Graph | OK | Configurado com `type: website`, locale `pt_BR`, `siteName`, dominio final e `/banner.png`. |
| Twitter Card | OK | `summary_large_image` apontando para `/banner.png`. |
| `banner.png` | OK | Arquivo oficial adicionado em `public/`. |
| Dominio final | OK | `https://johnkevin.vercel.app`. |

## Acessibilidade

| Item | Resultado | Observacao |
| --- | --- | --- |
| Uma unica `<main>` | OK | `app/page.tsx` usa `main#main-content`. |
| Skip link | OK | Link para `#main-content`. |
| Headings | OK | H1 unico no Hero; secoes com H2; cards com H3. |
| Toggles com `aria-label` | OK | Tema e idioma possuem labels acessiveis; tema esta bilingue. |
| Menu mobile | OK | `aria-controls`, `aria-expanded`, `aria-hidden` e controle de tabulacao. |
| Feedback copiar e-mail | OK | Regiao `aria-live="polite"`. |
| Canvas decorativo | OK | `aria-hidden="true"`. |
| Links externos | OK | `target="_blank"` com `rel="noopener noreferrer"`. |
| Foco visivel | OK | Classes `focus-visible` revisadas em botoes/links principais. |

## Comparacao com o Standalone

| Item | Resultado | Observacao |
| --- | --- | --- |
| Ordem das secoes | OK | Hero, Sobre, Trajetoria, Projetos, Stack, Aprendizado, Marquee, Contato, Footer. |
| Tom visual | OK | Graphite premium + azul eletrico, sem visual gamer/neon exagerado. |
| Copy principal | OK | Frase de marca, AGORA, projetos, timeline, stack, aprendizado e contato alinhados. |
| Dark/light | OK | Tokens e alternancia preservados. |
| PT/EN | OK | Textos principais estruturados nos dicionarios. |

## Decisoes De Escopo

- FluxON fica sem link por enquanto.
- Sem screenshots de projetos nesta etapa.
- Sem case/deep-dive da FluxON nesta etapa.
- Certificados/nano cursos ficam sem periodo/ano.

## Riscos Antes do Deploy

- A verificacao visual foi feita por DOM/viewport automatizado; recomenda-se uma passada manual final no navegador antes do deploy publico.

## Recomendacao

Antes da Etapa 16, rodar `npm run lint`, `npm run build`, fazer uma passada visual manual final e seguir para deploy na Vercel.
