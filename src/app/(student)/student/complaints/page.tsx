"use client";

import { motion } from "framer-motion";
import { 
  LucideMessageCircle, LucidePlus, LucideSearch, LucideCheckCircle, 
  LucideClock, LucideAlertTriangle, LucideMoreVertical, LucideArrowUpRight,
  LucideImage, LucidePaperclip, LucideSend
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const complaints = [
  { id: "CMP-7712", subject: "Water Heater Not Working", category: "Plumbing", date: "Mar 28, 2026", status: "In Progress", priority: "High", color: "text-blue-500 bg-blue-500/10" },
  { id: "CMP-7654", subject: "Slow WiFi in Wing A", category: "WiFi/Internet", date: "Mar 25, 2026", status: "Resolved", priority: "Medium", color: "text-emerald-500 bg-emerald-500/10" },
  { id: "CMP-7501", subject: "Window Lock Broken", category: "Carpentry", date: "Mar 20, 2026", status: "Pending", priority: "Low", color: "text-amber-500 bg-amber-500/10" },
];

export default function StudentComplaints() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div className="space-y-4">
            <h1 className="text-4xl font-black">Support & Complaints</h1>
            <p className="text-muted-foreground font-medium max-w-lg">Submit and track maintenance requests. Our staff typically responds within 24 hours.</p>
         </div>
         <Dialog>
            <DialogTrigger>
               <Button size="lg" className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                  <LucidePlus size={18} className="mr-2" /> Log New Complaint
               </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[3rem] p-10 border-2 shadow-2xl max-w-2xl bg-white dark:bg-slate-950">
               <DialogHeader className="pb-8 space-y-4">
                  <DialogTitle className="text-3xl font-black">Maintenance Request</DialogTitle>
                  <DialogDescription className="text-muted-foreground font-medium text-md uppercase tracking-widest opacity-40 italic">Tell us what needs fixing in your room.</DialogDescription>
               </DialogHeader>
               <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest opacity-40">Category</label>
                        <Select defaultValue="electricity">
                           <SelectTrigger className="h-14 rounded-2xl border-2 hover:bg-slate-50 transition-colors">
                              <SelectValue placeholder="Select Category" />
                           </SelectTrigger>
                           <SelectContent className="rounded-2xl border-2">
                              <SelectItem value="electricity" className="py-3 font-bold">Electricity</SelectItem>
                              <SelectItem value="plumbing" className="py-3 font-bold">Plumbing</SelectItem>
                              <SelectItem value="wifi" className="py-3 font-bold">WiFi / Network</SelectItem>
                              <SelectItem value="furniture" className="py-3 font-bold">Furniture</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest opacity-40">Priority</label>
                        <Select defaultValue="medium">
                           <SelectTrigger className="h-14 rounded-2xl border-2 hover:bg-slate-50 transition-colors">
                              <SelectValue placeholder="Set Priority" />
                           </SelectTrigger>
                           <SelectContent className="rounded-2xl border-2">
                              <SelectItem value="low" className="py-3 font-bold text-blue-500">Low</SelectItem>
                              <SelectItem value="medium" className="py-3 font-bold text-amber-500">Medium</SelectItem>
                              <SelectItem value="high" className="py-3 font-bold text-rose-500">High</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase tracking-widest opacity-40">Problem Subject</label>
                     <Input placeholder="What is the main issue?" className="h-14 rounded-2xl border-2 hover:bg-slate-50 transition-colors bg-slate-50/50" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase tracking-widest opacity-40">Description Details</label>
                     <Textarea placeholder="Please provide more context..." className="min-h-[150px] rounded-[2rem] border-2 p-6 hover:bg-slate-50 transition-colors bg-slate-50/50" />
                  </div>
                  <div className="flex gap-4">
                     <Button variant="outline" className="h-14 flex-1 rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all border-dashed"><LucideImage size={18} className="mr-2" /> Attach Photo</Button>
                     <Button variant="outline" className="h-14 flex-1 rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all border-dashed"><LucidePaperclip size={18} className="mr-2" /> Add Files</Button>
                  </div>
               </div>
               <DialogFooter className="pt-10">
                  <Button className="w-full h-16 rounded-[2rem] text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"><LucideSend size={20} className="mr-2" /> Submit Formal Complaint</Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Complaint Stats */}
         <div className="lg:col-span-1 space-y-10">
            <Card className="rounded-[3rem] p-10 bg-white dark:bg-slate-950 border-2 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
               <CardHeader className="p-0 pb-10">
                  <CardTitle className="text-5xl font-black">02</CardTitle>
                  <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-1">Pending Resolution</CardDescription>
               </CardHeader>
               <CardContent className="p-0 space-y-10">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest opacity-40">
                        <span>Resolution Progress</span>
                        <span>80% Efficiency</span>
                     </div>
                     <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-primary rounded-full"></div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-xs font-black uppercase tracking-widest opacity-40">Support Overview</h4>
                     <ul className="space-y-4">
                        {[
                          { label: "Active Tickets", val: "03", icon: LucideClock, color: "text-blue-500" },
                          { label: "Resolved Lifetime", val: "48", icon: LucideCheckCircle, color: "text-emerald-500" },
                          { label: "Urgent/High Alerts", val: "01", icon: LucideAlertTriangle, color: "text-rose-500" },
                        ].map((stat, i) => (
                           <li key={i} className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border group-hover:scale-105 transition-transform">
                              <div className="flex items-center gap-4">
                                 <stat.icon size={18} className={stat.color} />
                                 <span className="text-xs font-black uppercase tracking-widest italic">{stat.label}</span>
                              </div>
                              <span className="text-sm font-black">{stat.val}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </CardContent>
            </Card>
            
            <div className="p-10 rounded-[3rem] bg-slate-950 text-white space-y-8 relative overflow-hidden group border shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
               <div className="space-y-2">
                 <h4 className="text-xs uppercase font-black tracking-[0.2em] text-primary">Emergency Tip</h4>
                 <p className="text-2xl font-black">Fire or Security?</p>
               </div>
               <p className="text-xs text-slate-400 font-medium leading-[1.6] uppercase tracking-widest opacity-60">Do not log a complaint for life-threatening emergencies. Use the SOS button in the sidebar.</p>
               <Button variant="destructive" className="w-full h-14 rounded-2xl uppercase font-black tracking-widest text-[10px] shadow-2xl hover:scale-105 transition-all">Direct Warden Call</Button>
            </div>
         </div>

         {/* Complaints List */}
         <div className="lg:col-span-2 space-y-10">
            <Card className="rounded-[3rem] p-10 bg-white dark:bg-slate-950 border-2 shadow-2xl">
               <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                     <LucideMessageCircle size={24} className="text-primary" />
                     <h3 className="text-2xl font-black tracking-tight">My Historical Timeline</h3>
                  </div>
                  <div className="flex items-center gap-3">
                     <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl group hover:bg-primary/5 transition-colors">
                        <LucideSearch size={22} className="group-hover:text-primary transition-colors" />
                     </Button>
                     <Button variant="outline" className="h-12 px-6 rounded-xl border-2 font-black uppercase tracking-widest text-[10px] active:scale-95 transition-all">Filter Activity</Button>
                  </div>
               </div>

               <div className="space-y-6">
                  {complaints.map((item, i) => (
                     <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border-2 border-transparent hover:border-primary/10 hover:bg-white dark:hover:bg-slate-950 hover:shadow-2xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer relative overflow-hidden">
                        <div className="flex items-center gap-8 relative z-10">
                           <div className="flex flex-col items-center gap-2">
                              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center font-black group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                                 {item.status === "Resolved" ? <LucideCheckCircle size={24} /> : item.status === "In Progress" ? <LucideClock size={24} /> : <LucideAlertTriangle size={24} />}
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest opacity-30 italic">{item.id}</span>
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{item.date} • {item.category}</p>
                              <h4 className="text-xl font-black group-hover:text-primary transition-colors">{item.subject}</h4>
                              <div className="flex gap-4 mt-4">
                                 <Badge className={`${item.color} hover:bg-transparent border-none text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 scale-100 group-hover:scale-105 transition-transform`}>{item.status}</Badge>
                                 <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-transparent border-none text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1">Priority: {item.priority}</Badge>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col items-end gap-4 relative z-10">
                           <Button variant="ghost" className="h-12 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary/5 transition-all flex items-center gap-3">
                              Track Journey <LucideArrowUpRight size={16} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                           </Button>
                        </div>
                        {/* Status Decorative Gradient */}
                        <div className={`absolute left-0 top-0 h-full w-2 ${item.color}`}></div>
                     </div>
                  ))}
               </div>
               
               <Button variant="link" className="w-full mt-12 h-10 font-black uppercase tracking-widest text-[10px] text-muted-foreground hover:text-primary active:scale-95 transition-all">Archived Resolution History</Button>
            </Card>
         </div>
      </div>
    </div>
  );
}
