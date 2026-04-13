"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { WavyBackground } from "./WavyBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center bg-white px-6">
      {/* Background Enhancements */}
      <WavyBackground />

      
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Subtle Technical Grid Overlay - Refined for light background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>



      <div className="container relative z-10">
        <motion.div
           variants={{
             hidden: { opacity: 0 },
             show: {
               opacity: 1,
               transition: {
                 staggerChildren: 0.2
               }
             }
           }}
           initial="hidden"
           animate="show"
           className="max-w-4xl mx-auto space-y-8"
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900"
          >
            Smart Hostel <span className="text-primary italic relative">Management<span className="absolute bottom-1 left-0 w-full h-[10px] bg-primary/10 -z-10 -rotate-1"></span></span> <br className="hidden md:block" /> Made Simple.
          </motion.h1>
 
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            The all-in-one platform to automate your hostel operations. Manage residents,
            track fees, resolve complaints, and scale your business with ease.
          </motion.p>
 
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <Button size="lg" className="h-16 px-12 text-lg rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all group font-bold">
              Get Started Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-12 text-lg rounded-2xl border-2 border-slate-200 text-slate-800 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all font-bold backdrop-blur-sm shadow-sm">
              <Play className="mr-2 text-indigo-600 fill-indigo-600/10" size={20} /> Watch Demo
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
