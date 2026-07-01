export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-accent">
          Site JK
        </p>
        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-5xl font-bold leading-none text-strong sm:text-7xl">
            John Kevin Alves Rodrigues
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Portfolio profissional em construcao. A base tecnica esta pronta
            para evoluir para design system, tema, i18n, secoes e interacoes do
            mockup aprovado.
          </p>
        </div>
      </section>
    </main>
  );
}
