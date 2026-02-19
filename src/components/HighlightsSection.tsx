import { Users, FlaskConical, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Users, title: "Top Faculty", desc: "500+ highly qualified professors with industry and research experience from top universities worldwide." },
  { icon: FlaskConical, title: "Modern Labs", desc: "State-of-the-art laboratories equipped with the latest technology for hands-on learning." },
  { icon: Lightbulb, title: "100% Placement Support", desc: "Dedicated placement cell with partnerships with 200+ leading companies ensuring career success." },
];

const HighlightsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Why Choose IIIST?</h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((h) => (
          <div key={h.title} className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border card-hover">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <h.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{h.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
