# Handoff para o Codex — Portfólio John Kevin (site)

> **Objetivo:** transformar o mockup `Portfolio v2.dc.html` (prints anexados) em um site real, performático e deployável na **Vercel**, usando **Next.js (App Router) + React + TypeScript + Tailwind CSS + Framer Motion**.
> Este documento é a fonte de verdade. Os prints mostram o resultado visual esperado. Onde houver `TODO`, deixe placeholder e não invente dados.

---

## 1. Visão geral

Portfólio profissional de página única (one-page) de **John Kevin Alves Rodrigues** — Técnico em Informática, São Paulo/BR. Posicionamento: **tecnologia + produto + negócio + comunicação + execução**, não apenas "dev back-end". Frase de marca: **"Comunicação abre portas. Tecnologia constrói caminhos."**

Público: recrutadores de tech, tech leads, empresas (júnior/trainee), mentores, parceiros da FluxON.

Tom: profissional, jovem, moderno, forte, estratégico, ambicioso sem arrogância. Visual: **dark premium graphite + azul elétrico**, com modo claro alternável.

### Funcionalidades obrigatórias (todas já existem no mockup)
1. **i18n PT/EN** com toggle no header (persistido em `localStorage`).
2. **Tema escuro/claro** com toggle no header (persistido; escuro é o default).
3. **Hero com constelação animada** em `<canvas>` que reage ao mouse.
4. **Scroll reveal** (fade + slide up) nas seções via IntersectionObserver / Framer Motion.
5. **Copiar e-mail** com feedback ("copiado ✓").
6. **Botões de contato** que encaminham (LinkedIn, GitHub, WhatsApp, Gmail) + download de currículo.
7. **Open Graph / Twitter meta** para preview bonito ao colar no LinkedIn.
8. **Marquee** infinito de tecnologias.
9. Responsivo mobile-first; `prefers-reduced-motion` respeitado.

---

## 2. Stack & arquitetura sugerida

```
app/
  layout.tsx            # <html>, fontes, metadata (OG/Twitter), providers
  page.tsx              # monta as seções na ordem
  globals.css           # tokens CSS (light/dark), keyframes, resets
components/
  Navbar.tsx
  Hero.tsx              # + ConstellationCanvas
  ConstellationCanvas.tsx
  About.tsx
  Timeline.tsx
  Projects.tsx
  Stack.tsx
  Learning.tsx          # Certificados + Aprendizados
  Marquee.tsx
  Contact.tsx
  Footer.tsx
  ui/SectionLabel.tsx   # eyebrow (barra gradiente + label)
  ui/Reveal.tsx         # wrapper de scroll-reveal
lib/
  i18n.ts               # dicionário pt/en + hook useLang()
  theme.ts              # hook useTheme() (dark/light + localStorage)
  content.ts            # dados estruturados (projetos, timeline, certs, stack)
public/
  photo.png             # foto do hero/sobre (anexada)
  banner.png            # imagem OG (anexada)
  cv-john-kevin.pdf     # TODO: currículo
```

- **Next.js App Router**, componentes client onde houver estado (`"use client"` em Navbar, Hero, providers, etc.).
- **Tailwind** para layout/spacing; tokens de cor via CSS variables (abaixo) para suportar troca de tema sem recompilar classes.
- **Framer Motion** para reveal e micro-interações (opcional — pode usar IntersectionObserver puro; não exagerar nas animações).
- Sem dependências pesadas além dessas.

---

## 3. Design system (tokens exatos do mockup)

Use CSS variables no `:root` (dark) e `[data-theme="light"]`, e mapeie no Tailwind via `theme.extend.colors` com `rgb(var(--x))` OU use as variáveis direto em `style`/classes utilitárias. Os valores abaixo são os do mockup.

### Cores — DARK (default)
```css
--bg:#070910;            /* fundo */
--nav:rgba(7,9,16,.7);   /* navbar translúcida */
--surface:rgba(255,255,255,.02);
--surface2:rgba(7,9,16,.45);
--border:rgba(255,255,255,.08);
--border-strong:rgba(255,255,255,.14);
--text:#e9ecf4; --strong:#f6f8fc; --head:#f2f4fa;
--muted:#98a2b6; --soft:#aeb6c8; --faint:#6b7280;
--accent:#3b82f6; --accent2:#60a5fa; --accent-soft:#93b4f5; --accent-deep:#1d4ed8;
--grid:rgba(255,255,255,.03);
--chip:#c2c8d6; --chip-bg:rgba(255,255,255,.05); --marquee:rgba(255,255,255,.16);
--gold:#fde68a; --gold-bd:rgba(250,204,21,.5);
--green:#86efac; --green-bd:rgba(134,239,172,.4);
--red:#ef9a9a; --blue-soft:#93b4f5; --blue-bd:rgba(96,165,250,.4);
```

