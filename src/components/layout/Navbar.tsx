"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkLayout = pathname.startsWith("/admin") || pathname.startsWith("/student");

  if (isDarkLayout) return null; // Dashboard has its own header

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b shadow-sm py-3"
        : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95">
        <div className="p-2 rounded-xl shadow-lg transition-colors bg-primary text-primary-foreground shadow-primary/20">
          <Home size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">HostelFlow</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
        <Link href="/#how-it-works" className="transition-colors hover:text-primary">
          How It Works
        </Link>
        <Link href="/#pricing" className="transition-colors hover:text-primary">
          Pricing
        </Link>
        <Link href="/#faq" className="transition-colors hover:text-primary">
          FAQ
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className={cn(
          buttonVariants({ variant: "ghost" }), 
          "px-6"
        )}>
          Login
        </Link>
        <Link href="/register" className={cn(
          buttonVariants({ variant: "default" }), 
          "rounded-full px-8 shadow-md hover:shadow-lg transition-all active:scale-95 h-12 flex items-center justify-center font-bold"
        )}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
