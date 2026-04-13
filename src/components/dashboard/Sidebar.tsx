"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LucideLayoutDashboard, LucideBed, LucideCreditCard, LucideBell, 
  LucideMessageCircle, LucideUtensils, LucideCalendar, 
  LucidePartyPopper, LucideBookOpen, LucideUser, LucideAlertTriangle,
  LucideUsers, LucideSettings, LucideFileText, LucideLogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const studentLinks = [
  { icon: LucideLayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
  { icon: LucideBed, label: "My Room", href: "/student/room" },
  { icon: LucideCreditCard, label: "Fee & Payments", href: "/student/fees" },
  { icon: LucideBell, label: "Notices", href: "/student/notices" },
  { icon: LucideMessageCircle, label: "Complaints", href: "/student/complaints" },
  { icon: LucideUtensils, label: "Mess Menu", href: "/student/mess" },
  { icon: LucideCalendar, label: "Leave / Outpass", href: "/student/leave" },
  { icon: LucidePartyPopper, label: "Events", href: "/student/events" },
  { icon: LucideBookOpen, label: "Hostel Rules", href: "/student/rules" },
  { icon: LucideUser, label: "My Profile", href: "/student/profile" },
];

const adminLinks = [
  { icon: LucideLayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: LucideUsers, label: "Student Management", href: "/admin/students" },
  { icon: LucideBed, label: "Room Management", href: "/admin/rooms" },
  { icon: LucideCreditCard, label: "Fee Management", href: "/admin/fees" },
  { icon: LucideMessageCircle, label: "Complaints", href: "/admin/complaints" },
  { icon: LucideBell, label: "Announcements", href: "/admin/announcements" },
  { icon: LucideUtensils, label: "Mess Management", href: "/admin/mess" },
  { icon: LucideCalendar, label: "Leave Requests", href: "/admin/leave" },
  { icon: LucideUsers, label: "Visitor Log", href: "/admin/visitors" },
  { icon: LucidePartyPopper, label: "Events", href: "/admin/events" },
  { icon: LucideFileText, label: "Reports & Analytics", href: "/admin/reports" },
  { icon: LucideSettings, label: "Settings", href: "/admin/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const links = isAdmin ? adminLinks : studentLinks;

  return (
    <div className="w-72 h-screen fixed top-0 left-0 bg-white dark:bg-slate-950 border-r flex flex-col z-40 hidden md:flex">
      <div className="p-8 flex items-center gap-3">
         <div className="p-2 bg-primary rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
            <LucideLayoutDashboard size={20} />
         </div>
         <span className="text-xl font-bold tracking-tight">HostelFlow</span>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto pt-4 scrollbar-hide">
         {links.map((link) => {
            const isActive = pathname === link.href;
            return (
               <Link 
                 key={link.label} 
                 href={link.href}
                 className={cn(
                    "flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 group relative",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-[1.02]" 
                      : "text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-900 active:scale-95 translate-x-0 hover:translate-x-1"
                 )}
               >
                  <link.icon size={20} />
                  {link.label}
                  {isActive && (
                     <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-white rounded-r-full"></span>
                  )}
               </Link>
            );
         })}
      </nav>

      <div className="p-6 space-y-4">
         {!isAdmin && (
            <Button 
               variant="destructive" 
               className="w-full flex items-center justify-center gap-3 rounded-2xl h-12 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-black uppercase tracking-widest text-xs"
            >
               <LucideAlertTriangle size={18} /> Emergency Alert
            </Button>
         )}
         
         <Button 
            variant="ghost" 
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center justify-start gap-4 px-5 py-3 h-12 rounded-2xl font-bold text-muted-foreground hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors group"
         >
            <LucideLogOut size={20} className="group-hover:rotate-180 transition-transform" />
            Logout
         </Button>
      </div>
    </div>
  );
}
