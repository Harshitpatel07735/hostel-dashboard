"use client";

import { motion } from "framer-motion";
import { 
  LucideUsers, LucidePlus, LucideSearch, LucideFilter, LucideDownload, 
  LucideUpload, LucideMoreVertical, LucideMail, LucidePhone, LucideEdit, 
  LucideTrash, LucideArrowLeft, LucideArrowRight, LucideCheckCircle, LucideXCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const students = [
  { id: "STU-2026-001", name: "Rahul Verma", email: "rahul@example.com", phone: "+91 98765 43210", room: "A-204", course: "Computer Science", status: "Paid", color: "bg-emerald-500" },
  { id: "STU-2026-002", name: "Priya Das", email: "priya@example.com", phone: "+91 91234 56789", room: "B-102", course: "Mechanical Engg", status: "Due", color: "bg-rose-500" },
  { id: "STU-2026-003", name: "Amit Singh", email: "amit@example.com", phone: "+91 88776 65544", room: "A-301", course: "Electrical Engg", status: "Partial", color: "bg-amber-500" },
  { id: "STU-2026-004", name: "Sneha Kapoor", email: "sneha@example.com", phone: "+91 77665 54433", room: "C-405", course: "Civil Engineering", status: "Paid", color: "bg-emerald-500" },
  { id: "STU-2026-005", name: "Vikram Malhotra", email: "vikram@example.com", phone: "+91 66554 43322", room: "B-208", course: "Data Science", status: "Due", color: "bg-rose-500" },
];

export default function AdminStudents() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-4">
            <h1 className="text-4xl font-black">Student Management</h1>
            <p className="text-muted-foreground font-medium max-w-lg">Full control over resident lifecycle. Search, filter, and manage student details from a single repository.</p>
         </div>
         <div className="flex items-center gap-4">
            <Button size="lg" className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
               <LucidePlus size={18} className="mr-2" /> Add New Student
            </Button>
            <Button variant="outline" size="lg" className="h-14 w-14 p-0 rounded-2xl border-2 hover:bg-primary/5 transition-all">
               <LucideUpload size={20} />
            </Button>
         </div>
      </div>

      <Card className="rounded-[3rem] p-10 bg-white dark:bg-slate-950 border-2 shadow-2xl shadow-slate-200 dark:shadow-none relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-slate-50 dark:bg-slate-900/50 -z-10"></div>
         
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="flex-1 max-w-md relative group">
               <LucideSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
               <Input 
                  placeholder="Search by name, ID, or room..." 
                  className="pl-14 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium bg-white dark:bg-slate-950 border-transparent focus:bg-white dark:focus:bg-slate-950" 
               />
            </div>
            <div className="flex flex-wrap items-center gap-4">
               <Button variant="outline" className="h-14 rounded-2xl border-2 px-8 font-black uppercase tracking-widest text-xs hover:bg-primary/5 flex items-center gap-4 group">
                  <LucideFilter size={18} className="group-hover:scale-110 group-hover:rotate-12 transition-transform" /> Filter Results
               </Button>
               <Button variant="outline" className="h-14 rounded-2xl border-2 px-8 font-black uppercase tracking-widest text-xs hover:bg-primary/5 flex items-center gap-4 group">
                  <LucideDownload size={18} className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform" /> Export Record
               </Button>
            </div>
         </div>

         <div className="space-y-6">
            <div className="overflow-x-auto rounded-[2rem] border-2 border-slate-50 dark:border-slate-800/50">
               <Table>
                  <TableHeader>
                     <TableRow className="bg-slate-50 dark:bg-slate-900 border-none uppercase font-black text-[10px] tracking-[0.2em] text-slate-400">
                        <TableHead className="w-[100px] py-6 px-8">Photo</TableHead>
                        <TableHead className="py-6">Resident Details</TableHead>
                        <TableHead className="py-6">Room / Info</TableHead>
                        <TableHead className="py-6">Financials</TableHead>
                        <TableHead className="py-6 text-right px-8">Actions</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {students.map((student, i) => (
                        <TableRow key={i} className="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer group">
                           <TableCell className="py-8 px-8">
                              <div className={`w-14 h-14 rounded-2xl ${student.color} text-white flex items-center justify-center font-black text-xl shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
                                 {student.name.split(' ').map(n => n[0]).join('')}
                              </div>
                           </TableCell>
                           <TableCell className="py-8 space-y-2">
                              <div>
                                 <h4 className="text-lg font-black group-hover:text-primary transition-colors">{student.name}</h4>
                                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{student.id}</p>
                              </div>
                              <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground opacity-60">
                                 <span className="flex items-center gap-2"><LucideMail size={14} /> {student.email}</span>
                                 <span className="flex items-center gap-2 border-l-2 pl-4"><LucidePhone size={14} /> {student.phone}</span>
                              </div>
                           </TableCell>
                           <TableCell className="py-8">
                              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl px-5 py-3 w-fit space-y-1 border shadow-inner group-hover:bg-white dark:group-hover:bg-slate-950 transition-all">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-primary">Room {student.room}</p>
                                 <p className="text-xs font-black uppercase tracking-widest leading-none">{student.course}</p>
                              </div>
                           </TableCell>
                           <TableCell className="py-8">
                              <div className="space-y-2">
                                 {student.status === "Paid" ? (
                                    <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10 font-black uppercase tracking-widest text-[8px] px-3 py-1 scale-100 group-hover:scale-110 transition-transform">
                                       <LucideCheckCircle size={10} className="mr-2" strokeWidth={4} /> Full Paid
                                    </Badge>
                                 ) : student.status === "Due" ? (
                                    <Badge className="bg-rose-500/10 text-rose-500 hover:bg-rose-500/10 font-black uppercase tracking-widest text-[8px] px-3 py-1 scale-100 group-hover:scale-110 transition-transform">
                                       <LucideXCircle size={10} className="mr-2" strokeWidth={4} /> Payment Due
                                    </Badge>
                                 ) : (
                                    <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/10 font-black uppercase tracking-widest text-[8px] px-3 py-1 scale-100 group-hover:scale-110 transition-transform">
                                       <LucideFilter size={10} className="mr-2" strokeWidth={4} /> Partial Paid
                                    </Badge>
                                 )}
                                 <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] px-1">Since Mar 05</p>
                              </div>
                           </TableCell>
                           <TableCell className="text-right py-8 px-8">
                              <DropdownMenu>
                                 <DropdownMenuTrigger>
                                       <LucideMoreVertical size={20} className="text-muted-foreground group-hover:text-primary cursor-pointer" />
                                 </DropdownMenuTrigger>
                                 <DropdownMenuContent className="rounded-2xl p-2 border-2 shadow-2xl" align="end">
                                    <DropdownMenuLabel className="font-black px-4 py-3 text-[10px] uppercase tracking-widest opacity-40 italic">Student Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="my-1" />
                                    <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-black gap-4 text-xs uppercase tracking-widest">
                                       <LucideUsers size={16} className="text-primary" /> Full Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-black gap-4 text-xs uppercase tracking-widest">
                                       <LucideEdit size={16} className="text-indigo-500" /> Edit Record
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="my-1" />
                                    <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all font-black gap-4 text-xs uppercase tracking-widest text-rose-500">
                                       <LucideTrash size={16} /> Delete Student
                                    </DropdownMenuItem>
                                 </DropdownMenuContent>
                              </DropdownMenu>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t-2 border-slate-50 dark:border-slate-800/50">
               <p className="text-xs font-black uppercase tracking-widest opacity-40 italic">Showing 1 - 5 of 1,248 Residents</p>
               <div className="flex gap-4">
                  <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] hover:bg-primary/5 transition-all flex items-center gap-4 active:scale-95">
                     <LucideArrowLeft size={16} strokeWidth={3} /> Page Back
                  </Button>
                  <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black uppercase tracking-widest text-[10px] hover:bg-primary/5 transition-all flex items-center gap-4 active:scale-95">
                     Page Next <LucideArrowRight size={16} strokeWidth={3} />
                  </Button>
               </div>
            </div>
         </div>
      </Card>
    </div>
  );
}
