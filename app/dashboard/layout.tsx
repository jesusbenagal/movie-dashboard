import { Navbar } from "@/components/dashboard/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-slate-300/80">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
