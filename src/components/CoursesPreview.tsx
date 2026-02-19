import { Link } from "react-router-dom";
import { Monitor, Cpu, Brain, Wifi, Cog, HardHat } from "lucide-react";

const courses = [
  { icon: Monitor, name: "Computer Science & Engineering", duration: "4 Years", code: "B.Tech" },
  { icon: Cpu, name: "Information Technology", duration: "4 Years", code: "B.Tech" },
  { icon: Brain, name: "AI & Machine Learning", duration: "4 Years", code: "B.Tech" },
  { icon: Wifi, name: "Electronics & Communication", duration: "4 Years", code: "B.Tech" },
  { icon: Cog, name: "Mechanical Engineering", duration: "4 Years", code: "B.Tech" },
  { icon: HardHat, name: "Civil Engineering", duration: "4 Years", code: "B.Tech" },
];

const CoursesPreview = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-2">Our Programs</h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-4 rounded-full" />
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Comprehensive programs designed to prepare you for the challenges of tomorrow
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {courses.map((c) => (
          <div key={c.name} className="bg-card rounded-xl p-6 text-center border border-border card-hover group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
              <c.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-1">{c.name}</h3>
            <span className="text-xs font-body text-muted-foreground">{c.code} · {c.duration}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/courses" className="bg-primary text-primary-foreground font-body font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all inline-block">
          View All Courses
        </Link>
      </div>
    </div>
  </section>
);

export default CoursesPreview;
