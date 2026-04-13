"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LoginForm } from "@/components/auth/LoginForm";
import { LucideHome } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-background">
      {/* Illustration Side */}
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
        
        <div className="relative w-full max-w-lg aspect-square mb-12 group">
            {/* Premium Illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-[4rem] -rotate-6 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700"></div>
            <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white/50 backdrop-blur-sm transition-transform duration-700">
                <Image 
                    src="/hostel_login_illustration.png" 
                    alt="Premium Hostel Living" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    priority
                />

                {/* Glassy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-40"></div>
            </div>
            
            {/* Floating Element Indicators */}
            <div className="absolute -top-6 -right-6 p-4 bg-white/80 backdrop-blur dark:bg-slate-800/80 rounded-2xl shadow-xl border border-white/20 animate-bounce">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
            </div>
        </div>

        
        <div className="space-y-4 max-w-sm text-center">
            <h2 className="text-3xl font-black">Welcome Back!</h2>
            <p className="text-muted-foreground leading-relaxed">
               Manage your hostel from anywhere at any time. Seamless, secure, and smart control for modern residents.
            </p>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      </motion.div>

      {/* Form Side */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden"
      >
         <div className="w-full max-w-md space-y-12 relative z-10">
            <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight">Sign In</h1>
                <p className="text-muted-foreground font-medium">Please enter your credentials to access your dashboard.</p>
            </div>

            <LoginForm />

            <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary font-bold hover:underline underline-offset-4">
                   Register Now
                </Link>
            </p>
         </div>
         
         {/* Decorative Blur for Tablet/Mobile */}
         <div className="lg:hidden absolute top-0 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      </motion.div>
    </div>
  );
}
