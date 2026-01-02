import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cpu, 
  BrainCircuit, 
  Lock, 
  Zap, 
  BarChart, 
  Users, 
  GraduationCap, 
  Mail,
  CheckCircle2,
  Server
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";

import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useCreateMessage } from "@/hooks/use-messages";

export default function Home() {
  const createMessage = useCreateMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    createMessage.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200/50" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        </div>

        <div className="container-width relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <ShieldCheck size={16} />
              <span>Final Year Senior Project 2025/2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-secondary mb-6 leading-tight">
              E-mail Filtering System Powered by <span className="text-primary">Machine Learning</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Securing your inbox with intelligent, adaptive protection. A Mail Guard initiative by University of Bahrain students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full text-lg h-14 shadow-lg shadow-primary/25">
                View Project Demo
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 rounded-full text-lg h-14">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src="/images/uob_logo.png" 
                alt="University of Bahrain" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="section-padding bg-white relative">
        <div className="container-width">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4">
                <SectionHeading title="Abstract" subtitle="Project Overview" light className="mb-0" />
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mt-8 text-primary">
                  <BrainCircuit size={40} />
                </div>
              </div>
              <div className="md:col-span-8 text-white/90 text-lg leading-relaxed space-y-4">
                <p>
                  This report presents <strong className="text-white">Mail Guard</strong>, a full-stack web application developed to meet the email security and management requirements of MmBrand. The project was executed end-to-end, encompassing user-centered design, robust development practices, and comprehensive risk management.
                </p>
                <p>
                  Mail Guard employs machine learning algorithms trained on publicly available datasets from Kaggle to intelligently filter incoming emails, identifying spam, phishing attempts, and irrelevant content with high accuracy.
                </p>
                <p>
                  To enhance user experience, the application integrates an AI-powered assistant and interactive chatbot that guide users through system features, provide real-time explanations, and support decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="section-padding bg-gray-50">
        <div className="container-width">
          <SectionHeading 
            title="Project Objectives" 
            subtitle="Core goals guiding the development of Mail Guard" 
            centered 
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Intelligent Filtering", desc: "Using machine learning to classify and block spam/phishing with high precision." },
              { icon: Users, title: "Conversational AI", desc: "Interactive assistant that explains flagged emails to users in plain language." },
              { icon: BrainCircuit, title: "Enhanced Awareness", desc: "Improving employee decision-making through educational feedback loops." },
              { icon: BarChart, title: "Cost Efficiency", desc: "A lightweight, usable solution significantly cheaper than enterprise tools." },
              { icon: Zap, title: "Real-time Processing", desc: "Immediate threat analysis and response for incoming communications." },
            ].map((obj, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <obj.icon size={24} />
                    </div>
                    <CardTitle className="text-xl mb-2">{obj.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{obj.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeading title="Methodology & Approach" subtitle="Built on Waterfall & Agile Principles" />
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We adopted the <strong className="text-secondary">Waterfall software development model</strong> aligned with Agile framework elements for flexibility where needed.
                </p>
                <p>
                  The system uses a modern <strong className="text-secondary">microservices architecture</strong> ensuring scalability and separation of concerns:
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "React Frontend for responsive user interface",
                    "Node.js Backend for API and business logic",
                    "Python ML Services for intelligent threat detection",
                    "PostgreSQL for robust data persistence"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="relative group cursor-zoom-in"
            >
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-2 opacity-10 group-hover:rotate-1 transition-transform duration-500" />
              <div className="relative bg-white border border-gray-100 rounded-3xl p-4 shadow-xl overflow-hidden">
                <img 
                  src="/images/architecture.png" 
                  alt="System Architecture Diagram" 
                  className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-center text-secondary">Figure 1: High-level System Architecture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="section-padding bg-secondary text-white">
        <div className="container-width">
          <SectionHeading title="Technologies Used" subtitle="Modern stack for modern problems" centered light />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Frontend", items: ["React", "Tailwind CSS", "Shadcn UI", "Vite", "Framer Motion"] },
              { category: "Backend", items: ["Node.js", "Express", "Drizzle ORM", "PostgreSQL", "REST API"] },
              { category: "AI / ML", items: ["Python", "Scikit-learn", "OpenAI API", "Pandas", "NumPy"] },
              { category: "Infrastructure", items: ["Vercel", "Supabase", "Microsoft Graph API", "Git/GitHub"] },
            ].map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-primary mb-6 border-b border-white/10 pb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, j) => (
                    <Badge key={j} variant="secondary" className="bg-white/10 text-white hover:bg-primary hover:text-white border-none py-1.5">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="section-padding bg-gray-50">
        <div className="container-width">
          <SectionHeading title="Key Results" subtitle="Validation and Performance Metrics" centered />
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 text-center">
              <div className="text-green-500 mb-4 flex justify-center"><ShieldCheck size={48} /></div>
              <h3 className="text-2xl font-bold mb-2">Security Testing</h3>
              <p className="text-3xl font-bold text-secondary mb-2">Passed</p>
              <p className="text-muted-foreground">SQL Injection & XSS Vulnerability Tests</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center">
              <div className="text-primary mb-4 flex justify-center"><Zap size={48} /></div>
              <h3 className="text-2xl font-bold mb-2">Response Time</h3>
              <p className="text-3xl font-bold text-secondary mb-2">0.4 - 0.7s</p>
              <p className="text-muted-foreground">Average Processing Latency</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center">
              <div className="text-blue-500 mb-4 flex justify-center"><CheckCircle2 size={48} /></div>
              <h3 className="text-2xl font-bold mb-2">Accuracy</h3>
              <p className="text-3xl font-bold text-secondary mb-2">High</p>
              <p className="text-muted-foreground">Spam & Phishing Detection Confidence</p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
               <h3 className="text-2xl font-bold mb-4 font-heading">Conclusion</h3>
               <p className="text-muted-foreground leading-relaxed mb-6">
                 Mail Guard restores trust in communication channels by detecting malicious messages. The system successfully identifies spam and phishing attempts with high confidence, proving that ML-based filtering can act as a robust first line of defense.
               </p>
               <h4 className="font-bold text-secondary mb-2">Future Work</h4>
               <ul className="list-disc list-inside text-muted-foreground space-y-2">
                 <li>Multi-language support (specifically Arabic)</li>
                 <li>Automated dataset updates for evolving threats</li>
                 <li>Self-service model retraining interface</li>
               </ul>
             </div>
             <div className="w-full md:w-1/3 bg-gray-100 rounded-2xl p-8 text-center">
               <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Project Status</p>
               <p className="text-3xl font-bold text-green-600">Completed</p>
               <p className="text-sm text-muted-foreground mt-2">Semester 1 - 2025/2026</p>
             </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section-padding bg-white">
        <div className="container-width">
           <SectionHeading title="Project Demo" centered />
           
           <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-4">
               <h3 className="text-xl font-bold text-center">Elevator Pitch (English)</h3>
               <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative group cursor-pointer">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                 </div>
                 <p className="absolute bottom-4 text-white/80 text-sm">Video Placeholder</p>
               </div>
             </div>

             <div className="space-y-4">
               <h3 className="text-xl font-bold text-center">Elevator Pitch (Arabic)</h3>
               <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative group cursor-pointer">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                 </div>
                 <p className="absolute bottom-4 text-white/80 text-sm">Video Placeholder</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-secondary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-width relative z-10">
          <SectionHeading title="Project Team" subtitle="College of Information Technology — University of Bahrain" centered light />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { name: "Mahmood Fadhel Kadhem", id: "202106345", email: "202106345@stu.uob.edu.bh" },
              { name: "Aref Abbas Alqattan", id: "202105848", email: "202105848@stu.uob.edu.bh" },
              { name: "Yahya Abdulnabi Fardan", id: "202106365", email: "202106365@stu.uob.edu.bh" }
            ].map((student, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {student.name.split(' ')[0][0]}{student.name.split(' ')[1][0]}
                </div>
                <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">Cyber Security Major</p>
                <div className="space-y-1 text-sm text-white/60">
                  <p className="flex items-center justify-center gap-2">
                    <GraduationCap size={14} /> ID: {student.id}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail size={14} /> {student.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-8">
             <p className="text-sm uppercase tracking-widest text-primary mb-2">Project Supervisor</p>
             <h3 className="text-2xl font-bold font-heading">Dr. Ebrahim Abdulrahman Hasan Abdulrahman</h3>
             <p className="text-white/60 mt-2">College of Information Technology</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-2xl mx-auto">
            <SectionHeading title="Contact Us" subtitle="Have questions or feedback?" centered />
            
            <Card className="shadow-xl border-none">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" className="bg-gray-50 border-gray-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" className="bg-gray-50 border-gray-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Type your message here..." 
                              className="min-h-[150px] bg-gray-50 border-gray-200 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-medium shadow-lg shadow-primary/20"
                      disabled={createMessage.isPending}
                    >
                      {createMessage.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white/50 py-12 border-t border-white/10">
        <div className="container-width text-center">
          <img src="/images/uob_logo.png" alt="UOB Logo" className="h-16 mx-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
          <p className="mb-4">&copy; 2025 Mail Guard Project. University of Bahrain.</p>
          <p className="text-sm">Developed by Senior Project Team - Semester 1, 2025/2026</p>
        </div>
      </footer>
    </div>
  );
}
