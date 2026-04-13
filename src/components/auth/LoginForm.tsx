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
import { LucideMail, LucideLock, LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false).optional(),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        toast.error("Sign-in failed", {
            description: "Invalid email or password. Please check your credentials.",
            action: process.env.NODE_ENV === 'development' ? {
                label: "Seed Database?",
                onClick: async () => {
                    const res = await fetch('/api/seed');
                    const data = await res.json();
                    if (data.message) toast.success("Seeding complete!", { description: data.message });
                    else toast.error("Seeding failed", { description: data.error });
                }
            } : undefined
        });
        console.error(result.error);
      } else {
        toast.success("Welcome back!", {
            description: "Signing you into your dashboard now.",
            className: "bg-primary text-primary-foreground border-none shadow-2xl"
        });
        router.push("/dashboard/redirect");
      }
    } catch (error) {
      toast.error("System Unavailable", {
          description: "There was a problem connecting to the authentication server."
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Email Address</FormLabel>
              <FormControl>
                <div className="relative group">
                  <LucideMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <Input 
                    placeholder="name@example.com" 
                    className="pl-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-md font-medium" 
                    {...field} 
                  />
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
               <div className="flex items-center justify-between">
                  <FormLabel className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Password</FormLabel>
                  <Link href="/forgot-password" className="text-xs font-bold text-primary hover:underline underline-offset-4 decoration-primary/30">
                     Forgot Password?
                  </Link>
               </div>
              <FormControl>
                <div className="relative group">
                  <LucideLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="px-12 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-md font-medium" 
                    {...field} 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-slate-900 transition-colors"
                  >
                    {showPassword ? <LucideEyeOff size={18} /> : <LucideEye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => field.onChange(!field.value)}>
                    <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} className="rounded-md border-2 w-6 h-6 border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all duration-300" />
                    <label htmlFor="remember" className="text-sm font-bold text-muted-foreground/70 group-hover:text-primary transition-colors cursor-pointer select-none">Keep me signed in</label>
                </div>
            )}
        />


        <Button 
           type="submit" 
           size="lg" 
           disabled={loading}
           className="w-full h-14 rounded-2xl text-lg font-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
        >
          {loading ? "Authenticating..." : "Sign In to Dashboard"}
        </Button>
      </form>
    </Form>
  );
}
