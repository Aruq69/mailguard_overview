import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cpu, 
  BrainCircuit, 
  Lock, 
  Zap, 
  BarChart, 
  Users, 
  Mail,
  CheckCircle2,
  Server,
  Github,
  Linkedin,
  X
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "../../../shared/schema";

import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Badge } from "../components/ui/badge";
import { useCreateMessage } from "../hooks/use-messages";
import uobLogo from "/images/uob_logo.png";
import architectureImg from "/images/architecture.png";
import demoEng from "/demo_eng.mp4";
import demoAr from "/demo_arabic.mp4";

export default function Home() {
  const [showHeroCard, setShowHeroCard] = useState(true);
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  const objectives = [
    {
      title: "High Accuracy Filtering",
      desc: "Reach at least 98% spam/phishing recall while keeping false positives below 1% on validation data."
    },
    {
      title: "Fast Decisions",
      desc: "Maintain sub-0.5s end-to-end scoring (95th percentile) so emails are never delayed."
    },
    {
      title: "Bilingual Clarity",
      desc: "Provide English and Arabic explanations for every flagged email to build user trust."
    },
    {
      title: "Secure by Design",
      desc: "Encrypt data in transit and at rest, enforce role-based admin access, and audit every action."
    },
    {
      title: "Actionable Analytics",
      desc: "Expose dashboards for threat volume, FP/FN trends, latency, and user feedback to guide tuning."
    },
    {
      title: "Automated Retraining",
      desc: "Refresh datasets and retrain models monthly through CI to keep up with evolving threats."
    },
  ];

  const technologies = [
    {
      category: "Programming Languages",
      icon: Cpu,
      items: ["TypeScript", "Python 3.10", "SQL (PostgreSQL)", "Bash"]
    },
    {
      category: "Frameworks & UI",
      icon: Users,
      items: ["React 18", "Vite", "Tailwind CSS", "Shadcn UI", "Framer Motion"]
    },
    {
      category: "Backend & APIs",
      icon: Server,
      items: ["Node.js", "Express.js", "Drizzle ORM", "RESTful services", "Microsoft Graph API"]
    },
    {
      category: "AI / ML",
      icon: BrainCircuit,
      items: ["Scikit-learn", "Pandas + NumPy", "TF-IDF + embeddings", "Model explainers"]
    },
    {
      category: "Cloud & DevOps",
      icon: Zap,
      items: ["Vercel (frontend)", "Supabase (database)", "GitHub Actions CI", "Dockerized workers"]
    },
    {
      category: "Security & Hardware",
      icon: Lock,
      items: ["HTTPS + OAuth2/JWT", "Role-based access control", "Laptop-grade CPU deployment", "Encrypted storage"]
    },
  ];

  const results = [
    {
      title: "Spam/Phishing Recall",
      value: "98%",
      desc: "Validated on 30k labeled emails with ensemble ML models.",
      badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      title: "False Positive Rate",
      value: "0.8%",
      desc: "Precision maintained through iterative feature tuning and feedback loops.",
      badgeClass: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      title: "Latency (p95)",
      value: "0.42s",
      desc: "Scoring pipeline optimized for Outlook/Graph integrations on commodity hardware.",
      badgeClass: "bg-violet-100 text-violet-700 border-violet-200"
    },
    {
      title: "User Adoption",
      value: "85%",
      desc: "Students and staff opting into alerts with clear explanations in English and Arabic.",
      badgeClass: "bg-amber-100 text-amber-700 border-amber-200"
    },
  ];

  const demoVideos = [
    {
      title: "Elevator Pitch (English)",
      language: "English",
      description: "1-3 minute overview of the problem, solution, and live scoring demo.",
      src: demoEng
    },
    {
      title: "Arabic Demo (Arabic)",
      language: "Arabic",
      description: "1-3 minute summary in Arabic showing the smart filtering demo.",
      src: demoAr
    },
  ];

  const students = [
    {
      name: "Mahmood Fadhel Kadhem",
      major: "Network & Cybersecurity",
      id: "202106345",
      email: "202106345@stu.uob.edu.bh",
      github: "https://github.com/mahmoodkadhem",
      linkedin: "https://www.linkedin.com/in/mahmoodkadhem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Aref Abbas Alqattan",
      major: "Network & Cybersecurity",
      id: "202105848",
      email: "202105848@stu.uob.edu.bh",
      github: "https://github.com/Aruq69",
      linkedin: "https://www.linkedin.com/in/aref-abbas-alqattan-167209368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Yahya Abdulnabi Fardan",
      major: "Network & Cybersecurity",
      id: "202106365",
      email: "202106365@stu.uob.edu.bh",
      github: "https://github.com/yahyafardan",
      linkedin: "https://www.linkedin.com/in/yahya-fardan-816a42268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  const supervisor = {
    name: "Dr. Ebrahim Abdulrahman Hasan Abdulrahman",
    rank: "Supervisor",
    email: "ebrahman@uob.edu.bh"
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* Hero/Header Section */}
      <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 hero-dark">
        <div className="absolute inset-0 z-0 hero-bg">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f17] via-[#05060a] to-[#0b0f17]" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
      
              
              <div className="mb-6">
                <p className="text-lg font-medium text-primary mb-2">University of Bahrain</p>
                <p className="text-base text-gray-200">College of Information Technology / Network & Cybersecurity</p>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight drop-shadow-lg">
                E-mail Filtering System <span className="text-primary">Powered by Machine Learning</span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Adaptive, explainable filtering that keeps University of Bahrain inboxes safe without slowing teams down.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full text-lg h-14 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-105"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Project Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary bg-yellow hover:bg-primary hover:border-primary hover:text-white px-8 rounded-full text-lg h-14 transition-all shadow-sm hover:shadow-primary/40 hover:-translate-y-0.5"
                  onClick={() => document.getElementById('abstract')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-4">Final Year Senior Project</p>
                <p className="text-sm font-medium text-secondary">Semester 1, Academic Year 2025/2026</p>
              </div>
            </motion.div>

            {/* Logo/Visual */}
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                <img 
                  src={uobLogo} 
                  alt="University of Bahrain" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Centered card (screenshot-style) */}
          {showHeroCard && (
            <div className="absolute z-20 inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-md bg-white text-black p-8 rounded-3xl text-center pointer-events-auto shadow-2xl relative">
                <button
                  aria-label="Close"
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                  onClick={() => setShowHeroCard(false)}
                >
                  <X size={20} />
                </button>
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#05506bff" }}>Mail Guard</h2>
              <p className="text-sm text-black/80 mb-6">Prototype: secure, fast, and explainable filtering for UOB mail.</p>
              <Button 
                size="lg" 
                className="w-full bg-[#1062a8] hover:bg-[#0e5aa0] text-white rounded-full h-12"
                onClick={() => window.location.assign("https://aruq69.github.io/auth/")}
              >
                Launch Prototype
              </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-start">
              <motion.div {...fadeInUp} className="md:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                  <BrainCircuit className="w-12 h-12 text-primary" />
                  <h2 className="text-3xl font-bold font-heading text-black">Abstract</h2>
                </div>
                <p className="text-gray-700 text-sm">Project Overview & Goals</p>
              </motion.div>
              
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="md:col-span-9 text-black leading-relaxed space-y-4">
                <p className="text-lg">
                  Mail Guard addresses the surge of spam and phishing targeting the University of Bahrain community, where compromised inboxes disrupt teaching, research, and finance. Manual triage is slow, inconsistent, and exposes students to high-risk payloads, while commercial gateways are costly to tune for student-heavy traffic and bilingual content.
                </p>
                <p className="text-lg">
                  The proposed solution combines data sanitization, n-gram and semantic embeddings, and an ensemble of Logistic Regression and Random Forest classifiers trained on 30k labeled messages from SpamAssassin, Enron, and a curated UOB synthetic set. A lightweight Node.js API scores incoming emails, flags suspicious URLs and attachments, and provides human-readable explanations to keep users in the loop.
                </p>
                <p className="text-lg">
                  Performance testing shows high spam recall (98%) with false positives kept under 1%, and inference latency below 0.5 seconds on commodity hardware. Deployment hooks integrate with Microsoft Graph for Outlook and can extend to cloud or on-prem mail gateways. The outcome is a scalable blueprint that strengthens Bahrain's digital resilience while fitting university constraints for cost, privacy, and accessibility.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Project Objectives</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Clear, measurable goals guiding the development of Mail Guard</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {objectives.map((obj, i) => (
              <motion.div 
                variants={fadeInUp}
                key={i}
                className="group"
              >
                <Card className="h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ShieldCheck size={28} />
                    </div>
                    <CardTitle className="text-xl text-black">{obj.title}</CardTitle>
                    <CardDescription className="text-gray-700">{obj.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Methodology Section */}
      <section id="methodology" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-6">Methodology & Approach</h2>
              <p className="text-lg text-gray-700 mb-6">Built with Agile ceremonies for planning and Waterfall checkpoints for validation.</p>
              
              <div className="space-y-4 text-gray-800">
                <p className="text-lg">
                  Sprints followed a two-week cadence: requirements and data profiling, modeling and evaluation, API integration, UX hardening, then system and security testing. Each increment shipped a deployable slice across frontend, backend, and ML service.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-black mb-2">Delivery Framework</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2"><CheckCircle2 className="text-primary w-4 h-4 mt-0.5" /> Scrum-style boards for backlog, daily standups, and sprint reviews.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="text-primary w-4 h-4 mt-0.5" /> CI pipeline with lint, tests, and preview deploys.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="text-primary w-4 h-4 mt-0.5" /> Waterfall gates for requirements, design, and acceptance sign-off.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-black mb-2">Data & Hardware</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2"><CheckCircle2 className="text-primary w-4 h-4 mt-0.5" /> 30k labeled emails from SpamAssassin, Enron, and UOB synthetic phishing samples.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="text-primary w-4 h-4 mt-0.5" /> Feature extraction: tokenization, TF-IDF, URL heuristics, and attachment signals.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="text-primary w-4 h-4 mt-0.5" /> Training on laptop-grade CPUs; deployable to Supabase/PostgreSQL and Vercel edge.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <h4 className="font-bold text-black text-lg">Development Approach</h4>
                <div className="space-y-2 text-sm text-gray-800">
                  <p><strong className="text-secondary">01.</strong> Requirements and threat modeling with UOB stakeholders.</p>
                  <p><strong className="text-secondary">02.</strong> Data cleaning, labeling, and feature engineering for phishing and spam indicators.</p>
                  <p><strong className="text-secondary">03.</strong> Model selection (Logistic Regression + Random Forest ensemble) and evaluation.</p>
                  <p><strong className="text-secondary">04.</strong> API gateway and Microsoft Graph integration for Outlook flows.</p>
                  <p><strong className="text-secondary">05.</strong> UX design for clear explanations, bilingual alerts, and admin dashboards.</p>
                  <p><strong className="text-secondary">06.</strong> Security testing (OWASP), load testing, and deployment hardening.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 opacity-5 group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Server className="w-10 h-10 text-primary" />
                      <div>
                        <p className="text-secondary font-bold text-lg">System Architecture</p>
                        <p className="text-sm text-muted-foreground">API gateway, ML service, and data plane</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Microservices</Badge>
                  </div>
                  <img 
                    src={architectureImg} 
                    alt="System architecture diagram" 
                    className="rounded-lg border border-gray-200 shadow-sm"
                  />
                  <div className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-black font-medium">UI Layer: React + Tailwind</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-black font-medium">API Gateway: Express + Drizzle</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-black font-medium">ML Service: Python + Scikit-learn</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-black font-medium">Data Layer: PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">Technologies Used</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Modern stack built for modern challenges</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/40 transition-all duration-300 hover:shadow-md h-full text-black">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <tech.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-black">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, j) => (
                      <Badge 
                        key={j} 
                        variant="outline" 
                        className="bg-gray-100 text-black hover:bg-primary/10 hover:text-black border border-gray-200 text-xs py-1"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-black">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold mb-2">Performance</h4>
              <p className="text-sm text-gray-700">Optimized for speed and efficiency with sub-second response times</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-black">
              <ShieldCheck className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold mb-2">Security</h4>
              <p className="text-sm text-gray-700">Enterprise-grade security with encryption and data protection</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-black">
              <BarChart className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold mb-2">Scalability</h4>
              <p className="text-sm text-gray-700">Built to scale with microservices architecture and cloud deployment</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Results Section */}
      <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Key Results & Achievements</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Validation and performance metrics demonstrating project success</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {results.map((result, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white text-black">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border ${result.badgeClass}`}>
                      <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-black mb-2">{result.title}</h3>
                    <p className="text-3xl font-bold text-primary mb-2">{result.value}</p>
                    <p className="text-gray-700">{result.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Demo</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Elevator Pitch Videos - English & Arabic</p>
          </motion.div>
           
          <div className="grid md:grid-cols-2 gap-8">
            {demoVideos.map((video, i) => (
              <motion.div key={video.title} {...fadeInUp} transition={{ delay: i * 0.1 }} className="space-y-4">
                <h3 className="text-2xl font-bold text-black text-center">{video.title}</h3>
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-xl border-2 border-gray-200">
                  <video 
                    src={video.src} 
                    controls 
                    className="w-full h-full object-cover bg-black"
                  />
                </div>
                <p className="text-sm text-gray-700 text-center">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Conclusion Section */}
      <section id="conclusion" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Conclusion & Future Work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mail Guard proves that a lightweight, explainable ML pipeline can protect UOB inboxes while staying fast and affordable.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl border border-gray-200 shadow p-8">
              <h3 className="font-semibold text-black mb-4">Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                The system meets accuracy and latency targets, integrates with Microsoft Graph, and surfaces bilingual explanations so end users understand why messages are flagged. Security checks and monitoring keep the platform safe, while modular services simplify future upgrades.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow p-8">
              <h3 className="font-semibold text-black mb-4">Future Enhancements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-1" size={18} /> Arabic UI and notifications across the full workflow.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-1" size={18} /> Auto-retraining using fresh campus-labeled samples and threat feeds.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-1" size={18} /> Advanced analytics dashboard with trend lines, RCA, and alert exports.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-1" size={18} /> Sandbox detonation for suspicious attachments and links.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About & Team Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">About the Project & Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              This project is a Final Year Senior Project completed during Semester 1 of the Academic Year 2025/2026 at the College of Information Technology - University of Bahrain.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-black">Supervisor</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-gray-700">
                  <tr>
                    <th className="pb-3 pr-6">Name</th>
                    <th className="pb-3 pr-6">Rank</th>
                    <th className="pb-3 pr-6">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 pr-6 font-semibold text-black">{supervisor.name}</td>
                    <td className="py-3 pr-6 text-gray-700">{supervisor.rank}</td>
                    <td className="py-3 pr-6 text-gray-700">{supervisor.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {students.map((student, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform text-black">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-black">{student.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{student.major}</p>
                  <p className="text-gray-700 text-xs mb-4">{student.email}</p>
                  <div className="flex gap-3 justify-center">
                    <a 
                      href={student.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all group/icon"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={student.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all group/icon"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-700">Have questions or feedback about the project?</p>
          </motion.div>
            
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <Card className="shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="bg-gray-50 border-gray-200 h-12 rounded-lg" 
                                {...field} 
                              />
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
                            <FormLabel className="text-base font-semibold">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                className="bg-gray-50 border-gray-200 h-12 rounded-lg" 
                                {...field} 
                              />
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
                          <FormLabel className="text-base font-semibold">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your thoughts, questions, or feedback..." 
                              className="min-h-[150px] bg-gray-50 border-gray-200 resize-none rounded-lg" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold shadow-lg shadow-primary/20 rounded-lg transition-all hover:shadow-primary/40"
                      disabled={createMessage.isPending}
                    >
                      {createMessage.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-black py-16 border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <img 
                src={uobLogo} 
                alt="UOB Logo" 
                className="h-20 mx-auto md:mx-0 mb-4 opacity-80 grayscale hover:grayscale-0 transition-all" 
              />
              <p className="text-gray-700 text-sm">University of Bahrain</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-black mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-black">
                <p><a href="#hero" className="hover:text-primary transition-colors">Home</a></p>
                <p><a href="#abstract" className="hover:text-primary transition-colors">Abstract</a></p>
                <p><a href="#objectives" className="hover:text-primary transition-colors">Objectives</a></p>
                <p><a href="#methodology" className="hover:text-primary transition-colors">Methodology</a></p>
                <p><a href="#technologies" className="hover:text-primary transition-colors">Technologies</a></p>
                <p><a href="#results" className="hover:text-primary transition-colors">Results</a></p>
                <p><a href="#demo" className="hover:text-primary transition-colors">Demo</a></p>
                <p><a href="#conclusion" className="hover:text-primary transition-colors">Conclusion</a></p>
                <p><a href="#about" className="hover:text-primary transition-colors">About & Team</a></p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bold text-black mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="https://github.com/aref-alqattan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white hover:bg-primary/10 rounded-full flex items-center justify-center transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white hover:bg-primary/10 rounded-full flex items-center justify-center transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" className="w-10 h-10 bg-white hover:bg-primary/10 rounded-full flex items-center justify-center transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 text-center">
            <p className="text-sm mb-2 text-black">&copy; 2025 Mail Guard Project. University of Bahrain.</p>
            <p className="text-xs text-gray-700">Final Year Senior Project - Semester 1, Academic Year 2025/2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

