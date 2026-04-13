"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, Bed, MessageCircle, Bell, 
  Utensils, Users, Calendar, LineChart,
  ChevronRight, LayoutDashboard, Search, PlusCircle,
  TrendingUp, Download, Settings, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "fee",
    icon: CreditCard,
    title: "Fee Management",
    description: "Automate fee collection, generate digital receipts, and track pending dues with ease.",
    color: "from-blue-500 to-cyan-500",
    category: "Financials",
    tags: ["Invoicing", "Multi-pay", "History"],
    dashboard: {
      stats: [
        { label: "Total Collected", value: "$45,230", trend: "+12.5%", color: "text-emerald-500" },
        { label: "Pending Dues", value: "$12,400", trend: "-2.3%", color: "text-rose-500" },
        { label: "Active Invoices", value: "142", trend: "Stable", color: "text-blue-500" }
      ],
      listTitle: "Recent Transactions",
      items: [
        { id: "TX-902", user: "John Doe", amount: "$450.00", status: "Paid", date: "2 mins ago" },
        { id: "TX-901", user: "Sarah Smith", amount: "$450.00", status: "Pending", date: "1 hour ago" },
        { id: "TX-899", user: "Mike Ross", amount: "$300.00", status: "Paid", date: "3 hours ago" }
      ]
    }
  },
  {
    id: "room",
    icon: Bed,
    title: "Room Allocation",
    description: "Visual room mapping and drag-and-drop student assignment for optimal occupancy.",
    color: "from-indigo-500 to-purple-500",
    category: "Operations",
    tags: ["Floorplan", "Waitlist", "Swap"],
    dashboard: {
      stats: [
        { label: "Total Rooms", value: "240", trend: "N/A", color: "text-slate-500" },
        { label: "Occupied", value: "212", trend: "88%", color: "text-indigo-500" },
        { label: "In Maintenance", value: "4", trend: "Needs Action", color: "text-amber-500" }
      ],
      listTitle: "Room Availability (Floor 2)",
      items: [
        { id: "201", user: "Full (3/3)", amount: "A, B, C", status: "Occupied", date: "Standard" },
        { id: "202", user: "Partial (1/3)", amount: "David K.", status: "Available", date: "Classic" },
        { id: "203", user: "Vacant (0/3)", amount: "---", status: "Empty", date: "Deluxe" }
      ]
    }
  },
  {
    id: "complaint",
    icon: MessageCircle,
    title: "Complaint System",
    description: "Seamless complaint logging, staff assignment, and status tracking for maintenance.",
    color: "from-rose-500 to-pink-500",
    category: "Services",
    tags: ["Tickets", "Priority", "Resolution"],
    dashboard: {
      stats: [
        { label: "Open Tickets", value: "12", trend: "+3 today", color: "text-rose-500" },
        { label: "In Progress", value: "8", trend: "Active", color: "text-amber-500" },
        { label: "Resolved", value: "142", trend: "95% Rate", color: "text-emerald-500" }
      ],
      listTitle: "High Priority Tickets",
      items: [
        { id: "T-402", user: "AC Repair", amount: "Room 102", status: "Urgent", date: "15 mins ago" },
        { id: "T-399", user: "Water Leak", amount: "Mess Hall", status: "Critical", date: "1 hour ago" },
        { id: "T-395", user: "Wi-Fi Issue", amount: "Floor 3", status: "Standard", date: "4 hours ago" }
      ]
    }
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Analytics",
    description: "Data-driven insights on revenue, occupancy, and complaint trends at your fingertips.",
    color: "from-orange-500 to-red-500",
    category: "Insights",
    tags: ["ROI", "Growth", "Hotspots"],
    dashboard: {
      stats: [
        { label: "Monthly Revenue", value: "$84.2k", trend: "+8.4%", color: "text-emerald-500" },
        { label: "Avg. Occupancy", value: "92%", trend: "Optimal", color: "text-orange-500" },
        { label: "Support Load", value: "Low", trend: "Better", color: "text-emerald-500" }
      ],
      listTitle: "Revenue Trends",
      items: [
        { id: "MAR", user: "Projected", amount: "$90,000", status: "Growth", date: "Forecast" },
        { id: "FEB", user: "Actual", amount: "$84,200", status: "Done", date: "Verified" },
        { id: "JAN", user: "Actual", amount: "$78,500", status: "Done", date: "Verified" }
      ]
    }
  }
];

