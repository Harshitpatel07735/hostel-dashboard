"use client";

import { motion } from "framer-motion";
import { Star, StarOff } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ananya Sharma",
    role: "Warden, Skyline Boys Hostel",
    quote: "HostelFlow transformed how we manage our 500+ residents. The complaint system alone saved us hours of paperwork every week.",
    rating: 5,
    avatar: "AS",
    color: "bg-blue-500",
  },
  {
    name: "Mr. Rajesh Khanna",
    role: "Administrator, Global Institute Hostel",
    quote: "The fee collection is now 100% digital. We've seen a significant reduction in pending dues thanks to the automated reminders.",
    rating: 5,
    avatar: "RK",
    color: "bg-indigo-500",
  },
  {
    name: "Priya Patel",
    role: "Accountant, Heritage Girls Hostel",
    quote: "Reconciliation is a breeze now. The financial reports give us a clear view of our revenue trends every single month.",
    rating: 4,
    avatar: "PP",
    color: "bg-purple-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Trusted by Professionals</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"> Thousands of Wardens <br className="hidden md:block" /> Love <span className="text-primary italic">HostelFlow.</span> </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"> Join our growing community of modern hostel administrators. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
           {testimonials.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-700/50 flex flex-col justify-between"
             >
                <div className="space-y-6">
                   <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                         i < item.rating ? <Star key={i} size={18} fill="currentColor" /> : <StarOff key={i} size={18} />
                      ))}
                   </div>
                   <p className="text-lg font-medium leading-[1.6] text-slate-700 dark:text-slate-300 italic">"{item.quote}"</p>
                </div>
                <div className="flex items-center gap-4 pt-10 mt-10 border-t border-slate-100 dark:border-slate-700/50">
                   <div className={`w-14 h-14 rounded-[1.2rem] ${item.color} text-white font-black flex items-center justify-center text-xl shadow-lg`}>
                      {item.avatar}
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.role}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
