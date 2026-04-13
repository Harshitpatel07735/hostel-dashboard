"use client";

import { motion } from "framer-motion";
import { 
  LucideBed, LucidePlus, LucideBuilding, LucideSearch, LucideFilter, 
  LucideDownload, LucideInfo, LucideMoreVertical, LucideCheckCircle, 
  LucideXCircle, LucideAlertTriangle, LucideArrowUpRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const blocks = ["Block A", "Block B", "Block C", "Block D"];
const floors = ["Floor 1", "Floor 2", "Floor 3", "Floor 4"];

const rooms = [
  { id: "101", status: "Full", type: "Triple", occupied: 3, capacity: 3, floor: "1" },
  { id: "102", status: "Available", type: "Triple", occupied: 1, capacity: 3, floor: "1" },
  { id: "103", status: "Full", type: "Double", occupied: 2, capacity: 2, floor: "1" },
  { id: "104", status: "Maintenance", type: "Single", occupied: 0, capacity: 1, floor: "1" },
  { id: "105", status: "Available", type: "Double", occupied: 1, capacity: 2, floor: "1" },
  { id: "106", status: "Full", type: "Triple", occupied: 3, capacity: 3, floor: "1" },
  { id: "107", status: "Full", type: "Single", occupied: 1, capacity: 1, floor: "1" },
  { id: "108", status: "Available", type: "Triple", occupied: 0, capacity: 3, floor: "1" },
];

export default function AdminRooms() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div className="space-y-4">
            <h1 className="text-4xl font-black">Room Inventory</h1>
            <p className="text-muted-foreground font-medium max-w-lg">Manage hostel capacity and visualize room occupancy across all wings and blocks in real-time.</p>
         </div>
         <div className="flex items-center gap-4">
            <Button size="lg" className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
               <LucidePlus size={18} className="mr-2" /> Add New Room Config
            </Button>
            <Button variant="outline" size="lg" className="h-14 w-14 p-0 rounded-2xl border-2 hover:bg-primary/5 transition-all">
               <LucideBuilding size={20} />
            </Button>
         </div>
      </div>

      <Tabs defaultValue="Block A" className="w-full">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <TabsList className="h-auto p-4 bg-white dark:bg-slate-950 rounded-[2rem] border-2 shadow-2xl border-slate-50 dark:border-slate-800/50 flex flex-wrap gap-4">
               {blocks.map((block) => (
                  <TabsTrigger 
                    key={block} 
                    value={block}
                    className="h-12 px-8 rounded-xl font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl transition-all"
                  >
                     {block}
                  </TabsTrigger>
               ))}
            </TabsList>
            
            <div className="flex flex-wrap items-center gap-4">
               <Button variant="outline" className="h-14 rounded-2xl border-2 px-8 font-black uppercase tracking-widest text-xs hover:bg-primary/5 flex items-center gap-4 group">
                  <LucideFilter size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-transform" /> Advanced Filtering
               </Button>
               <Button variant="outline" className="h-14 rounded-2xl border-2 px-8 font-black uppercase tracking-widest text-xs hover:bg-primary/5 flex items-center gap-4 group">
                  <LucideDownload size={18} className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform" /> Occupancy CSV
               </Button>
            </div>
         </div>

         {blocks.map((block) => (
            <TabsContent key={block} value={block} className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-500">
               {/* Floor Navigation */}
               <div className="flex flex-wrap items-center gap-6">
                  {floors.map((floor) => (
                     <Button key={floor} variant="ghost" className="h-12 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] items-center gap-4 group text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors">
                        {floor} <span className="p-1 px-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">0{floor.slice(-1)}</span>
                     </Button>
                  ))}
               </div>

               {/* Room Map Visualization */}
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {rooms.map((room, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                     >
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                                 <Card className={`rounded-[2.5rem] p-6 border-2 transition-all cursor-pointer group relative overflow-hidden flex flex-col items-center justify-between text-center gap-6 ${room.status === 'Full' ? 'border-indigo-100 bg-slate-50 opacity-60 dark:bg-slate-900 border-none' : room.status === 'Maintenance' ? 'border-none bg-rose-500/5 dark:bg-rose-500/10' : 'bg-white dark:bg-slate-950 hover:border-primary/20 hover:shadow-2xl hover:scale-105 active:scale-95'}`}>
                                    <div className="flex items-center justify-between w-full">
                                       <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 italic">{room.type}</span>
                                       <LucideMoreVertical size={18} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                                    </div>
                                    
                                    <div className="space-y-3">
                                       <div className={`w-16 h-16 rounded-[40%] flex items-center justify-center p-4 border-2 transition-transform group-hover:scale-110 group-hover:rotate-6 ${room.status === 'Full' ? 'text-slate-400 border-slate-200' : room.status === 'Maintenance' ? 'text-rose-500 border-rose-500/20' : 'text-primary border-primary/20'}`}>
                                          <LucideBed size={32} />
                                       </div>
                                       <h4 className="text-2xl font-black tracking-tight">{room.id}</h4>
                                    </div>
                                    
                                    <div className="space-y-4 w-full">
                                       <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.2em] opacity-40 px-2">
                                          <span>Capacity</span>
                                          <span className={room.occupied === room.capacity ? 'text-rose-500' : 'text-emerald-500'}>{room.occupied}/{room.capacity}</span>
                                       </div>
                                       <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                          <div className={`h-full rounded-full transition-all duration-1000 ${room.status === 'Maintenance' ? 'bg-rose-500' : 'bg-primary'}`} style={{ width: `${(room.occupied/room.capacity)*100}%` }}></div>
                                       </div>
                                       
                                       <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                                          {room.status === 'Full' ? (
                                             <Badge className="bg-slate-200 text-slate-500 hover:bg-slate-200 border-none text-[8px] font-black uppercase tracking-widest px-3 py-1">Room Occupied</Badge>
                                          ) : room.status === 'Maintenance' ? (
                                             <Badge className="bg-rose-500 text-white hover:bg-rose-500 border-none text-[8px] font-black uppercase tracking-widest px-3 py-1">Maintenance</Badge>
                                          ) : (
                                             <Badge className="bg-emerald-500 text-white hover:bg-emerald-500 border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 shadow-lg shadow-emerald-500/20">Spaces Ready</Badge>
                                          )}
                                       </div>
                                    </div>
                                 </Card>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="rounded-2xl p-4 border-2 shadow-2xl bg-slate-900 border-slate-700 text-white space-y-2">
                                 <p className="text-xs font-black uppercase tracking-widest leading-none">Management Snapshot</p>
                                 <p className="text-[10px] opacity-60 uppercase font-black tracking-widest">Click to assign residents or view history.</p>
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                     </motion.div>
                  ))}
               </div>
            </TabsContent>
         ))}
      </Tabs>

      {/* Legend / Status Indicators */}
      <div className="flex flex-wrap items-center justify-center gap-12 pt-10 border-t-2 border-slate-50 dark:border-slate-800/50">
         <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/20 group-hover:scale-125 transition-transform"></div>
            <span className="text-xs font-black uppercase tracking-widest opacity-40">Available Spaces</span>
         </div>
         <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-full bg-slate-200 group-hover:scale-125 transition-transform"></div>
            <span className="text-xs font-black uppercase tracking-widest opacity-40">Fully Occupied</span>
         </div>
         <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-full bg-rose-500/20 border border-rose-500/40 group-hover:scale-125 transition-transform"></div>
            <span className="text-xs font-black uppercase tracking-widest opacity-40">Under Maintenance</span>
         </div>
      </div>
    </div>
  );
}
