import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => (
  <section className="relative h-[520px] md:h-[620px] overflow-hidden">
    <img src={heroCampus} alt="IIIST Campus" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-6 font-body">
        NAAC A+ Accredited Institution
      </span>
      <h2 className="text-primary-foreground font-heading text-4xl md:text-6xl font-black mb-4 text-shadow animate-fade-in-up">
        Empowering Future Innovators
      </h2>
      <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mb-8 text-shadow">
        A premier institute offering world-class education in Engineering, Technology & Management
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/admissions" className="bg-accent text-accent-foreground font-body font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all shadow-lg">
          Apply Now
        </Link>
        <Link to="/courses" className="border-2 border-primary-foreground text-primary-foreground font-body font-bold px-8 py-3 rounded-lg hover:bg-white/20 transition-all">
          Explore Courses
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
