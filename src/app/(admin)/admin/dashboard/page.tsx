"use client";

import { motion } from "framer-motion";
import { 
  LucideUsers, LucideBed, LucideCreditCard, LucideMessageCircle, 
  LucideCalendarActive, LucideTrendingUp, LucideArrowUpRight, 
  LucidePlus, LucideBell, LucideFileText
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, Cell, PieChart, Pie
} from "recharts";

const stats = [
  { label: "Total Students", value: "1,248", trend: "+12%", color: "text-blue-500", icon: LucideUsers },
  { label: "Occupancy", value: "92%", trend: "+5%", color: "text-emerald-500", icon: LucideBed },
  { label: "Revenue", value: "$42.8k", trend: "+18%", color: "text-purple-500", icon: LucideCreditCard },
  { label: "Complaints", value: "14", trend: "-25%", color: "text-rose-500", icon: LucideMessageCircle },
];

const revenueData = [
  { name: "Jan", total: 32000 },
  { name: "Feb", total: 38000 },
  { name: "Mar", total: 42800 },
  { name: "Apr", total: 35000 },
  { name: "May", total: 45000 },
  { name: "Jun", total: 48000 },
];

const occupancyData = [
  { name: "Occupied", value: 92 },
  { name: "Vacant", value: 8 },
];

