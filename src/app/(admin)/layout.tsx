import DashboardWrapper from "@/components/dashboard/DashboardWrapper";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
