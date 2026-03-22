import { Target, Eye, Award, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description: "To cultivate a culture of innovation and entrepreneurship among students and faculty members.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To become a leading innovation hub that nurtures creative thinking and transforms ideas into reality.",
  },
  {
    icon: Award,
    title: "Values",
    description: "Integrity, collaboration, and excellence in every initiative we undertake for the student community.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Driving measurable outcomes through mentorship, funding support, and industry partnerships.",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding surface-warm" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p
            className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            About Us
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-5 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "80ms" }}
          >
            Driving Innovation Forward
          </h2>
          <p
            className={`text-muted-foreground text-base md:text-lg leading-relaxed ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "160ms" }}
          >
            Established under the Ministry of Education, the IIC fosters a systematic culture of innovation in higher education institutions across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${240 + i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <pillar.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
