import { GraduationCap, Users, Trophy, Building2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "20+", label: "Years of Excellence", delay: "0s" },
  { icon: Users, value: "10,000+", label: "Alumni Network", delay: "0.1s" },
  { icon: Trophy, value: "50+", label: "Awards & Rankings", delay: "0.2s" },
  { icon: Building2, value: "15+", label: "Departments", delay: "0.3s" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center stat-card-hover bg-white/10 backdrop-blur-sm rounded-xl p-6"
              style={{ animationDelay: stat.delay }}
            >
              <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-heading font-black text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-body text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
