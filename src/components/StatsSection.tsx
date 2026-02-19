import { GraduationCap, Users, Award, Building2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "15,000+", label: "Students Enrolled" },
  { icon: Users, value: "500+", label: "Expert Faculty" },
  { icon: Award, value: "95%", label: "Placement Rate" },
  { icon: Building2, value: "20+", label: "Departments" },
];

const StatsSection = () => (
  <section className="py-16 section-dark">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
            <s.icon className="w-10 h-10 text-accent mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-heading font-black text-primary-foreground mb-1">{s.value}</div>
            <div className="text-primary-foreground/70 font-body text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
