import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Events", "Reports", "Gallery"],
  },
  {
    title: "Resources",
    links: ["Annual Reports", "MoM Documents", "Guidelines", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container section-padding-sm">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-bold text-accent-foreground text-sm">IIC</span>
              </div>
              <span className="font-bold text-lg">IIC Portal</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Fostering innovation and entrepreneurship among students through mentorship, events, and collaboration.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                Innovation Center, Main Campus
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Mail size={16} className="shrink-0 text-accent" />
                iic@institution.edu
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Phone size={16} className="shrink-0 text-accent" />
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Institution's Innovation Council. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Ministry of Education, Government of India Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
