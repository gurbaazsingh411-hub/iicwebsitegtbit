import { ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPattern from "@/assets/hero-pattern.png";

const stats = [
  { value: "150+", label: "Events Conducted" },
  { value: "2,400+", label: "Students Impacted" },
  { value: "35+", label: "Startups Incubated" },
  { value: "12", label: "Patents Filed" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative hero-gradient min-h-[100vh] flex items-center overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPattern})` }}
      />
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-accent/5 animate-float" />
      <div className="absolute bottom-1/3 left-[5%] w-48 h-48 rounded-full bg-accent/3" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-reveal-up inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-8 border border-primary-foreground/10">
            <Lightbulb size={14} className="text-accent" />
            <span className="text-xs font-medium text-primary-foreground/80 tracking-wide uppercase">
              Ministry of Education Initiative
            </span>
          </div>

          {/* Heading */}
          <h1
            className="animate-reveal-up font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.08] mb-6"
            style={{ animationDelay: "80ms" }}
          >
            Institution's{" "}
            <span className="text-gradient">Innovation</span>{" "}
            Council
          </h1>

          <p
            className="animate-reveal-up text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{ animationDelay: "160ms" }}
          >
            Empowering students to ideate, innovate, and build — transforming ideas into impactful ventures through mentorship and hands-on experience.
          </p>

          {/* CTAs */}
          <div
            className="animate-reveal-up flex flex-wrap gap-4 mb-16"
            style={{ animationDelay: "240ms" }}
          >
            <Button variant="hero" size="lg" className="gap-2">
              Explore Events <ArrowRight size={16} />
            </Button>
            <Button variant="hero-outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div
            className="animate-reveal-up grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-primary-foreground/10"
            style={{ animationDelay: "320ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground tabular-nums">{stat.value}</p>
                <p className="text-xs md:text-sm text-primary-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
