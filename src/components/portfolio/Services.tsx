import { Code2, Gamepad2, Layers, Server, Smartphone } from "lucide-react";
import { SectionHeading } from "./Section";

const services = [
  {
    icon: Layers,
    title: "Website Development",
    body: "Responsive websites, business and portfolio sites, school websites, e-commerce stores and custom web applications.",
    items: [
      "Responsive websites",
      "Business & portfolio websites",
      "School websites",
      "E-commerce websites",
      "Custom web applications",
    ],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    body: "Modern interfaces built with component-driven frameworks and careful attention to layout and interaction.",
    items: [
      "Modern user interfaces",
      "Responsive layouts",
      "Interactive web experiences",
      "React / Vue / Next.js apps",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    body: "Server-side logic and data handling for applications that need more than a static frontend.",
    items: [
      "REST APIs",
      "Server-side applications",
      "Database integration",
      "Authentication systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    body: "I have experience and interest in application development, building app-style projects alongside my web work.",
    items: [],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    body: "I have some experience and interest in game development, and I am continuing to develop my skills in this area.",
    items: [],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="What I Do" title="Services" />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, items }) => (
            <article key={title} data-reveal className="reveal card-hover glass rounded-2xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              {items.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
