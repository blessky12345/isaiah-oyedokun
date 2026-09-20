import {
  Brain,
  GitBranch,
  Layout,
  Lightbulb,
  Rocket,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "./Section";

const reasons = [
  { icon: Smartphone, title: "Responsive & mobile-friendly", text: "Layouts that hold up on every screen size." },
  { icon: GitBranch, title: "Clean, maintainable code", text: "Readable structure that is easy to extend later." },
  { icon: Rocket, title: "Modern technologies", text: "Current frameworks and tooling, not outdated patterns." },
  { icon: Layout, title: "Attention to UI/UX", text: "Spacing, hierarchy and interaction get real thought." },
  { icon: Sparkles, title: "Full-stack capability", text: "Comfortable across frontend and backend work." },
  { icon: Brain, title: "Problem-solving mindset", text: "I dig into the actual issue instead of patching around it." },
  { icon: TrendingUp, title: "Continuous learning", text: "Always adding new tools and techniques." },
  { icon: Lightbulb, title: "Ideas into applications", text: "Turning a concept into something people can use." },
];

export function WhyMe() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Why Work With Me?" title="What you get" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} data-reveal className="reveal card-hover glass rounded-2xl p-5">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
