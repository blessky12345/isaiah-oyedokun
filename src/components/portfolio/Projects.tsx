import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./Section";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="A selection of project types I build — from full e-commerce flows to portals, platforms and company websites."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              data-reveal
              className="reveal card-hover glass group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} project preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
