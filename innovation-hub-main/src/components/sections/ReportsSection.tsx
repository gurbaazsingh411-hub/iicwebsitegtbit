import { FileText, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reports = [
  { title: "Annual Report 2024–25", category: "Annual", size: "2.4 MB" },
  { title: "Hackathon 2025 — Event Report", category: "Event", size: "1.8 MB" },
  { title: "IIC Council MoM — March 2025", category: "MoM", size: "420 KB" },
  { title: "Startup Bootcamp Report", category: "Event", size: "3.1 MB" },
  { title: "Annual Report 2023–24", category: "Annual", size: "2.1 MB" },
  { title: "IPR Workshop Report", category: "Event", size: "1.2 MB" },
];

const categoryColors: Record<string, string> = {
  Annual: "bg-primary/10 text-primary",
  Event: "bg-accent/10 text-accent-foreground",
  MoM: "bg-secondary text-secondary-foreground",
};

export default function ReportsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reports" className="section-padding surface-warm" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              Reports & Documents
            </p>
            <h2
              className={`font-serif text-3xl md:text-4xl text-foreground leading-[1.1] ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: "80ms" }}
            >
              Knowledge Base
            </h2>
          </div>
          <Button variant="outline" className={`self-start md:self-auto gap-2 ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: "160ms" }}>
            Browse All <ArrowUpRight size={14} />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report, i) => (
            <div
              key={report.title}
              className={`group flex items-start gap-4 bg-card rounded-xl border border-border p-5 hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <FileText size={18} className="text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-foreground truncate group-hover:text-accent transition-colors">
                  {report.title}
                </h4>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[report.category]}`}>
                    {report.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{report.size}</span>
                </div>
              </div>
              <Download size={16} className="text-muted-foreground group-hover:text-accent shrink-0 mt-1 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
