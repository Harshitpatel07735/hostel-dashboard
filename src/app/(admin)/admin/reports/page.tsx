"use client";

import { motion } from "framer-motion";
import { 
  LucideFileText, LucideDownload, LucideCalendar, LucideTrendingUp, 
  LucideUsers, LucideBed, LucideCreditCard, LucideMessageCircle, 
  LucideZap, LucideArrowUpRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, Cell, PieChart, Pie
} from "recharts";

const performanceData = [
  { name: "Week 1", revenue: 12000, occupancy: 85, complaints: 12 },
  { name: "Week 2", revenue: 15000, occupancy: 88, complaints: 8 },
  { name: "Week 3", revenue: 18000, occupancy: 92, complaints: 15 },
  { name: "Week 4", revenue: 21000, occupancy: 95, complaints: 5 },
];

const categoryData = [
  { name: "Rent", value: 65, fill: "#4F46E5" },
  { name: "Mess", value: 20, fill: "#10B981" },
  { name: "Maintenance", value: 10, fill: "#F59E0B" },
  { name: "Laundry", value: 5, fill: "#F43F5E" },
];

export default function AdminReports() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div className="space-y-4">
            <h1 className="text-4xl font-black">Strategic Intelligence</h1>
            <p className="text-muted-foreground font-medium max-w-lg">Advanced analytics and performance metrics to optimize your hostel ecosystem operations.</p>
         </div>
         <div className="flex items-center gap-4">
            <Button size="lg" className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
               <LucideDownload size={18} className="mr-2" /> Export Performance PDF
            </Button>
            <Button variant="outline" size="lg" className="h-14 w-14 p-0 rounded-2xl border-2 hover:bg-primary/5 transition-all">
               <LucideCalendar size={20} />
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Multi-metric Chart */}
         <Card className="rounded-[3rem] p-4 bg-white dark:bg-slate-950 border-2 shadow-2xl shadow-slate-200 dark:shadow-none relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
            <CardHeader className="pb-10">
               <CardTitle className="text-2xl font-black">Growth & Occupancy</CardTitle>
               <CardDescription className="text-xs font-black uppercase tracking-widest opacity-40 mt-1">Weekly performance index</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} fontWeight="900" dy={10} />
                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} fontWeight="900" />
                        <Tooltip 
                           contentStyle={{ borderRadius: '24px', border: 'none', background: '#0f172a', color: 'white', fontWeight: '900', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} 
                           itemStyle={{ color: '#818cf8', textTransform: 'uppercase', fontSize: '10px', tracking: '0.2em' }}
                        />
                        <Bar dataKey="revenue" fill="#4F46E5" radius={[12, 12, 0, 0]} barSize={40} />
                        <Bar dataKey="occupancy" fill="#10B981" radius={[12, 12, 0, 0]} barSize={40} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
         </Card>

         {/* Distribution Chart */}
         <Card className="rounded-[3rem] p-4 bg-white dark:bg-slate-950 border-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
            <CardHeader className="pb-8">
               <CardTitle className="text-2xl font-black">Revenue Distribution</CardTitle>
               <CardDescription className="text-xs font-black uppercase tracking-widest opacity-40 mt-1">Breakdown by income sources</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
               <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                           data={categoryData}
                           cx="50%"
                           cy="50%"
                           innerRadius={80}
                           outerRadius={110}
                           paddingAngle={8}
                           dataKey="value"
                        >
                           {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={4} stroke="#ffffff00" />
                           ))}
                        </Pie>
                        <Tooltip 
                           contentStyle={{ borderRadius: '24px', border: 'none', background: '#0f172a', color: 'white', fontWeight: '900' }} 
                        />
                     </PieChart>
                  </ResponsiveContainer>
               </div>
               <div className="w-full grid grid-cols-2 gap-4 mt-8">
                  {categoryData.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-5 bg-slate-50 dark:bg-slate-900 rounded-[2rem] group-hover:bg-white dark:group-hover:bg-slate-950 group-hover:shadow-lg transition-all border border-transparent group-hover:border-primary/5">
                      <div className="flex items-center gap-4">
                        <div className={`w-3.5 h-3.5 rounded-full`} style={{ background: item.fill }}></div>
                        <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                      </div>
                      <span className="text-sm font-black italic">{item.value}%</span>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t-2 border-slate-50 dark:border-slate-800/50">
         {[
           { label: "Collection Speed", value: "4.2 Days", icon: LucideTrendingUp, color: "text-blue-500", trend: "↓ -2 Days" },
           { label: "Resolution Time", value: "18 Hours", icon: LucideMessageCircle, color: "text-emerald-500", trend: "↑ High Gear" },
           { label: "Avg Expense Ratio", value: "24.5%", icon: LucideCreditCard, color: "text-amber-500", trend: "+1.2% Risk" },
         ].map((stat, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="bg-white dark:bg-slate-950 p-10 rounded-[3rem] border-2 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center text-center justify-between gap-6"
            >
               <div className={`p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 ${stat.color} group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <stat.icon size={32} />
               </div>
               <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-30 italic">{stat.label}</h4>
                  <p className="text-4xl font-black">{stat.value}</p>
               </div>
               <Badge className="bg-primary/5 text-primary hover:bg-primary/10 border-none font-black text-[10px] tracking-widest px-4 py-2 rounded-xl">
                  {stat.trend}
               </Badge>
            </motion.div>
         ))}
      </div>
    </div>
  );
}
