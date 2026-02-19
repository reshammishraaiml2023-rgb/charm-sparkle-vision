import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import campusAerial from "@/assets/campus-aerial.jpg";
import library from "@/assets/library.jpg";
import lab from "@/assets/lab.jpg";
import { Eye, Target, Award, Building } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      {/* Page Header */}
      <section className="nav-gradient py-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-2">About IIIST</h1>
        <p className="font-body text-primary-foreground/80">Learn about our legacy, vision, and values</p>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-2xl p-8 card-hover">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be a globally recognized institution of excellence in science, technology, and innovation, producing leaders who transform society through knowledge, creativity, and ethical practices.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 card-hover">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                To provide world-class education through innovative teaching methodologies, cutting-edge research, industry collaboration, and holistic development of students to meet global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-2">Director's Message</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full" />
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              "At IIIST, we believe in nurturing not just engineers and scientists, but leaders and changemakers. Our commitment to excellence in education, research, and innovation has positioned us as one of the premier institutions in the country."
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              "We invite you to be part of our vibrant community where curiosity meets opportunity, and knowledge meets impact."
            </p>
            <p className="font-body font-bold text-foreground">Dr. Rajesh Kumar</p>
            <p className="font-body text-sm text-muted-foreground">Director, IIIST</p>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-2">Campus Gallery</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full" />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { src: campusAerial, alt: "Campus Aerial View" },
              { src: library, alt: "Central Library" },
              { src: lab, alt: "Research Laboratory" },
            ].map((img) => (
              <div key={img.alt} className="rounded-2xl overflow-hidden shadow-md card-hover">
                <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-4 bg-card text-center">
                  <p className="font-body text-sm font-semibold text-foreground">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-2">Accreditation & Affiliations</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, name: "NAAC A+" },
              { icon: Building, name: "AICTE Approved" },
              { icon: Award, name: "NBA Accredited" },
              { icon: Building, name: "UGC Recognized" },
            ].map((a) => (
              <div key={a.name} className="bg-card rounded-xl p-6 text-center border border-border card-hover">
                <a.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="font-body text-sm font-bold text-foreground">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
