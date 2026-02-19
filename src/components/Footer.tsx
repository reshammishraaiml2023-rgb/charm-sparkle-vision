import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-sm">IIIST</span>
            </div>
            <span className="font-heading font-bold text-lg">IIIST</span>
          </div>
          <p className="font-body text-primary-foreground/60 text-sm leading-relaxed mb-4">
            Indian Institute of Innovative Science & Technology — Empowering Future Innovators since 2003.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold mb-4">Quick Links</h3>
          <ul className="font-body text-sm space-y-2 text-primary-foreground/60">
            {[["Home","/"],["About Us","/about"],["Courses","/courses"],["Admissions","/admissions"],["Faculty","/faculty"],["Contact","/contact"]].map(([l,h]) => (
              <li key={l}><Link to={h} className="hover:text-accent transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold mb-4">Programs</h3>
          <ul className="font-body text-sm space-y-2 text-primary-foreground/60">
            {["B.Tech Programs","M.Tech Programs","Diploma Programs","Ph.D Research","MBA Programs"].map((l) => (
              <li key={l}><Link to="/courses" className="hover:text-accent transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold mb-4">Contact</h3>
          <ul className="font-body text-sm space-y-3 text-primary-foreground/60">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />Near IIM Road, Innovation City, India</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent shrink-0" />+91-731-4014400</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent shrink-0" />info@iiist.edu.in</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent shrink-0" />Mon - Sat: 9AM - 5PM</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-4">
      <p className="text-center font-body text-xs text-primary-foreground/40">
        © 2026 Indian Institute of Innovative Science & Technology. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
