import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, FileText, Calendar, ClipboardList, User, Mail, Phone, BookOpen } from "lucide-react";
import { useState } from "react";

const steps = [
  { step: 1, title: "Register Online", desc: "Create an account on our admission portal and fill in your basic details." },
  { step: 2, title: "Fill Application Form", desc: "Complete the application form with academic details, preferences, and upload documents." },
  { step: 3, title: "Pay Application Fee", desc: "Pay the non-refundable application fee of ₹500 through online payment." },
  { step: 4, title: "Entrance Exam / Merit", desc: "Appear for the entrance exam or submit your JEE/state exam scores." },
  { step: 5, title: "Counseling & Seat Allotment", desc: "Attend the counseling session and receive your seat allotment based on merit." },
  { step: 6, title: "Confirm Admission", desc: "Pay the admission fee and complete document verification to confirm your seat." },
];

const documents = [
  "10th & 12th Marksheets",
  "JEE / State Entrance Score Card",
  "Transfer Certificate",
  "Migration Certificate",
  "Character Certificate",
  "Domicile Certificate",
  "Category Certificate (if applicable)",
  "Passport Size Photos (4 copies)",
  "Aadhaar Card",
  "Medical Fitness Certificate",
];

const importantDates = [
  { event: "Application Form Opens", date: "March 1, 2026" },
  { event: "Last Date to Apply", date: "June 15, 2026" },
  { event: "Entrance Exam", date: "June 25, 2026" },
  { event: "Results Declaration", date: "July 5, 2026" },
  { event: "Counseling Begins", date: "July 15, 2026" },
  { event: "Classes Commence", date: "August 1, 2026" },
];

const Admissions = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="nav-gradient py-16 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-2">Admissions 2026</h1>
          <p className="font-body text-primary-foreground/80">Your journey to excellence starts here</p>
        </section>

        {/* Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-2">Admission Process</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.step} className="bg-card rounded-xl p-6 border border-border card-hover relative">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-body font-bold text-sm">{s.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-2">Apply Online</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full" />
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="space-y-5">
                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-1 block">Full Name</label>
                  <div className="flex items-center border border-border rounded-lg px-3 py-2.5 bg-background">
                    <User className="w-4 h-4 text-muted-foreground mr-2" />
                    <input className="flex-1 bg-transparent outline-none font-body text-sm text-foreground" placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-1 block">Email Address</label>
                  <div className="flex items-center border border-border rounded-lg px-3 py-2.5 bg-background">
                    <Mail className="w-4 h-4 text-muted-foreground mr-2" />
                    <input type="email" className="flex-1 bg-transparent outline-none font-body text-sm text-foreground" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-1 block">Phone Number</label>
                  <div className="flex items-center border border-border rounded-lg px-3 py-2.5 bg-background">
                    <Phone className="w-4 h-4 text-muted-foreground mr-2" />
                    <input type="tel" className="flex-1 bg-transparent outline-none font-body text-sm text-foreground" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-1 block">Preferred Course</label>
                  <div className="flex items-center border border-border rounded-lg px-3 py-2.5 bg-background">
                    <BookOpen className="w-4 h-4 text-muted-foreground mr-2" />
                    <select className="flex-1 bg-transparent outline-none font-body text-sm text-foreground" value={form.course} onChange={(e) => setForm({...form, course: e.target.value})}>
                      <option value="">Select a course</option>
                      <option>B.Tech - Computer Science</option>
                      <option>B.Tech - AI & ML</option>
                      <option>B.Tech - IT</option>
                      <option>B.Tech - ECE</option>
                      <option>B.Tech - Mechanical</option>
                      <option>B.Tech - Civil</option>
                      <option>M.Tech Programs</option>
                      <option>Diploma Programs</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-1 block">Message (Optional)</label>
                  <textarea className="w-full border border-border rounded-lg px-3 py-2.5 bg-background outline-none font-body text-sm text-foreground resize-none h-24" placeholder="Any additional information..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                </div>
                <button className="w-full bg-primary text-primary-foreground font-body font-bold py-3 rounded-lg hover:brightness-110 transition-all">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Documents & Dates */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Required Documents</h2>
                <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
                <ul className="space-y-3">
                  {documents.map((d) => (
                    <li key={d} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Important Dates</h2>
                <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
                <div className="space-y-4">
                  {importantDates.map((d) => (
                    <div key={d.event} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                      <Calendar className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">{d.event}</p>
                        <p className="font-body text-xs text-muted-foreground">{d.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
