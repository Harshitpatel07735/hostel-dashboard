"use client";

import { motion } from "framer-motion";
import { 
  CreditCard, Bed, MessageCircle, Bell, 
  Utensils, Users, Calendar, LineChart 
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Automate fee collection, generate digital receipts, and track pending dues with ease.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Bed,
    title: "Room Allocation",
    description: "Visual room mapping and drag-and-drop student assignment for optimal occupancy.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    icon: MessageCircle,
    title: "Complaint System",
    description: "Seamless complaint logging, staff assignment, and status tracking for maintenance.",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Bell,
    title: "Digital Notice Board",
    description: "Instant announcements to all students with push notifications and pinning options.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Utensils,
    title: "Mess Management",
    description: "Weekly menu management and student feedback tracking to improve food quality.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: Users,
    title: "Visitor Tracking",
    description: "Secure visitor logging with photo capture, entry/exit times, and student alerts.",
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    icon: Calendar,
    title: "Leave System",
    description: "Digital outpass system with parental approval workflow and warden sign-offs.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    description: "Data-driven insights on revenue, occupancy, and complaint trends at your fingertips.",
    color: "bg-orange-500/10 text-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Powerful Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight"> Everything You Need to <br/> Run Your <span className="text-primary italic">Perfect</span> Hostel. </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto"> Modern tools for modern hostels. Automate the boring parts and focus on what matters. </p>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
           {features.map((feature, index) => (
             <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-[2rem] bg-white dark:bg-slate-800 border-2 border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2"
             >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6 ${feature.color}`}>
                   <feature.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
