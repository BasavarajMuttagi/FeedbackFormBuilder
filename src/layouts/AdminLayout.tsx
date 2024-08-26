import { ReactNode } from "react";
import Header from "../components/Admin/Header";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />
      <div className="flex-1 flex">{children}</div>
    </div>
  );
};

AdminLayout.Main = ({ children }: { children: ReactNode }) => (
  <div className="w-full border-r border-white/10">{children}</div>
);

AdminLayout.Side = ({ children }: { children: ReactNode }) => (
  <div className="w-[25%]">{children}</div>
);

export default AdminLayout;
