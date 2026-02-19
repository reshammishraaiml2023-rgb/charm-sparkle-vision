import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm font-body">
          <div className="flex items-center gap-4 text-background/80">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91-731-4014400</span>
            <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" /> info@iiist.edu.in</span>
          </div>
          <span className="text-accent font-semibold text-xs hidden md:inline">✨ Admissions Open 2025-26</span>
        </div>
      </div>

      {/* Logo */}
      <div className="bg-background py-4 px-4 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-heading font-black text-lg">IIIST</span>
            </div>
            <div>
              <h1 className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight">
                Indian Institute of Innovative Science & Technology
              </h1>
              <p className="text-xs text-muted-foreground font-body">Empowering Future Innovators · NAAC A+ Accredited</p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">NAAC A+</span>
            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">AICTE Approved</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-gradient text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-semibold font-body rounded transition-colors duration-200 ${
                    location.pathname === item.href ? "bg-white/25" : "hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/admissions"
              className="hidden md:block bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full hover:brightness-110 transition-all"
            >
              Apply Now
            </Link>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-white/20 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-6 py-3 text-sm font-semibold hover:bg-white/15 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
