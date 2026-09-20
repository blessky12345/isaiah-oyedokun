import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./Section";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Facebook, label: "Facebook", href: profile.facebook },
  { icon: Twitter, label: "X (Twitter)", href: profile.x },
];

const fieldClass =
  "w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none";

export function Contact() {
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_yzefj58",
        "template_wo0bvji",
        form,
        "CPICxb4lsvpGvk28H"
      );

      form.reset();

      toast.success("Message sent", {
        description: "Thanks for reaching out — I'll reply soon.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      toast.error("Message failed", {
        description:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Send a message about a project, a role or a collaboration — I'll get back to you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form
            data-reveal
            className="reveal glass space-y-4 rounded-3xl p-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                required
                placeholder="What is this about?"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={fieldClass}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />

              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div data-reveal className="reveal space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card-hover glass flex items-center gap-4 rounded-2xl p-5"
            >
              <Mail className="h-5 w-5 shrink-0 text-primary" />

              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Email
                </span>

                <span className="block truncate text-sm font-medium">
                  {profile.email}
                </span>
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="card-hover glass flex items-center gap-4 rounded-2xl p-5"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary" />

              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Phone
                </span>

                <span className="block truncate text-sm font-medium">
                  {profile.phone}
                </span>
              </span>
            </a>

            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-muted-foreground">Social</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





// import { useState } from "react";
// import { Facebook, Github, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
// import { toast } from "sonner";
// import { profile } from "@/data/portfolio";
// import { SectionHeading } from "./Section";

// const socials = [
//   { icon: Github, label: "GitHub", href: profile.github },
//   { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
//   { icon: Facebook, label: "Facebook", href: profile.facebook },
//   { icon: Twitter, label: "X (Twitter)", href: profile.x },
// ];

// const fieldClass =
//   "w-full rounded-xl border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none";

// export function Contact() {
//   const [sending, setSending] = useState(false);

//   return (
//     <section id="contact" className="py-20 sm:py-28">
//       <div className="mx-auto max-w-6xl px-5">
//         <SectionHeading
//           eyebrow="Contact"
//           title="Let's build something together"
//           subtitle="Send a message about a project, a role or a collaboration — I'll get back to you."
//         />

//         <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
//           <form
//             data-reveal
//             className="reveal glass space-y-4 rounded-3xl p-6 sm:p-8"
//             onSubmit={(e) => {
//               e.preventDefault();
//               setSending(true);
//               const form = e.currentTarget;
//               setTimeout(() => {
//                 setSending(false);
//                 form.reset();
//                 toast.success("Message sent", {
//                   description: "Thanks for reaching out — I'll reply soon.",
//                 });
//               }, 700);
//             }}
//           >
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="name" className="mb-2 block text-sm font-medium">
//                   Name
//                 </label>
//                 <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
//               </div>
//               <div>
//                 <label htmlFor="email" className="mb-2 block text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="you@example.com"
//                   className={fieldClass}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="subject" className="mb-2 block text-sm font-medium">
//                 Subject
//               </label>
//               <input
//                 id="subject"
//                 name="subject"
//                 required
//                 placeholder="What is this about?"
//                 className={fieldClass}
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="mb-2 block text-sm font-medium">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={5}
//                 placeholder="Tell me about your project..."
//                 className={fieldClass}
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={sending}
//               className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
//             >
//               <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send Message"}
//             </button>
//           </form>

//           <div data-reveal className="reveal space-y-4">
//             <a
//               href={`mailto:${profile.email}`}
//               className="card-hover glass flex items-center gap-4 rounded-2xl p-5"
//             >
//               <Mail className="h-5 w-5 shrink-0 text-primary" />
//               <span className="min-w-0">
//                 <span className="block text-xs text-muted-foreground">Email</span>
//                 <span className="block truncate text-sm font-medium">{profile.email}</span>
//               </span>
//             </a>
//             <a
//               href={`tel:${profile.phone.replace(/\s/g, "")}`}
//               className="card-hover glass flex items-center gap-4 rounded-2xl p-5"
//             >
//               <Phone className="h-5 w-5 shrink-0 text-primary" />
//               <span className="min-w-0">
//                 <span className="block text-xs text-muted-foreground">Phone</span>
//                 <span className="block truncate text-sm font-medium">{profile.phone}</span>
//               </span>
//             </a>

//             <div className="glass rounded-2xl p-5">
//               <p className="text-xs text-muted-foreground">Social</p>
//               <ul className="mt-3 flex flex-wrap gap-3">
//                 {socials.map(({ icon: Icon, label, href }) => (
//                   <li key={label}>
//                     <a
//                       href={href}
//                       target="_blank"
//                       rel="noreferrer"
//                       aria-label={label}
//                       className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
//                     >
//                       <Icon className="h-5 w-5" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               {/* <p className="mt-4 text-xs text-muted-foreground">
//                 Contact details above are placeholders — replace them in{" "}
//                 <code className="font-mono">src/data/portfolio.ts</code>.
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
