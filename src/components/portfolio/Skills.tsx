import { skillGroups, techStack } from "@/data/portfolio";
import { SectionHeading } from "./Section";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="My technology stack"
          subtitle="Stronger specialization in web development, with working knowledge across a range of frontend and backend technologies."
        />

        <ul
          data-reveal
          className="reveal mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {techStack.map((t, i) => (
            <li
              key={t.name}
              style={{ animationDelay: `${i * 60}ms` }}
              className="card-hover float-slow glass flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary font-mono text-sm font-bold text-primary-foreground">
                {t.short}
              </span>
              <span className="text-sm font-medium">{t.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.group} data-reveal className="reveal card-hover glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
