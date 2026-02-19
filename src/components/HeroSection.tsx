import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={heroCampus}
        alt="IIST Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-primary-foreground font-heading text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-shadow animate-fade-in-up">
          Shaping Future Leaders
        </h2>
        <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mb-8 text-shadow" style={{ animationDelay: "0.2s" }}>
          Amongst the Top Engineering Colleges in Central India — Approved by AICTE & Affiliated to RGPV Bhopal
        </p>
        <div className="flex flex-wrap gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
          <a
            href="#admissions"
            className="bg-accent text-accent-foreground font-body font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg"
          >
            Apply Now
          </a>
          <a
            href="#about"
            className="border-2 border-primary-foreground text-primary-foreground font-body font-bold px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            Explore Campus
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
