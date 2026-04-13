"use client";

import { motion } from "framer-motion";
import { 
  LucideCreditCard, LucideDownload, LucideHistory, LucideCheckCircle, 
  LucideAlertCircle, LucideMoreVertical, LucideArrowUpRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const feeBreakdown = [
  { item: "Hostel Rent (Monthly)", amount: "$850.00", status: "Paid" },
  { item: "Mess Fees (Monthly)", amount: "$250.00", status: "Paid" },
  { item: "Utility & Maintenance", amount: "$50.00", status: "Paid" },
  { item: "WiFi & Digital Amenities", amount: "$30.00", status: "Paid" },
  { item: "Security Deposit (One-time)", amount: "$200.00", status: "Paid" },
];

const paymentHistory = [
  { id: "TXN-9082", date: "Mar 05, 2026", amount: "$1,380.00", method: "Cards •••• 4242", status: "Successful" },
  { id: "TXN-8742", date: "Feb 02, 2026", amount: "$1,180.00", method: "UPI / Net Banking", status: "Successful" },
  { id: "TXN-7611", date: "Jan 10, 2026", amount: "$1,380.00", method: "UPI / Net Banking", status: "Successful" },
];

export default function StudentFees() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div className="space-y-4">
            <h1 className="text-4xl font-black">Fees & Payments</h1>
            <p className="text-muted-foreground font-medium max-w-lg">Manage your financial records, track monthly invoices and make one-click digital payments.</p>
         </div>
         <Button size="lg" className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
            Open Payment Portal <LucideArrowUpRight size={18} className="ml-2" />
         </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Summary Card */}
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
         >
            <Card className="rounded-[3rem] p-4 bg-primary text-white border-none shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform"></div>
               <CardHeader className="pb-10 pt-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/20">
                     <LucideCreditCard size={32} />
                  </div>
                  <CardTitle className="text-3xl font-black">$00.00</CardTitle>
                  <CardDescription className="text-white/60 font-black uppercase tracking-widest text-[10px] mt-1">Total Outstanding Dues</CardDescription>
               </CardHeader>
               <CardContent className="space-y-8 pt-4">
                  <div className="flex items-center gap-4 bg-white/20 px-6 py-4 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg">
                     <LucideCheckCircle size={24} className="text-emerald-300" />
                     <div>
                        <p className="text-xs font-black uppercase tracking-widest leading-none">Status: Zero Dues</p>
                        <p className="text-[10px] font-black opacity-60 mt-1 uppercase">Next invoice: April 01</p>
                     </div>
                  </div>
                  <Button variant="secondary" className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-black/20">Download Full Statement</Button>
               </CardContent>
            </Card>
            
            <div className="mt-10 p-10 rounded-[3rem] bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-100 dark:border-amber-500/10 space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg"><LucideAlertCircle size={24} /></div>
                  <h4 className="text-xl font-black">Fee Policy 2026</h4>
               </div>
               <p className="text-sm font-medium leading-relaxed text-amber-900/60 dark:text-amber-500/60">A late fee of 5% applies for payments made after the 5th of every month. Please ensure timely settlements to avoid penalties.</p>
               <Button variant="link" className="p-0 h-auto font-black uppercase tracking-widest text-[10px] text-amber-600">Read Official Rulebook →</Button>
            </div>
         </motion.div>

         {/* Fee Breakdown and History */}
         <div className="lg:col-span-2 space-y-10">
            <Card className="rounded-[3rem] p-10 bg-white dark:bg-slate-950 border-2 shadow-2xl shadow-slate-200 dark:shadow-none">
               <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">Active Invoice Breakdown</h3>
                    <p className="text-xs font-black uppercase tracking-widest opacity-40 mt-1">Snapshot for March 2026</p>
                  </div>
                  <LucideDownload size={22} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
               </div>
               
               <Table>
                  <TableHeader>
                     <TableRow className="border-none hover:bg-transparent uppercase font-black text-[10px] tracking-widest text-slate-400">
                        <TableHead className="w-[300px]">Service Item</TableHead>
                        <TableHead>Charge Amount</TableHead>
                        <TableHead className="text-right">Collection Status</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {feeBreakdown.map((item, i) => (
                        <TableRow key={i} className="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer group">
                           <TableCell className="py-5 font-black text-sm group-hover:text-primary transition-colors">{item.item}</TableCell>
                           <TableCell className="py-5 font-bold opacity-60">{item.amount}</TableCell>
                           <TableCell className="text-right py-5 text-emerald-500 font-black uppercase tracking-widest text-[10px]">
                              {item.status} <LucideCheckCircle size={14} className="inline-block ml-2" />
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </Card>

            <Card className="rounded-[3rem] p-10 bg-white dark:bg-slate-950 border-2 shadow-2xl">
               <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                     <LucideHistory size={24} className="text-primary" />
                     <h3 className="text-2xl font-black tracking-tight">Recent Transaction History</h3>
                  </div>
                  <Button variant="outline" className="h-10 rounded-xl px-5 font-black uppercase tracking-widest text-[10px] border-2">Monthly Filter</Button>
               </div>
               
               <div className="space-y-4">
                  {paymentHistory.map((item, i) => (
                     <div key={i} className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border-2 border-transparent hover:border-primary/10 hover:bg-white dark:hover:bg-slate-950 hover:shadow-xl transition-all flex items-center justify-between">
                        <div className="flex items-center gap-6">
                           <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border group-hover:scale-110 group-hover:border-primary/20 transition-all font-black text-[10px] opacity-40">
                              REC.
                           </div>
                           <div>
                              <div className="flex items-center gap-4">
                                 <h4 className="text-md font-black italic">{item.id}</h4>
                                 <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{item.date}</span>
                              </div>
                              <p className="text-[10px] font-black opacity-40 mt-1 uppercase tracking-[0.2em]">{item.method}</p>
                           </div>
                        </div>
                        <div className="text-right flex items-center gap-6">
                           <div>
                              <p className="text-md font-black">{item.amount}</p>
                              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{item.status}</p>
                           </div>
                           <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl hover:bg-primary/10 transition-colors group-hover:scale-110">
                              <LucideDownload size={20} className="group-hover:text-primary" />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
               
               <Button variant="link" className="w-full mt-10 h-10 font-black uppercase tracking-widest text-[10px] text-muted-foreground hover:text-primary">Load Previous Financial Records</Button>
            </Card>
         </div>
      </div>
    </div>
  );
}
