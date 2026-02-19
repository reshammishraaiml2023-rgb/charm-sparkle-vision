const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Welcome to IIIST</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
          The Indian Institute of Innovative Science & Technology (IIIST) is a premier engineering institution established with a vision to provide cutting-edge education in science, technology, and management. Approved by AICTE and affiliated to top universities, we offer a range of undergraduate and postgraduate programs.
        </p>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          With state-of-the-art labs, world-class faculty, and strong industry partnerships, IIIST has consistently produced leaders who drive innovation across the globe.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
