import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "How can I become a member of IIC?", a: "Students can apply during the annual membership drive held at the start of each academic year." },
  { q: "Are events open to all students?", a: "Yes, most events are open to all enrolled students. Some competitions may have eligibility criteria." },
  { q: "How do I submit a project idea?", a: "Use the contact form below or visit the Innovation Lab during office hours to discuss your idea with mentors." },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div>
            <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${isVisible ? "animate-reveal-left" : "opacity-0"}`}>
              Get in Touch
            </p>
            <h2
              className={`font-serif text-3xl md:text-4xl text-foreground leading-[1.1] mb-6 ${isVisible ? "animate-reveal-left" : "opacity-0"}`}
              style={{ animationDelay: "80ms" }}
            >
              Have a Question?
            </h2>

            <form
              onSubmit={handleSubmit}
              className={`space-y-4 ${isVisible ? "animate-reveal-left" : "opacity-0"}`}
              style={{ animationDelay: "160ms" }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required className="h-11" />
                <Input type="email" placeholder="Email Address" required className="h-11" />
              </div>
              <Input placeholder="Subject" required className="h-11" />
              <Textarea placeholder="Your message..." required className="min-h-[120px] resize-none" />
              <Button type="submit" disabled={sending} className="gap-2">
                {sending ? "Sending…" : "Send Message"} <Send size={14} />
              </Button>
            </form>
          </div>

          {/* FAQs */}
          <div>
            <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}>
              FAQs
            </p>
            <h2
              className={`font-serif text-3xl md:text-4xl text-foreground leading-[1.1] mb-6 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}
              style={{ animationDelay: "80ms" }}
            >
              Common Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-card rounded-xl border border-border p-5 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}
                  style={{ animationDelay: `${200 + i * 80}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <MessageCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1.5">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
