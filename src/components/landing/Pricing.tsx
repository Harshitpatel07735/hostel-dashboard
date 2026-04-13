"use client";

import { motion } from "framer-motion";
import { Check, LucideZap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$49",
    description: "Perfect for small hostels and startups.",
    features: [
      "Up to 50 Students",
      "Manual Room Allocation",
      "Basic Fee Tracking",
      "Shared Notice Board",
      "Email Support",
    ],
    color: "bg-slate-100 dark:bg-slate-800",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$149",
    description: "The complete suite for high-growth hostels.",
    features: [
      "Unlimited Students",
      "Interactive Room Maps",
      "Automated Fee Reminders",
      "Complaint Workflow",
      "Push Notifications",
      "Priority 24/7 Support",
    ],
    color: "bg-primary text-primary-foreground card-hover shadow-2xl shadow-primary/30",
    buttonVariant: "secondary" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For multi-location hostel chains.",
    features: [
      "Multi-Campus Support",
      "Custom Form Fields",
      "Advanced API Access",
      "SSO Authentication",
      "Dedicated Success Manager",
      "On-site Training",
    ],
    color: "bg-slate-900 text-white",
    buttonVariant: "default" as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Simple Transparent Pricing</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white"> Invest in Your <br/> <span className="text-primary italic">Success</span> Story. </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto"> Choose the plan that fits your growth ambitions. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
           {plans.map((plan, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 transition-all flex flex-col justify-between ${plan.color}`}
             >
                {plan.highlight && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-slate-900 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                       <LucideZap size={14} fill="currentColor" /> Recommended
                   </div>
                )}
                
                <div className="space-y-8">
                   <div>
                       <h4 className="text-2xl font-black mb-2 uppercase tracking-widest tracking-loose">{plan.name}</h4>
                       <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-black">{plan.price}</span>
                          {plan.price !== "Custom" && <span className="text-lg opacity-60">/mo</span>}
                       </div>
                       <p className="mt-4 text-sm opacity-80 leading-relaxed font-medium">{plan.description}</p>
                   </div>
                   
                   <ul className="space-y-4 px-1">
                      {plan.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-4 text-sm font-bold">
                            <div className={`p-1.5 rounded-full ${plan.highlight ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                               <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="opacity-90">{feature}</span>
                         </li>
                      ))}
                   </ul>
                </div>

                <div className="mt-12">
                   <Button 
                      variant={plan.buttonVariant} 
                      size="lg" 
                      className={`w-full h-14 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-lg ${plan.highlight ? 'bg-white text-primary hover:bg-slate-50' : ''}`}
                    >
                      Get Started
                   </Button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
