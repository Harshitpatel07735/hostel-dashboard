"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { LucideMail, LucideLock, LucideUser, LucidePhone, LucideHome, LucideBuilding } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const registerSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["STUDENT", "ADMIN", "STAFF"]),
  hostelName: z.string().optional(),
  roomNumber: z.string().optional(),
});

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      role: "STUDENT",
      hostelName: "",
      roomNumber: "",
    },
  });

  const selectedRole = form.watch("role");

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          role: values.role,
          hostelName: values.hostelName,
          roomNumber: values.roomNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      router.push("/login?registered=true");
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">I want to join as a</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 rounded-xl border-2">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-xl border-2">
                  <SelectItem value="STUDENT" className="py-3 cursor-pointer">Resident / Student</SelectItem>
                  <SelectItem value="ADMIN" className="py-3 cursor-pointer">Warden / Admin</SelectItem>
                  <SelectItem value="STAFF" className="py-3 cursor-pointer">Accountant / Staff</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <LucideUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                      <Input placeholder="John Doe" className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <LucidePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                      <Input placeholder="+1 (555) 123-4567" className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Email Address</FormLabel>
              <FormControl>
                <div className="relative group">
                  <LucideMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <Input placeholder="name@example.com" className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Password</FormLabel>
              <FormControl>
                <div className="relative group">
                  <LucideLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <Input type="password" placeholder="Min. 6 characters" className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedRole === "ADMIN" && (
           <FormField
             control={form.control}
             name="hostelName"
             render={({ field }) => (
               <FormItem>
                 <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Hostel Name</FormLabel>
                 <FormControl>
                   <div className="relative group">
                     <LucideBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                     <Input placeholder="Enter your Hostel Name" className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium" {...field} />
                   </div>
                 </FormControl>
                 <FormMessage />
               </FormItem>
             )}
           />
        )}

        {selectedRole === "STUDENT" && (
           <FormField
             control={form.control}
             name="roomNumber"
             render={({ field }) => (
               <FormItem>
                 <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Room Number</FormLabel>
                 <FormControl>
                   <div className="relative group">
                     <LucideHome className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                     <Input placeholder="e.g. A-101" className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium" {...field} />
                   </div>
                 </FormControl>
                 <FormMessage />
               </FormItem>
             )}
           />
        )}

        <Button 
           type="submit" 
           size="lg" 
           disabled={loading}
           className="w-full h-14 rounded-2xl text-lg font-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
        >
          {loading ? "Creating Account..." : "Complete Registration"}
        </Button>
      </form>
    </Form>
  );
}
