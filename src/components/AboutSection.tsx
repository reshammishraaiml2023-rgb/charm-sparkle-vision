const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome to IIST
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            Indore Institute of Science & Technology (IIST) was established in 2003 and is amongst the Top 5 Engineering
            Colleges of Indore. Approved by AICTE New Delhi and affiliated to RGPV Bhopal, offering Bachelor's degree
            (B.Tech) in Computer Science, Information Technology, AI & ML, Robotics & AI, Data Science, Electronics &
            Computer Science, Electronics & Communication, Mechanical and Civil Engineering.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            The Institute also offers Master's Degrees (ME/M.Tech) in Computer Science, AI & ML and Data Science,
            producing industry-ready professionals who lead innovation across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
