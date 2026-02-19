import { useState } from "react";
import { Menu, X, Search, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Our Colleges", href: "#colleges" },
  { label: "Facilities", href: "#facilities" },
  { label: "Admissions", href: "#admissions" },
  { label: "Placements", href: "#placements" },
  { label: "Events", href: "#events" },
  { label: "Career", href: "#career" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm font-body">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91-731-4014400
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3" /> info@ifrfrr.edu.in
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-accent font-semibold">
              ✨ Admissions Open 2025-26
            </span>
          </div>
        </div>
      </div>

      {/* Logo area */}
      <div className="bg-background py-4 px-4 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-xl">IIST</span>
            </div>
            <div>
              <h1 className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight">
                Indore Institute of Science & Technology
              </h1>
              <p className="text-xs text-muted-foreground font-body">
                Pharmacy and Management · Established 2003
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              NAAC A+
            </span>
            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              AICTE Approved
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-gradient text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold font-body hover:bg-white/20 rounded transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button className="hidden md:flex items-center gap-1 text-sm hover:bg-white/20 px-3 py-2 rounded transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
