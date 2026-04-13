import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      <Sidebar />
      <div className="flex-1 md:pl-72 relative">
        <Header />
        <main className="pt-20 min-h-screen relative overflow-y-auto">
           {children}
        </main>
      </div>
    </div>
  );
}