### Cores — LIGHT (`[data-theme="light"]`)
```css
--bg:#eef1f8; --nav:rgba(238,241,248,.82);
--surface:rgba(255,255,255,.8); --surface2:rgba(255,255,255,.7);
--border:rgba(15,23,42,.1); --border-strong:rgba(15,23,42,.16);
--text:#26303f; --strong:#0a1222; --head:#101a2b;
--muted:#5a6678; --soft:#475063; --faint:#7a8395;
--accent:#2563eb; --accent2:#1d4ed8; --accent-soft:#2563eb; --accent-deep:#1d4ed8;
--grid:rgba(15,23,42,.05);
--chip:#3a4456; --chip-bg:rgba(15,23,42,.04); --marquee:rgba(15,23,42,.13);
--gold:#b45309; --gold-bd:rgba(180,83,9,.4);
--green:#15803d; --green-bd:rgba(21,128,61,.4);
--red:#b91c1c; --blue-soft:#2563eb; --blue-bd:rgba(37,99,235,.4);
```

### Tipografia (Google Fonts)
- **Display / títulos:** `Space Grotesk` (400–700). Use `next/font/google`.
- **Corpo:** `Manrope` (400–800).
- **Mono / eyebrows / chips:** `JetBrains Mono` (400–500).
- Escala de títulos: hero `clamp(46px,7vw,86px)`, h2 de seção `clamp(30px,4vw,44px)`, line-height apertado (.98–1.18), `letter-spacing:-.02em a -.03em`.

### Forma & profundidade
- Raios: cards 18px, cards grandes 22–26px, chips/tiles 8–14px, pills 100px.
- Borda padrão: `1px solid var(--border)`; hover de card: borda `var(--blue-bd)` + `translateY(-6/7px)` + sombra azul `0 30px 70px -30px rgba(59,130,246,.55)`.
- Glow ambiente: radial-gradients azuis suaves no fundo; grid pontilhado com máscara radial.
- Transições: `cubic-bezier(.2,.7,.2,1)` ~.35–.45s.

### Eyebrow (rótulo de seção)
Barra gradiente (30×3px, `linear-gradient(90deg,var(--accent),var(--accent2))` + glow) seguida de label em JetBrains Mono, `letter-spacing:.26em`, uppercase, cor `--accent-soft`. **Sem o prefixo `//`.**

---

## 4. Seções (ordem e conteúdo)

A ordem e o conteúdo abaixo refletem o mockup. **Toda a copy PT/EN já está no dicionário do arquivo `Portfolio v2.dc.html`** — extraia de lá (objeto `_dict()` → `pt` e `en`). Resumo:

