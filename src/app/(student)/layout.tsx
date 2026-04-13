import DashboardWrapper from "@/components/dashboard/DashboardWrapper";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
