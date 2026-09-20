import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, techStack } from "@/data/portfolio";
import isaiah from "@/assets/isaiah.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for work · Globally (Remote)
          </span>

          <h1 className="mt-6 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="text-gradient mt-3 font-display text-xl font-semibold sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building modern, responsive and scalable digital experiences for the web, while
            exploring the world of application and game development.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {techStack.slice(0, 6).map((t) => (
              <li
                key={t.name}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {t.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-scale-in">
          <div className="float-slow relative mx-auto max-w-sm">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-25 blur-2xl"
              aria-hidden
            />
            <img
              src={isaiah}
              alt="Portrait of Isaiah Oyedokun A., full-stack web developer"
              width={864}
              height={1152}
              className="relative w-full rounded-[2rem] border border-border object-cover"
            />
          </div>

          <div className="glass mt-6 rounded-2xl p-4 font-mono text-xs leading-relaxed sm:text-sm">
            <div className="mb-3 flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
            </div>
            <pre className="overflow-x-auto text-muted-foreground">
              <code>
                <span className="text-primary">const</span> developer = {"{"}
                {"\n"} name: <span className="text-primary">"Isaiah Oyedokun A."</span>,{"\n"}{" "}
                specialty: <span className="text-primary">"Web Development"</span>,{"\n"} passion: [
                <span className="text-primary">"Web"</span>,{" "}
                <span className="text-primary">"Apps"</span>,{" "}
                <span className="text-primary">"Games"</span>]{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
