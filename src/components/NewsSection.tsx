import { Calendar } from "lucide-react";

const news = [
  { date: "Feb 10, 2026", title: "IIIST Students Win National Hackathon 2026", desc: "A team of 5 students secured first place at the Smart India Hackathon with their AI-powered solution." },
  { date: "Jan 25, 2026", title: "New AI Research Lab Inaugurated", desc: "State-of-the-art artificial intelligence research laboratory launched with industry partnership." },
  { date: "Jan 15, 2026", title: "Campus Placement Drive — 95% Students Placed", desc: "Record-breaking placement season with top recruiters offering packages up to 25 LPA." },
];

const NewsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Latest News & Announcements</h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
      <div className="grid md:grid-cols-3 gap-8">
        {news.map((n) => (
          <div key={n.title} className="bg-card rounded-2xl overflow-hidden border border-border card-hover group cursor-pointer">
            <div className="h-2 nav-gradient" />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-3">
                <Calendar className="w-3.5 h-3.5" /> {n.date}
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{n.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
