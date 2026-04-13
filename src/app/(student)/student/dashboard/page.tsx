"use client";

import { motion } from "framer-motion";
import { 
  LucideCreditCard, LucideMessageCircle, LucideBell, LucideCalendar, 
  LucideZap, LucideArrowUpRight, LucideCheckCircle, LucideShieldAlert, LucideUser
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const stats = [
  { label: "Fee Status", value: "Paid", amount: "$1,200", trend: "+$200", color: "text-emerald-500", icon: LucideCreditCard },
  { label: "Complaints", value: "02", amount: "Pending", trend: "-50%", color: "text-amber-500", icon: LucideMessageCircle },
  { label: "Notices", value: "05", amount: "Today", trend: "0%", color: "text-blue-500", icon: LucideBell },
  { label: "Leave Balance", value: "12", amount: "Days Left", trend: "-2", color: "text-purple-500", icon: LucideCalendar },
];

export default function StudentDashboard() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Resident";
  const initials = session?.user?.name ? session.user.name.substring(0, 2).toUpperCase() : "U";

  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="relative p-10 rounded-[3rem] bg-gradient-to-br from-primary via-indigo-600 to-purple-600 text-white overflow-hidden shadow-2xl shadow-primary/30 group"
      >
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
         <div className="relative space-y-6 max-w-2xl">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 w-fit border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
               <LucideCheckCircle size={18} className="text-emerald-400" />
               <span className="text-xs font-black uppercase tracking-widest leading-none">Status: Enrolled & Verifed</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight">Welcome home, {userName.split(' ')[0]}!</h1>
            <p className="text-lg opacity-80 leading-relaxed font-medium">Your room A-204 is ready for you. Everything is in order for the spring semester. Have a productive stay!</p>
            <div className="flex gap-4 pt-4">
               <Button variant="secondary" size="lg" className="rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 group">
                  My Room Dashboard <LucideArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
               <Button variant="ghost" size="lg" className="rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all border-2 border-white/20">
                  Contact Warden
               </Button>
            </div>
         </div>
         
         {/* ID Card Display */}
         <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 rotate-6 group-hover:rotate-3 transition-transform">
            <div className="w-80 h-52 glass p-6 rounded-[2rem] border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <div className="flex justify-between">
                   <div className="flex gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg p-1">
                         <div className="w-full h-full bg-slate-900 rounded-[2px]"></div>
                      </div>
                      <div>
                         <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Resident ID Card</p>
                         <p className="text-sm font-black text-white">{userName}</p>
                      </div>
                   </div>
                   <LucideZap size={18} className="text-primary fill-primary" />
                </div>
                <div>
                   <div className="flex justify-between items-end border-t border-white/10 pt-4">
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Room</p>
                         <p className="text-sm font-black">A - 204</p>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-xl p-2">
                         {/* QR Code Placeholder */}
                         <div className="w-full h-full border border-slate-900"></div>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {stats.map((stat, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="group bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
               <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 ${stat.color} group-hover:scale-110 transition-transform`}>
                     <stat.icon size={24} />
                  </div>
                  <span className={`text-sm font-black uppercase tracking-[0.2em] px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full opacity-60`}>{stat.amount}</span>
               </div>
               <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">{stat.label}</h4>
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className={`text-xs font-black uppercase tracking-widest ${stat.color} flex items-center gap-1`}>
                    <LucideArrowUpRight size={14} /> {stat.trend} Over last month
                  </p>
               </div>
            </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Quick Actions and Activity */}
         <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                      <LucideZap size={24} className="text-primary" /> Quick Actions
                   </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {[
                      { icon: LucideCreditCard, label: "Pay Fees", color: "bg-emerald-500", desc: "Settles dues" },
                      { icon: LucideMessageCircle, label: "Report Issue", color: "bg-rose-500", desc: "New complaint" },
                      { icon: LucideCalendar, label: "Leave", color: "bg-indigo-500", desc: "Apply Outpass" },
                      { icon: LucideBell, label: "All Notices", color: "bg-amber-500", desc: "Latest info" }
                   ].map((action, i) => (
                      <Button key={i} variant="outline" className="h-auto p-6 rounded-[2rem] border-2 bg-white dark:bg-slate-950 flex flex-col items-start gap-4 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/5 active:scale-95 group">
                         <div className={`p-3 rounded-xl ${action.color} text-white group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                            <action.icon size={20} />
                         </div>
                         <div className="text-left">
                            <h4 className="text-sm font-black uppercase tracking-widest">{action.label}</h4>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">{action.desc}</p>
                         </div>
                      </Button>
                   ))}
                </div>
            </div>

            {/* List View Container */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                      <LucideBell size={24} className="text-primary" /> Latest Notices
                   </h3>
                   <Button variant="ghost" className="font-black text-xs uppercase tracking-widest text-primary hover:bg-primary/5">View All Info</Button>
                </div>
                <div className="space-y-4">
                   {[
                      { title: "Internet Maintenance Scheduled", date: "Today, 10:00 PM", category: "Maintenance", priority: "URGENT", pColor: "text-rose-500 bg-rose-500/10" },
                      { title: "Annual Hostel Cultural Fest 2026", date: "24th April, 06:00 PM", category: "Social", priority: "General", pColor: "text-blue-500 bg-blue-500/10" },
                      { title: "Mess Timing Changes", date: "Yesterday", category: "Management", priority: "Info", pColor: "text-amber-500 bg-amber-500/10" },
                   ].map((item, i) => (
                      <div key={i} className="group p-6 bg-white dark:bg-slate-950 rounded-[2rem] border-2 border-transparent hover:border-primary/10 hover:shadow-lg transition-all flex items-center justify-between cursor-pointer">
                         <div className="flex items-center gap-6">
                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-muted-foreground/40 font-black text-sm uppercase group-hover:scale-110 transition-transform">
                               N.
                            </div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{item.date}</p>
                               <h4 className="text-md font-black group-hover:text-primary transition-colors">{item.title}</h4>
                               <div className="flex gap-3 mt-3">
                                  <span className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 dark:bg-slate-900 rounded-lg">{item.category}</span>
                                  <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 ${item.pColor} rounded-lg`}>{item.priority}</span>
                               </div>
                            </div>
                         </div>
                         <LucideArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-all group-hover:scale-125" />
                      </div>
                   ))}
                </div>
            </div>
         </div>

         {/* Sidebar Stats / Secondary Content */}
         <div className="space-y-10">
            <Card className="rounded-[3rem] p-4 bg-white dark:bg-slate-950 border-2 overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -z-10"></div>
               <CardHeader className="pb-8 space-y-4 text-center">
                  <div className="mx-auto w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-800 shadow-xl overflow-hidden group">
                      <div className="w-full h-full bg-primary text-white flex items-center justify-center font-black text-3xl group-hover:scale-110 transition-transform">{initials}</div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black">{userName}</CardTitle>
                    <CardDescription className="text-xs uppercase font-black tracking-widest text-primary mt-1">Room A-204 • CS Major</CardDescription>
                  </div>
               </CardHeader>
               <CardContent className="space-y-6">
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[2rem] space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-black uppercase tracking-widest opacity-40">Overall Hygiene</span>
                        <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Excellent</span>
                     </div>
                     <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-[95%] bg-emerald-500 rounded-full"></div>
                     </div>
                  </div>
                  
                  <div className="space-y-4">
                     <h4 className="text-xs font-black uppercase tracking-widest opacity-40 px-4">Important Contacts</h4>
                     <ul className="space-y-2">
                        {[
                          { label: "Warden", name: "Ananya Sharma", icon: LucideUser },
                          { label: "Accounts", name: "Staff Finance", icon: LucideCreditCard },
                          { label: "Security", name: "Shift A Support", icon: LucideShieldAlert }
                        ].map((c, i) => (
                           <li key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer group">
                              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border group-hover:scale-110 transition-transform"><c.icon size={16} /></div>
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{c.label}</p>
                                 <p className="text-sm font-black">{c.name}</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
                  
                  <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-primary/20">Edit Public Profile</Button>
               </CardContent>
            </Card>
            
            <div className="p-8 pb-4 rounded-[3rem] bg-slate-950 text-white space-y-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
               <div className="space-y-2">
                 <h4 className="text-xs uppercase font-black tracking-[0.2em] text-primary">Emergency Help</h4>
                 <p className="text-2xl font-black">Need Urgent Assistance?</p>
               </div>
               <p className="text-sm text-slate-400 font-medium leading-[1.6]">In case of medical emergency, fire, or security threat, press the button below immediately.</p>
               <Button variant="destructive" className="w-full h-14 rounded-2xl uppercase font-black tracking-widest text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  Send SOS Signal
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
