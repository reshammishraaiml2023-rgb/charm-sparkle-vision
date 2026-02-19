import { Monitor, Cpu, Brain, Wifi, Cog, HardHat, FlaskConical, BarChart3 } from "lucide-react";

const courses = [
  { icon: Monitor, name: "Computer Science", code: "CS" },
  { icon: Cpu, name: "Information Technology", code: "IT" },
  { icon: Brain, name: "AI & Machine Learning", code: "AI/ML" },
  { icon: Wifi, name: "Electronics & Communication", code: "EC" },
  { icon: Cog, name: "Mechanical Engineering", code: "ME" },
  { icon: HardHat, name: "Civil Engineering", code: "CE" },
  { icon: FlaskConical, name: "Pharmacy", code: "B.Pharm" },
  { icon: BarChart3, name: "Management & Research", code: "MBA" },
];

const CoursesSection = () => {
  return (
    <section id="colleges" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Programs
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4 rounded-full" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover our comprehensive range of undergraduate and postgraduate programs
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course) => (
            <div
              key={course.code}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <course.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-1">
                {course.name}
              </h3>
              <span className="text-xs font-body text-muted-foreground font-semibold">
                {course.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