export function FunctionHub() {
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <section id="functions" className="py-24 bg-slate-50 dark:bg-slate-900 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Dashboard Mockup Container */}
        <div className="relative max-w-6xl mx-auto group/browser">
          {/* Main Dashboard Frame */}
          <div className="bg-slate-900 rounded-[2.5rem] shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] border-8 border-slate-800 flex overflow-hidden min-h-[720px] transition-all hover:border-slate-700">
            
            {/* Sidebar Mockup */}
            <div className="w-20 md:w-64 bg-slate-950 border-r border-slate-800 p-4 shrink-0 flex flex-col">
              <div className="flex items-center gap-3 px-2 mb-10 mt-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shadow-lg shadow-primary/20">
                   <LayoutDashboard className="text-primary" size={18} />
                </div>
                <span className="font-bold text-white hidden md:block tracking-tight text-lg">HostelFlow</span>
              </div>
              
              <div className="space-y-1 flex-1">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all relative group ${
                      activeTab.id === feature.id 
                      ? "text-white" 
                      : "text-slate-500 hover:text-white hover:bg-slate-900/50"
                    }`}
                  >
                    <feature.icon size={20} className={`shrink-0 z-10 transition-transform ${activeTab.id === feature.id ? "scale-110" : ""}`} />
                    <span className="text-sm font-bold hidden md:block z-10">{feature.title}</span>
                    {activeTab.id === feature.id && (
                      <motion.div 
                        layoutId="activeTabSelector" 
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl shadow-lg shadow-primary/20`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-800/50 pt-6 px-2 space-y-4">
                 <div className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors cursor-pointer group/nav">
                    <Settings size={18} className="group-hover/nav:rotate-45 transition-transform" />
                    <span className="text-sm hidden md:block">Settings</span>
                 </div>
                 <div className="flex items-center gap-3 text-rose-500 hover:text-rose-400 transition-colors cursor-pointer">
                    <LogOut size={18} />
                    <span className="text-sm hidden md:block font-medium">Logout</span>
                 </div>
              </div>
            </div>

            {/* Content Area Mockup */}
            <div className="flex-1 overflow-auto bg-slate-900 flex flex-col">
               {/* Nav Mockup */}
               <div className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20">
                  <div className="flex items-center gap-4">
                     <span className="text-slate-500 text-xs uppercase font-bold tracking-widest hidden sm:block">Admin View</span>
                     <ChevronRight className="text-slate-700 hidden sm:block" size={12} />
                     <span className="text-white font-bold">{activeTab.title}</span>
                  </div>
                  <div className="flex items-center gap-5">
                     <div className="relative hidden lg:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} />
                        <input className="bg-slate-950 border border-slate-800 rounded-lg h-9 pl-9 pr-4 text-xs text-white w-56 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all focus:w-64" placeholder="Search data..." />
                     </div>
                     <div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-primary font-bold shadow-inner">H</div>
                  </div>
               </div>

               {/* View Content Mockup */}
               <div className="p-8 flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, scale: 0.98, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.02, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Header Info */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="space-y-1">
                           <div className="flex items-center gap-2">
                              {/* Glowing Tag */}
                              <span className={`px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1`}>
                                 <span className={`w-1 h-1 rounded-full bg-gradient-to-br ${activeTab.color} shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-pulse`}></span>
                                 {activeTab.category}
                              </span>
                              <div className="flex gap-2">
                                 {activeTab.tags.map(tag => (
                                    <span key={tag} className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">#{tag}</span>
                                 ))}
                              </div>
                           </div>
                           <h4 className="text-4xl font-black text-white tracking-tight">{activeTab.title}</h4>
                           <p className="text-slate-400 max-w-xl text-sm leading-relaxed">{activeTab.description}</p>
                        </div>
                        <Button className={`bg-gradient-to-r ${activeTab.color} text-white shadow-xl shadow-primary/20 h-12 px-8 rounded-xl font-bold whitespace-nowrap active:scale-95 transition-transform`}>
                           <PlusCircle className="mr-2" size={18} />
                           Add New Record
                        </Button>
                      </div>

                      {/* Realistic Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {activeTab.dashboard?.stats.map((stat, i) => (
                           <div key={i} className="bg-slate-950/40 border border-slate-800/80 p-6 rounded-3xl space-y-3 relative group/stat overflow-hidden transition-all hover:bg-slate-950/60">
                              <div className="flex justify-between items-start z-10 relative">
                                 <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                                 <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'}`}>
                                    {stat.trend}
                                 </div>
                              </div>
                              <div className="flex items-baseline gap-2 z-10 relative">
                                 <span className="text-3xl font-black text-white">{stat.value}</span>
                                 <TrendingUp className="text-emerald-500 opacity-30" size={16} />
                              </div>
                              {/* subtle glow bg */}
                              <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br ${activeTab.color} opacity-5 blur-2xl group-hover/stat:opacity-10 transition-opacity`}></div>
                           </div>
                         ))}
                      </div>

                      {/* Mocked Data Table/List */}
                      <div className="bg-slate-950/30 border border-slate-800/50 rounded-3xl overflow-hidden">
                         <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/20">
                            <h5 className="text-white font-bold text-sm flex items-center gap-2">
                               <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${activeTab.color}`}></span>
                               {activeTab.dashboard?.listTitle}
                            </h5>
                            <button className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-white transition-colors">View All</button>
                         </div>
                         <div className="p-2">
                            {activeTab.dashboard?.items.map((item, idx) => (
                               <div key={idx} className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 px-6 hover:bg-white/[0.02] transition-colors rounded-2xl group/item">
                                  <div className="flex items-center gap-4 w-1/3">
                                     <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">{item.id}</div>
                                     <span className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">{item.user}</span>
                                  </div>
                                  <div className="text-xs text-slate-500 w-1/4 font-medium">{item.amount}</div>
                                  <div className="text-xs font-bold text-slate-300 w-1/4">{item.date}</div>
                                  <div className="w-24 text-right">
                                     <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                       ['Paid', 'Occupied', 'Urgent', 'Growth', 'Critical'].includes(item.status) 
                                       ? `bg-gradient-to-r ${activeTab.color} text-white` 
                                       : 'bg-slate-800 text-slate-500'
                                     }`}>
                                        {item.status}
                                     </span>
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Interactive Bottom Banner */}
                      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[250px] group/banner shadow-2xl">
                         <div className="text-center space-y-6 z-10">
                            <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${activeTab.color} shadow-2xl transition-transform group-hover/banner:scale-110 group-hover/banner:rotate-6 duration-500`}>
                               <activeTab.icon size={40} className="text-white" />
                            </div>
                            <div className="space-y-2">
                               <h5 className="text-2xl font-black text-white tracking-tight">Unlock Full {activeTab.title} Capability</h5>
                               <p className="text-slate-500 max-w-sm mx-auto text-sm">Every hostel is unique. Customize your workflow with rule-based automation and real-time alerts.</p>
                            </div>
                         </div>
                         {/* Dynamic Background Patterns */}
                         <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${activeTab.color} opacity-10 blur-[120px] -mr-40 -mt-40 transition-all duration-1000 group-hover/banner:opacity-20`}></div>
                         <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br ${activeTab.color} opacity-10 blur-[120px] -ml-40 -mb-40 transition-all duration-1000 group-hover/banner:opacity-20`}></div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>

          </div>

          {/* Exterior Visual Touches */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[130px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-indigo-500/20 blur-[150px] -z-10"></div>
          {/* Glass floating card example */}
          <div className="absolute -bottom-10 -right-20 bg-white/5 backdrop-blur-3xl border border-white/10 p-5 rounded-3xl shadow-2xl z-20 hidden 2xl:block animate-float">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                   <TrendingUp size={24} />
                </div>
                <div>
                   <p className="text-slate-400 text-xs font-bold">Efficiency Up</p>
                   <p className="text-white font-black text-lg">+42%</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
