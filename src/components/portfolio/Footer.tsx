import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Facebook, label: "Facebook", href: profile.facebook },
  { icon: Twitter, label: "X (Twitter)", href: profile.x },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">{profile.name}</p>
            <p className="mt-1 text-sm text-primary">{profile.title}</p>
            <p className="mt-3 text-sm text-muted-foreground">{profile.location}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold">Navigation</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold">Follow</p>
            <ul className="mt-3 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 {profile.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
