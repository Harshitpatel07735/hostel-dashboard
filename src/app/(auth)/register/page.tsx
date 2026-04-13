"use client";

import { motion } from "framer-motion";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { LucideHome, LucideCheckCircle } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-background">
      {/* Information Side (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-col items-center justify-center p-12 bg-slate-50 dark:bg-slate-900 relative"
      >
        <div className="absolute top-10 left-10">
           <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary rounded-xl text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <LucideHome size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">HostelFlow</span>
           </Link>
        </div>
        
        <div className="max-w-md space-y-12">
            <div className="space-y-6">
                <h2 className="text-4xl font-black leading-tight">Join the Modern <br/> <span className="text-primary italic">Hostel</span> Ecosystem.</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                   Whether you're a warden or a student, HostelFlow makes management simple and transparent for everyone.
                </p>
            </div>
            
            <div className="space-y-6">
                {[
                  "Automated Fee Collection",
                  "Instant Digital Notice Board",
                  "Secure Room Allocation",
                  "Easy Leave/Outpass System"
                ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="p-1.5 rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                         <LucideCheckCircle size={20} strokeWidth={3} />
                      </div>
                      <span className="font-black opacity-80 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-xs">{feature}</span>
                   </div>
                ))}
            </div>
        </div>
        
        {/* Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      </motion.div>

      {/* Form Side (Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-y-auto"
      >
         <div className="w-full max-w-lg space-y-12 relative z-10 py-10">
            <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight">Create Account</h1>
                <p className="text-muted-foreground font-medium">Enter your details to get started with HostelFlow.</p>
            </div>

            <RegisterForm />

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-bold hover:underline underline-offset-4">
                   Sign In
                </Link>
            </p>
         </div>
      </motion.div>
    </div>
  );
}