1. **Navbar** (sticky, blur): logo "JK" + nome · links (Sobre/Projetos/Stack/Trajetória) · toggle **EN/PT** · toggle tema (☾/☀) · botão "Falar comigo".
2. **Hero** (min-height 92vh): pill "Disponível para oportunidades · São Paulo, BR"; H1 com 2ª linha em gradiente animado (shimmer); subtítulo; **linha "AGORA"** (build log: "construindo a FluxON…"); CTAs (Ver projetos / GitHub / Falar comigo); canvas de constelação ao fundo; indicador "SCROLL". Foto NÃO vai no hero (vai no Sobre).
3. **Sobre**: eyebrow + H2 + 3 parágrafos + **4 cards de filosofia numerados (01–04)**; à direita **foto** (`photo.png`, 4:5, `object-position:50% 22%`) + 4 mini-cards (FluxON / 5+ projetos / Técnico / Full Stack).
4. **Trajetória** (timeline vertical com spine gradiente + números grandes 24/25/26): 2024 "O começo", 2025 "Reconhecimento & primeiros clientes", 2026 "CEO da FluxON" (destaque), cada ano com parágrafo + **chips**; nó final tracejado "O próximo capítulo…".
5. **Projetos** (seção única): **card destaque FluxON** (premiada / em construção, problema+solução) + grid 2×2 (SkillForge, Sistema JK, BID/Copa CEAP, LevelCorp) com status badges; **card "E vem muito mais por aí" + CTA GitHub** ao final. Hover dos cards: glow radial seguindo o mouse (`--mx/--my`).
6. **Stack**: 4 categorias (Back-end & APIs / Front-end / Banco de dados / IA, produtividade & DevOps); cada tecnologia é um **tile** = plate branco 42px com **logo (devicon)** + nome; itens sem logo usam monograma em gradiente (APIs REST `{ }`, JWT, SQL, FW/Flyway, IA).
7. **Aprendizado & experiência** (2 colunas): **Certificados** (lista, à esquerda) e **Aprendizados & conquistas** (projetos/premiações com tags, à direita). Lista de certificados na §6.
8. **Marquee**: faixa infinita de tecnologias.
9. **Contato**: card com H2 "Vamos abrir portas." + grid de botões (§7).
10. **Footer**: assinatura + frase de marca.

---

## 5. Dados estruturados (extrair para `content.ts`)

### Projetos
| Nome | Status | Stack | Link |
|---|---|---|---|
| FluxON | Premiada · Em construção | Startup·SaaS·Produto·Validação·MVP | TODO (repo) |
| SkillForge CEAP | Full stack | Spring Boot · PostgreSQL · JWT · React · Vite | TODO |
| Sistema JK | Publicado · IA | Next.js · TypeScript · SQLite · Gemini | https://github.com/JohnKevinDevs/sistema-vida |
| BID / Copa CEAP | Publicado | Next.js · TypeScript · Tailwind · JSON | https://github.com/JohnKevinDevs/bid-interclasse |
| LevelCorp | Em construção | Next.js · Prisma · PostgreSQL · JWT | TODO |

### Stack (logos via devicon CDN — funcionam na Vercel sem mudança)
Base: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<slug>/<slug>-original.svg`
- Back-end: `java`, `spring`, `python` (+ monogramas: APIs REST, JWT)
- Front-end: `react`, `nextjs`, `typescript`, `javascript`, `html5`, `css3`, `tailwindcss`
- Banco: `postgresql`, `sqlite`, `prisma` (+ monogramas SQL, Flyway)
- IA/DevOps: `git`, `github`, `docker`, `vitejs` (+ monograma IA aplicada)
> Plate branco fixo atrás de cada logo (logos pretos como Next.js/GitHub/Prisma somem em fundo escuro). Opção: baixar os SVGs para `public/logos/` se quiser zero dependência externa.

### Certificados (exatos — não alterar nomes)
- Oracle Certified Associate, Java SE 8 Programmer — **Oracle**
- Java Programming / Java Fundamentals — **Oracle**
- Introdução à Cibersegurança — **Cisco Networking Academy**
- Competências para Empregabilidade — **Wadhwani Foundation**
- Associate Android Developer — **Google**
- Nano Cursos — **FIAP**

### Aprendizados & conquistas (com tags)
- FluxON — startup própria, como CEO · *Premiada*
- Feira Start CEAP — 1º lugar · *Premiação*
- FeCEAP — campeão público (2025) · *Premiação*
- Desenvolvedor freelancer — clientes reais · *Experiência*
- 5+ projetos full stack · *Projetos*
- Liderança na FAC — gestão de equipe · *Liderança*

### Timeline
- **2024 — O começo:** ingresso no CEAP, fundamentos, primeiros códigos.
- **2025 — Reconhecimento & primeiros clientes:** campeão público FeCEAP, início como freelancer.
- **2026 — CEO da FluxON:** múltiplos projetos + fundação da FluxON.
(Textos completos PT/EN no dicionário do mockup.)

### Contato
- LinkedIn: `https://linkedin.com/in/john-kevin-alves` (abrir em nova aba)
- GitHub: `https://github.com/JohnKevinDevs`
- E-mail: `johnkevin.devs@gmail.com` → botão abre **Gmail compose**: `https://mail.google.com/mail/?view=cm&fs=1&to=johnkevin.devs@gmail.com` ; **+ ação "copiar e-mail"**
- WhatsApp: `https://wa.me/55<TODO>` — **TODO: número**
- Currículo: download de `/cv-john-kevin.pdf` — **TODO: arquivo**

