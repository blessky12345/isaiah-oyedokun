import { journey } from "@/data/portfolio";
import { SectionHeading } from "./Section";

export function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="Experience" title="My development journey" />

        <ol className="relative mt-14 space-y-8 border-l border-border pl-6 sm:pl-8">
          {journey.map((j) => (
            <li key={j.title} data-reveal className="reveal relative">
              <span
                className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-gradient-primary sm:-left-[39px]"
                aria-hidden
              />
              <h3 className="font-display text-lg font-semibold">{j.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
