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
```

## Resultado das validações

- `npm run lint`: OK.
- `npm run build`: OK.
- `public/photo.png`: existe.
- `public/banner.png`: existe.
- `public/cv-john-kevin.pdf`: existe.
- `.gitignore`: cobre `.env*`, `.next/`, `node_modules/`, build local, logs e `.vercel`.
- Arquivos sensíveis locais: nenhum `.env`, `.env.local`, `.pem` ou token encontrado na raiz.
- Varredura de mojibake em `app`, `components`, `lib`, `docs` e `public`: OK após correção de encoding em conteúdo e metadata.

## Configuração recomendada na Vercel

```txt
Framework: Next.js
Repository: JohnKevinDevs/site-jk
Branch: main
Build command: npm run build
Install command: padrão da Vercel
Output: padrão do Next.js
Environment variables: nenhuma
```

## Deploy

A Vercel CLI (`vercel`) não está disponível/autenticada neste ambiente local, então o deploy de produção não foi executado via CLI.

Fluxo manual recomendado:

1. Acessar [Vercel](https://vercel.com).
2. Importar o repositório `JohnKevinDevs/site-jk`.
3. Selecionar o framework `Next.js`.
4. Usar a branch `main`.
5. Manter os comandos padrão:
   - Build command: `npm run build`
   - Install command: padrão da Vercel
   - Output directory: padrão do Next.js
6. Não adicionar variáveis de ambiente, salvo mudança futura.
7. Confirmar deploy.

URL final esperada, conforme metadata do projeto:

```txt
https://johnkevin.vercel.app
```

## Pendências restantes

- FluxON segue sem link externo/case público; o card usa estado seguro de produto em validação.
- Screenshots de projetos ainda não foram adicionadas por decisão de escopo.
- Deep-dive/case da FluxON fica para uma etapa futura.

## Próximos ajustes recomendados

- Validar manualmente o deploy em desktop e mobile após a Vercel concluir a build.
- Conferir preview Open Graph com `banner.png` em LinkedIn/WhatsApp.
- Adicionar screenshots reais dos projetos quando estiverem prontos.
- Criar case dedicado da FluxON quando houver material público.
