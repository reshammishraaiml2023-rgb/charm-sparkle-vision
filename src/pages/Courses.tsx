import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, IndianRupee, GraduationCap } from "lucide-react";

const btechPrograms = [
  { name: "Computer Science & Engineering", duration: "4 Years", eligibility: "10+2 with PCM (60%+)", fees: "₹1,20,000/year" },
  { name: "Information Technology", duration: "4 Years", eligibility: "10+2 with PCM (60%+)", fees: "₹1,10,000/year" },
  { name: "AI & Machine Learning", duration: "4 Years", eligibility: "10+2 with PCM (60%+)", fees: "₹1,30,000/year" },
  { name: "Electronics & Communication", duration: "4 Years", eligibility: "10+2 with PCM (55%+)", fees: "₹1,00,000/year" },
  { name: "Mechanical Engineering", duration: "4 Years", eligibility: "10+2 with PCM (55%+)", fees: "₹95,000/year" },
  { name: "Civil Engineering", duration: "4 Years", eligibility: "10+2 with PCM (55%+)", fees: "₹90,000/year" },
  { name: "Robotics & AI", duration: "4 Years", eligibility: "10+2 with PCM (60%+)", fees: "₹1,25,000/year" },
  { name: "Data Science", duration: "4 Years", eligibility: "10+2 with PCM (60%+)", fees: "₹1,20,000/year" },
];

const mtechPrograms = [
  { name: "Computer Science", duration: "2 Years", eligibility: "B.Tech/BE (60%+)", fees: "₹80,000/year" },
  { name: "AI & Machine Learning", duration: "2 Years", eligibility: "B.Tech/BE (60%+)", fees: "₹90,000/year" },
  { name: "Data Science", duration: "2 Years", eligibility: "B.Tech/BE (60%+)", fees: "₹85,000/year" },
];

const diplomaPrograms = [
  { name: "Diploma in Computer Science", duration: "3 Years", eligibility: "10th Pass (50%+)", fees: "₹50,000/year" },
  { name: "Diploma in Mechanical Engineering", duration: "3 Years", eligibility: "10th Pass (50%+)", fees: "₹45,000/year" },
  { name: "Diploma in Electrical Engineering", duration: "3 Years", eligibility: "10th Pass (50%+)", fees: "₹45,000/year" },
];

const ProgramSection = ({ title, programs }: { title: string; programs: typeof btechPrograms }) => (
  <div className="mb-16">
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
    <div className="w-16 h-1 bg-accent mb-8 rounded-full" />
    <div className="grid md:grid-cols-2 gap-5">
      {programs.map((p) => (
        <div key={p.name} className="bg-card rounded-xl p-6 border border-border card-hover">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">{p.name}</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" /> Duration: {p.duration}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary shrink-0" /> Eligibility: {p.eligibility}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <IndianRupee className="w-4 h-4 text-primary shrink-0" /> Fees: {p.fees}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Courses = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="nav-gradient py-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-2">Our Courses</h1>
        <p className="font-body text-primary-foreground/80">Explore our comprehensive range of programs</p>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ProgramSection title="B.Tech Programs" programs={btechPrograms} />
          <ProgramSection title="M.Tech Programs" programs={mtechPrograms} />
          <ProgramSection title="Diploma Programs" programs={diplomaPrograms} />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Courses;
