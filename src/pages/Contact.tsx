import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="nav-gradient py-16 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-2">Contact Us</h1>
          <p className="font-body text-primary-foreground/80">We'd love to hear from you</p>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: "Address", value: "Near IIM Road, Innovation City, Madhya Pradesh, India - 453331" },
                    { icon: Phone, label: "Phone", value: "+91-731-4014400, +91-731-4014401" },
                    { icon: Mail, label: "Email", value: "info@iiist.edu.in, admissions@iiist.edu.in" },
                    { icon: Clock, label: "Office Hours", value: "Monday - Saturday: 9:00 AM - 5:00 PM" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm">{c.label}</p>
                        <p className="font-body text-muted-foreground text-sm">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456!2d75.8!3d22.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM5JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="IIIST Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <div className="space-y-5">
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1 block">Your Name</label>
                      <input className="w-full border border-border rounded-lg px-4 py-2.5 bg-background outline-none font-body text-sm text-foreground focus:ring-2 focus:ring-ring" placeholder="John Doe" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1 block">Email Address</label>
                      <input type="email" className="w-full border border-border rounded-lg px-4 py-2.5 bg-background outline-none font-body text-sm text-foreground focus:ring-2 focus:ring-ring" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1 block">Subject</label>
                      <input className="w-full border border-border rounded-lg px-4 py-2.5 bg-background outline-none font-body text-sm text-foreground focus:ring-2 focus:ring-ring" placeholder="Inquiry about admissions" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} />
                    </div>
                    <div>
                      <label className="font-body text-sm font-semibold text-foreground mb-1 block">Message</label>
                      <textarea className="w-full border border-border rounded-lg px-4 py-2.5 bg-background outline-none font-body text-sm text-foreground resize-none h-32 focus:ring-2 focus:ring-ring" placeholder="Write your message here..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                    </div>
                    <button className="w-full bg-primary text-primary-foreground font-body font-bold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </div>
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

export default Contact;