---

## 6. i18n — como portar

O dicionário completo (chaves `pt` e `en`) está no método `_dict()` de `Portfolio v2.dc.html`. Porte para `lib/i18n.ts` como dois objetos. Padrão de uso no mockup: cada texto tem uma chave (`hero_title`, `about_body`, `tl3_b`, etc.) e alguns valores contêm HTML (negritos, `<span>` de chips) — em React, renderize via `dangerouslySetInnerHTML` **ou** (preferível) remodele como JSX/estrutura de dados. 
- Hook `useLang()` → estado `'pt' | 'en'`, default `'pt'`, persistido em `localStorage('jk-lang')`.
- Toggle no header alterna e re-renderiza.

## 7. Tema — como portar
- `useTheme()` → `'dark' | 'light'`, default `'dark'`, persistido em `localStorage('jk-theme')`, aplica `data-theme` no elemento raiz.
- Botão mostra ☾ (no dark) / ☀ (no light).
- A constelação muda a cor das linhas/pontos conforme o tema (dark: `96,165,250` linhas / `147,197,253` pontos; light: `37,99,235`).

## 8. Constelação (Hero)
Canvas full-bleed atrás do conteúdo do hero. N pontos (≈ `clamp(28, área/16000, 78)`) com velocidade lenta, ricocheteando nas bordas; linhas entre pontos < 132px; linhas extra até o mouse (< 170px). `requestAnimationFrame`; pausar/станe em `prefers-reduced-motion`. Lógica completa em `_net()` no mockup — reaproveite.

---

## 9. Acessibilidade & performance
- `aria-label` nos botões de ícone (tema/idioma) — idealmente bilíngue.
- Contraste OK nos dois temas (já calibrado).
- `next/image` para `photo.png` (priority no above-the-fold). Logos devicon podem ficar como `<img>` simples (SVG remoto) — adicione `images.remotePatterns` se usar `next/image` com jsDelivr.
- `font-display: swap`; preconnect já previsto.
- Lighthouse alvo: ≥ 95 perf/SEO/best-practices.

## 10. Deploy (Vercel)
- `next build` padrão; sem config especial.
- **Logos via CDN funcionam na Vercel** — manter como está. (Só baixe localmente se quiser independência de CDN.)
- Configure `metadataBase` e as tags OG/Twitter no `layout.tsx` (título, descrição, `images:['/banner.png']`).
- Sugestão de domínio próprio depois (ex.: `johnkevinalves.dev`).

---

## 11. Pendências do dono (placeholders até receber)
- [ ] **Número do WhatsApp** → `wa.me/55…`
- [ ] **PDF do currículo** → `public/cv-john-kevin.pdf`
- [ ] **Links reais** de FluxON, SkillForge, LevelCorp (repo ou deploy)
- [ ] (Opcional, recomendado) **Screenshots reais** de cada projeto para os cards
- [ ] (Opcional) Deep-dive/case dedicado da FluxON

## 12. Checklist de aceite
- [ ] Todas as 10 seções na ordem, fiéis aos prints.
- [ ] PT/EN alterna todos os textos e persiste.
- [ ] Dark/Light alterna e persiste; constelação acompanha o tema.
- [ ] Constelação reage ao mouse; respeita reduced-motion.
- [ ] Reveal no scroll; marquee rodando; hover glow nos cards.
- [ ] Copiar e-mail com feedback; botões de contato abrem nas URLs corretas em nova aba.
- [ ] OG/Twitter renderiza card com `banner.png` ao compartilhar.
- [ ] Responsivo (mobile: grids viram 1 coluna; nav colapsa).
- [ ] Sem `validação por banca` em lugar nenhum (usar "até o mercado").
- [ ] Lighthouse ≥ 95.

---

### Anexos que acompanham este handoff
- Prints do mockup `Portfolio v2.dc.html` (visual de referência — dark e, se possível, light/EN).
- `photo.png` (foto oficial, camisa FluxON) e `banner.png` (imagem OG).
- O próprio `Portfolio v2.dc.html` pode ser aberto no navegador para inspecionar copy, cores e a lógica JS (i18n, tema, constelação) — é a referência funcional definitiva.
