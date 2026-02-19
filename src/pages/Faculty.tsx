import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const facultyData = [
  { name: "Dr. Rajesh Kumar", qualification: "Ph.D, IIT Delhi", specialization: "Artificial Intelligence", department: "CSE" },
  { name: "Dr. Sunita Sharma", qualification: "Ph.D, IISc Bangalore", specialization: "Machine Learning", department: "CSE" },
  { name: "Dr. Amit Patel", qualification: "Ph.D, NIT Trichy", specialization: "VLSI Design", department: "ECE" },
  { name: "Dr. Kavita Joshi", qualification: "Ph.D, IIT Bombay", specialization: "Data Science", department: "IT" },
  { name: "Dr. Vikram Singh", qualification: "Ph.D, IIT Kanpur", specialization: "Robotics", department: "Mechanical" },
  { name: "Dr. Meera Nair", qualification: "Ph.D, BITS Pilani", specialization: "Cloud Computing", department: "CSE" },
  { name: "Dr. Arjun Reddy", qualification: "Ph.D, IIT Madras", specialization: "Structural Engineering", department: "Civil" },
  { name: "Dr. Pooja Gupta", qualification: "Ph.D, IIT Roorkee", specialization: "IoT & Embedded Systems", department: "ECE" },
  { name: "Dr. Suresh Yadav", qualification: "Ph.D, JNU Delhi", specialization: "Cybersecurity", department: "IT" },
  { name: "Dr. Neha Kapoor", qualification: "Ph.D, IIT Hyderabad", specialization: "NLP & Computer Vision", department: "CSE" },
  { name: "Dr. Ravi Tiwari", qualification: "Ph.D, NIT Bhopal", specialization: "Thermal Engineering", department: "Mechanical" },
  { name: "Dr. Shalini Verma", qualification: "Ph.D, IIT Indore", specialization: "Blockchain Technology", department: "IT" },
];

const Faculty = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="nav-gradient py-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-2">Our Faculty</h1>
        <p className="font-body text-primary-foreground/80">Meet our world-class team of educators and researchers</p>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facultyData.map((f) => (
              <div key={f.name} className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">{f.name}</h3>
                <p className="font-body text-xs text-muted-foreground mb-1">{f.qualification}</p>
                <p className="font-body text-xs text-primary font-semibold mb-1">{f.specialization}</p>
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-body font-semibold px-2 py-0.5 rounded-full">{f.department}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Faculty;
