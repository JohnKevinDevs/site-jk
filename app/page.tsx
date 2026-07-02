import { SiteShell } from "@/components/layout/site-shell";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Learning } from "@/components/sections/learning";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Timeline } from "@/components/sections/timeline";
import { WorkMethod } from "@/components/sections/work-method";

export default function Home() {
  return (
    <SiteShell>
      <main
        className="bg-background text-foreground"
        id="main-content"
        tabIndex={-1}
      >
        <Hero />
        <About />
        <WorkMethod />
        <Timeline />
        <Projects />
        <Stack />
        <Learning />
        <TechMarquee />
        <Contact />
      </main>
    </SiteShell>
  );
}
