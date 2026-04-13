"use client";

import { Bell, Search, Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();
  const user = session?.user;
  const initial = user?.name ? user.name.substring(0, 2).toUpperCase() : "U";

  return (
    <header className="fixed top-0 right-0 left-0 md:left-72 h-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b z-30 px-6 flex items-center justify-between shadow-sm">
       <div className="flex-1 max-w-xl relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
          <Input 
             placeholder="Search students, rooms, complaints..." 
             className="pl-12 h-12 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium bg-slate-50 dark:bg-slate-900 border-transparent focus:bg-white dark:focus:bg-slate-950" 
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black tracking-widest uppercase py-1 px-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-400 pointer-events-none hidden sm:block">
             Cmd + K
          </div>
       </div>

       <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="relative group hover:bg-primary/10 transition-colors h-11 w-11 rounded-xl">
             <Bell size={22} className="group-hover:text-primary transition-colors hover:scale-110 active:scale-90" />
             <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 bg-rose-500 rounded-full border-4 border-white dark:border-slate-950 shadow-md animate-pulse"></span>
          </Button>

          <DropdownMenu>
             <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="pl-2 pr-4 h-11 w-auto rounded-xl flex items-center gap-3 border shadow-sm hover:shadow-md transition-all active:scale-95 group">
                   <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      {initial}
                   </div>
                   <div className="hidden lg:block text-left">
                      <p className="text-xs font-black uppercase tracking-widest text-primary">{(user as any)?.role || "User"}</p>
                      <p className="text-sm font-black leading-none">{user?.name || "Guest"}</p>
                   </div>
                </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent className="w-56 rounded-2xl p-2 border-2 shadow-2xl" align="end">
                <DropdownMenuLabel className="font-black px-4 py-4 text-xs uppercase tracking-[0.2em] opacity-40">Account Dashboard</DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1" />
                <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-bold gap-4">
                   <User size={18} className="text-primary" /> Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-4 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-bold gap-4">
                   <Search size={18} className="text-primary" /> Command Pallete
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1" />
                <DropdownMenuItem 
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="py-3 px-4 rounded-xl cursor-pointer hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors font-bold gap-4 text-rose-500"
                >
                   <LogOut size={18} /> Sign Out
                </DropdownMenuItem>
             </DropdownMenuContent>
          </DropdownMenu>
       </div>
    </header>
  );
}
