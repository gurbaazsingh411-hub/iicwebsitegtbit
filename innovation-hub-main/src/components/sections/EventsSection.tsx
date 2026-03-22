import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const events = [
  {
    title: "National Hackathon 2026",
    date: "April 15–17, 2026",
    location: "Main Auditorium",
    tag: "Upcoming",
    tagColor: "bg-accent text-accent-foreground",
    description: "48-hour coding marathon to solve real-world problems with mentorship from industry experts.",
  },
  {
    title: "IPR & Patent Workshop",
    date: "March 28, 2026",
    location: "Seminar Hall B",
    tag: "Upcoming",
    tagColor: "bg-accent text-accent-foreground",
    description: "Learn about intellectual property rights, patent filing procedures, and protecting your innovations.",
  },
  {
    title: "Startup Bootcamp 2025",
    date: "December 5–7, 2025",
    location: "Innovation Lab",
    tag: "Completed",
    tagColor: "bg-muted text-muted-foreground",
    description: "Intensive 3-day program covering business model canvas, pitching, and fundraising strategies.",
  },
  {
    title: "Ideathon: Smart Campus",
    date: "November 12, 2025",
    location: "Virtual Event",
    tag: "Completed",
    tagColor: "bg-muted text-muted-foreground",
    description: "Ideation competition focused on IoT and AI solutions for sustainable campus operations.",
  },
];

export default function EventsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="events" className="section-padding" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
            >
              Events & Activities
            </p>
            <h2
              className={`font-serif text-3xl md:text-4xl text-foreground leading-[1.1] ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "80ms" }}
            >
              What's Happening
            </h2>
          </div>
          <Button
            variant="outline"
            className={`self-start md:self-auto gap-2 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "160ms" }}
          >
            View All Events <ArrowUpRight size={14} />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`group bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300 hover:border-accent/30 cursor-pointer ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${event.tagColor}`}>
                  {event.tag}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {event.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {event.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