const COLORS = ["#4F46E5", "#E2E8F0"];

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      {/* Overview Stats */}
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
                  <span className={`text-xs font-black uppercase tracking-[0.2em] px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full opacity-60 text-emerald-500`}>{stat.trend} ↑</span>
               </div>
               <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">{stat.label}</h4>
                  <p className="text-4xl font-black">{stat.value}</p>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden mt-4">
                     <div className={`h-full bg-primary rounded-full w-[${stat.trend}]`}></div>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Revenue Chart */}
         <Card className="lg:col-span-2 rounded-[3rem] p-4 bg-white dark:bg-slate-950 border-2 shadow-2xl shadow-slate-200 dark:shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] -z-10"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-10">
               <div>
                  <CardTitle className="text-2xl font-black">Revenue Analytics</CardTitle>
                  <CardDescription className="text-xs font-black uppercase tracking-widest opacity-40 mt-1">Monthly collection overview</CardDescription>
               </div>
               <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-xl font-black text-[10px] uppercase tracking-widest px-4 border-2">Monthly</Button>
                  <Button variant="ghost" size="sm" className="rounded-xl font-black text-[10px] uppercase tracking-widest px-4">Yearly</Button>
               </div>
            </CardHeader>
            <CardContent>
               <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={revenueData}>
                        <defs>
                           <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} fontWeight="900" dy={10} />
                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} fontWeight="900" tickFormatter={(value) => `$${value/1000}k`} />
                        <Tooltip 
                           contentStyle={{ borderRadius: '24px', border: 'none', background: '#0f172a', color: 'white', fontWeight: '900', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} 
                           itemStyle={{ color: '#818cf8', textTransform: 'uppercase', fontSize: '10px', tracking: '0.2em' }}
                        />
                        <Area type="monotone" dataKey="total" stroke="#4F46E5" strokeWidth={5} fillOpacity={1} fill="url(#colorTotal)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
         </Card>

         {/* Occupancy Donut */}
         <Card className="rounded-[3rem] p-4 bg-white dark:bg-slate-950 border-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
            <CardHeader className="pb-8">
               <CardTitle className="text-2xl font-black">Occupancy Status</CardTitle>
               <CardDescription className="text-xs font-black uppercase tracking-widest opacity-40 mt-1">Total Room Utilization</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
               <div className="h-[250px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                           data={occupancyData}
                           cx="50%"
                           cy="50%"
                           innerRadius={70}
                           outerRadius={90}
                           paddingAngle={8}
                           dataKey="value"
                        >
                           {occupancyData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                           ))}
                        </Pie>
                     </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-4xl font-black">92%</p>
                      <p className="text-xs font-black uppercase tracking-widest opacity-40">Occupied</p>
                  </div>
               </div>
               <div className="w-full space-y-4 mt-8">
                  {[
                    { label: "Occupied Rooms", value: 450, color: "bg-primary" },
                    { label: "Available Spaces", value: 50, color: "bg-slate-200 dark:bg-slate-800" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl group-hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-sm font-black">{item.value}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Recent Activity */}
         <div className="space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                  <LucideTrendingUp size={24} className="text-primary" /> Recent Operations
               </h3>
               <Button variant="ghost" className="font-black text-xs uppercase tracking-widest text-primary hover:bg-primary/5">View Full Log</Button>
            </div>
            <div className="space-y-4">
               {[
                  { title: "New Leave Request Submitted", student: "Rahul Verma", time: "2 mins ago", icon: LucideCalendarActive, color: "text-blue-500 bg-blue-500/10" },
                  { title: "Internet Complaint Resolved", student: "A-201 Maintenance", time: "1 hour ago", icon: LucideMessageCircle, color: "text-emerald-500 bg-emerald-500/10" },
                  { title: "Fee Payment Received ($1,200)", student: "Priya Das", time: "3 hours ago", icon: LucideCreditCard, color: "text-purple-500 bg-purple-500/10" },
                  { title: "New Student Added to Wing B", student: "Amit Singh", time: "5 hours ago", icon: LucideUsers, color: "text-cyan-500 bg-cyan-500/10" },
               ].map((item, i) => (
                  <div key={i} className="group p-6 bg-white dark:bg-slate-950 rounded-[2.5rem] border-2 border-transparent hover:border-primary/10 hover:shadow-lg transition-all flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                           <item.icon size={20} />
                        </div>
                        <div>
                           <div className="flex items-center gap-3">
                              <h4 className="text-md font-black">{item.title}</h4>
                              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{item.time}</span>
                           </div>
                           <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-widest">{item.student}</p>
                        </div>
                     </div>
                     <LucideArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-all group-hover:scale-125" />
                  </div>
               ))}
            </div>
         </div>

         {/* Quick Management Actions */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
               <LucidePlus size={24} className="text-primary" /> Fast Actions
            </h3>
            <div className="grid grid-cols-2 gap-6">
               {[
                  { label: "Enroll Student", icon: LucideUsers, color: "bg-blue-600", desc: "Admission form" },
                  { label: "Post Notice", icon: LucideBell, color: "bg-amber-500", desc: "All residents" },
                  { label: "Rec. Payment", icon: LucideCreditCard, color: "bg-emerald-600", desc: "Manual entry" },
                  { label: "Export Data", icon: LucideFileText, color: "bg-slate-900", desc: "CSV / PDF" }
               ].map((action, i) => (
                  <Button key={i} className={`h-auto p-10 rounded-[3rem] ${action.color} text-white flex flex-col items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 dark:shadow-none relative group overflow-hidden`}>
                     <div className="absolute top-0 left-0 w-full h-full bg-white/10 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                     <action.icon size={36} className="group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                     <div className="text-center">
                        <h4 className="text-lg font-black uppercase tracking-wider">{action.label}</h4>
                        <p className="text-xs opacity-60 font-black uppercase tracking-widest mt-1">{action.desc}</p>
                     </div>
                  </Button>
               ))}
            </div>
            
            <div className="p-10 rounded-[3rem] bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-100 dark:border-indigo-500/20 space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[40px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg"><LucideBell size={24} /></div>
                  <h4 className="text-xl font-black">Warden Announcement</h4>
               </div>
               <p className="text-sm font-medium leading-relaxed text-muted-foreground">Post an urgent announcement to all students across all wings and blocks instantly via push notifications.</p>
               <Button variant="outline" className="w-full h-14 rounded-2xl border-2 border-indigo-200 hover:bg-indigo-500 hover:text-white transition-all font-black uppercase tracking-widest text-xs">Open Text Editor</Button>
            </div>
         </div>
      </div>
    </div>
  );
}
