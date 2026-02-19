import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">IIST Indore</h3>
            <p className="font-body text-background/70 text-sm leading-relaxed mb-4">
              Indore Institute of Science & Technology, Pharmacy and Management — shaping future leaders since 2003.
            </p>
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              NAAC A+ Accredited
            </span>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="font-body text-sm space-y-2 text-background/70">
              {["About Us", "Admissions", "Placements", "Events", "Career", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="font-body text-sm space-y-3 text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                Opposite IIM Indore, Rau-Pithampur Road, Indore, M.P.
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                +91-731-4014400
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                info@ifrfrr.edu.in
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                Mon - Sat: 9:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-4">
        <p className="text-center font-body text-xs text-background/50">
          © 2025 Indore Institute of Science & Technology. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
