"use client";

import { motion } from "framer-motion";
import { LucideClipboardCheck, LucideUserPlus, LucideZap } from "lucide-react";

const steps = [
  {
    icon: LucideClipboardCheck,
    title: "Register Your Hostel",
    description: "Fill in your hostel details, building structure, and configuration settings in seconds.",
    color: "bg-blue-500",
  },
  {
    icon: LucideUserPlus,
    title: "Add Students & Rooms",
    description: "Bulk upload residents and assign them to rooms with our interactive map.",
    color: "bg-indigo-500",
  },
  {
    icon: LucideZap,
    title: "Manage Everything",
    description: "Track fees, solve complaints, and monitor analytics from your unified dashboard.",
    color: "bg-primary",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Simple Setup Workflow</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight"> Scale Your Hostel In <br/> <span className="text-primary italic">3 Easy</span> Steps. </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto"> From manual logs to digital perfection in minutes. </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
           {/* Connecting Line (Desktop Only) */}
           <div className="absolute top-1/3 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -z-10 hidden md:block">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-primary"
               ></motion.div>
           </div>

           {steps.map((step, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
             >
                <div className={`w-28 h-28 rounded-full ${step.color} text-white flex items-center justify-center p-6 shadow-2xl shadow-primary/20 mb-8 border-[12px] border-white dark:border-slate-950 transition-all group-hover:scale-110 group-hover:rotate-6`}>
                   <step.icon size={48} strokeWidth={2.5} />
                   <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center font-black text-slate-900 dark:text-white shadow-lg border-2 border-primary">
                      {index + 1}
                   </div>
                </div>
                <h4 className="text-2xl font-black mb-4">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
