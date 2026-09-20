import { Download, Gamepad2, Globe, Smartphone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./Section";

const focus = [
  { icon: Globe, title: "Web Development", note: "Primary specialty" },
  { icon: Smartphone, title: "App Development", note: "Experience & interest" },
  { icon: Gamepad2, title: "Game Development", note: "Exploring & learning" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="About Me" title="A developer who likes shipping real things" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div data-reveal className="reveal space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              I am a passionate software developer focused primarily on website development. I enjoy
              transforming ideas into functional, responsive and visually appealing digital
              experiences. My development journey has allowed me to work with both frontend and
              backend technologies, giving me an understanding of how complete web applications are
              built.
            </p>
            <p className="leading-relaxed">
              I also have some experience and interest in application and game development, and I
              continue to expand my knowledge by exploring new technologies and development
              techniques.
            </p>
            <p className="leading-relaxed">
              Most of my time goes into writing clean markup, thinking about layout on small
              screens, and making sure the things I build actually feel good to use — not just look
              good in a screenshot.
            </p>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <ul data-reveal className="reveal grid gap-4">
            {focus.map(({ icon: Icon, title, note }) => (
              <li key={title} className="card-hover glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-semibold">{title}</span>
                  <span className="block text-sm text-muted-foreground">{note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
