import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const galleryItems = [
  { label: "Hackathon 2025", span: "col-span-2 row-span-2" },
  { label: "IPR Workshop", span: "col-span-1 row-span-1" },
  { label: "Guest Lecture", span: "col-span-1 row-span-1" },
  { label: "Startup Expo", span: "col-span-1 row-span-2" },
  { label: "Innovation Week", span: "col-span-1 row-span-1" },
  { label: "Award Ceremony", span: "col-span-1 row-span-1" },
];

const placeholderColors = [
  "from-primary/20 to-primary/5",
  "from-accent/20 to-accent/5",
  "from-emerald-200/50 to-emerald-50/30",
  "from-rose-200/50 to-rose-50/30",
  "from-sky-200/50 to-sky-50/30",
  "from-amber-200/50 to-amber-50/30",
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="section-padding surface-warm" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-3 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            Gallery
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl text-foreground leading-[1.1] mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "80ms" }}
          >
            Moments Captured
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`${item.span} group relative rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br ${placeholderColors[i]} ${
                isVisible ? "animate-reveal-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-sm font-medium text-foreground/80 bg-card/80 backdrop-blur-sm rounded-md px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
