import { Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", course: "B.Tech CSE, 2024", text: "IIIST provided me with incredible opportunities. The faculty mentorship and industry exposure helped me land a role at a top MNC right after graduation." },
  { name: "Rahul Verma", course: "B.Tech IT, 2023", text: "The hands-on projects and hackathon culture at IIIST shaped my problem-solving skills. I'm now working as a full-stack developer at a leading startup." },
  { name: "Ananya Patel", course: "M.Tech AI/ML, 2024", text: "The AI/ML program at IIIST is outstanding. The research facilities and collaborations with industry gave me a strong foundation for my career in data science." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Student Testimonials</h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 border border-border shadow-sm card-hover">
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-body font-bold text-foreground text-sm">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
