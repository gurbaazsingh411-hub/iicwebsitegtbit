import { Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const members = [
  { name: "Dr. Priya Sharma", role: "Faculty Coordinator", initials: "PS" },
  { name: "Prof. Rajeev Mehta", role: "Co-Coordinator", initials: "RM" },
  { name: "Ananya Gupta", role: "Student President", initials: "AG" },
  { name: "Karthik Nair", role: "Vice President", initials: "KN" },
  { name: "Meera Joshi", role: "Secretary", initials: "MJ" },
  { name: "Arjun Patel", role: "Technical Lead", initials: "AP" },
  { name: "Sanya Reddy", role: "Events Head", initials: "SR" },
  { name: "Dev Kapoor", role: "Design Lead", initials: "DK" },
];

const colors = [
  "bg-primary/10 text-primary",
  "bg-accent/15 text-accent-foreground",
  "bg-emerald-100 text-emerald-700",
  "bg-rose-100 text-rose-700",
];

export default function MembersSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="members" className="section-padding" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            Our Team
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl text-foreground leading-[1.1] mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "80ms" }}
          >
            Meet the Council
          </h2>
          <p
            className={`text-muted-foreground ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "160ms" }}
          >
            Dedicated faculty and student leaders driving innovation on campus.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {members.map((member, i) => (
            <div
              key={member.name}
              className={`group bg-card rounded-xl border border-border p-5 text-center hover:shadow-md hover:border-accent/30 transition-all duration-300 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 60}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold ${colors[i % colors.length]}`}
              >
                {member.initials}
              </div>
              <h4 className="text-sm font-semibold text-foreground">{member.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              <button className="mt-3 p-1.5 rounded-full hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
                <Linkedin size={14} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
